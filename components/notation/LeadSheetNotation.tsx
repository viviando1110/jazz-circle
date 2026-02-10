'use client';

// components/notation/LeadSheetNotation.tsx
// Renders lead-sheet style notation (chord voicings on staff with chord symbols above).

import { useRef, useEffect, useState } from 'react';
import { Renderer, Stave, StaveNote, Voice, Formatter, Annotation, Accidental } from 'vexflow';
import { chordToVexKeys } from '@/lib/music/vexflow-utils';
import type { NoteName, ChordQuality } from '@/lib/music/types';
import { CHROMATIC } from '@/lib/constants';

interface LeadSheetNotationProps {
  /** Sections of the lead sheet, each with a name, label, and bars */
  sections: {
    name: string;
    label: string;
    bars: {
      bar: number;
      chords: { symbol: string; beats: number }[];
    }[];
  }[];
}

/** Duration mapping from beats to VexFlow duration strings. */
function beatsToDuration(beats: number): string {
  if (beats >= 4) return 'w';
  if (beats >= 2) return 'h';
  return 'q';
}

/** Map of chord quality strings to ChordQuality type, sorted longest-first for matching. */
const QUALITY_MAP: Record<string, ChordQuality> = {
  'maj7#11': 'maj7#11', 'augmaj7': 'augmaj7',
  'maj13': 'maj13', 'maj7': 'maj7', 'maj9': 'maj9',
  'm7b5': 'm7b5', '7sus4': '7sus4',
  '7alt': '7alt', '7#9': '7#9', '7b9': '7b9',
  'dim7': 'dim7', 'sus4': 'sus4',
  'm11': 'm11', 'm9': 'm9', 'm7': 'm7', 'm6': 'm6',
  '6/9': '6/9', '13': '13', '9': '9', '7': '7', '6': '6',
  'aug': 'aug',
};
const QUALITY_KEYS = Object.keys(QUALITY_MAP).sort((a, b) => b.length - a.length);

/** Parse a chord symbol string into root NoteName and ChordQuality. */
function parseChordSymbol(symbol: string): { root: NoteName; quality: ChordQuality } | null {
  let root: NoteName;
  let qualityStr: string;

  // Try two-char root first (Db, Eb, Gb, Ab, Bb)
  if (symbol.length >= 2 && CHROMATIC.includes(symbol.slice(0, 2) as NoteName)) {
    root = symbol.slice(0, 2) as NoteName;
    qualityStr = symbol.slice(2);
  } else if (CHROMATIC.includes(symbol.slice(0, 1) as NoteName)) {
    root = symbol.slice(0, 1) as NoteName;
    qualityStr = symbol.slice(1);
  } else {
    return null;
  }

  for (const key of QUALITY_KEYS) {
    if (qualityStr === key) {
      return { root, quality: QUALITY_MAP[key] };
    }
  }

  // Handle bare triads and common shorthand
  if (qualityStr === '') return { root, quality: 'maj7' };
  if (qualityStr === 'm') return { root, quality: 'm7' };
  return null;
}

/** Extract accidental ('b' or '#') from a VexFlow key string like 'db/4'. */
function extractAccidental(vexKey: string): string | null {
  const notePart = vexKey.split('/')[0];
  if (notePart.length > 1 && notePart.endsWith('b')) return 'b';
  if (notePart.length > 1 && notePart.endsWith('#')) return '#';
  return null;
}

/** Create notes for a bar with full chord voicings and chord symbols above. */
function createBarNotes(chords: { symbol: string; beats: number }[]) {
  const notes: StaveNote[] = [];

  for (const chord of chords) {
    const duration = beatsToDuration(chord.beats);
    const parsed = parseChordSymbol(chord.symbol);

    let keys: string[];
    if (parsed) {
      keys = chordToVexKeys(parsed.root, parsed.quality, 4);
    } else {
      // Fallback: just use root note from symbol
      const rootChar = chord.symbol[0].toLowerCase();
      const acc = chord.symbol.length >= 2 && chord.symbol[1] === 'b' ? 'b'
        : chord.symbol.length >= 2 && chord.symbol[1] === '#' ? '#' : '';
      keys = [`${rootChar}${acc}/4`];
    }

    const note = new StaveNote({ keys, duration });

    // Add accidental modifiers for each note that needs one
    for (let i = 0; i < keys.length; i++) {
      const acc = extractAccidental(keys[i]);
      if (acc) {
        note.addModifier(new Accidental(acc), i);
      }
    }

    // Add chord symbol as annotation above the notes
    const annotation = new Annotation(chord.symbol);
    annotation.setVerticalJustification(Annotation.VerticalJustify.TOP);
    note.addModifier(annotation);

    notes.push(note);
  }

  return notes;
}

export default function LeadSheetNotation({ sections }: LeadSheetNotationProps) {
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
    if (!container) return;

    // Clear previous render
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    try {
      // Constants for layout
      const STAVE_WIDTH = Math.max(measuredWidth - 20, 300);
      const STAVE_HEIGHT = 130;
      const BARS_PER_LINE = 4;
      const MARGIN_LEFT = 10;
      const MARGIN_TOP = 60;
      const SECTION_GAP = 30; // extra vertical space before each new section label
      const SECTION_LABEL_OFFSET = -10; // label above the stave

      // Calculate total height needed (account for section gaps)
      let totalBars = 0;
      let sectionBreaks = 0;
      for (let si = 0; si < sections.length; si++) {
        totalBars += sections[si].bars.length;
        // Count line breaks at section boundaries (except first section)
        if (si > 0) sectionBreaks++;
      }
      const totalLines = Math.ceil(totalBars / BARS_PER_LINE) + sectionBreaks;
      const containerHeight = MARGIN_TOP + totalLines * STAVE_HEIGHT + sectionBreaks * SECTION_GAP + 40;

      // Create VexFlow renderer (SVG mode)
      const renderer = new Renderer(container, Renderer.Backends.SVG);
      renderer.resize(STAVE_WIDTH + 20, containerHeight);
      const context = renderer.getContext();

      // Set colors for dark background
      context.setFillStyle('#f0e8dc');
      context.setStrokeStyle('#a89e90');

      let currentLine = 0;
      let currentBarInLine = 0;
      let sectionGapAccum = 0; // accumulated extra gap from section breaks
      let isFirstSection = true;

      for (const section of sections) {
        // Add gap before each section (except the first)
        if (!isFirstSection) {
          // If previous section didn't end on a line boundary, move to next line
          if (currentBarInLine !== 0) {
            currentBarInLine = 0;
            currentLine++;
          }
          sectionGapAccum += SECTION_GAP;
        }
        isFirstSection = false;

        // Draw section label
        const labelY = MARGIN_TOP + currentLine * STAVE_HEIGHT + sectionGapAccum + SECTION_LABEL_OFFSET;
        context.setFont('Arial', 14, 'bold');
        context.fillText(section.label, MARGIN_LEFT, labelY);

        for (const bar of section.bars) {
          // Calculate position for this bar
          const barWidth = STAVE_WIDTH / BARS_PER_LINE;
          const x = MARGIN_LEFT + currentBarInLine * barWidth;
          const y = MARGIN_TOP + currentLine * STAVE_HEIGHT + sectionGapAccum;

          // Create stave for this bar
          const stave = new Stave(x, y, barWidth);

          // Add clef and time signature only on first bar
          if (currentLine === 0 && currentBarInLine === 0) {
            stave.addClef('treble').addTimeSignature('4/4');
          }

          stave.setContext(context).draw();

          // Create notes for this bar
          const notes = createBarNotes(bar.chords);

          if (notes.length > 0) {
            // Create voice with soft mode
            const voice = new Voice({
              num_beats: 4,
              beat_value: 4,
            });
            voice.setMode(Voice.Mode.SOFT);
            voice.addTickables(notes);

            // Format and draw
            new Formatter().joinVoices([voice]).format([voice], barWidth - 20);
            voice.draw(context, stave);
          }

          // Move to next bar position
          currentBarInLine++;
          if (currentBarInLine >= BARS_PER_LINE) {
            currentBarInLine = 0;
            currentLine++;
          }

        }
      }
    } catch {
      // VexFlow rendering failed — component renders empty
    }
  }, [sections, measuredWidth]);

  return <div ref={containerRef} className="overflow-x-auto" />;
}
