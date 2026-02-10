import { describe, it, expect } from 'vitest';
import { generatePracticeMelody, generateLick } from '@/lib/music/melody';
import { getChordNotes } from '@/lib/music/chords';
import { midiToNote, noteToMidi } from '@/lib/music/theory';
import type { NoteName, ChordQuality, MelodyNote, MelodyOptions, LickStyle } from '@/lib/music/types';

/* ═══════════════════════════════════════════════════════════
   Test Helpers
   ═══════════════════════════════════════════════════════════ */

/** Check if a MIDI note is one of the chord's tones (any octave). */
function isChordTone(midi: number, root: NoteName, quality: ChordQuality): boolean {
  const chordNoteNames = getChordNotes(root, quality);
  const { note } = midiToNote(midi);
  return chordNoteNames.includes(note);
}

/** Sum all durations in a melody. */
function totalDuration(melody: MelodyNote[]): number {
  return melody.reduce((sum, n) => sum + n.durationBeats, 0);
}

/* ═══════════════════════════════════════════════════════════
   generatePracticeMelody
   ═══════════════════════════════════════════════════════════ */

describe('generatePracticeMelody', () => {
  const singleChord = [{ root: 'C' as NoteName, quality: 'maj7' as ChordQuality, durationBeats: 4 }];
  const iiVI = [
    { root: 'D' as NoteName, quality: 'm7' as ChordQuality, durationBeats: 4 },
    { root: 'G' as NoteName, quality: '7' as ChordQuality, durationBeats: 4 },
    { root: 'C' as NoteName, quality: 'maj7' as ChordQuality, durationBeats: 4 },
  ];
  const simpleOpts: MelodyOptions = { complexity: 'simple' };
  const mediumOpts: MelodyOptions = { complexity: 'medium' };
  const bebopOpts: MelodyOptions = { complexity: 'bebop' };

  describe('simple complexity', () => {
    it('returns correct number of notes for a 4-beat chord', () => {
      const melody = generatePracticeMelody(singleChord, simpleOpts);
      expect(melody).toHaveLength(4);
    });

    it('produces quarter notes (durationBeats = 1)', () => {
      const melody = generatePracticeMelody(singleChord, simpleOpts);
      for (const note of melody) {
        expect(note.durationBeats).toBe(1);
      }
    });

    it('places chord tones on beats 1 and 3 (indices 0 and 2)', () => {
      const melody = generatePracticeMelody(singleChord, simpleOpts);
      expect(isChordTone(melody[0].midi, 'C', 'maj7')).toBe(true);
      expect(isChordTone(melody[2].midi, 'C', 'maj7')).toBe(true);
    });

    it('all notes within default range [60, 79]', () => {
      const melody = generatePracticeMelody(singleChord, simpleOpts);
      for (const note of melody) {
        expect(note.midi).toBeGreaterThanOrEqual(60);
        expect(note.midi).toBeLessThanOrEqual(79);
      }
    });

    it('total duration matches input chord durations', () => {
      const melody = generatePracticeMelody(iiVI, simpleOpts);
      expect(totalDuration(melody)).toBe(12); // 4 + 4 + 4
    });
  });

  describe('medium complexity', () => {
    it('total duration matches input chord durations', () => {
      const melody = generatePracticeMelody(iiVI, mediumOpts);
      expect(totalDuration(melody)).toBe(12);
    });

    it('all notes within default range [60, 79]', () => {
      const melody = generatePracticeMelody(iiVI, mediumOpts);
      for (const note of melody) {
        expect(note.midi).toBeGreaterThanOrEqual(60);
        expect(note.midi).toBeLessThanOrEqual(79);
      }
    });
  });

  describe('bebop complexity', () => {
    it('produces some 8th notes (durationBeats = 0.5)', () => {
      const melody = generatePracticeMelody(iiVI, bebopOpts);
      const hasEighths = melody.some((n) => n.durationBeats === 0.5);
      expect(hasEighths).toBe(true);
    });

    it('total duration matches input chord durations', () => {
      const melody = generatePracticeMelody(iiVI, bebopOpts);
      expect(totalDuration(melody)).toBe(12);
    });

    it('all notes within default range [60, 79]', () => {
      const melody = generatePracticeMelody(iiVI, bebopOpts);
      for (const note of melody) {
        expect(note.midi).toBeGreaterThanOrEqual(60);
        expect(note.midi).toBeLessThanOrEqual(79);
      }
    });
  });

  describe('custom range', () => {
    it('all notes within custom range [65, 77]', () => {
      const opts: MelodyOptions = { complexity: 'simple', lowMidi: 65, highMidi: 77 };
      const melody = generatePracticeMelody(iiVI, opts);
      for (const note of melody) {
        expect(note.midi).toBeGreaterThanOrEqual(65);
        expect(note.midi).toBeLessThanOrEqual(77);
      }
    });
  });

  describe('ii-V-I in C', () => {
    it('works correctly for the standard ii-V-I progression', () => {
      const melody = generatePracticeMelody(iiVI, simpleOpts);
      expect(melody.length).toBeGreaterThanOrEqual(12);
      expect(totalDuration(melody)).toBe(12);

      // First note should be a Dm7 chord tone
      expect(isChordTone(melody[0].midi, 'D', 'm7')).toBe(true);
    });
  });
});

/* ═══════════════════════════════════════════════════════════
   generateLick
   ═══════════════════════════════════════════════════════════ */

describe('generateLick', () => {
  const cmaj7 = { root: 'C' as NoteName, quality: 'maj7' as ChordQuality };
  const dom7 = { root: 'C' as NoteName, quality: '7' as ChordQuality };
  const min7 = { root: 'D' as NoteName, quality: 'm7' as ChordQuality };

  describe('common properties (all styles)', () => {
    const styles: LickStyle[] = ['bebop', 'blues', 'modal'];
    const barOptions: (2 | 4)[] = [2, 4];

    for (const style of styles) {
      for (const bars of barOptions) {
        describe(`${style} style, ${bars} bars over Cmaj7`, () => {
          const lick = generateLick(cmaj7, style, bars);

          it(`total duration = ${bars * 4} beats`, () => {
            expect(totalDuration(lick)).toBe(bars * 4);
          });

          it('last note is a chord tone', () => {
            const last = lick[lick.length - 1];
            expect(isChordTone(last.midi, 'C', 'maj7')).toBe(true);
          });

          it('all notes within range [60, 79]', () => {
            for (const note of lick) {
              expect(note.midi).toBeGreaterThanOrEqual(60);
              expect(note.midi).toBeLessThanOrEqual(79);
            }
          });
        });
      }
    }
  });

  describe('bebop style', () => {
    it('produces mostly 8th notes', () => {
      const lick = generateLick(cmaj7, 'bebop', 4);
      const eighths = lick.filter((n) => n.durationBeats === 0.5);
      // Most notes should be 8th notes in bebop
      expect(eighths.length).toBeGreaterThan(lick.length / 2);
    });
  });

  describe('blues style', () => {
    it('works for dominant 7 chord', () => {
      const lick = generateLick(dom7, 'blues', 2);
      expect(totalDuration(lick)).toBe(8);
      const last = lick[lick.length - 1];
      expect(isChordTone(last.midi, 'C', '7')).toBe(true);
    });
  });

  describe('modal style', () => {
    it('works for m7 chord', () => {
      const lick = generateLick(min7, 'modal', 2);
      expect(totalDuration(lick)).toBe(8);
      const last = lick[lick.length - 1];
      expect(isChordTone(last.midi, 'D', 'm7')).toBe(true);
    });
  });
});

/* ═══════════════════════════════════════════════════════════
   Output integrity checks
   ═══════════════════════════════════════════════════════════ */

describe('output integrity', () => {
  it('no NaN or undefined values in generatePracticeMelody output', () => {
    const chords = [
      { root: 'D' as NoteName, quality: 'm7' as ChordQuality, durationBeats: 4 },
      { root: 'G' as NoteName, quality: '7' as ChordQuality, durationBeats: 4 },
    ];
    const melody = generatePracticeMelody(chords, { complexity: 'bebop' });
    for (const note of melody) {
      expect(Number.isNaN(note.midi)).toBe(false);
      expect(note.midi).toBeDefined();
      expect(Number.isNaN(note.durationBeats)).toBe(false);
      expect(note.durationBeats).toBeDefined();
    }
  });

  it('no NaN or undefined values in generateLick output', () => {
    const lick = generateLick(
      { root: 'Bb' as NoteName, quality: '7' as ChordQuality },
      'bebop',
      4,
    );
    for (const note of lick) {
      expect(Number.isNaN(note.midi)).toBe(false);
      expect(note.midi).toBeDefined();
      expect(Number.isNaN(note.durationBeats)).toBe(false);
      expect(note.durationBeats).toBeDefined();
    }
  });

  it('all MIDI values are valid integers in range 0-127', () => {
    const chords = [
      { root: 'Eb' as NoteName, quality: 'maj7' as ChordQuality, durationBeats: 4 },
      { root: 'Ab' as NoteName, quality: '7' as ChordQuality, durationBeats: 4 },
    ];
    const melody = generatePracticeMelody(chords, { complexity: 'medium' });
    for (const note of melody) {
      expect(Number.isInteger(note.midi)).toBe(true);
      expect(note.midi).toBeGreaterThanOrEqual(0);
      expect(note.midi).toBeLessThanOrEqual(127);
    }
  });

  it('deterministic: same input produces same output', () => {
    const chords = [
      { root: 'C' as NoteName, quality: 'maj7' as ChordQuality, durationBeats: 4 },
    ];
    const opts: MelodyOptions = { complexity: 'simple' };
    const run1 = generatePracticeMelody(chords, opts);
    const run2 = generatePracticeMelody(chords, opts);
    expect(run1).toEqual(run2);
  });

  it('deterministic: lick same input produces same output', () => {
    const chord = { root: 'G' as NoteName, quality: '7' as ChordQuality };
    const run1 = generateLick(chord, 'bebop', 2);
    const run2 = generateLick(chord, 'bebop', 2);
    expect(run1).toEqual(run2);
  });
});
