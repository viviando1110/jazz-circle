// lib/music/chords.ts
// Chord construction, diatonic chord generation, and voicing logic.

import type {
  NoteName,
  ChordQuality,
  DiatonicChord,
  ChordVoicing,
  MusicalKey,
  ExtensionMap,
} from '@/lib/music/types';
import { noteAt, noteToMidi } from '@/lib/music/theory';

/* ═══════════════════════════════════════════════════════════
   Chord Interval Definitions
   ═══════════════════════════════════════════════════════════ */

/** Semitone intervals from root for each chord quality */
export const CHORD_INTERVALS: Record<ChordQuality, number[]> = {
  // Basic 7ths
  maj7:     [0, 4, 7, 11],
  m7:       [0, 3, 7, 10],
  '7':      [0, 4, 7, 10],
  m7b5:     [0, 3, 6, 10],
  dim7:     [0, 3, 6, 9],
  // Extensions
  maj9:     [0, 4, 7, 11, 14],
  '9':      [0, 4, 7, 10, 14],
  m9:       [0, 3, 7, 10, 14],
  maj13:    [0, 4, 7, 11, 14, 21],
  '13':     [0, 4, 7, 10, 14, 21],
  // Altered / advanced
  m11:      [0, 3, 7, 10, 14, 17],
  'maj7#11': [0, 4, 7, 11, 18],
  '7#9':    [0, 4, 7, 10, 15],
  '7b9':    [0, 4, 7, 10, 13],
  '7alt':   [0, 4, 7, 10, 13, 15],  // b9, #9 (altered dominant)
  // Other
  '6':      [0, 4, 7, 9],
  m6:       [0, 3, 7, 9],
  '6/9':    [0, 4, 7, 9, 14],
  sus4:     [0, 5, 7],
  '7sus4':  [0, 5, 7, 10],
  // Augmented
  aug:      [0, 4, 8],
  augmaj7:  [0, 4, 8, 11],
};

/* ═══════════════════════════════════════════════════════════
   Extensions Map
   ═══════════════════════════════════════════════════════════ */

/** Available jazz extensions per base chord quality */
export const EXTENSIONS_MAP: ExtensionMap = {
  maj7:  ['9', '#11', '13', '6/9'],
  m7:    ['9', '11', '13'],
  '7':   ['9', '#9', 'b9', '13', '#11', 'alt'],
  m7b5:  ['9', '11'],
  dim7:  [],
};

/* ═══════════════════════════════════════════════════════════
   Diatonic Chord Tables
   ═══════════════════════════════════════════════════════════ */

/** Major scale intervals (semitones from root for each degree) */
const MAJOR_SCALE_INTERVALS = [0, 2, 4, 5, 7, 9, 11];

/** Natural minor scale intervals */
const MINOR_SCALE_INTERVALS = [0, 2, 3, 5, 7, 8, 10];

/** Chord qualities for each degree of the major scale */
const MAJOR_DIATONIC_QUALITIES: ChordQuality[] = [
  'maj7', 'm7', 'm7', 'maj7', '7', 'm7', 'm7b5',
];

/** Roman numerals for major diatonic chords */
const MAJOR_ROMAN_NUMERALS = [
  'Imaj7', 'iim7', 'iiim7', 'IVmaj7', 'V7', 'vim7', 'viiø7',
];

/** Chord qualities for each degree of the natural minor scale */
const MINOR_DIATONIC_QUALITIES: ChordQuality[] = [
  'm7', 'm7b5', 'maj7', 'm7', 'm7', 'maj7', '7',
];

/** Roman numerals for minor diatonic chords */
const MINOR_ROMAN_NUMERALS = [
  'im7', 'iiø7', 'bIIImaj7', 'ivm7', 'vm7', 'bVImaj7', 'bVII7',
];

/* ═══════════════════════════════════════════════════════════
   Public API
   ═══════════════════════════════════════════════════════════ */

/**
 * Get the 7 diatonic 7th chords for a given key.
 */
export function getDiatonicChords(key: MusicalKey): DiatonicChord[] {
  const isMajor = key.quality === 'major';
  const scaleIntervals = isMajor ? MAJOR_SCALE_INTERVALS : MINOR_SCALE_INTERVALS;
  const qualities = isMajor ? MAJOR_DIATONIC_QUALITIES : MINOR_DIATONIC_QUALITIES;
  const romanNumerals = isMajor ? MAJOR_ROMAN_NUMERALS : MINOR_ROMAN_NUMERALS;

  return scaleIntervals.map((interval, i) => {
    const root = noteAt(key.root, interval);
    const quality = qualities[i];
    const intervals = CHORD_INTERVALS[quality];
    return {
      root,
      quality,
      name: `${root}${quality}`,
      roman: romanNumerals[i],
      degree: i + 1,
      intervals,
    };
  });
}

/**
 * Get the note names for a chord (root + quality).
 */
export function getChordNotes(root: NoteName, quality: ChordQuality): NoteName[] {
  const intervals = CHORD_INTERVALS[quality];
  return intervals.map((semitones) => noteAt(root, semitones));
}

/**
 * Get a chord voicing with MIDI note numbers.
 * Default octave is 4 (middle C octave).
 */
export function getChordVoicing(
  root: NoteName,
  quality: ChordQuality,
  octave: number = 4,
): ChordVoicing {
  const intervals = CHORD_INTERVALS[quality];
  const rootMidi = noteToMidi(root, octave);
  return {
    root,
    quality,
    midiNotes: intervals.map((semitones) => rootMidi + semitones),
    noteNames: intervals.map((semitones) => noteAt(root, semitones)),
  };
}
