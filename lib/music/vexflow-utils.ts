// lib/music/vexflow-utils.ts
// Pure helper functions for converting music data to VexFlow notation format.

import type { NoteName, ChordQuality } from '@/lib/music/types';
import { getChordNotes } from '@/lib/music/chords';
import { CHROMATIC } from '@/lib/constants';

/**
 * Convert our NoteName format to VexFlow format.
 * VexFlow uses slash notation like "c/4", "db/4", "eb/5".
 *
 * @param noteName - Our NoteName (e.g., 'C', 'Db', 'E')
 * @param octave - The octave number (default 4 for middle C)
 * @returns VexFlow format string (e.g., 'c/4', 'db/4')
 */
export function noteNameToVex(noteName: NoteName, octave: number = 4): string {
  // Convert to lowercase and replace 'b' with 'b' for flat
  const vexNote = noteName.toLowerCase();
  return `${vexNote}/${octave}`;
}

/**
 * Given a chord root and quality, return an array of VexFlow key strings
 * for the notes in the chord.
 *
 * Each note is placed in a reasonable octave — root at the given octave,
 * and stack notes upward. If a note is lower in the chromatic scale than
 * the previous note, bump its octave up.
 *
 * @param root - The chord root note
 * @param quality - The chord quality
 * @param octave - Starting octave for the root (default 4)
 * @returns Array of VexFlow key strings (e.g., ['c/4', 'e/4', 'g/4', 'b/4'])
 */
export function chordToVexKeys(
  root: NoteName,
  quality: ChordQuality,
  octave: number = 4
): string[] {
  const notes = getChordNotes(root, quality);
  const vexKeys: string[] = [];

  let currentOctave = octave;
  let previousNoteIndex = CHROMATIC.indexOf(root);

  for (const note of notes) {
    const currentNoteIndex = CHROMATIC.indexOf(note);

    // If current note is lower in chromatic scale than previous, bump octave
    if (currentNoteIndex < previousNoteIndex) {
      currentOctave++;
    }

    vexKeys.push(noteNameToVex(note, currentOctave));
    previousNoteIndex = currentNoteIndex;
  }

  return vexKeys;
}

/**
 * Convert our ChordQuality to a display symbol for above the staff.
 *
 * @param quality - Our ChordQuality
 * @returns Display symbol (e.g., 'maj7', 'm7', '7', 'm7♭5', 'dim7')
 */
export function chordQualityToSymbol(quality: ChordQuality): string {
  // Map qualities with 'b' to use flat symbol
  const symbolMap: Partial<Record<ChordQuality, string>> = {
    'm7b5': 'm7♭5',
    '7b9': '7♭9',
    '7#9': '7♯9',
    'maj7#11': 'maj7♯11',
    '7alt': '7alt',
  };

  return symbolMap[quality] || quality;
}
