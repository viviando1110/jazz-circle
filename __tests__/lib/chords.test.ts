import { describe, it, expect } from 'vitest';
import {
  getDiatonicChords,
  getChordNotes,
  getChordVoicing,
  CHORD_INTERVALS,
} from '@/lib/music/chords';
import { KEYS_MAJOR, KEYS_MINOR } from '@/lib/music/keys';
import type { NoteName, ChordQuality, MusicalKey } from '@/lib/music/types';

/* ═══════════════════════════════════════════════════════════
   Chord Interval Sanity Checks
   ═══════════════════════════════════════════════════════════ */

describe('CHORD_INTERVALS', () => {
  it('has correct intervals for basic 7th chords', () => {
    expect(CHORD_INTERVALS.maj7).toEqual([0, 4, 7, 11]);
    expect(CHORD_INTERVALS.m7).toEqual([0, 3, 7, 10]);
    expect(CHORD_INTERVALS['7']).toEqual([0, 4, 7, 10]);
    expect(CHORD_INTERVALS.m7b5).toEqual([0, 3, 6, 10]);
    expect(CHORD_INTERVALS.dim7).toEqual([0, 3, 6, 9]);
  });

  it('all intervals start with 0 (root)', () => {
    for (const [, intervals] of Object.entries(CHORD_INTERVALS)) {
      expect(intervals[0]).toBe(0);
    }
  });
});

/* ═══════════════════════════════════════════════════════════
   getChordNotes
   ═══════════════════════════════════════════════════════════ */

describe('getChordNotes', () => {
  it('returns correct notes for Cmaj7', () => {
    expect(getChordNotes('C', 'maj7')).toEqual(['C', 'E', 'G', 'B']);
  });

  it('returns correct notes for Dm7', () => {
    expect(getChordNotes('D', 'm7')).toEqual(['D', 'F', 'A', 'C']);
  });

  it('returns correct notes for G7', () => {
    expect(getChordNotes('G', '7')).toEqual(['G', 'B', 'D', 'F']);
  });

  it('returns correct notes for Bm7b5', () => {
    expect(getChordNotes('B', 'm7b5')).toEqual(['B', 'D', 'F', 'A']);
  });

  it('returns correct notes for Bbm7', () => {
    expect(getChordNotes('Bb', 'm7')).toEqual(['Bb', 'Db', 'F', 'Ab']);
  });

  it('returns correct notes for Ebmaj7', () => {
    expect(getChordNotes('Eb', 'maj7')).toEqual(['Eb', 'G', 'Bb', 'D']);
  });
});

/* ═══════════════════════════════════════════════════════════
   getChordVoicing
   ═══════════════════════════════════════════════════════════ */

describe('getChordVoicing', () => {
  it('returns correct MIDI notes for Cmaj7 in octave 4', () => {
    const voicing = getChordVoicing('C', 'maj7', 4);
    expect(voicing.midiNotes).toEqual([60, 64, 67, 71]);
    expect(voicing.noteNames).toEqual(['C', 'E', 'G', 'B']);
    expect(voicing.root).toBe('C');
    expect(voicing.quality).toBe('maj7');
  });

  it('defaults to octave 4', () => {
    const voicing = getChordVoicing('C', 'maj7');
    expect(voicing.midiNotes).toEqual([60, 64, 67, 71]);
  });

  it('respects octave parameter', () => {
    const voicing = getChordVoicing('C', 'maj7', 3);
    expect(voicing.midiNotes).toEqual([48, 52, 55, 59]);
  });
});

/* ═══════════════════════════════════════════════════════════
   getDiatonicChords — C Major (reference case)
   ═══════════════════════════════════════════════════════════ */

describe('getDiatonicChords — C Major', () => {
  const cMajor = KEYS_MAJOR.find((k) => k.root === 'C')!;
  const chords = getDiatonicChords(cMajor);

  it('returns exactly 7 chords', () => {
    expect(chords).toHaveLength(7);
  });

  it('has correct roots', () => {
    const roots = chords.map((c) => c.root);
    expect(roots).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
  });

  it('has correct qualities', () => {
    const qualities = chords.map((c) => c.quality);
    expect(qualities).toEqual(['maj7', 'm7', 'm7', 'maj7', '7', 'm7', 'm7b5']);
  });

  it('has correct roman numerals', () => {
    const romans = chords.map((c) => c.roman);
    expect(romans).toEqual([
      'Imaj7', 'iim7', 'iiim7', 'IVmaj7', 'V7', 'vim7', 'viiø7',
    ]);
  });

  it('has correct chord names', () => {
    const names = chords.map((c) => c.name);
    expect(names).toEqual([
      'Cmaj7', 'Dm7', 'Em7', 'Fmaj7', 'G7', 'Am7', 'Bm7b5',
    ]);
  });

  it('has correct scale degrees (1-7)', () => {
    const degrees = chords.map((c) => c.degree);
    expect(degrees).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});

/* ═══════════════════════════════════════════════════════════
   getDiatonicChords — All 12 Major Keys
   ═══════════════════════════════════════════════════════════ */

describe('getDiatonicChords — all 12 major keys', () => {
  // Expected roots for each major key's diatonic chords
  const expectedRoots: Record<string, NoteName[]> = {
    C:  ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    G:  ['G', 'A', 'B', 'C', 'D', 'E', 'Gb'],
    D:  ['D', 'E', 'Gb', 'G', 'A', 'B', 'Db'],
    A:  ['A', 'B', 'Db', 'D', 'E', 'Gb', 'Ab'],
    E:  ['E', 'Gb', 'Ab', 'A', 'B', 'Db', 'Eb'],
    B:  ['B', 'Db', 'Eb', 'E', 'Gb', 'Ab', 'Bb'],
    Gb: ['Gb', 'Ab', 'Bb', 'B', 'Db', 'Eb', 'F'],
    Db: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
    Ab: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
    Eb: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
    Bb: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
    F:  ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
  };

  const majorQualities: ChordQuality[] = ['maj7', 'm7', 'm7', 'maj7', '7', 'm7', 'm7b5'];

  for (const key of KEYS_MAJOR) {
    describe(`${key.displayName}`, () => {
      const chords = getDiatonicChords(key);

      it('has 7 chords', () => {
        expect(chords).toHaveLength(7);
      });

      it('has correct roots', () => {
        const roots = chords.map((c) => c.root);
        expect(roots).toEqual(expectedRoots[key.root]);
      });

      it('has correct qualities (Imaj7, iim7, iiim7, IVmaj7, V7, vim7, viiø7)', () => {
        const qualities = chords.map((c) => c.quality);
        expect(qualities).toEqual(majorQualities);
      });
    });
  }
});

/* ═══════════════════════════════════════════════════════════
   getDiatonicChords — Minor Keys
   ═══════════════════════════════════════════════════════════ */

describe('getDiatonicChords — A Minor (natural minor)', () => {
  const aMinor = KEYS_MINOR.find((k) => k.root === 'A')!;
  const chords = getDiatonicChords(aMinor);

  it('returns exactly 7 chords', () => {
    expect(chords).toHaveLength(7);
  });

  it('has correct roots', () => {
    const roots = chords.map((c) => c.root);
    expect(roots).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
  });

  it('has correct qualities (im7, iiø7, bIIImaj7, ivm7, vm7, bVImaj7, bVII7)', () => {
    const qualities = chords.map((c) => c.quality);
    expect(qualities).toEqual(['m7', 'm7b5', 'maj7', 'm7', 'm7', 'maj7', '7']);
  });

  it('has correct roman numerals', () => {
    const romans = chords.map((c) => c.roman);
    expect(romans).toEqual([
      'im7', 'iiø7', 'bIIImaj7', 'ivm7', 'vm7', 'bVImaj7', 'bVII7',
    ]);
  });
});

describe('getDiatonicChords — all 12 minor keys have correct qualities', () => {
  const minorQualities: ChordQuality[] = ['m7', 'm7b5', 'maj7', 'm7', 'm7', 'maj7', '7'];

  for (const key of KEYS_MINOR) {
    it(`${key.displayName} has correct chord qualities`, () => {
      const chords = getDiatonicChords(key);
      expect(chords).toHaveLength(7);
      const qualities = chords.map((c) => c.quality);
      expect(qualities).toEqual(minorQualities);
    });
  }
});

/* ═══════════════════════════════════════════════════════════
   getDiatonicChords — G Minor (for Autumn Leaves)
   ═══════════════════════════════════════════════════════════ */

describe('getDiatonicChords — G Minor (Autumn Leaves key)', () => {
  const gMinor = KEYS_MINOR.find((k) => k.root === 'G')!;
  const chords = getDiatonicChords(gMinor);

  it('has correct roots for Autumn Leaves context', () => {
    const roots = chords.map((c) => c.root);
    // G natural minor: G A Bb C D Eb F
    expect(roots).toEqual(['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F']);
  });

  it('chord names match expected', () => {
    const names = chords.map((c) => c.name);
    expect(names).toEqual([
      'Gm7', 'Am7b5', 'Bbmaj7', 'Cm7', 'Dm7', 'Ebmaj7', 'F7',
    ]);
  });
});
