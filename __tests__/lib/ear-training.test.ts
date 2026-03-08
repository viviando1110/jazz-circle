import { describe, it, expect } from 'vitest';
import {
  generateChordQualityQuestion,
  generateKeyQuestion,
  QUIZ_QUALITIES,
} from '@/lib/music/ear-training';
import { KEYS_MAJOR } from '@/lib/music/keys';

describe('generateChordQualityQuestion', () => {
  it('returns a valid question with root, correctQuality, and 4 options', () => {
    const q = generateChordQualityQuestion(42);
    expect(q.root).toBeDefined();
    expect(q.correctQuality).toBeDefined();
    expect(q.options).toHaveLength(4);
  });

  it('includes all 4 QUIZ_QUALITIES in options', () => {
    const q = generateChordQualityQuestion(7);
    const sorted = [...q.options].sort();
    const expected = [...QUIZ_QUALITIES].sort();
    expect(sorted).toEqual(expected);
  });

  it('correctQuality is always in the options array', () => {
    for (let seed = 0; seed < 48; seed++) {
      const q = generateChordQualityQuestion(seed);
      expect(q.options).toContain(q.correctQuality);
    }
  });

  it('different seeds produce different questions', () => {
    const seeds = [0, 1, 12, 13];
    const questions = seeds.map((s) => generateChordQualityQuestion(s));

    // At least some should differ in root or quality
    const uniqueRoots = new Set(questions.map((q) => q.root));
    const uniqueQualities = new Set(questions.map((q) => q.correctQuality));
    expect(uniqueRoots.size + uniqueQualities.size).toBeGreaterThan(2);
  });
});

describe('generateKeyQuestion', () => {
  it('returns a valid question with correctKey, iiVI, and 4 options', () => {
    const q = generateKeyQuestion(42, KEYS_MAJOR);
    expect(q.correctKey).toBeDefined();
    expect(q.correctKey.quality).toBe('major');
    expect(q.iiVI).toHaveLength(3);
    expect(q.options).toHaveLength(4);
  });

  it('correctKey is always in the options array', () => {
    for (let seed = 0; seed < 24; seed++) {
      const q = generateKeyQuestion(seed, KEYS_MAJOR);
      const slugs = q.options.map((o) => o.slug);
      expect(slugs).toContain(q.correctKey.slug);
    }
  });

  it('iiVI has exactly 3 entries (ii, V, I)', () => {
    const q = generateKeyQuestion(5, KEYS_MAJOR);
    expect(q.iiVI).toHaveLength(3);
  });

  it('ii chord quality is m7, V chord quality is 7, I chord quality is maj7', () => {
    // Test across several keys
    for (let seed = 0; seed < 12; seed++) {
      const q = generateKeyQuestion(seed, KEYS_MAJOR);
      expect(q.iiVI[0].quality).toBe('m7');
      expect(q.iiVI[1].quality).toBe('7');
      expect(q.iiVI[2].quality).toBe('maj7');
    }
  });
});
