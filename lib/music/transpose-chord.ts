// lib/music/transpose-chord.ts
// Transpose a chord symbol (e.g., "Cm7" -> "Am7") by a given number of semitones.

import type { NoteName } from '@/lib/music/types';
import { CHROMATIC } from '@/lib/constants';
import { transpose } from '@/lib/music/theory';

/**
 * Parse the root note from a chord symbol.
 * Handles 1 or 2 character roots: "C", "Bb", "Eb", "Gb", etc.
 * Returns [root, qualitySuffix].
 */
function parseChordSymbol(symbol: string): [NoteName, string] {
  // Try two-char root first (e.g., "Bb", "Eb", "Db", "Ab", "Gb")
  if (symbol.length >= 2) {
    const twoChar = symbol.slice(0, 2);
    if (CHROMATIC.includes(twoChar as NoteName)) {
      return [twoChar as NoteName, symbol.slice(2)];
    }
  }
  // Single-char root
  const oneChar = symbol.slice(0, 1);
  if (CHROMATIC.includes(oneChar as NoteName)) {
    return [oneChar as NoteName, symbol.slice(1)];
  }
  throw new Error(`Cannot parse chord symbol: ${symbol}`);
}

/**
 * Transpose a chord symbol by the given number of semitones.
 * E.g., transposeChordSymbol("Cm7", -3) => "Am7"
 */
export function transposeChordSymbol(symbol: string, semitones: number): string {
  const [root, quality] = parseChordSymbol(symbol);
  const newRoot = transpose(root, semitones);
  return `${newRoot}${quality}`;
}
