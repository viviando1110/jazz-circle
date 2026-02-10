// lib/music/voicings.ts
// Voice leading, rootless voicings, shell voicings, and drop voicings.
// Pure functions — no React, no DOM, no side effects.

import type { NoteName, ChordQuality, VoicingType } from '@/lib/music/types';
import { CHORD_INTERVALS, getChordVoicing } from '@/lib/music/chords';
import { noteToMidi, noteAt } from '@/lib/music/theory';
import { SEMITONES_PER_OCTAVE } from '@/lib/constants';

/** Default MIDI range: C3 (48) to C6 (84) */
const MIN_MIDI = 48;
const MAX_MIDI = 84;

/** Clamp a MIDI note into the allowed range by shifting octaves */
function clampToRange(midi: number, min = MIN_MIDI, max = MAX_MIDI): number {
  while (midi < min) midi += SEMITONES_PER_OCTAVE;
  while (midi > max) midi -= SEMITONES_PER_OCTAVE;
  return midi;
}

/**
 * For a given pitch class, find the closest MIDI note to a reference
 * that falls within [min, max].
 */
function closestInRange(pc: number, ref: number, min: number, max: number): number {
  // Place pitch class in same octave as ref
  const base = ref - (((ref % SEMITONES_PER_OCTAVE) + SEMITONES_PER_OCTAVE) % SEMITONES_PER_OCTAVE);
  const c0 = base + pc;
  const candidates = [c0 - SEMITONES_PER_OCTAVE, c0, c0 + SEMITONES_PER_OCTAVE];

  let best = c0;
  let bestDist = Infinity;
  for (const c of candidates) {
    if (c >= min && c <= max) {
      const d = Math.abs(c - ref);
      if (d < bestDist) { bestDist = d; best = c; }
    }
  }
  if (bestDist === Infinity) best = clampToRange(c0, min, max);
  return best;
}

/**
 * Find the voicing of a target chord closest to the current voicing,
 * minimizing total per-voice movement. Uses permutation search to find
 * the optimal assignment of target notes to voice slots.
 *
 * @param target - The chord to voice (root + quality)
 * @param currentMidi - The current voicing's MIDI notes
 * @param octaveRange - Optional [min, max] MIDI range (default [48, 84])
 * @returns MIDI note numbers for the closest voicing (same length as target chord)
 */
export function findClosestVoicing(
  target: { root: NoteName; quality: ChordQuality },
  currentMidi: number[],
  octaveRange: [number, number] = [MIN_MIDI, MAX_MIDI],
): number[] {
  const [min, max] = octaveRange;

  // If no current voicing, return root position in octave 4
  if (currentMidi.length === 0) {
    return getChordVoicing(target.root, target.quality, 4).midiNotes.map(
      (m) => clampToRange(m, min, max),
    );
  }

  const intervals = CHORD_INTERVALS[target.quality];
  const targetPitchClasses = intervals.map((sem) => {
    const note = noteAt(target.root, sem);
    return noteToMidi(note, 0) % SEMITONES_PER_OCTAVE;
  });

  const n = targetPitchClasses.length;
  const m = currentMidi.length;

  // When same number of voices, find the permutation that minimizes
  // total movement. For each target note i assigned to current slot perm[i],
  // place the target pitch class closest to currentMidi[perm[i]].
  if (n === m && n <= 6) {
    // Precompute: for each (target note, current slot) pair, the best placement & cost
    const placements: number[][] = [];
    const costs: number[][] = [];
    for (let ti = 0; ti < n; ti++) {
      placements.push([]);
      costs.push([]);
      for (let ci = 0; ci < m; ci++) {
        const p = closestInRange(targetPitchClasses[ti], currentMidi[ci], min, max);
        placements[ti].push(p);
        costs[ti].push(Math.abs(p - currentMidi[ci]));
      }
    }

    // Try all permutations (n! is at most 720 for n=6)
    let bestCost = Infinity;
    let bestPerm: number[] = Array.from({ length: n }, (_, i) => i);

    const search = (perm: number[], depth: number, used: boolean[], cost: number): void => {
      if (cost >= bestCost) return; // prune
      if (depth === n) {
        bestCost = cost;
        bestPerm = [...perm];
        return;
      }
      for (let ci = 0; ci < m; ci++) {
        if (used[ci]) continue;
        perm[depth] = ci;
        used[ci] = true;
        search(perm, depth + 1, used, cost + costs[depth][ci]);
        used[ci] = false;
      }
    };

    search(new Array(n) as number[], 0, new Array(m).fill(false) as boolean[], 0);

    // Build result aligned with current voice slots:
    // bestPerm[ti] = which current slot target note ti is assigned to.
    // We need result[currentSlot] = placement for the target note assigned there.
    const result = new Array<number>(n);
    for (let ti = 0; ti < n; ti++) {
      result[bestPerm[ti]] = placements[ti][bestPerm[ti]];
    }
    return result;
  }

  // Different lengths: place each target note near the centroid of current voicing
  const center = currentMidi.reduce((a, b) => a + b, 0) / m;
  return targetPitchClasses.map((pc) => closestInRange(pc, center, min, max));
}

/**
 * Generate a voice-led sequence of chords. The first chord is in root
 * position at octave 4; each subsequent chord uses findClosestVoicing.
 *
 * @param chords - Array of chords (root + quality)
 * @returns Array of MIDI note arrays, one per chord
 */
export function generateVoiceLeadingSequence(
  chords: { root: NoteName; quality: ChordQuality }[],
): number[][] {
  if (chords.length === 0) return [];

  const result: number[][] = [];
  // First chord: root position octave 4, clamped to range
  const first = getChordVoicing(chords[0].root, chords[0].quality, 4).midiNotes.map(
    (m) => clampToRange(m),
  );
  result.push(first);

  for (let i = 1; i < chords.length; i++) {
    result.push(findClosestVoicing(chords[i], result[i - 1]));
  }
  return result;
}

/**
 * Get a rootless voicing for a chord (jazz piano left-hand voicing).
 *
 * For 7th chords (4+ notes):
 *   Type A: 3rd, 5th, 7th, 9th (intervals[1], intervals[2], intervals[3], root+14)
 *   Type B: 7th, 9th, 3rd, 5th (intervals[3], root+14, intervals[1], intervals[2])
 *
 * For chords with fewer than 4 notes, returns all notes except root.
 *
 * @param root - Root note name
 * @param quality - Chord quality
 * @param type - 'A' or 'B' voicing
 * @returns MIDI note numbers
 */
export function getRootlessVoicing(
  root: NoteName,
  quality: ChordQuality,
  type: 'A' | 'B',
): number[] {
  const intervals = CHORD_INTERVALS[quality];
  const rootMidi = noteToMidi(root, 4);

  // For triads or chords with < 4 notes, return without root
  if (intervals.length < 4) {
    return intervals.slice(1).map((sem) => clampToRange(rootMidi + sem));
  }

  const ninth = 14; // 9th = root + 14 semitones

  if (type === 'A') {
    // Type A: 3rd, 5th, 7th, 9th
    return [
      intervals[1],
      intervals[2],
      intervals[3],
      ninth,
    ].map((sem) => clampToRange(rootMidi + sem));
  }

  // Type B: 7th, 9th, 3rd, 5th — voiced lower
  // Place 7th below root, then 9th, then 3rd and 5th above
  return [
    intervals[3] - SEMITONES_PER_OCTAVE, // 7th below root
    ninth - SEMITONES_PER_OCTAVE,          // 9th below (= 2nd)
    intervals[1],                          // 3rd
    intervals[2],                          // 5th
  ].map((sem) => clampToRange(rootMidi + sem));
}

/**
 * Get a shell voicing (root + 3rd + 7th only).
 * For chords with 3+ notes, uses the root (index 0), 3rd (index 1),
 * and 7th (last index for 4+ note chords, or index 2 for triads).
 *
 * @param root - Root note name
 * @param quality - Chord quality
 * @returns MIDI note numbers (exactly 3 for 7th chords)
 */
export function getShellVoicing(
  root: NoteName,
  quality: ChordQuality,
): number[] {
  const intervals = CHORD_INTERVALS[quality];
  const rootMidi = noteToMidi(root, 4);

  if (intervals.length <= 3) {
    // Triad or fewer: return all notes
    return intervals.map((sem) => clampToRange(rootMidi + sem));
  }

  // Root + 3rd + 7th (last interval before extensions for basic 7ths)
  const shell = [
    intervals[0], // root
    intervals[1], // 3rd (or sus4 depending on quality)
    intervals[3], // 7th
  ];

  return shell.map((sem) => clampToRange(rootMidi + sem));
}

/**
 * Get a drop voicing (drop-2 or drop-3) from close position.
 *
 * Drop-2: Take the 2nd-from-top note and drop it down an octave.
 * Drop-3: Take the 3rd-from-top note and drop it down an octave.
 *
 * @param root - Root note name
 * @param quality - Chord quality
 * @param type - 'drop2' or 'drop3'
 * @returns MIDI note numbers
 */
export function getDropVoicing(
  root: NoteName,
  quality: ChordQuality,
  type: 'drop2' | 'drop3',
): number[] {
  // Start with close-position voicing in octave 4
  const close = getChordVoicing(root, quality, 4).midiNotes;

  if (close.length < 2) return close.map((m) => clampToRange(m));

  const result = [...close];
  // Index from top: 2nd-from-top = length - 2, 3rd-from-top = length - 3
  const dropIndex = type === 'drop2'
    ? result.length - 2
    : Math.max(0, result.length - 3);

  result[dropIndex] -= SEMITONES_PER_OCTAVE;

  return result.map((m) => clampToRange(m));
}

/**
 * Get all available voicing types for a chord.
 *
 * @param root - Root note name
 * @param quality - Chord quality
 * @returns Record mapping each VoicingType to its MIDI notes
 */
export function getAllVoicings(
  root: NoteName,
  quality: ChordQuality,
): Record<VoicingType, number[]> {
  return {
    'root-position': getChordVoicing(root, quality, 4).midiNotes.map(
      (m) => clampToRange(m),
    ),
    'rootless-a': getRootlessVoicing(root, quality, 'A'),
    'rootless-b': getRootlessVoicing(root, quality, 'B'),
    'shell': getShellVoicing(root, quality),
    'drop2': getDropVoicing(root, quality, 'drop2'),
    'drop3': getDropVoicing(root, quality, 'drop3'),
  };
}
