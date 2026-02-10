import { describe, it, expect } from 'vitest';
import { generateImprovisation } from '@/lib/music/melody';
import { getChordNotes } from '@/lib/music/chords';
import { midiToNote } from '@/lib/music/theory';
import type { NoteName, ChordQuality, MelodyNote, LickStyle } from '@/lib/music/types';

/* ═══════════════════════════════════════════════════════════
   Test Helpers
   ═══════════════════════════════════════════════════════════ */

function isChordTone(midi: number, root: NoteName, quality: ChordQuality): boolean {
  const chordNoteNames = getChordNotes(root, quality);
  const { note } = midiToNote(midi);
  return chordNoteNames.includes(note);
}

function totalDuration(melody: MelodyNote[]): number {
  return melody.reduce((sum, n) => sum + n.durationBeats, 0);
}

/* ═══════════════════════════════════════════════════════════
   Test Data
   ═══════════════════════════════════════════════════════════ */

const iiVI: { root: NoteName; quality: ChordQuality; durationBeats: number }[] = [
  { root: 'D', quality: 'm7', durationBeats: 4 },
  { root: 'G', quality: '7', durationBeats: 4 },
  { root: 'C', quality: 'maj7', durationBeats: 4 },
];

const singleChord = [
  { root: 'C' as NoteName, quality: 'maj7' as ChordQuality, durationBeats: 4 },
];

const shortChord = [
  { root: 'C' as NoteName, quality: 'maj7' as ChordQuality, durationBeats: 1 },
];

// 32-chord long progression (Rhythm Changes-ish)
const longProgression: { root: NoteName; quality: ChordQuality; durationBeats: number }[] = [];
for (let i = 0; i < 32; i++) {
  const roots: NoteName[] = ['Bb', 'G', 'C', 'F', 'Bb', 'G', 'C', 'F'];
  const quals: ChordQuality[] = ['maj7', 'm7', 'm7', '7', 'maj7', 'm7', 'm7', '7'];
  longProgression.push({
    root: roots[i % roots.length],
    quality: quals[i % quals.length],
    durationBeats: 4,
  });
}

/* ═══════════════════════════════════════════════════════════
   Tests
   ═══════════════════════════════════════════════════════════ */

describe('generateImprovisation', () => {
  describe('determinism', () => {
    it('same inputs produce same output', () => {
      const run1 = generateImprovisation(iiVI, 'bebop', 0);
      const run2 = generateImprovisation(iiVI, 'bebop', 0);
      expect(run1).toEqual(run2);
    });

    it('same inputs with same variation seed produce same output', () => {
      const run1 = generateImprovisation(iiVI, 'blues', 5);
      const run2 = generateImprovisation(iiVI, 'blues', 5);
      expect(run1).toEqual(run2);
    });
  });

  describe('style variety', () => {
    const bebop = generateImprovisation(iiVI, 'bebop', 0);
    const blues = generateImprovisation(iiVI, 'blues', 0);
    const modal = generateImprovisation(iiVI, 'modal', 0);

    it('different styles produce different note counts', () => {
      const counts = new Set([bebop.length, blues.length, modal.length]);
      // At least 2 of 3 styles should differ in note count
      expect(counts.size).toBeGreaterThanOrEqual(2);
    });

    it('bebop has more 8th notes than modal', () => {
      const bebopEighths = bebop.filter((n) => n.durationBeats === 0.5).length;
      const modalEighths = modal.filter((n) => n.durationBeats === 0.5).length;
      expect(bebopEighths).toBeGreaterThan(modalEighths);
    });

    it('modal has longer average note duration than bebop', () => {
      const bebopAvg = totalDuration(bebop) / bebop.length;
      const modalAvg = totalDuration(modal) / modal.length;
      expect(modalAvg).toBeGreaterThan(bebopAvg);
    });
  });

  describe('total duration matches chord durations', () => {
    const styles: LickStyle[] = ['bebop', 'blues', 'modal'];

    for (const style of styles) {
      it(`${style}: ii-V-I total = 12 beats`, () => {
        const melody = generateImprovisation(iiVI, style, 0);
        expect(totalDuration(melody)).toBeCloseTo(12, 5);
      });
    }
  });

  describe('range compliance', () => {
    const styles: LickStyle[] = ['bebop', 'blues', 'modal'];

    for (const style of styles) {
      it(`${style}: all notes within [60, 79]`, () => {
        const melody = generateImprovisation(iiVI, style, 0);
        for (const note of melody) {
          // Skip rests (midi=0, velocity=0)
          if (note.velocity === 0) continue;
          expect(note.midi).toBeGreaterThanOrEqual(60);
          expect(note.midi).toBeLessThanOrEqual(79);
        }
      });
    }
  });

  describe('last note resolves to chord tone', () => {
    const styles: LickStyle[] = ['bebop', 'blues', 'modal'];

    for (const style of styles) {
      it(`${style}: last note is a Cmaj7 chord tone`, () => {
        const melody = generateImprovisation(iiVI, style, 0);
        const last = melody[melody.length - 1];
        // Skip if it's a rest
        if (last.velocity !== 0) {
          expect(isChordTone(last.midi, 'C', 'maj7')).toBe(true);
        }
      });
    }
  });

  describe('variations produce different melodies', () => {
    it('different seeds produce different MIDI sequences', () => {
      const v0 = generateImprovisation(iiVI, 'bebop', 0);
      const v1 = generateImprovisation(iiVI, 'bebop', 1);
      const v2 = generateImprovisation(iiVI, 'bebop', 2);

      const m0 = v0.map((n) => n.midi);
      const m1 = v1.map((n) => n.midi);
      const m2 = v2.map((n) => n.midi);

      // At least one pair should differ
      const allSame = JSON.stringify(m0) === JSON.stringify(m1) &&
                      JSON.stringify(m1) === JSON.stringify(m2);
      expect(allSame).toBe(false);
    });

    it('seed 3+ changes starting chord-tone index', () => {
      const v0 = generateImprovisation(iiVI, 'modal', 0);
      const v3 = generateImprovisation(iiVI, 'modal', 3);
      // Different start offset, same transform (both transform=0)
      // Should produce different first note
      expect(v0[0].midi).not.toBe(v3[0].midi);
    });
  });

  describe('edge cases', () => {
    it('empty chords returns empty melody', () => {
      expect(generateImprovisation([], 'bebop', 0)).toEqual([]);
    });

    it('single chord produces valid output', () => {
      const melody = generateImprovisation(singleChord, 'bebop', 0);
      expect(melody.length).toBeGreaterThan(0);
      expect(totalDuration(melody)).toBeCloseTo(4, 5);
    });

    it('very short duration (1 beat) works', () => {
      const melody = generateImprovisation(shortChord, 'bebop', 0);
      expect(melody.length).toBeGreaterThan(0);
      expect(totalDuration(melody)).toBeCloseTo(1, 5);
    });

    it('long progression (32 chords) works', () => {
      const melody = generateImprovisation(longProgression, 'bebop', 0);
      expect(melody.length).toBeGreaterThan(0);
      expect(totalDuration(melody)).toBeCloseTo(128, 5);
    });
  });

  describe('output integrity', () => {
    it('no NaN or undefined values', () => {
      const melody = generateImprovisation(iiVI, 'bebop', 0);
      for (const note of melody) {
        expect(Number.isNaN(note.midi)).toBe(false);
        expect(note.midi).toBeDefined();
        expect(Number.isNaN(note.durationBeats)).toBe(false);
        expect(note.durationBeats).toBeDefined();
        expect(note.durationBeats).toBeGreaterThan(0);
      }
    });

    it('all MIDI values are valid integers (except rests)', () => {
      const styles: LickStyle[] = ['bebop', 'blues', 'modal'];
      for (const style of styles) {
        const melody = generateImprovisation(iiVI, style, 0);
        for (const note of melody) {
          if (note.velocity === 0) continue; // skip rests
          expect(Number.isInteger(note.midi)).toBe(true);
          expect(note.midi).toBeGreaterThanOrEqual(0);
          expect(note.midi).toBeLessThanOrEqual(127);
        }
      }
    });
  });
});
