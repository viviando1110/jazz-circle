import { describe, it, expect } from 'vitest';
import {
  noteAt,
  transpose,
  getInterval,
  noteToMidi,
  midiToNote,
  noteIndex,
} from '@/lib/music/theory';
import { CHROMATIC } from '@/lib/constants';
import type { NoteName } from '@/lib/music/types';

describe('noteIndex', () => {
  it('returns correct index for every chromatic note', () => {
    CHROMATIC.forEach((note, i) => {
      expect(noteIndex(note)).toBe(i);
    });
  });
});

describe('noteAt', () => {
  it('returns the note N semitones above root', () => {
    expect(noteAt('C', 0)).toBe('C');
    expect(noteAt('C', 1)).toBe('Db');
    expect(noteAt('C', 4)).toBe('E');
    expect(noteAt('C', 7)).toBe('G');
    expect(noteAt('C', 11)).toBe('B');
    expect(noteAt('C', 12)).toBe('C'); // octave wraps
  });

  it('handles non-C roots', () => {
    expect(noteAt('G', 7)).toBe('D');
    expect(noteAt('A', 3)).toBe('C');
    expect(noteAt('Bb', 2)).toBe('C');
    expect(noteAt('Eb', 7)).toBe('Bb');
  });

  it('handles negative semitones', () => {
    expect(noteAt('C', -1)).toBe('B');
    expect(noteAt('C', -7)).toBe('F');
    expect(noteAt('D', -2)).toBe('C');
  });

  it('produces correct major scale for all 12 keys', () => {
    // Major scale intervals: W W H W W W H = [0, 2, 4, 5, 7, 9, 11]
    const majorIntervals = [0, 2, 4, 5, 7, 9, 11];

    const expectedScales: Record<string, NoteName[]> = {
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

    for (const root of CHROMATIC) {
      const scale = majorIntervals.map((i) => noteAt(root, i));
      expect(scale).toEqual(expectedScales[root]);
    }
  });
});

describe('transpose', () => {
  it('is an alias for noteAt', () => {
    expect(transpose('A', 3)).toBe('C');
    expect(transpose('C', 7)).toBe('G');
    expect(transpose('Eb', -3)).toBe('C');
  });
});

describe('getInterval', () => {
  it('returns semitone distance between two notes', () => {
    expect(getInterval('C', 'E')).toBe(4);     // major third
    expect(getInterval('C', 'G')).toBe(7);     // perfect fifth
    expect(getInterval('C', 'B')).toBe(11);    // major seventh
    expect(getInterval('C', 'C')).toBe(0);     // unison
  });

  it('always returns ascending interval (0-11)', () => {
    expect(getInterval('E', 'C')).toBe(8);     // C is 8 semitones above E
    expect(getInterval('G', 'C')).toBe(5);     // C is 5 semitones above G (perfect 4th)
    expect(getInterval('B', 'C')).toBe(1);     // C is 1 semitone above B
  });

  it('works for all chromatic pairs', () => {
    // The interval from any note to itself is 0
    for (const note of CHROMATIC) {
      expect(getInterval(note, note)).toBe(0);
    }
    // The interval from C to each note matches its index
    for (let i = 0; i < CHROMATIC.length; i++) {
      expect(getInterval('C', CHROMATIC[i])).toBe(i);
    }
  });
});

describe('noteToMidi', () => {
  it('converts C4 to 60 (middle C)', () => {
    expect(noteToMidi('C', 4)).toBe(60);
  });

  it('converts standard reference pitches', () => {
    expect(noteToMidi('A', 4)).toBe(69);    // A440
    expect(noteToMidi('C', 5)).toBe(72);
    expect(noteToMidi('C', 3)).toBe(48);
    expect(noteToMidi('E', 4)).toBe(64);
    expect(noteToMidi('G', 4)).toBe(67);
    expect(noteToMidi('B', 4)).toBe(71);
  });

  it('handles low octaves', () => {
    expect(noteToMidi('C', 0)).toBe(12);
    expect(noteToMidi('A', 0)).toBe(21);
  });
});

describe('midiToNote', () => {
  it('converts 60 to C4', () => {
    const result = midiToNote(60);
    expect(result.note).toBe('C');
    expect(result.octave).toBe(4);
  });

  it('converts 69 to A4', () => {
    const result = midiToNote(69);
    expect(result.note).toBe('A');
    expect(result.octave).toBe(4);
  });

  it('round-trips with noteToMidi for all chromatic notes', () => {
    for (const note of CHROMATIC) {
      for (const octave of [2, 3, 4, 5, 6]) {
        const midi = noteToMidi(note, octave);
        const result = midiToNote(midi);
        expect(result.note).toBe(note);
        expect(result.octave).toBe(octave);
      }
    }
  });
});
