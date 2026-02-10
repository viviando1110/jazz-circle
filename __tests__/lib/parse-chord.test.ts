import { describe, it, expect } from 'vitest';
import { parseForVoicing } from '@/lib/music/parse-chord';

describe('parseForVoicing', () => {
  describe('root extraction', () => {
    it('parses single-char roots', () => {
      expect(parseForVoicing('Cmaj7').root).toBe('C');
      expect(parseForVoicing('G7').root).toBe('G');
      expect(parseForVoicing('Am7').root).toBe('A');
    });

    it('parses two-char roots (flats)', () => {
      expect(parseForVoicing('Dbmaj7').root).toBe('Db');
      expect(parseForVoicing('Eb7').root).toBe('Eb');
      expect(parseForVoicing('Gbm7').root).toBe('Gb');
      expect(parseForVoicing('Abm7b5').root).toBe('Ab');
      expect(parseForVoicing('Bb7').root).toBe('Bb');
    });
  });

  describe('quality mapping', () => {
    it('maps all basic 7th chord qualities', () => {
      expect(parseForVoicing('Cmaj7').quality).toBe('maj7');
      expect(parseForVoicing('Dm7').quality).toBe('m7');
      expect(parseForVoicing('G7').quality).toBe('7');
      expect(parseForVoicing('Bm7b5').quality).toBe('m7b5');
      expect(parseForVoicing('Bdim7').quality).toBe('dim7');
    });

    it('maps extension qualities', () => {
      expect(parseForVoicing('Cmaj9').quality).toBe('maj9');
      expect(parseForVoicing('C9').quality).toBe('9');
      expect(parseForVoicing('Dm9').quality).toBe('m9');
      expect(parseForVoicing('C13').quality).toBe('13');
      expect(parseForVoicing('Cmaj13').quality).toBe('maj13');
    });

    it('maps altered qualities', () => {
      expect(parseForVoicing('G7alt').quality).toBe('7alt');
      expect(parseForVoicing('G7b9').quality).toBe('7b9');
      expect(parseForVoicing('G7#9').quality).toBe('7#9');
      expect(parseForVoicing('Cmaj7#11').quality).toBe('maj7#11');
      expect(parseForVoicing('Dm11').quality).toBe('m11');
    });

    it('maps other qualities', () => {
      expect(parseForVoicing('C6').quality).toBe('6');
      expect(parseForVoicing('Cm6').quality).toBe('m6');
      expect(parseForVoicing('C6/9').quality).toBe('6/9');
      expect(parseForVoicing('Fsus4').quality).toBe('sus4');
      expect(parseForVoicing('G7sus4').quality).toBe('7sus4');
    });

    it('maps augmented qualities', () => {
      expect(parseForVoicing('Caug').quality).toBe('aug');
      expect(parseForVoicing('Caugmaj7').quality).toBe('augmaj7');
    });
  });

  describe('bare triads', () => {
    it('treats bare root as maj7', () => {
      expect(parseForVoicing('C')).toEqual({ root: 'C', quality: 'maj7' });
      expect(parseForVoicing('Db')).toEqual({ root: 'Db', quality: 'maj7' });
    });

    it('treats bare minor as m7', () => {
      expect(parseForVoicing('Cm')).toEqual({ root: 'C', quality: 'm7' });
      expect(parseForVoicing('Ebm')).toEqual({ root: 'Eb', quality: 'm7' });
    });
  });

  describe('fallback', () => {
    it('falls back to m7 for unrecognized qualities', () => {
      expect(parseForVoicing('Cxyz').quality).toBe('m7');
    });
  });

  describe('two-char root + quality combos', () => {
    it('correctly parses Dbmaj7#11', () => {
      expect(parseForVoicing('Dbmaj7#11')).toEqual({ root: 'Db', quality: 'maj7#11' });
    });

    it('correctly parses Abm7b5', () => {
      expect(parseForVoicing('Abm7b5')).toEqual({ root: 'Ab', quality: 'm7b5' });
    });

    it('correctly parses Bb7alt', () => {
      expect(parseForVoicing('Bb7alt')).toEqual({ root: 'Bb', quality: '7alt' });
    });
  });
});
