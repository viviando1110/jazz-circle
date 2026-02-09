'use client';

import type { NoteName } from '@/lib/music/types';

interface PianoKeyboardProps {
  highlightedNotes: NoteName[];
  scaleNotes?: NoteName[];
}

const WHITE_NOTES: NoteName[] = [
  'C', 'D', 'E', 'F', 'G', 'A', 'B',
  'C', 'D', 'E', 'F', 'G', 'A', 'B',
];

const BLACK_KEY_PATTERN: { offset: number; note: NoteName }[] = [
  { offset: 0, note: 'Db' },
  { offset: 1, note: 'Eb' },
  { offset: 3, note: 'Gb' },
  { offset: 4, note: 'Ab' },
  { offset: 5, note: 'Bb' },
];

const WHITE_KEY_W = 32;
const WHITE_KEY_H = 120;
const BLACK_KEY_W = 20;
const BLACK_KEY_H = 75;
const TOTAL_WHITE = 14;
const SVG_W = TOTAL_WHITE * WHITE_KEY_W;
const SVG_H = WHITE_KEY_H + 2;

export default function PianoKeyboard({
  highlightedNotes,
  scaleNotes,
}: PianoKeyboardProps) {
  const highlightSet = new Set(highlightedNotes);
  const scaleSet = new Set(scaleNotes ?? []);

  function whiteKeyFill(note: NoteName): string {
    if (highlightSet.has(note)) return 'var(--gold)';
    if (scaleSet.has(note)) return '#2a2520';
    return '#f0e8dc';
  }

  function blackKeyFill(note: NoteName): string {
    if (highlightSet.has(note)) return 'var(--gold)';
    if (scaleSet.has(note)) return '#3a3535';
    return '#1a1a1a';
  }

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        className="w-full max-w-[500px] mx-auto"
        role="img"
        aria-label="Piano keyboard"
      >
        {WHITE_NOTES.map((note, i) => (
          <rect
            key={`white-${i}`}
            x={i * WHITE_KEY_W}
            y={0}
            width={WHITE_KEY_W - 1}
            height={WHITE_KEY_H}
            fill={whiteKeyFill(note)}
            stroke="var(--border)"
            strokeWidth={0.5}
            rx={2}
            style={{ transition: 'fill 200ms ease' }}
          />
        ))}

        {WHITE_NOTES.map((note, i) => (
          <text
            key={`wlabel-${i}`}
            x={i * WHITE_KEY_W + WHITE_KEY_W / 2}
            y={WHITE_KEY_H - 8}
            textAnchor="middle"
            fontSize={9}
            fill={highlightSet.has(note) ? 'var(--bg)' : 'var(--cream-muted)'}
            style={{ pointerEvents: 'none' }}
          >
            {note}
          </text>
        ))}

        {[0, 1].map((octave) =>
          BLACK_KEY_PATTERN.map(({ offset, note }) => {
            const whiteIdx = octave * 7 + offset;
            const x = (whiteIdx + 1) * WHITE_KEY_W - BLACK_KEY_W / 2;
            return (
              <rect
                key={`black-${octave}-${note}`}
                x={x}
                y={0}
                width={BLACK_KEY_W}
                height={BLACK_KEY_H}
                fill={blackKeyFill(note)}
                stroke="var(--border)"
                strokeWidth={0.5}
                rx={2}
                style={{ transition: 'fill 200ms ease' }}
              />
            );
          }),
        )}
      </svg>
    </div>
  );
}
