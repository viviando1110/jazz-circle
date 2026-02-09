'use client';

// components/notation/LeadSheetNotation.tsx
// Renders lead-sheet style notation (slash notation with chord symbols above).

import { useRef, useEffect, useState } from 'react';
import { Renderer, Stave, StaveNote, Voice, Formatter, Annotation } from 'vexflow';

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

/**
 * Duration mapping from beats to VexFlow duration strings.
 */
function beatsToDuration(beats: number): string {
  if (beats >= 4) return 'w'; // whole note
  if (beats >= 2) return 'h'; // half note
  return 'q'; // quarter note
}

/**
 * Create slash notes for a bar.
 * For each chord, create notes with the appropriate duration.
 */
function createBarNotes(chords: { symbol: string; beats: number }[]) {
  const notes: StaveNote[] = [];

  for (const chord of chords) {
    const duration = beatsToDuration(chord.beats);

    // Create a note at b/4 (middle line, treble clef)
    const note = new StaveNote({
      keys: ['b/4'],
      duration,
    });

    // Add chord symbol as annotation above the note
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
      const STAVE_HEIGHT = 100;
      const BARS_PER_LINE = 4;
      const MARGIN_LEFT = 10;
      const MARGIN_TOP = 60;
      const SECTION_LABEL_OFFSET = -30;

      // Calculate total height needed
      let totalBars = 0;
      for (const section of sections) {
        totalBars += section.bars.length;
      }
      const totalLines = Math.ceil(totalBars / BARS_PER_LINE);
      const containerHeight = MARGIN_TOP + totalLines * STAVE_HEIGHT + 40;

      // Create VexFlow renderer (SVG mode)
      const renderer = new Renderer(container, Renderer.Backends.SVG);
      renderer.resize(STAVE_WIDTH + 20, containerHeight);
      const context = renderer.getContext();

      // Set colors for dark background
      context.setFillStyle('#f0e8dc');
      context.setStrokeStyle('#a89e90');

      let currentLine = 0;
      let currentBarInLine = 0;
      let isFirstBarOfSection = true;

      for (const section of sections) {
        // Draw section label
        if (isFirstBarOfSection) {
          const labelY = MARGIN_TOP + currentLine * STAVE_HEIGHT + SECTION_LABEL_OFFSET;
          context.setFont('Arial', 14, 'bold');
          context.fillText(section.label, MARGIN_LEFT, labelY);
        }

        for (const bar of section.bars) {
          // Calculate position for this bar
          const barWidth = STAVE_WIDTH / BARS_PER_LINE;
          const x = MARGIN_LEFT + currentBarInLine * barWidth;
          const y = MARGIN_TOP + currentLine * STAVE_HEIGHT;

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

          isFirstBarOfSection = false;
        }

        // Next section starts fresh
        if (currentBarInLine !== 0) {
          currentBarInLine = 0;
          currentLine++;
        }
        isFirstBarOfSection = true;
      }
    } catch {
      // VexFlow rendering failed — component renders empty
    }
  }, [sections, measuredWidth]);

  return <div ref={containerRef} className="overflow-x-auto" />;
}
