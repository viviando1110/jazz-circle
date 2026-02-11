// lib/music/melody.ts
// Deterministic melody and lick generation over chord changes.
// Pure TypeScript — no React, no DOM, no randomness.

import type {
  NoteName,
  ChordQuality,
  MelodyNote,
  MelodyOptions,
  LickStyle,
} from '@/lib/music/types';
import { getChordNotes } from '@/lib/music/chords';
import { getScaleSuggestions, getScaleNotes } from '@/lib/music/scales';
import { noteToMidi, midiToNote } from '@/lib/music/theory';
import { SEMITONES_PER_OCTAVE } from '@/lib/constants';

/* ═══════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════ */

interface ChordInput {
  root: NoteName;
  quality: ChordQuality;
  durationBeats: number;
}

interface LickChordInput {
  root: NoteName;
  quality: ChordQuality;
}

/* ═══════════════════════════════════════════════════════════
   Internal Helpers
   ═══════════════════════════════════════════════════════════ */

const DEFAULT_LOW = 60;  // C4
const DEFAULT_HIGH = 79; // G5

/** All MIDI values for a chord's tones within the given range. */
function chordToneMidis(
  root: NoteName,
  quality: ChordQuality,
  lowMidi: number,
  highMidi: number,
): number[] {
  const notes = getChordNotes(root, quality);
  const result: number[] = [];
  for (const note of notes) {
    const baseMidi = noteToMidi(note, 0);
    for (let octave = 0; octave <= 10; octave++) {
      const midi = baseMidi + octave * SEMITONES_PER_OCTAVE;
      if (midi >= lowMidi && midi <= highMidi) {
        result.push(midi);
      }
    }
  }
  result.sort((a, b) => a - b);
  return result;
}

/** All MIDI values for the primary scale over a chord quality within range. */
function scaleToneMidis(
  root: NoteName,
  quality: ChordQuality,
  lowMidi: number,
  highMidi: number,
): number[] {
  const suggestions = getScaleSuggestions(quality);
  const scaleName = suggestions.length > 0 ? suggestions[0].scale : 'Ionian';
  const notes = getScaleNotes(root, scaleName);
  const result: number[] = [];
  for (const note of notes) {
    const baseMidi = noteToMidi(note, 0);
    for (let octave = 0; octave <= 10; octave++) {
      const midi = baseMidi + octave * SEMITONES_PER_OCTAVE;
      if (midi >= lowMidi && midi <= highMidi) {
        result.push(midi);
      }
    }
  }
  result.sort((a, b) => a - b);
  return result;
}

/** Find the candidate closest to target. */
function closestTo(target: number, candidates: number[]): number {
  if (candidates.length === 0) return target;
  let best = candidates[0];
  let bestDist = Math.abs(target - best);
  for (let i = 1; i < candidates.length; i++) {
    const dist = Math.abs(target - candidates[i]);
    if (dist < bestDist) {
      best = candidates[i];
      bestDist = dist;
    }
  }
  return best;
}

/** Clamp a MIDI value within range. */
function clampToRange(midi: number, low: number, high: number): number {
  if (midi < low) return low;
  if (midi > high) return high;
  return midi;
}

/**
 * Pick a chord tone from candidates, preferring those whose note name
 * is in the preferred list, closest to prevMidi.
 */
function pickChordTone(
  prevMidi: number,
  chordMidis: number[],
  root: NoteName,
  quality: ChordQuality,
  preferredIntervalIndices: number[],
): number {
  if (chordMidis.length === 0) return prevMidi;
  const chordNotes = getChordNotes(root, quality);

  // Build preferred note names from interval indices
  const preferredNames: NoteName[] = preferredIntervalIndices
    .filter((i) => i < chordNotes.length)
    .map((i) => chordNotes[i]);

  // Filter candidates whose note name matches a preferred name
  const preferred = chordMidis.filter((m) => {
    const { note } = midiToNote(m);
    return preferredNames.includes(note);
  });

  const pool = preferred.length > 0 ? preferred : chordMidis;
  return closestTo(prevMidi, pool);
}

/**
 * Pick a scale tone that moves stepwise from prevMidi.
 * Prefer 1-2 semitone steps in the direction away from the previous leap.
 */
function pickScaleToneStepwise(
  prevMidi: number,
  scaleMidis: number[],
  direction: 1 | -1,
): number {
  if (scaleMidis.length === 0) return prevMidi;

  // Find scale tones 1-3 semitones away in the preferred direction
  const stepCandidates = scaleMidis.filter((m) => {
    const diff = (m - prevMidi) * direction;
    return diff >= 1 && diff <= 3;
  });

  if (stepCandidates.length > 0) {
    // Pick the closest in the preferred direction
    return closestTo(prevMidi + direction * 2, stepCandidates);
  }

  // Fallback: closest scale tone that isn't the same note
  const different = scaleMidis.filter((m) => m !== prevMidi);
  if (different.length > 0) return closestTo(prevMidi, different);
  return closestTo(prevMidi, scaleMidis);
}

/**
 * Determine direction after a note: if the previous interval was a leap (>4 semitones),
 * reverse direction. Otherwise continue ascending by default.
 */
function getDirection(prevPrev: number, prev: number): 1 | -1 {
  const interval = prev - prevPrev;
  if (Math.abs(interval) > 4) {
    return interval > 0 ? -1 : 1; // Reverse after leap
  }
  return interval >= 0 ? 1 : -1; // Continue direction
}

/* ═══════════════════════════════════════════════════════════
   generatePracticeMelody
   ═══════════════════════════════════════════════════════════ */

/**
 * Generate a practice melody over a chord progression.
 * Output is deterministic (no randomness).
 */
export function generatePracticeMelody(
  chords: ChordInput[],
  options: MelodyOptions,
): MelodyNote[] {
  const lowMidi = options.lowMidi ?? DEFAULT_LOW;
  const highMidi = options.highMidi ?? DEFAULT_HIGH;
  const complexity = options.complexity;
  const melody: MelodyNote[] = [];

  // Starting note: root of first chord in the middle of range
  let prevMidi = clampToRange(
    closestTo(
      Math.round((lowMidi + highMidi) / 2),
      chordToneMidis(chords[0].root, chords[0].quality, lowMidi, highMidi),
    ),
    lowMidi,
    highMidi,
  );
  let prevPrevMidi = prevMidi;

  for (let ci = 0; ci < chords.length; ci++) {
    const chord = chords[ci];
    const cMidis = chordToneMidis(chord.root, chord.quality, lowMidi, highMidi);
    const sMidis = scaleToneMidis(chord.root, chord.quality, lowMidi, highMidi);

    const beats = chord.durationBeats;

    if (complexity === 'simple') {
      // Quarter notes: chord, scale, chord, scale pattern
      for (let beat = 0; beat < beats; beat++) {
        let note: number;
        if (beat % 2 === 0) {
          // Chord tone — prefer root/5th on beat 0, guide tones (3rd/7th) on beat 2+
          const prefIndices = beat === 0 ? [0, 2] : [1, 3];
          note = pickChordTone(prevMidi, cMidis, chord.root, chord.quality, prefIndices);
        } else {
          // Scale tone — stepwise from previous
          const dir = getDirection(prevPrevMidi, prevMidi);
          note = pickScaleToneStepwise(prevMidi, sMidis, dir);
        }
        note = clampToRange(note, lowMidi, highMidi);
        melody.push({ midi: note, durationBeats: 1 });
        prevPrevMidi = prevMidi;
        prevMidi = note;
      }
    } else if (complexity === 'medium') {
      // Like simple, but beat 4 (last beat) uses chromatic approach to next chord root
      for (let beat = 0; beat < beats; beat++) {
        let note: number;
        const isLastBeat = beat === beats - 1;

        if (isLastBeat && ci < chords.length - 1) {
          // Approach note: half-step below next chord's root
          const nextChord = chords[ci + 1];
          const nextTarget = pickChordTone(
            prevMidi,
            chordToneMidis(nextChord.root, nextChord.quality, lowMidi, highMidi),
            nextChord.root,
            nextChord.quality,
            [0, 2],
          );
          note = clampToRange(nextTarget - 1, lowMidi, highMidi);
        } else if (beat % 2 === 0) {
          const prefIndices = beat === 0 ? [0, 2] : [1, 3];
          note = pickChordTone(prevMidi, cMidis, chord.root, chord.quality, prefIndices);
        } else {
          const dir = getDirection(prevPrevMidi, prevMidi);
          note = pickScaleToneStepwise(prevMidi, sMidis, dir);
        }
        note = clampToRange(note, lowMidi, highMidi);
        melody.push({ midi: note, durationBeats: 1 });
        prevPrevMidi = prevMidi;
        prevMidi = note;
      }
    } else {
      // Bebop complexity: chord/scale pattern with 8th note approach notes
      for (let beat = 0; beat < beats; beat++) {
        const isLastBeat = beat === beats - 1;

        if (isLastBeat && ci < chords.length - 1) {
          // Split last beat into two 8th notes: scale tone + chromatic approach
          const nextChord = chords[ci + 1];
          const nextTarget = pickChordTone(
            prevMidi,
            chordToneMidis(nextChord.root, nextChord.quality, lowMidi, highMidi),
            nextChord.root,
            nextChord.quality,
            [0, 2],
          );
          // First 8th: scale tone moving toward target
          const dir = getDirection(prevPrevMidi, prevMidi);
          const scaleTone = clampToRange(
            pickScaleToneStepwise(prevMidi, sMidis, dir),
            lowMidi,
            highMidi,
          );
          melody.push({ midi: scaleTone, durationBeats: 0.5 });
          prevPrevMidi = prevMidi;
          prevMidi = scaleTone;

          // Second 8th: chromatic approach (half-step below next target)
          const approach = clampToRange(nextTarget - 1, lowMidi, highMidi);
          melody.push({ midi: approach, durationBeats: 0.5 });
          prevPrevMidi = prevMidi;
          prevMidi = approach;
        } else {
          let note: number;
          if (beat % 2 === 0) {
            const prefIndices = beat === 0 ? [0, 2] : [1, 3];
            note = pickChordTone(prevMidi, cMidis, chord.root, chord.quality, prefIndices);
          } else {
            const dir = getDirection(prevPrevMidi, prevMidi);
            note = pickScaleToneStepwise(prevMidi, sMidis, dir);
          }
          note = clampToRange(note, lowMidi, highMidi);
          melody.push({ midi: note, durationBeats: 1 });
          prevPrevMidi = prevMidi;
          prevMidi = note;
        }
      }
    }
  }

  return melody;
}

/* ═══════════════════════════════════════════════════════════
   generateLick
   ═══════════════════════════════════════════════════════════ */

/**
 * Generate a short musical lick/phrase over a single chord.
 * Output is deterministic.
 */
export function generateLick(
  chord: LickChordInput,
  style: LickStyle,
  bars: 2 | 4,
): MelodyNote[] {
  const lowMidi = DEFAULT_LOW;
  const highMidi = DEFAULT_HIGH;
  const totalBeats = bars * 4;
  const cMidis = chordToneMidis(chord.root, chord.quality, lowMidi, highMidi);

  if (style === 'bebop') {
    return generateBebopLick(chord, totalBeats, cMidis, lowMidi, highMidi);
  } else if (style === 'blues') {
    return generateBluesLick(chord, totalBeats, cMidis, lowMidi, highMidi);
  } else {
    return generateModalLick(chord, totalBeats, cMidis, lowMidi, highMidi);
  }
}

/* ═══════════════════════════════════════════════════════════
   Bebop Lick Generator
   ═══════════════════════════════════════════════════════════ */

function generateBebopLick(
  chord: LickChordInput,
  totalBeats: number,
  cMidis: number[],
  lowMidi: number,
  highMidi: number,
): MelodyNote[] {
  const melody: MelodyNote[] = [];
  const sMidis = scaleToneMidis(chord.root, chord.quality, lowMidi, highMidi);

  // Start high, descend — classic bebop approach
  const startMidi = cMidis.length > 0 ? cMidis[cMidis.length - 1] : highMidi;
  let prevMidi = startMidi;
  let elapsed = 0;

  while (elapsed < totalBeats) {
    const remaining = totalBeats - elapsed;

    if (remaining <= 1) {
      // Final note: resolve to chord tone (root or 3rd)
      const resolve = pickChordTone(prevMidi, cMidis, chord.root, chord.quality, [0, 1]);
      melody.push({ midi: clampToRange(resolve, lowMidi, highMidi), durationBeats: remaining });
      elapsed += remaining;
    } else if (remaining <= 2) {
      // Approach + resolve: two 8th notes, then final quarter on chord tone
      const resolve = pickChordTone(prevMidi, cMidis, chord.root, chord.quality, [0, 1]);
      const resolveNote = clampToRange(resolve, lowMidi, highMidi);
      const approach = clampToRange(resolveNote - 1, lowMidi, highMidi);
      melody.push({ midi: approach, durationBeats: 0.5 });
      melody.push({ midi: resolveNote, durationBeats: remaining - 0.5 });
      elapsed += remaining;
      prevMidi = resolveNote;
    } else {
      // Bebop pattern: descending 8th note run with approach notes
      const beatPosition = elapsed % 4;

      if (beatPosition === 0 || beatPosition === 2) {
        // On downbeat: chord tone as 8th note
        const ct = pickChordTone(prevMidi, cMidis, chord.root, chord.quality, [3, 2, 1, 0]);
        // Prefer note below prevMidi for descending line
        const below = cMidis.filter((m) => m < prevMidi);
        const target = below.length > 0 ? below[below.length - 1] : ct;
        const note = clampToRange(target, lowMidi, highMidi);
        melody.push({ midi: note, durationBeats: 0.5 });
        elapsed += 0.5;
        prevMidi = note;
      } else {
        // Off-beat: scale tone step, 8th note
        const step = pickScaleToneStepwise(prevMidi, sMidis, -1);
        const note = clampToRange(step, lowMidi, highMidi);
        melody.push({ midi: note, durationBeats: 0.5 });
        elapsed += 0.5;
        prevMidi = note;
      }
    }
  }

  // Ensure last note is a chord tone
  ensureLastNoteIsChordTone(melody, cMidis, chord, lowMidi, highMidi);
  return melody;
}

/* ═══════════════════════════════════════════════════════════
   Blues Lick Generator
   ═══════════════════════════════════════════════════════════ */

function generateBluesLick(
  chord: LickChordInput,
  totalBeats: number,
  cMidis: number[],
  lowMidi: number,
  highMidi: number,
): MelodyNote[] {
  const melody: MelodyNote[] = [];
  const bluesNotes = getScaleNotes(chord.root, 'Blues');
  const bMidis: number[] = [];
  for (const note of bluesNotes) {
    const baseMidi = noteToMidi(note, 0);
    for (let octave = 0; octave <= 10; octave++) {
      const midi = baseMidi + octave * SEMITONES_PER_OCTAVE;
      if (midi >= lowMidi && midi <= highMidi) {
        bMidis.push(midi);
      }
    }
  }
  bMidis.sort((a, b) => a - b);

  // Start near middle of range
  let prevMidi = closestTo(Math.round((lowMidi + highMidi) / 2), bMidis);
  let elapsed = 0;
  let beatIndex = 0;

  while (elapsed < totalBeats) {
    const remaining = totalBeats - elapsed;

    if (remaining <= 1) {
      // Final: resolve to root
      const resolve = pickChordTone(prevMidi, cMidis, chord.root, chord.quality, [0]);
      melody.push({ midi: clampToRange(resolve, lowMidi, highMidi), durationBeats: remaining });
      elapsed += remaining;
    } else {
      // Alternate between quarter notes and 8th-note pairs
      const useEighths = beatIndex % 3 === 1;

      if (useEighths && remaining >= 1) {
        // Two 8th notes from blues scale
        const dir: 1 | -1 = beatIndex % 2 === 0 ? 1 : -1;
        const n1 = clampToRange(pickScaleToneStepwise(prevMidi, bMidis, dir), lowMidi, highMidi);
        melody.push({ midi: n1, durationBeats: 0.5 });
        const n2 = clampToRange(pickScaleToneStepwise(n1, bMidis, dir), lowMidi, highMidi);
        melody.push({ midi: n2, durationBeats: 0.5 });
        elapsed += 1;
        prevMidi = n2;
      } else {
        // Quarter note
        const dir: 1 | -1 = beatIndex % 2 === 0 ? 1 : -1;
        const note = clampToRange(pickScaleToneStepwise(prevMidi, bMidis, dir), lowMidi, highMidi);
        melody.push({ midi: note, durationBeats: 1 });
        elapsed += 1;
        prevMidi = note;
      }
      beatIndex++;
    }
  }

  ensureLastNoteIsChordTone(melody, cMidis, chord, lowMidi, highMidi);
  return melody;
}

/* ═══════════════════════════════════════════════════════════
   Modal Lick Generator
   ═══════════════════════════════════════════════════════════ */

function generateModalLick(
  chord: LickChordInput,
  totalBeats: number,
  cMidis: number[],
  lowMidi: number,
  highMidi: number,
): MelodyNote[] {
  const melody: MelodyNote[] = [];
  const sMidis = scaleToneMidis(chord.root, chord.quality, lowMidi, highMidi);

  // Start from a chord tone near the middle
  let prevMidi = closestTo(Math.round((lowMidi + highMidi) / 2), cMidis);
  let elapsed = 0;
  let beatIndex = 0;

  while (elapsed < totalBeats) {
    const remaining = totalBeats - elapsed;

    if (remaining <= 1) {
      // Final: resolve to chord tone
      const resolve = pickChordTone(prevMidi, cMidis, chord.root, chord.quality, [0, 2]);
      melody.push({ midi: clampToRange(resolve, lowMidi, highMidi), durationBeats: remaining });
      elapsed += remaining;
    } else {
      // Modal: wider intervals (3rds, 4ths), mostly quarter notes
      // Every 3rd beat group, use an 8th note pair for rhythmic variety
      const useEighths = beatIndex % 4 === 2 && remaining >= 1;

      if (useEighths) {
        // Ascending 3rd pattern as 8th notes
        const n1 = clampToRange(
          pickScaleToneStepwise(prevMidi, sMidis, 1),
          lowMidi,
          highMidi,
        );
        melody.push({ midi: n1, durationBeats: 0.5 });
        // Skip one scale tone for a 3rd
        const above = sMidis.filter((m) => m > n1);
        const n2 = above.length >= 2
          ? above[1]
          : above.length === 1
            ? above[0]
            : n1;
        melody.push({ midi: clampToRange(n2, lowMidi, highMidi), durationBeats: 0.5 });
        elapsed += 1;
        prevMidi = clampToRange(n2, lowMidi, highMidi);
      } else {
        // Quarter note: alternate between ascending 4ths and descending steps
        let note: number;
        if (beatIndex % 2 === 0) {
          // Ascending — try a 4th or 5th (wider interval)
          const wide = sMidis.filter((m) => {
            const diff = m - prevMidi;
            return diff >= 4 && diff <= 7;
          });
          note = wide.length > 0 ? wide[0] : pickScaleToneStepwise(prevMidi, sMidis, 1);
        } else {
          // Descending step
          note = pickScaleToneStepwise(prevMidi, sMidis, -1);
        }
        note = clampToRange(note, lowMidi, highMidi);
        melody.push({ midi: note, durationBeats: 1 });
        elapsed += 1;
        prevMidi = note;
      }
      beatIndex++;
    }
  }

  ensureLastNoteIsChordTone(melody, cMidis, chord, lowMidi, highMidi);
  return melody;
}

/* ═══════════════════════════════════════════════════════════
   Advanced Improvisation Helpers
   ═══════════════════════════════════════════════════════════ */

interface ImprovContext {
  chordIdx: number;
  totalChords: number;
  progress: number;          // 0.0–1.0 position in progression
  motif: number[];           // interval pattern (semitone offsets)
  beatsBeforeChord: number;  // total beats elapsed before this chord
  totalBeats: number;        // total beats in entire progression
}

type StateUpdater = (prevMidi: number, prevPrevMidi: number) => void;

/** 3rd and 7th of a chord (guide tones) as MIDI values in range. */
function guideToneMidis(
  root: NoteName, quality: ChordQuality, low: number, high: number,
): number[] {
  const notes = getChordNotes(root, quality);
  const guides = [notes[1], notes[3]].filter(Boolean);
  const result: number[] = [];
  for (const n of guides) {
    const base = noteToMidi(n, 0);
    for (let o = 0; o <= 10; o++) {
      const m = base + o * SEMITONES_PER_OCTAVE;
      if (m >= low && m <= high) result.push(m);
    }
  }
  return result.sort((a, b) => a - b);
}

/**
 * 8-note bebop scale. Adds chromatic passing tone so chord tones
 * naturally land on downbeats during continuous 8th-note runs.
 * Dominant: Mixolydian + natural 7. Major: Ionian + b6. Minor: Dorian + natural 7.
 */
function bebopScaleMidis(
  root: NoteName, quality: ChordQuality, low: number, high: number,
): number[] {
  // Dominant chords: use the built-in Bebop Dominant scale
  if (quality === '7' || quality === '9' || quality === '13') {
    const notes = getScaleNotes(root, 'Bebop Dominant');
    const result: number[] = [];
    for (const n of notes) {
      const base = noteToMidi(n, 0);
      for (let o = 0; o <= 10; o++) {
        const m = base + o * SEMITONES_PER_OCTAVE;
        if (m >= low && m <= high) result.push(m);
      }
    }
    return result.sort((a, b) => a - b);
  }

  // Other qualities: add a chromatic passing tone to primary scale
  const suggestions = getScaleSuggestions(quality);
  const scaleName = suggestions.length > 0 ? suggestions[0].scale : 'Ionian';
  const scaleNotes = getScaleNotes(root, scaleName);
  const rootMidi = noteToMidi(root, 0);
  const intervals = scaleNotes.map(n =>
    ((noteToMidi(n, 0) - rootMidi) % 12 + 12) % 12,
  );
  // Major: add b6 (8). Minor/other: add natural 7 (11).
  const passingTone = (quality === 'maj7' || quality === 'maj9') ? 8 : 11;
  if (!intervals.includes(passingTone)) intervals.push(passingTone);
  intervals.sort((a, b) => a - b);

  const result: number[] = [];
  for (const iv of intervals) {
    for (let o = 0; o <= 10; o++) {
      const m = rootMidi + iv + o * SEMITONES_PER_OCTAVE;
      if (m >= low && m <= high) result.push(m);
    }
  }
  return result.sort((a, b) => a - b);
}

/**
 * Enclosure: approach target from diatonic above + chromatic below.
 * Returns [upper, lower] MIDI values.
 */
function enclosureApproach(
  target: number, scaleMidis: number[], low: number, high: number,
): [number, number] {
  const above = scaleMidis.filter(m => m > target);
  const upper = above.length > 0 ? above[0] : clampToRange(target + 1, low, high);
  return [clampToRange(upper, low, high), clampToRange(target - 1, low, high)];
}

/** Deterministic motif patterns (semitone intervals from starting note). */
function pickMotif(seed: number): number[] {
  const patterns = [
    [0, 2, 4, 2],         // ascending step-leap-step
    [0, -2, -3, -5],      // descending scale fragment
    [0, 4, 2, 5],         // ascending with skip
    [0, -1, 3, 1],        // chromatic down then leap up
    [0, 5, 3, 7],         // ascending 3rds
    [0, -3, -1, -5],      // descending 3rds
    [0, 7, 5, 4],         // leap up then stepwise down
    [0, -2, 1, -4],       // zigzag descending
    [0, 3, 7, 5],         // arpeggio up then step down
  ];
  return patterns[seed % patterns.length];
}

/** Apply motif intervals from a starting note, snapping to nearest scale tone. */
function applyMotif(
  motif: number[], start: number, scaleMidis: number[], low: number, high: number,
): number[] {
  return motif.map(iv => clampToRange(closestTo(start + iv, scaleMidis), low, high));
}

/* ═══════════════════════════════════════════════════════════
   generateImprovisation — Full Solo Over Chord Progression
   ═══════════════════════════════════════════════════════════ */

/**
 * Generate a stylistically varied improvisation over a full chord progression.
 * Features: enclosures, guide-tone voice leading, bebop scales, motivic
 * development, phrase rests, rhythmic variety, and dynamic contour.
 *
 * Output is deterministic: same inputs → same output.
 */
export function generateImprovisation(
  chords: ChordInput[],
  style: LickStyle,
  variationSeed: number = 0,
): MelodyNote[] {
  if (chords.length === 0) return [];

  const lowMidi = DEFAULT_LOW;
  const highMidi = DEFAULT_HIGH;

  // Variation: seed selects transform and starting-tone offset
  const transform = variationSeed % 3;        // 0=base, 1=octave up, 2=reversed contour
  const startOffset = Math.floor(variationSeed / 3);

  const melody: MelodyNote[] = [];
  const motif = pickMotif(variationSeed);
  const totalProgressionBeats = chords.reduce((s, c) => s + c.durationBeats, 0);

  // Pick starting note from first chord
  const firstCMidis = chordToneMidis(chords[0].root, chords[0].quality, lowMidi, highMidi);
  const startIdx = firstCMidis.length > 0 ? startOffset % firstCMidis.length : 0;
  let prevMidi = firstCMidis.length > 0
    ? firstCMidis[startIdx]
    : Math.round((lowMidi + highMidi) / 2);
  let prevPrevMidi = prevMidi;
  let beatsElapsedSoFar = 0;

  for (let ci = 0; ci < chords.length; ci++) {
    const chord = chords[ci];
    const cMidis = chordToneMidis(chord.root, chord.quality, lowMidi, highMidi);
    const sMidis = scaleToneMidis(chord.root, chord.quality, lowMidi, highMidi);
    const beats = chord.durationBeats;

    // Voice-lead into new chord via guide tones (3rd/7th)
    if (ci > 0 && cMidis.length > 0) {
      const gMidis = guideToneMidis(chord.root, chord.quality, lowMidi, highMidi);
      prevMidi = gMidis.length > 0
        ? closestTo(prevMidi, gMidis)
        : closestTo(prevMidi, cMidis);
    }

    // Get next chord for approach-note targeting
    const nextChord = ci < chords.length - 1 ? chords[ci + 1] : null;
    const nextCMidis = nextChord
      ? chordToneMidis(nextChord.root, nextChord.quality, lowMidi, highMidi)
      : [];

    const ctx: ImprovContext = {
      chordIdx: ci,
      totalChords: chords.length,
      progress: chords.length > 1 ? ci / (chords.length - 1) : 0,
      motif,
      beatsBeforeChord: beatsElapsedSoFar,
      totalBeats: totalProgressionBeats,
    };

    const update: StateUpdater = (pm, ppm) => { prevMidi = pm; prevPrevMidi = ppm; };

    if (style === 'bebop') {
      improviseBebop(melody, beats, chord, cMidis, sMidis, nextCMidis, nextChord, lowMidi, highMidi, prevMidi, prevPrevMidi, update, ctx);
    } else if (style === 'blues') {
      improviseBlues(melody, beats, chord, cMidis, nextCMidis, nextChord, lowMidi, highMidi, prevMidi, prevPrevMidi, update, ctx);
    } else {
      improviseModal(melody, beats, chord, cMidis, sMidis, lowMidi, highMidi, prevMidi, prevPrevMidi, update, ctx);
    }

    beatsElapsedSoFar += beats;
  }

  // Ensure final note resolves to a chord tone
  const lastChord = chords[chords.length - 1];
  const lastCMidis = chordToneMidis(lastChord.root, lastChord.quality, lowMidi, highMidi);
  ensureLastNoteIsChordTone(melody, lastCMidis, lastChord, lowMidi, highMidi);

  // Apply variation transform (skip rests)
  if (transform === 1) {
    for (let i = 0; i < melody.length; i++) {
      if (melody[i].velocity === 0) continue;
      const up = melody[i].midi + 12;
      melody[i] = { ...melody[i], midi: up <= highMidi + 12 ? up : melody[i].midi - 12 };
      melody[i].midi = clampToRange(melody[i].midi, lowMidi, highMidi);
    }
  } else if (transform === 2) {
    const nonRest = melody.reduce<number[]>((a, n, i) => {
      if (n.velocity !== 0) a.push(i);
      return a;
    }, []);
    const reversed = nonRest.map(i => melody[i].midi).reverse();
    nonRest.forEach((idx, i) => {
      melody[idx] = { ...melody[idx], midi: clampToRange(reversed[i], lowMidi, highMidi) };
    });
  }

  return melody;
}

/* ═══════════════════════════════════════════════════════════
   Bebop Improvisation
   ═══════════════════════════════════════════════════════════ */

/**
 * Bebop improv: 8-note bebop scale runs, enclosures around guide tones,
 * phrase rests, chromatic approach to next chord, motivic statements.
 */
function improviseBebop(
  melody: MelodyNote[], beats: number, chord: ChordInput,
  cMidis: number[], sMidis: number[],
  nextCMidis: number[], nextChord: ChordInput | null,
  lowMidi: number, highMidi: number,
  prevMidi: number, prevPrevMidi: number,
  setState: StateUpdater, ctx: ImprovContext,
): void {
  // Use 8-note bebop scale for smoother downbeat placement
  const bsMidis = bebopScaleMidis(chord.root, chord.quality, lowMidi, highMidi);
  const runMidis = bsMidis.length > 0 ? bsMidis : sMidis;

  // Guide tones of next chord for approach targeting
  const nextGuideMidis = nextChord
    ? guideToneMidis(nextChord.root, nextChord.quality, lowMidi, highMidi)
    : [];

  let elapsed = 0;
  const globalBeat = ctx.beatsBeforeChord;

  // Motif: play at start of every 3rd chord during opening/development
  const shouldMotif = ctx.chordIdx % 3 === 0 && ctx.progress < 0.7 && beats >= 2;
  if (shouldMotif && ctx.motif.length > 0) {
    const notes = applyMotif(ctx.motif, prevMidi, runMidis, lowMidi, highMidi);
    for (const midi of notes) {
      if (elapsed + 0.5 > beats) break;
      melody.push({ midi, durationBeats: 0.5 });
      prevPrevMidi = prevMidi;
      prevMidi = midi;
      elapsed += 0.5;
    }
  }

  while (elapsed < beats) {
    const remaining = beats - elapsed;
    const progBeat = globalBeat + elapsed;

    // Phrase rest: ~every 10 beats, 1-beat rest (not at start/end of phrase)
    if (elapsed > 1 && remaining > 2 &&
        Math.floor(progBeat) > 2 && Math.floor(progBeat) % 10 === 9) {
      melody.push({ midi: 0, durationBeats: 1, velocity: 0 });
      elapsed += 1;
      continue;
    }

    // Enclosure: at the midpoint of each chord (if room), approach a guide tone
    const midBeat = Math.floor(beats / 2);
    if (Math.floor(elapsed) === midBeat && elapsed === Math.floor(elapsed) &&
        remaining >= 2 && midBeat > 0 && beats >= 4) {
      const target = pickChordTone(prevMidi, cMidis, chord.root, chord.quality, [1, 3]);
      const [upper, lower] = enclosureApproach(target, runMidis, lowMidi, highMidi);
      melody.push({ midi: upper, durationBeats: 0.5 });
      melody.push({ midi: lower, durationBeats: 0.5 });
      melody.push({ midi: clampToRange(target, lowMidi, highMidi), durationBeats: 0.5 });
      prevPrevMidi = lower;
      prevMidi = clampToRange(target, lowMidi, highMidi);
      elapsed += 1.5;
      continue;
    }

    // Last beat: approach next chord's guide tone
    if (remaining <= 1 && nextChord && nextCMidis.length > 0 && remaining >= 0.5) {
      const nextTarget = nextGuideMidis.length > 0
        ? closestTo(prevMidi, nextGuideMidis)
        : closestTo(prevMidi, nextCMidis);
      if (remaining >= 1) {
        const dir = getDirection(prevPrevMidi, prevMidi);
        const scaleTone = clampToRange(pickScaleToneStepwise(prevMidi, runMidis, dir), lowMidi, highMidi);
        melody.push({ midi: scaleTone, durationBeats: 0.5 });
        prevPrevMidi = prevMidi;
        prevMidi = scaleTone;
        const approach = clampToRange(nextTarget - 1, lowMidi, highMidi);
        melody.push({ midi: approach, durationBeats: remaining - 0.5 });
        prevPrevMidi = prevMidi;
        prevMidi = approach;
        elapsed += remaining;
      } else {
        const ct = closestTo(prevMidi, cMidis);
        melody.push({ midi: clampToRange(ct, lowMidi, highMidi), durationBeats: remaining });
        prevPrevMidi = prevMidi;
        prevMidi = clampToRange(ct, lowMidi, highMidi);
        elapsed += remaining;
      }
    } else if (remaining < 0.5) {
      const ct = closestTo(prevMidi, cMidis);
      melody.push({ midi: clampToRange(ct, lowMidi, highMidi), durationBeats: remaining });
      prevPrevMidi = prevMidi;
      prevMidi = clampToRange(ct, lowMidi, highMidi);
      elapsed += remaining;
    } else {
      // Bebop run with rhythmic variety
      const eighthIdx = Math.round(elapsed * 2);

      // Rhythmic break: occasional quarter note (~every 7 8ths, during development)
      if (eighthIdx % 7 === 5 && remaining >= 1 && ctx.progress > 0.15) {
        const ct = pickChordTone(prevMidi, cMidis, chord.root, chord.quality, [1, 3, 0, 2]);
        const note = clampToRange(ct, lowMidi, highMidi);
        melody.push({ midi: note, durationBeats: 1 });
        prevPrevMidi = prevMidi;
        prevMidi = note;
        elapsed += 1;
      } else {
        // 8th-note run using bebop scale
        const beatPos = elapsed % 4;
        if (beatPos < 2) {
          // Downbeat area: descending chord/bebop-scale tone
          const below = runMidis.filter(m => m <= prevMidi && m !== prevMidi);
          const target = below.length > 0 ? below[below.length - 1] : closestTo(prevMidi, cMidis);
          const note = clampToRange(target, lowMidi, highMidi);
          melody.push({ midi: note, durationBeats: 0.5 });
          prevPrevMidi = prevMidi;
          prevMidi = note;
        } else {
          // Upbeat: bebop scale step descending
          const step = pickScaleToneStepwise(prevMidi, runMidis, -1);
          const note = clampToRange(step, lowMidi, highMidi);
          melody.push({ midi: note, durationBeats: 0.5 });
          prevPrevMidi = prevMidi;
          prevMidi = note;
        }
        elapsed += 0.5;
      }
    }
  }
  setState(prevMidi, prevPrevMidi);
}

/* ═══════════════════════════════════════════════════════════
   Blues Improvisation
   ═══════════════════════════════════════════════════════════ */

/**
 * Blues improv: blues scale, ghost notes, call-and-response phrasing,
 * strategic rests, emphasis on blue notes (b3, b5, b7).
 */
function improviseBlues(
  melody: MelodyNote[], beats: number, chord: ChordInput,
  cMidis: number[],
  nextCMidis: number[], nextChord: ChordInput | null,
  lowMidi: number, highMidi: number,
  prevMidi: number, prevPrevMidi: number,
  setState: StateUpdater, ctx: ImprovContext,
): void {
  const bluesNotes = getScaleNotes(chord.root, 'Blues');
  const bMidis: number[] = [];
  for (const note of bluesNotes) {
    const baseMidi = noteToMidi(note, 0);
    for (let octave = 0; octave <= 10; octave++) {
      const midi = baseMidi + octave * SEMITONES_PER_OCTAVE;
      if (midi >= lowMidi && midi <= highMidi) bMidis.push(midi);
    }
  }
  bMidis.sort((a, b) => a - b);

  let elapsed = 0;
  let beatIdx = 0;
  const globalBeat = ctx.beatsBeforeChord;

  // Call-response: record first 2 beats as "call", vary for "response"
  const callNotes: number[] = [];
  const callPhaseBeats = Math.min(beats / 2, 2);

  while (elapsed < beats) {
    const remaining = beats - elapsed;
    const progBeat = globalBeat + elapsed;
    const inCallPhase = elapsed < callPhaseBeats;
    const inResponsePhase = elapsed >= callPhaseBeats && elapsed < callPhaseBeats * 2 && callNotes.length > 0;

    // Phrase rest: every ~8 beats for breathing
    if (beatIdx > 0 && remaining > 2 &&
        Math.floor(progBeat) > 3 && Math.floor(progBeat) % 8 === 7) {
      melody.push({ midi: 0, durationBeats: 1, velocity: 0 });
      elapsed += 1;
      beatIdx++;
      continue;
    }

    // Last beat: chromatic approach to next chord
    if (remaining <= 1 && nextChord && nextCMidis.length > 0) {
      const nextRoot = closestTo(prevMidi, nextCMidis);
      const approach = clampToRange(nextRoot - 1, lowMidi, highMidi);
      melody.push({ midi: approach, durationBeats: remaining });
      prevPrevMidi = prevMidi;
      prevMidi = approach;
      elapsed += remaining;
    } else if (remaining < 1) {
      const ct = closestTo(prevMidi, bMidis.length > 0 ? bMidis : cMidis);
      melody.push({ midi: clampToRange(ct, lowMidi, highMidi), durationBeats: remaining });
      prevPrevMidi = prevMidi;
      prevMidi = clampToRange(ct, lowMidi, highMidi);
      elapsed += remaining;
    } else if (inResponsePhase && callNotes.length > 0) {
      // Response: replay call motif transposed up/down a step
      const responseIdx = Math.floor(elapsed - callPhaseBeats);
      if (responseIdx < callNotes.length) {
        const shifted = callNotes[responseIdx] + (ctx.chordIdx % 2 === 0 ? 2 : -2);
        const note = clampToRange(closestTo(shifted, bMidis), lowMidi, highMidi);
        // Ghost note on upbeats during response
        const vel = beatIdx % 2 === 1 ? 0.4 : undefined;
        melody.push({ midi: note, durationBeats: 0.5, ...(vel !== undefined ? { velocity: vel } : {}) });
        prevPrevMidi = prevMidi;
        prevMidi = note;
        elapsed += 0.5;
      } else {
        // Fill rest of response with blues scale step
        const dir: 1 | -1 = beatIdx % 2 === 0 ? 1 : -1;
        const note = clampToRange(pickScaleToneStepwise(prevMidi, bMidis, dir), lowMidi, highMidi);
        melody.push({ midi: note, durationBeats: 1 });
        prevPrevMidi = prevMidi;
        prevMidi = note;
        elapsed += 1;
      }
    } else if (beatIdx % 5 === 4 && remaining >= 1.5) {
      // Held blue note: dotted quarter for emphasis
      const dir: 1 | -1 = beatIdx % 2 === 0 ? 1 : -1;
      const note = clampToRange(pickScaleToneStepwise(prevMidi, bMidis, dir), lowMidi, highMidi);
      melody.push({ midi: note, durationBeats: 1.5 });
      if (inCallPhase) callNotes.push(note);
      prevPrevMidi = prevMidi;
      prevMidi = note;
      elapsed += 1.5;
    } else if (beatIdx % 3 === 1 && remaining >= 1) {
      // 8th-note pair with ghost note on upbeat
      const dir: 1 | -1 = beatIdx % 2 === 0 ? 1 : -1;
      const n1 = clampToRange(pickScaleToneStepwise(prevMidi, bMidis, dir), lowMidi, highMidi);
      melody.push({ midi: n1, durationBeats: 0.5 });
      if (inCallPhase) callNotes.push(n1);
      const n2 = clampToRange(pickScaleToneStepwise(n1, bMidis, dir), lowMidi, highMidi);
      melody.push({ midi: n2, durationBeats: 0.5, velocity: 0.4 }); // ghost note
      if (inCallPhase) callNotes.push(n2);
      prevPrevMidi = prevMidi;
      prevMidi = n2;
      elapsed += 1;
    } else {
      // Quarter note
      const dir: 1 | -1 = beatIdx % 2 === 0 ? 1 : -1;
      const note = clampToRange(pickScaleToneStepwise(prevMidi, bMidis, dir), lowMidi, highMidi);
      melody.push({ midi: note, durationBeats: 1 });
      if (inCallPhase) callNotes.push(note);
      prevPrevMidi = prevMidi;
      prevMidi = note;
      elapsed += 1;
    }
    beatIdx++;
  }
  setState(prevMidi, prevPrevMidi);
}

/* ═══════════════════════════════════════════════════════════
   Modal Improvisation
   ═══════════════════════════════════════════════════════════ */

/**
 * Modal improv: wide intervals (4ths/5ths), pedal tones, generous space
 * (rests, half notes, dotted quarters), arc-shaped contour per chord.
 */
function improviseModal(
  melody: MelodyNote[], beats: number, chord: ChordInput,
  cMidis: number[], sMidis: number[],
  lowMidi: number, highMidi: number,
  prevMidi: number, prevPrevMidi: number,
  setState: StateUpdater, ctx: ImprovContext,
): void {
  let elapsed = 0;
  let beatIdx = 0;
  const ascending = ctx.chordIdx % 2 === 0;
  const globalBeat = ctx.beatsBeforeChord;

  // Pedal tone: root of chord, used for pedal-point patterns
  const pedalMidi = closestTo(Math.round((lowMidi + highMidi) / 2), cMidis);

  // Motif statement at start of progression
  if (ctx.chordIdx === 0 && ctx.motif.length > 0 && beats >= 2) {
    const notes = applyMotif(ctx.motif, prevMidi, sMidis, lowMidi, highMidi);
    for (const midi of notes) {
      if (elapsed + 1 > beats) break;
      melody.push({ midi, durationBeats: 1 }); // quarter notes for modal space
      prevPrevMidi = prevMidi;
      prevMidi = midi;
      elapsed += 1;
    }
  }

  while (elapsed < beats) {
    const remaining = beats - elapsed;
    const halfwayThrough = elapsed >= beats / 2;
    const dir: 1 | -1 = ascending ? (halfwayThrough ? -1 : 1) : (halfwayThrough ? 1 : -1);

    // Phrase rest: every ~12 beats, 2-beat rest (modal needs more space)
    if (elapsed > 0 && remaining > 3 &&
        Math.floor(globalBeat + elapsed) > 4 &&
        Math.floor(globalBeat + elapsed) % 12 === 11) {
      melody.push({ midi: 0, durationBeats: 2, velocity: 0 });
      elapsed += 2;
      beatIdx++;
      continue;
    }

    if (remaining <= 1) {
      // Final: resolve to chord tone
      const resolve = closestTo(prevMidi, cMidis);
      melody.push({ midi: clampToRange(resolve, lowMidi, highMidi), durationBeats: remaining });
      prevPrevMidi = prevMidi;
      prevMidi = clampToRange(resolve, lowMidi, highMidi);
      elapsed += remaining;
    } else if (beatIdx % 7 === 5 && remaining >= 2) {
      // Pedal point: alternate between pedal and a moving voice
      const movingNote = pickScaleToneStepwise(prevMidi, sMidis, dir);
      melody.push({ midi: clampToRange(pedalMidi, lowMidi, highMidi), durationBeats: 1 });
      melody.push({ midi: clampToRange(movingNote, lowMidi, highMidi), durationBeats: 1 });
      prevPrevMidi = clampToRange(pedalMidi, lowMidi, highMidi);
      prevMidi = clampToRange(movingNote, lowMidi, highMidi);
      elapsed += 2;
    } else if (beatIdx % 5 === 3 && remaining >= 2) {
      // Half note for space
      const wide = sMidis.filter((m) => {
        const diff = (m - prevMidi) * dir;
        return diff >= 4 && diff <= 7;
      });
      const note = wide.length > 0 ? wide[0] : pickScaleToneStepwise(prevMidi, sMidis, dir);
      const clamped = clampToRange(note, lowMidi, highMidi);
      melody.push({ midi: clamped, durationBeats: 2 });
      prevPrevMidi = prevMidi;
      prevMidi = clamped;
      elapsed += 2;
    } else if (beatIdx % 4 === 2 && remaining >= 1.5) {
      // Dotted quarter for rhythmic interest
      const step = pickScaleToneStepwise(prevMidi, sMidis, dir);
      const clamped = clampToRange(step, lowMidi, highMidi);
      melody.push({ midi: clamped, durationBeats: 1.5 });
      prevPrevMidi = prevMidi;
      prevMidi = clamped;
      elapsed += 1.5;
    } else if (beatIdx % 4 === 2 && remaining >= 1) {
      // 8th-note pair ascending 3rds
      const n1 = clampToRange(pickScaleToneStepwise(prevMidi, sMidis, dir), lowMidi, highMidi);
      melody.push({ midi: n1, durationBeats: 0.5 });
      const candidates = sMidis.filter((m) => (m - n1) * dir > 0);
      const n2 = candidates.length >= 2 ? candidates[1] : candidates.length === 1 ? candidates[0] : n1;
      melody.push({ midi: clampToRange(n2, lowMidi, highMidi), durationBeats: 0.5 });
      prevPrevMidi = prevMidi;
      prevMidi = clampToRange(n2, lowMidi, highMidi);
      elapsed += 1;
    } else {
      // Quarter note with wider intervals
      let note: number;
      const wide = sMidis.filter((m) => {
        const diff = (m - prevMidi) * dir;
        return diff >= 4 && diff <= 7;
      });
      note = wide.length > 0 ? wide[0] : pickScaleToneStepwise(prevMidi, sMidis, dir);
      note = clampToRange(note, lowMidi, highMidi);
      melody.push({ midi: note, durationBeats: 1 });
      prevPrevMidi = prevMidi;
      prevMidi = note;
      elapsed += 1;
    }
    beatIdx++;
  }
  setState(prevMidi, prevPrevMidi);
}

/* ═══════════════════════════════════════════════════════════
   Shared Utilities
   ═══════════════════════════════════════════════════════════ */

/** Ensure the last note of a lick is a chord tone. */
function ensureLastNoteIsChordTone(
  melody: MelodyNote[],
  cMidis: number[],
  chord: LickChordInput,
  lowMidi: number,
  highMidi: number,
): void {
  if (melody.length === 0 || cMidis.length === 0) return;

  const last = melody[melody.length - 1];
  const isChordTone = cMidis.includes(last.midi);
  if (!isChordTone) {
    const resolve = closestTo(last.midi, cMidis);
    melody[melody.length - 1] = {
      ...last,
      midi: clampToRange(resolve, lowMidi, highMidi),
    };
  }
}
