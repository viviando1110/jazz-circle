// lib/music/scales.ts
// Scale definitions, chord-scale relationships, and scale note generation.

import type { NoteName, ChordQuality, ScaleName, Scale, ScaleSuggestion } from '@/lib/music/types';
import { noteAt } from '@/lib/music/theory';

/* ═══════════════════════════════════════════════════════════
   Scale Definitions
   ═══════════════════════════════════════════════════════════ */

export const SCALES: Record<ScaleName, Scale> = {
  // Modes of the major scale
  Ionian: {
    name: 'Ionian',
    intervals: [0, 2, 4, 5, 7, 9, 11],
    worksOver: ['maj7', 'maj9', 'maj13', '6', '6/9'],
    description: 'The major scale. Bright and resolved.',
  },
  Dorian: {
    name: 'Dorian',
    intervals: [0, 2, 3, 5, 7, 9, 10],
    worksOver: ['m7', 'm9', 'm11'],
    description: 'Minor with a natural 6th. The go-to jazz minor scale.',
  },
  Phrygian: {
    name: 'Phrygian',
    intervals: [0, 1, 3, 5, 7, 8, 10],
    worksOver: ['m7'],
    description: 'Minor with a b2. Spanish/flamenco flavor.',
  },
  Lydian: {
    name: 'Lydian',
    intervals: [0, 2, 4, 6, 7, 9, 11],
    worksOver: ['maj7', 'maj7#11', 'maj9'],
    description: 'Major with a #4. Dreamy, floating quality.',
  },
  Mixolydian: {
    name: 'Mixolydian',
    intervals: [0, 2, 4, 5, 7, 9, 10],
    worksOver: ['7', '9', '13', '7sus4'],
    description: 'Major with a b7. The dominant scale.',
  },
  Aeolian: {
    name: 'Aeolian',
    intervals: [0, 2, 3, 5, 7, 8, 10],
    worksOver: ['m7', 'm9'],
    description: 'The natural minor scale.',
  },
  Locrian: {
    name: 'Locrian',
    intervals: [0, 1, 3, 5, 6, 8, 10],
    worksOver: ['m7b5'],
    description: 'Half-diminished scale. Dark and unstable.',
  },

  // Melodic & harmonic minor
  'Melodic Minor': {
    name: 'Melodic Minor',
    intervals: [0, 2, 3, 5, 7, 9, 11],
    worksOver: ['m6', 'augmaj7'],
    description: 'Minor with raised 6th and 7th. Jazz minor.',
  },
  'Harmonic Minor': {
    name: 'Harmonic Minor',
    intervals: [0, 2, 3, 5, 7, 8, 11],
    worksOver: ['m7', 'augmaj7'],
    description: 'Minor with raised 7th. Exotic sound.',
  },

  // Derived scales
  'Lydian Dominant': {
    name: 'Lydian Dominant',
    intervals: [0, 2, 4, 6, 7, 9, 10],
    worksOver: ['7', '9', '13'],
    description: 'Mixolydian with #4. Great over dominant chords.',
  },
  Altered: {
    name: 'Altered',
    intervals: [0, 1, 3, 4, 6, 8, 10],
    worksOver: ['7alt', '7#9', '7b9'],
    description: 'All tensions altered. Maximum tension on V7.',
  },
  'Locrian #2': {
    name: 'Locrian #2',
    intervals: [0, 2, 3, 5, 6, 8, 10],
    worksOver: ['m7b5'],
    description: 'Locrian with natural 2nd. Smoother half-diminished option.',
  },

  // Symmetric scales
  'Whole-Half Diminished': {
    name: 'Whole-Half Diminished',
    intervals: [0, 2, 3, 5, 6, 8, 9, 11],
    worksOver: ['dim7'],
    description: 'Alternating whole and half steps. Classic diminished sound.',
  },
  'Half-Whole Diminished': {
    name: 'Half-Whole Diminished',
    intervals: [0, 1, 3, 4, 6, 7, 9, 10],
    worksOver: ['7', '7b9', '13'],
    description: 'Alternating half and whole steps. Dominant diminished.',
  },
  'Whole Tone': {
    name: 'Whole Tone',
    intervals: [0, 2, 4, 6, 8, 10],
    worksOver: ['aug', 'augmaj7'],
    description: 'All whole steps. Dreamlike, floating quality.',
  },

  // Blues & bebop
  Blues: {
    name: 'Blues',
    intervals: [0, 3, 5, 6, 7, 10],
    worksOver: ['7', 'm7'],
    description: 'The blues scale. Essential vocabulary.',
  },
  'Bebop Dominant': {
    name: 'Bebop Dominant',
    intervals: [0, 2, 4, 5, 7, 9, 10, 11],
    worksOver: ['7', '9', '13'],
    description: 'Mixolydian with passing natural 7th. Smooth 8th-note lines.',
  },

  // Pentatonic
  'Pentatonic Major': {
    name: 'Pentatonic Major',
    intervals: [0, 2, 4, 7, 9],
    worksOver: ['maj7', '6', '6/9'],
    description: 'Five-note major scale. Simple and singable.',
  },
  'Pentatonic Minor': {
    name: 'Pentatonic Minor',
    intervals: [0, 3, 5, 7, 10],
    worksOver: ['m7', 'm9'],
    description: 'Five-note minor scale. Universal vocabulary.',
  },
};

/* ═══════════════════════════════════════════════════════════
   Scale Suggestions per Chord Quality
   ═══════════════════════════════════════════════════════════ */

/** Map chord qualities to their recommended scales */
const SCALE_SUGGESTIONS: Partial<Record<ChordQuality, ScaleSuggestion[]>> = {
  maj7: [
    { scale: 'Ionian', priority: 'primary', tip: 'Default major sound. Avoid the 4th on strong beats.' },
    { scale: 'Lydian', priority: 'alternative', tip: 'The #11 adds color without clashing.' },
  ],
  m7: [
    { scale: 'Dorian', priority: 'primary', tip: 'The natural 6th distinguishes Dorian from Aeolian.' },
    { scale: 'Aeolian', priority: 'alternative', tip: 'Natural minor. Works well in minor key context.' },
  ],
  '7': [
    { scale: 'Mixolydian', priority: 'primary', tip: 'The standard dominant scale.' },
    { scale: 'Lydian Dominant', priority: 'alternative', tip: 'Use when the chord does not resolve down a 5th.' },
  ],
  m7b5: [
    { scale: 'Locrian', priority: 'primary', tip: 'The default half-diminished scale.' },
    { scale: 'Locrian #2', priority: 'alternative', tip: 'The raised 2nd creates a smoother melodic line.' },
  ],
  dim7: [
    { scale: 'Whole-Half Diminished', priority: 'primary', tip: 'Alternating W-H pattern from the root.' },
  ],
  '7alt': [
    { scale: 'Altered', priority: 'primary', tip: 'All tensions altered. Maximum resolution potential.' },
  ],
  '7#9': [
    { scale: 'Altered', priority: 'primary', tip: 'The altered scale contains the #9.' },
    { scale: 'Half-Whole Diminished', priority: 'alternative', tip: 'Contains both b9 and #9.' },
  ],
  '7b9': [
    { scale: 'Half-Whole Diminished', priority: 'primary', tip: 'The diminished dominant scale.' },
    { scale: 'Altered', priority: 'alternative', tip: 'More tension when moving to a minor chord.' },
  ],
  aug: [
    { scale: 'Whole Tone', priority: 'primary', tip: 'Symmetric scale matches the augmented triad.' },
  ],
  augmaj7: [
    { scale: 'Whole Tone', priority: 'primary', tip: 'Symmetric scale for the augmented major 7th.' },
  ],
  sus4: [
    { scale: 'Mixolydian', priority: 'primary', tip: 'Resolve the 4th to the 3rd for color.' },
  ],
  '7sus4': [
    { scale: 'Mixolydian', priority: 'primary', tip: 'Sus4 dominant — lean into the 4th.' },
  ],
};

/* ═══════════════════════════════════════════════════════════
   Public API
   ═══════════════════════════════════════════════════════════ */

/**
 * Get scale suggestions for a given chord quality.
 * Returns an array of ScaleSuggestion objects, primary first.
 */
export function getScaleSuggestions(quality: ChordQuality): ScaleSuggestion[] {
  return SCALE_SUGGESTIONS[quality] ?? [];
}

/**
 * Get the note names for a given root and scale.
 */
export function getScaleNotes(root: NoteName, scale: ScaleName): NoteName[] {
  const scaleData = SCALES[scale];
  if (!scaleData) {
    throw new Error(`Unknown scale: ${scale}`);
  }
  return scaleData.intervals.map((semitones) => noteAt(root, semitones));
}
