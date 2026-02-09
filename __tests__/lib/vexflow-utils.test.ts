// __tests__/lib/vexflow-utils.test.ts
// Tests for VexFlow utility functions.

import { describe, it, expect } from 'vitest';
import {
  noteNameToVex,
  chordToVexKeys,
  chordQualityToSymbol,
} from '@/lib/music/vexflow-utils';

describe('noteNameToVex', () => {
  it('converts natural notes to VexFlow format', () => {
    expect(noteNameToVex('C', 4)).toBe('c/4');
    expect(noteNameToVex('D', 4)).toBe('d/4');
    expect(noteNameToVex('E', 4)).toBe('e/4');
    expect(noteNameToVex('F', 4)).toBe('f/4');
    expect(noteNameToVex('G', 4)).toBe('g/4');
    expect(noteNameToVex('A', 4)).toBe('a/4');
    expect(noteNameToVex('B', 4)).toBe('b/4');
  });

  it('converts flat notes to VexFlow format', () => {
    expect(noteNameToVex('Db', 4)).toBe('db/4');
    expect(noteNameToVex('Eb', 4)).toBe('eb/4');
    expect(noteNameToVex('Gb', 4)).toBe('gb/4');
    expect(noteNameToVex('Ab', 4)).toBe('ab/4');
    expect(noteNameToVex('Bb', 4)).toBe('bb/4');
  });

  it('respects different octaves', () => {
    expect(noteNameToVex('C', 3)).toBe('c/3');
    expect(noteNameToVex('C', 4)).toBe('c/4');
    expect(noteNameToVex('C', 5)).toBe('c/5');
  });

  it('uses octave 4 as default', () => {
    expect(noteNameToVex('C')).toBe('c/4');
    expect(noteNameToVex('G')).toBe('g/4');
  });
});

describe('chordToVexKeys', () => {
  it('converts Cmaj7 to correct VexFlow keys', () => {
    const keys = chordToVexKeys('C', 'maj7', 4);
    // Cmaj7 = C, E, G, B
    expect(keys).toEqual(['c/4', 'e/4', 'g/4', 'b/4']);
  });

  it('converts Dm7 to correct VexFlow keys', () => {
    const keys = chordToVexKeys('D', 'm7', 4);
    // Dm7 = D, F, A, C
    // F is lower than D in chromatic scale, so bump octave
    expect(keys).toEqual(['d/4', 'f/4', 'a/4', 'c/5']);
  });

  it('converts G7 to correct VexFlow keys', () => {
    const keys = chordToVexKeys('G', '7', 4);
    // G7 = G, B, D, F
    // B is higher, D is lower (bump octave), F is lower (stay in 5)
    expect(keys).toEqual(['g/4', 'b/4', 'd/5', 'f/5']);
  });

  it('handles chords starting at different octaves', () => {
    const keys = chordToVexKeys('C', 'maj7', 3);
    expect(keys).toEqual(['c/3', 'e/3', 'g/3', 'b/3']);
  });

  it('uses octave 4 as default', () => {
    const keys = chordToVexKeys('C', 'maj7');
    expect(keys).toEqual(['c/4', 'e/4', 'g/4', 'b/4']);
  });

  it('handles m7b5 chord correctly', () => {
    const keys = chordToVexKeys('B', 'm7b5', 4);
    // Bm7b5 = B, D, F, A
    // All notes after B are lower in chromatic scale, bump octaves
    expect(keys).toEqual(['b/4', 'd/5', 'f/5', 'a/5']);
  });

  it('handles extended chords correctly', () => {
    const keys = chordToVexKeys('C', 'maj9', 4);
    // Cmaj9 = C, E, G, B, D
    // C-E-G-B in octave 4, D in octave 5
    expect(keys).toEqual(['c/4', 'e/4', 'g/4', 'b/4', 'd/5']);
  });
});

describe('chordQualityToSymbol', () => {
  it('returns basic chord qualities unchanged', () => {
    expect(chordQualityToSymbol('maj7')).toBe('maj7');
    expect(chordQualityToSymbol('m7')).toBe('m7');
    expect(chordQualityToSymbol('7')).toBe('7');
    expect(chordQualityToSymbol('dim7')).toBe('dim7');
  });

  it('converts flat symbols to musical flat', () => {
    expect(chordQualityToSymbol('m7b5')).toBe('m7♭5');
    expect(chordQualityToSymbol('7b9')).toBe('7♭9');
  });

  it('converts sharp symbols to musical sharp', () => {
    expect(chordQualityToSymbol('7#9')).toBe('7♯9');
    expect(chordQualityToSymbol('maj7#11')).toBe('maj7♯11');
  });

  it('returns alt chord unchanged', () => {
    expect(chordQualityToSymbol('7alt')).toBe('7alt');
  });

  it('returns qualities not in map unchanged', () => {
    expect(chordQualityToSymbol('6')).toBe('6');
    expect(chordQualityToSymbol('m6')).toBe('m6');
    expect(chordQualityToSymbol('sus4')).toBe('sus4');
  });
});
