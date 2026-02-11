'use client';

// components/notation/StaffNotation.tsx
// Renders chord notation using VexFlow.

import { useRef, useEffect, useState } from 'react';
import { Renderer, Stave, StaveNote, Voice, Formatter, Annotation } from 'vexflow';
import { getCSSVar } from '@/lib/theme-colors';
import { useTheme } from '@/hooks/useTheme';

interface StaffNotationProps {
  /** Array of chords to render, each with symbol, keys (VexFlow format), and beats */
  chords: { symbol: string; keys: string[]; beats: number }[];
  /** Width of the notation container (default 800px) */
  width?: number;
}

/**
 * Duration mapping from beats to VexFlow duration strings.
 */
function beatsToDuration(beats: number): string {
  if (beats >= 4) return 'w'; // whole note
  if (beats >= 2) return 'h'; // half note
  return 'q'; // quarter note
}

export default function StaffNotation({ chords, width: widthProp }: StaffNotationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [measuredWidth, setMeasuredWidth] = useState(widthProp ?? 800);
  const { theme } = useTheme();

  // Measure container width responsively
  useEffect(() => {
    const container = containerRef.current;
    if (!container || widthProp) return;

    const measure = () => {
      const w = container.parentElement?.clientWidth ?? container.clientWidth;
      if (w > 0) setMeasuredWidth(w);
    };
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(container.parentElement ?? container);
    return () => observer.disconnect();
  }, [widthProp]);

  const width = widthProp ?? measuredWidth;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous render
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    try {
      // Create VexFlow renderer (SVG mode)
      const renderer = new Renderer(container, Renderer.Backends.SVG);
      const height = 200;
      renderer.resize(width, height);
      const context = renderer.getContext();

      // Set colors based on current theme
      context.setFillStyle(getCSSVar('--notation-fill', '#f0e8dc'));
      context.setStrokeStyle(getCSSVar('--notation-stroke', '#a89e90'));

      // Create stave (staff)
      const staveX = 10;
      const staveY = 40;
      const staveWidth = width - 20;
      const stave = new Stave(staveX, staveY, staveWidth);
      stave.addClef('treble').addTimeSignature('4/4');
      stave.setContext(context).draw();

      // Create notes from chords
      const notes = chords.map((chord) => {
        const duration = beatsToDuration(chord.beats);
        const note = new StaveNote({
          keys: chord.keys,
          duration,
        });

        // Add chord symbol as annotation above the note
        const annotation = new Annotation(chord.symbol);
        annotation.setVerticalJustification(Annotation.VerticalJustify.TOP);
        note.addModifier(annotation);

        return note;
      });

      // Create voice with soft mode to avoid strict timing errors
      const voice = new Voice({
        num_beats: 4,
        beat_value: 4,
      });
      voice.setMode(Voice.Mode.SOFT);
      voice.addTickables(notes);

      // Format and draw (leave room for last annotation to not clip)
      new Formatter().joinVoices([voice]).format([voice], staveWidth - 40);
      voice.draw(context, stave);
    } catch {
      // VexFlow rendering failed — component renders empty
    }
  }, [chords, width, theme]);

  return <div ref={containerRef} className="overflow-x-auto" />;
}
