'use client';

import { useRef, useEffect, useState } from 'react';
import { Renderer, Stave, StaveNote, Voice, Formatter, Annotation } from 'vexflow';
import { midiToNote } from '@/lib/music/theory';
import type { MelodyNote } from '@/lib/music/types';

interface ChordSymbol {
  symbol: string;
  beatOffset: number;
}

interface MelodyDisplayProps {
  melody: MelodyNote[];
  chordSymbols?: ChordSymbol[];
  currentNoteIndex?: number;
}

/** Map note name to VexFlow lowercase format (flats use 'b'). */
function noteNameToVexflow(noteName: string): string {
  return noteName.toLowerCase();
}

/** Convert duration in beats to VexFlow duration string. */
function beatsToDuration(beats: number): string {
  if (beats >= 4) return 'w';
  if (beats >= 2) return 'h';
  if (beats >= 1) return 'q';
  return '8';
}

/** Find the chord symbol that applies at a given beat offset. */
function findChordSymbol(beatOffset: number, symbols: ChordSymbol[]): string | null {
  for (let i = symbols.length - 1; i >= 0; i--) {
    if (Math.abs(symbols[i].beatOffset - beatOffset) < 0.01) {
      return symbols[i].symbol;
    }
  }
  return null;
}

export default function MelodyDisplay({
  melody,
  chordSymbols = [],
  currentNoteIndex = -1,
}: MelodyDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [measuredWidth, setMeasuredWidth] = useState(800);

  // Measure container width responsively
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const w = container.parentElement?.clientWidth ?? container.clientWidth;
      if (w > 0) setMeasuredWidth(w);
    };
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(container.parentElement ?? container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || melody.length === 0) return;

    // Clear previous render
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    try {
      const renderer = new Renderer(container, Renderer.Backends.SVG);
      const height = 200;
      renderer.resize(measuredWidth, height);
      const context = renderer.getContext();

      // Dark theme colors
      context.setFillStyle('#f0e8dc');
      context.setStrokeStyle('#a89e90');

      const staveX = 10;
      const staveY = 40;
      const staveWidth = measuredWidth - 20;
      const stave = new Stave(staveX, staveY, staveWidth);
      stave.addClef('treble').addTimeSignature('4/4');
      stave.setContext(context).draw();

      // Build VexFlow notes from melody
      let cumulativeBeats = 0;
      const notes = melody.map((mn, i) => {
        const { note: noteName, octave } = midiToNote(mn.midi);
        const vexKey = `${noteNameToVexflow(noteName)}/${octave}`;
        const duration = beatsToDuration(mn.durationBeats);

        const staveNote = new StaveNote({
          keys: [vexKey],
          duration,
        });

        // Add chord symbol annotation if one matches this beat offset
        const sym = findChordSymbol(cumulativeBeats, chordSymbols);
        if (sym) {
          const annotation = new Annotation(sym);
          annotation.setVerticalJustification(Annotation.VerticalJustify.TOP);
          staveNote.addModifier(annotation);
        }

        // Highlight current note during playback
        if (i === currentNoteIndex) {
          staveNote.setStyle({ fillStyle: '#c8956c', strokeStyle: '#c8956c' });
        }

        cumulativeBeats += mn.durationBeats;
        return staveNote;
      });

      const voice = new Voice({
        num_beats: 4,
        beat_value: 4,
      });
      voice.setMode(Voice.Mode.SOFT);
      voice.addTickables(notes);

      new Formatter().joinVoices([voice]).format([voice], staveWidth - 40);
      voice.draw(context, stave);
    } catch {
      // VexFlow rendering failed — component renders empty
    }
  }, [melody, measuredWidth, currentNoteIndex, chordSymbols]);

  if (melody.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
        <p className="text-[var(--cream-dim)] font-sans text-sm">
          Generate a lick to see notation
        </p>
      </div>
    );
  }

  return <div ref={containerRef} className="overflow-x-auto" />;
}
