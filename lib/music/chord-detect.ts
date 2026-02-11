// lib/music/chord-detect.ts
// Detects chord quality from a set of MIDI note numbers.

import type { NoteName, ChordQuality, DetectedChord } from '@/lib/music/types';
import { CHORD_INTERVALS } from '@/lib/music/chords';

const NOTE_NAMES: NoteName[] = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

/**
 * Detect a chord from MIDI note numbers.
 * Returns null if fewer than 3 notes or no match found.
 * Prefers the bass (lowest) note as root when ambiguous.
 */
export function detectChord(midiNotes: number[]): DetectedChord | null {
  if (midiNotes.length < 3) return null;

  const sorted = [...midiNotes].sort((a, b) => a - b);
  const bassNote = sorted[0] % 12;

  // Get unique pitch classes
  const pitchClasses = Array.from(new Set(sorted.map((n) => n % 12)));
  if (pitchClasses.length < 3) return null;

  // Try each pitch class as potential root, preferring bass note
  const candidates: { root: number; quality: ChordQuality; inversion: number }[] = [];

  for (const root of pitchClasses) {
    // Calculate intervals relative to this root
    const intervals = pitchClasses
      .map((pc) => (pc - root + 12) % 12)
      .sort((a, b) => a - b);

    // Match against known chord intervals
    for (const [quality, chordIntervals] of Object.entries(CHORD_INTERVALS)) {
      // Get unique intervals from chord definition (some have duplicates at octave)
      const normalizedChordIntervals = Array.from(new Set(chordIntervals.map((i) => i % 12))).sort((a, b) => a - b);

      // Check if our pitch classes match
      if (arraysEqual(intervals, normalizedChordIntervals)) {
        const inversion = root === bassNote ? 0 : pitchClasses.indexOf(bassNote);
        candidates.push({ root, quality: quality as ChordQuality, inversion });
      }
    }
  }

  if (candidates.length === 0) return null;

  // Prefer: bass note as root > simpler qualities > root position
  const preferred = candidates.sort((a, b) => {
    // Prefer bass note as root
    if (a.root === bassNote && b.root !== bassNote) return -1;
    if (b.root === bassNote && a.root !== bassNote) return 1;
    // Prefer root position
    if (a.inversion === 0 && b.inversion !== 0) return -1;
    if (b.inversion === 0 && a.inversion !== 0) return 1;
    // Prefer simpler chords (fewer intervals)
    const aLen = CHORD_INTERVALS[a.quality].length;
    const bLen = CHORD_INTERVALS[b.quality].length;
    return aLen - bLen;
  })[0];

  const rootName = NOTE_NAMES[preferred.root];
  const notes = pitchClasses.map((pc) => NOTE_NAMES[pc]);

  return {
    root: rootName,
    quality: preferred.quality,
    inversion: preferred.inversion,
    notes,
  };
}

function arraysEqual(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
