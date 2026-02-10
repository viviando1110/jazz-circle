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
   generateImprovisation — Full Solo Over Chord Progression
   ═══════════════════════════════════════════════════════════ */

/**
 * Generate a stylistically varied improvisation over a full chord progression.
 * Unlike generateLick (single chord) or generatePracticeMelody (mechanical),
 * this produces musically authentic solos with multi-chord voice leading.
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

  // Pick starting note from first chord
  const firstCMidis = chordToneMidis(chords[0].root, chords[0].quality, lowMidi, highMidi);
  const startIdx = firstCMidis.length > 0 ? startOffset % firstCMidis.length : 0;
  let prevMidi = firstCMidis.length > 0
    ? firstCMidis[startIdx]
    : Math.round((lowMidi + highMidi) / 2);
  let prevPrevMidi = prevMidi;

  for (let ci = 0; ci < chords.length; ci++) {
    const chord = chords[ci];
    const cMidis = chordToneMidis(chord.root, chord.quality, lowMidi, highMidi);
    const sMidis = scaleToneMidis(chord.root, chord.quality, lowMidi, highMidi);
    const beats = chord.durationBeats;

    // Voice-lead into new chord: start from closest chord tone
    if (ci > 0 && cMidis.length > 0) {
      prevMidi = closestTo(prevMidi, cMidis);
    }

    // Get next chord for approach-note targeting
    const nextChord = ci < chords.length - 1 ? chords[ci + 1] : null;
    const nextCMidis = nextChord
      ? chordToneMidis(nextChord.root, nextChord.quality, lowMidi, highMidi)
      : [];

    if (style === 'bebop') {
      improviseBebop(melody, beats, cMidis, sMidis, nextCMidis, nextChord, lowMidi, highMidi, ci, prevMidi, prevPrevMidi, (pm, ppm) => { prevMidi = pm; prevPrevMidi = ppm; });
    } else if (style === 'blues') {
      improviseBlues(melody, beats, cMidis, chord, nextCMidis, nextChord, lowMidi, highMidi, ci, prevMidi, prevPrevMidi, (pm, ppm) => { prevMidi = pm; prevPrevMidi = ppm; });
    } else {
      improviseModal(melody, beats, cMidis, sMidis, lowMidi, highMidi, ci, prevMidi, prevPrevMidi, (pm, ppm) => { prevMidi = pm; prevPrevMidi = ppm; });
    }
  }

  // Ensure final note resolves to a chord tone
  const lastChord = chords[chords.length - 1];
  const lastCMidis = chordToneMidis(lastChord.root, lastChord.quality, lowMidi, highMidi);
  ensureLastNoteIsChordTone(melody, lastCMidis, lastChord, lowMidi, highMidi);

  // Apply variation transform
  if (transform === 1) {
    // Octave shift: +12 if fits, else -12
    for (let i = 0; i < melody.length; i++) {
      const up = melody[i].midi + 12;
      melody[i] = { ...melody[i], midi: up <= highMidi + 12 ? up : melody[i].midi - 12 };
      melody[i].midi = clampToRange(melody[i].midi, lowMidi, highMidi);
    }
  } else if (transform === 2) {
    // Reverse contour: swap MIDI values, keep durations
    const midis = melody.map((n) => n.midi).reverse();
    for (let i = 0; i < melody.length; i++) {
      melody[i] = { ...melody[i], midi: clampToRange(midis[i], lowMidi, highMidi) };
    }
  }

  return melody;
}

type StateUpdater = (prevMidi: number, prevPrevMidi: number) => void;

/** Bebop improv: 8th-note runs with chromatic approach to next chord. */
function improviseBebop(
  melody: MelodyNote[], beats: number, cMidis: number[], sMidis: number[],
  nextCMidis: number[], nextChord: ChordInput | null,
  lowMidi: number, highMidi: number, chordIdx: number,
  prevMidi: number, prevPrevMidi: number, setState: StateUpdater,
): void {
  let elapsed = 0;
  while (elapsed < beats) {
    const remaining = beats - elapsed;
    const isLastBeat = remaining <= 1;

    if (isLastBeat && nextChord && nextCMidis.length > 0 && remaining >= 1) {
      // Approach next chord: two 8ths — scale tone + chromatic approach
      const nextTarget = closestTo(prevMidi, nextCMidis);
      const dir = getDirection(prevPrevMidi, prevMidi);
      const scaleTone = clampToRange(pickScaleToneStepwise(prevMidi, sMidis, dir), lowMidi, highMidi);
      melody.push({ midi: scaleTone, durationBeats: 0.5 });
      prevPrevMidi = prevMidi;
      prevMidi = scaleTone;

      const approach = clampToRange(nextTarget - 1, lowMidi, highMidi);
      melody.push({ midi: approach, durationBeats: 0.5 });
      prevPrevMidi = prevMidi;
      prevMidi = approach;
      elapsed += 1;
    } else if (remaining < 1) {
      // Fractional remainder — chord tone to fill
      const ct = closestTo(prevMidi, cMidis);
      melody.push({ midi: clampToRange(ct, lowMidi, highMidi), durationBeats: remaining });
      prevPrevMidi = prevMidi;
      prevMidi = clampToRange(ct, lowMidi, highMidi);
      elapsed += remaining;
    } else {
      // Descending 8th-note bebop run
      const beatPos = elapsed % 4;
      if (beatPos < 2) {
        // Downbeat area: chord tone 8th
        const below = cMidis.filter((m) => m <= prevMidi);
        const target = below.length > 0 ? below[below.length - 1] : closestTo(prevMidi, cMidis);
        const note = clampToRange(target, lowMidi, highMidi);
        melody.push({ midi: note, durationBeats: 0.5 });
        prevPrevMidi = prevMidi;
        prevMidi = note;
      } else {
        // Upbeat area: scale tone step descending
        const step = pickScaleToneStepwise(prevMidi, sMidis, -1);
        const note = clampToRange(step, lowMidi, highMidi);
        melody.push({ midi: note, durationBeats: 0.5 });
        prevPrevMidi = prevMidi;
        prevMidi = note;
      }
      elapsed += 0.5;
    }
  }
  setState(prevMidi, prevPrevMidi);
}

/** Blues improv: blues scale, quarter + 8th pairs, rests for phrasing. */
function improviseBlues(
  melody: MelodyNote[], beats: number, cMidis: number[],
  chord: ChordInput, nextCMidis: number[], nextChord: ChordInput | null,
  lowMidi: number, highMidi: number, chordIdx: number,
  prevMidi: number, prevPrevMidi: number, setState: StateUpdater,
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

  while (elapsed < beats) {
    const remaining = beats - elapsed;

    // Rest every ~4 bars (16 beats) for phrasing — insert 1-beat rest
    if (beatIdx > 0 && beatIdx % 14 === 0 && remaining > 2) {
      melody.push({ midi: 0, durationBeats: 1, velocity: 0 });
      elapsed += 1;
      beatIdx++;
      continue;
    }

    // Last beat: approach next chord root
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
    } else if (beatIdx % 3 === 1 && remaining >= 1) {
      // 8th-note pair
      const dir: 1 | -1 = beatIdx % 2 === 0 ? 1 : -1;
      const n1 = clampToRange(pickScaleToneStepwise(prevMidi, bMidis, dir), lowMidi, highMidi);
      melody.push({ midi: n1, durationBeats: 0.5 });
      const n2 = clampToRange(pickScaleToneStepwise(n1, bMidis, dir), lowMidi, highMidi);
      melody.push({ midi: n2, durationBeats: 0.5 });
      prevPrevMidi = prevMidi;
      prevMidi = n2;
      elapsed += 1;
    } else {
      // Quarter note
      const dir: 1 | -1 = beatIdx % 2 === 0 ? 1 : -1;
      const note = clampToRange(pickScaleToneStepwise(prevMidi, bMidis, dir), lowMidi, highMidi);
      melody.push({ midi: note, durationBeats: 1 });
      prevPrevMidi = prevMidi;
      prevMidi = note;
      elapsed += 1;
    }
    beatIdx++;
  }
  setState(prevMidi, prevPrevMidi);
}

/** Modal improv: wider intervals, more space, half notes and dotted quarters. */
function improviseModal(
  melody: MelodyNote[], beats: number, cMidis: number[], sMidis: number[],
  lowMidi: number, highMidi: number, chordIdx: number,
  prevMidi: number, prevPrevMidi: number, setState: StateUpdater,
): void {
  let elapsed = 0;
  let beatIdx = 0;
  // Ascending arc first half, descending second half
  const ascending = chordIdx % 2 === 0;

  while (elapsed < beats) {
    const remaining = beats - elapsed;
    const halfwayThrough = elapsed >= beats / 2;
    const dir: 1 | -1 = ascending ? (halfwayThrough ? -1 : 1) : (halfwayThrough ? 1 : -1);

    if (remaining <= 1) {
      // Final: resolve to chord tone
      const resolve = closestTo(prevMidi, cMidis);
      melody.push({ midi: clampToRange(resolve, lowMidi, highMidi), durationBeats: remaining });
      prevPrevMidi = prevMidi;
      prevMidi = clampToRange(resolve, lowMidi, highMidi);
      elapsed += remaining;
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
      const above = sMidis.filter((m) => (m - n1) * dir > 0);
      const n2 = above.length >= 2 ? above[1] : above.length === 1 ? above[0] : n1;
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
