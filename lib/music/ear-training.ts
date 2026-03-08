// lib/music/ear-training.ts
// Pure functions for generating ear training quiz questions.
// No React, no DOM, no side effects — 100% testable.

import type { NoteName, ChordQuality, MusicalKey } from '@/lib/music/types';
import { CHROMATIC } from '@/lib/constants';
import { getDiatonicChords } from '@/lib/music/chords';

/** Chord qualities used in the quiz */
export const QUIZ_QUALITIES: ChordQuality[] = ['maj7', 'm7', '7', 'm7b5'];

/** Display labels for quiz chord qualities */
export const QUALITY_LABELS: Record<string, string> = {
  maj7: 'Major 7',
  m7: 'Minor 7',
  '7': 'Dominant 7',
  m7b5: 'Half-dim 7',
};

export interface ChordQualityQuestion {
  root: NoteName;
  correctQuality: ChordQuality;
  /** 4 answer options (shuffled, includes correct) */
  options: ChordQuality[];
}

export interface KeyIdentificationQuestion {
  correctKey: MusicalKey;
  /** The ii, V, I chords for this key (for playback) */
  iiVI: { root: NoteName; quality: ChordQuality }[];
  /** 4 key options (shuffled, includes correct) */
  options: MusicalKey[];
}

/**
 * Simple seeded shuffle (Fisher-Yates with seed-based pseudo-random).
 * Not cryptographically secure — just deterministic for testing.
 */
export function shuffleWithSeed<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  let s = Math.abs(seed) + 1;
  for (let i = result.length - 1; i > 0; i--) {
    // Simple LCG-style pseudo-random
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Generate a chord quality question.
 * Pass Date.now() or an incrementing counter as seed.
 */
export function generateChordQualityQuestion(seed: number): ChordQualityQuestion {
  const root = CHROMATIC[Math.abs(seed) % 12];
  const correctQuality = QUIZ_QUALITIES[Math.floor(Math.abs(seed) / 12) % 4];
  const options = shuffleWithSeed([...QUIZ_QUALITIES], seed);

  return { root, correctQuality, options };
}

/**
 * Generate a key identification question.
 * Picks a major key, builds ii-V-I from its diatonic chords, creates 4 key options.
 */
export function generateKeyQuestion(
  seed: number,
  allMajorKeys: MusicalKey[],
): KeyIdentificationQuestion {
  const correctKey = allMajorKeys[Math.abs(seed) % allMajorKeys.length];

  // Build ii-V-I from diatonic chords (degrees 2, 5, 1 → indices 1, 4, 0)
  const diatonic = getDiatonicChords(correctKey);
  const iiVI = [
    { root: diatonic[1].root, quality: diatonic[1].quality },
    { root: diatonic[4].root, quality: diatonic[4].quality },
    { root: diatonic[0].root, quality: diatonic[0].quality },
  ];

  // Pick 3 wrong keys (different from correct)
  const wrongKeys = allMajorKeys.filter((k) => k.slug !== correctKey.slug);
  const shuffledWrong = shuffleWithSeed(wrongKeys, seed);
  const options = shuffleWithSeed(
    [correctKey, shuffledWrong[0], shuffledWrong[1], shuffledWrong[2]],
    seed + 7,
  );

  return { correctKey, iiVI, options };
}
