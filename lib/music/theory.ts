// lib/music/theory.ts
// Core note-level music theory — pure functions, no side effects.

import type { NoteName } from '@/lib/music/types';
import { CHROMATIC, SEMITONES_PER_OCTAVE, MIDDLE_C_MIDI } from '@/lib/constants';

/**
 * Get the index of a note in the chromatic scale (0-11).
 * Throws if the note is not a valid NoteName.
 */
export function noteIndex(note: NoteName): number {
  const idx = CHROMATIC.indexOf(note);
  if (idx === -1) {
    throw new Error(`Invalid note: ${note}`);
  }
  return idx;
}

/**
 * Get the note N semitones above a given root.
 * Wraps around the chromatic scale.
 */
export function noteAt(root: NoteName, semitones: number): NoteName {
  const rootIdx = noteIndex(root);
  // Ensure positive modulo for negative semitones
  const idx = ((rootIdx + semitones) % SEMITONES_PER_OCTAVE + SEMITONES_PER_OCTAVE) % SEMITONES_PER_OCTAVE;
  return CHROMATIC[idx];
}

/**
 * Transpose a note by a given number of semitones.
 * Alias for noteAt — reads more naturally in transposition contexts.
 */
export function transpose(note: NoteName, semitones: number): NoteName {
  return noteAt(note, semitones);
}

/**
 * Get the interval (in semitones) between two notes.
 * Always returns a non-negative value (ascending interval, 0-11).
 */
export function getInterval(a: NoteName, b: NoteName): number {
  const diff = noteIndex(b) - noteIndex(a);
  return ((diff % SEMITONES_PER_OCTAVE) + SEMITONES_PER_OCTAVE) % SEMITONES_PER_OCTAVE;
}

/**
 * Convert a note name + octave to a MIDI note number.
 * C4 = 60 (middle C).
 */
export function noteToMidi(note: NoteName, octave: number): number {
  return MIDDLE_C_MIDI + (octave - 4) * SEMITONES_PER_OCTAVE + noteIndex(note);
}

/**
 * Convert a MIDI note number to a note name + octave.
 */
export function midiToNote(midi: number): { note: NoteName; octave: number } {
  const noteIdx = ((midi % SEMITONES_PER_OCTAVE) + SEMITONES_PER_OCTAVE) % SEMITONES_PER_OCTAVE;
  const octave = Math.floor(midi / SEMITONES_PER_OCTAVE) - 1;
  return { note: CHROMATIC[noteIdx], octave };
}
