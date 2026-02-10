'use client';

import type { NoteName } from '@/lib/music/types';

interface PianoKeyboardProps {
  highlightedNotes: NoteName[];
  scaleNotes?: NoteName[];
  /** MIDI note numbers for octave-specific highlighting (e.g., voice leading) */
  midiNotes?: number[];
  /** Enable smooth CSS transition between highlight states */
  animateTransition?: boolean;
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

/** MIDI note number for the first key (C4) */
const START_MIDI = 60;

/** Map of white note name to semitone offset within an octave */
const WHITE_SEMITONES: Record<string, number> = {
  C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11,
};

/** Map of black note name to semitone offset within an octave */
const BLACK_SEMITONES: Record<string, number> = {
  Db: 1, Eb: 3, Gb: 6, Ab: 8, Bb: 10,
};

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
  midiNotes,
  animateTransition = true,
}: PianoKeyboardProps) {
  const highlightSet = new Set(highlightedNotes);
  const scaleSet = new Set(scaleNotes ?? []);
  const midiSet = midiNotes ? new Set(midiNotes) : null;

  function whiteKeyMidi(note: NoteName, octaveIdx: number): number {
    return START_MIDI + octaveIdx * 12 + WHITE_SEMITONES[note];
  }

  function blackKeyMidi(note: NoteName, octaveIdx: number): number {
    return START_MIDI + octaveIdx * 12 + BLACK_SEMITONES[note];
  }

  function whiteKeyFill(note: NoteName, octaveIdx: number): string {
    if (midiSet?.has(whiteKeyMidi(note, octaveIdx))) return 'var(--gold)';
    if (highlightSet.has(note)) return 'var(--gold)';
    if (scaleSet.has(note)) return '#2a2520';
    return '#f0e8dc';
  }

  function blackKeyFill(note: NoteName, octaveIdx: number): string {
    if (midiSet?.has(blackKeyMidi(note, octaveIdx))) return 'var(--gold)';
    if (highlightSet.has(note)) return 'var(--gold)';
    if (scaleSet.has(note)) return '#3a3535';
    return '#1a1a1a';
  }

  function isWhiteHighlighted(note: NoteName, octaveIdx: number): boolean {
    if (midiSet?.has(whiteKeyMidi(note, octaveIdx))) return true;
    return highlightSet.has(note);
  }

  const transitionStyle = animateTransition
    ? { transition: 'fill 200ms ease' }
    : undefined;

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        className="w-full max-w-[500px] mx-auto"
        role="img"
        aria-label="Piano keyboard"
      >
        {WHITE_NOTES.map((note, i) => {
          const octaveIdx = Math.floor(i / 7);
          return (
            <rect
              key={`white-${i}`}
              x={i * WHITE_KEY_W}
              y={0}
              width={WHITE_KEY_W - 1}
              height={WHITE_KEY_H}
              fill={whiteKeyFill(note, octaveIdx)}
              stroke="var(--border)"
              strokeWidth={0.5}
              rx={2}
              style={transitionStyle}
            />
          );
        })}

        {WHITE_NOTES.map((note, i) => {
          const octaveIdx = Math.floor(i / 7);
          return (
            <text
              key={`wlabel-${i}`}
              x={i * WHITE_KEY_W + WHITE_KEY_W / 2}
              y={WHITE_KEY_H - 8}
              textAnchor="middle"
              fontSize={9}
              fill={isWhiteHighlighted(note, octaveIdx) ? 'var(--bg)' : 'var(--cream-muted)'}
              style={{ pointerEvents: 'none' }}
            >
              {note}
            </text>
          );
        })}

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
                fill={blackKeyFill(note, octave)}
                stroke="var(--border)"
                strokeWidth={0.5}
                rx={2}
                style={transitionStyle}
              />
            );
          }),
        )}
      </svg>
    </div>
  );
}
