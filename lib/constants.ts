// lib/constants.ts
// Central constants for music theory calculations.

import type { NoteName } from '@/lib/music/types';

/** All 12 chromatic notes using flats (matches NoteName type) */
export const CHROMATIC: NoteName[] = [
  'C', 'Db', 'D', 'Eb', 'E', 'F',
  'Gb', 'G', 'Ab', 'A', 'Bb', 'B',
];

/** Number of semitones in an octave */
export const SEMITONES_PER_OCTAVE = 12;

/** MIDI note number for C4 (middle C) */
export const MIDDLE_C_MIDI = 60;
