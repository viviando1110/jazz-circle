// lib/music/keys.ts
// Key definitions, circle of fifths order, and key lookup utilities.

import type { NoteName, MusicalKey } from '@/lib/music/types';

/* ═══════════════════════════════════════════════════════════
   Circle of Fifths Order
   ═══════════════════════════════════════════════════════════ */

/** The 12 notes in circle of fifths order (clockwise from C) */
export const CIRCLE_OF_FIFTHS_ORDER: NoteName[] = [
  'C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F',
];

/* ═══════════════════════════════════════════════════════════
   Major Keys
   ═══════════════════════════════════════════════════════════ */

export const KEYS_MAJOR: MusicalKey[] = [
  { root: 'C',  quality: 'major', slug: 'c-major',  displayName: 'C Major',  accidentals: 0,  relativeKey: 'A'  },
  { root: 'G',  quality: 'major', slug: 'g-major',  displayName: 'G Major',  accidentals: 1,  relativeKey: 'E'  },
  { root: 'D',  quality: 'major', slug: 'd-major',  displayName: 'D Major',  accidentals: 2,  relativeKey: 'B'  },
  { root: 'A',  quality: 'major', slug: 'a-major',  displayName: 'A Major',  accidentals: 3,  relativeKey: 'Gb' },
  { root: 'E',  quality: 'major', slug: 'e-major',  displayName: 'E Major',  accidentals: 4,  relativeKey: 'Db' },
  { root: 'B',  quality: 'major', slug: 'b-major',  displayName: 'B Major',  accidentals: 5,  relativeKey: 'Ab' },
  { root: 'Gb', quality: 'major', slug: 'gb-major', displayName: 'Gb Major', accidentals: -6, relativeKey: 'Eb' },
  { root: 'Db', quality: 'major', slug: 'db-major', displayName: 'Db Major', accidentals: -5, relativeKey: 'Bb' },
  { root: 'Ab', quality: 'major', slug: 'ab-major', displayName: 'Ab Major', accidentals: -4, relativeKey: 'F'  },
  { root: 'Eb', quality: 'major', slug: 'eb-major', displayName: 'Eb Major', accidentals: -3, relativeKey: 'C'  },
  { root: 'Bb', quality: 'major', slug: 'bb-major', displayName: 'Bb Major', accidentals: -2, relativeKey: 'G'  },
  { root: 'F',  quality: 'major', slug: 'f-major',  displayName: 'F Major',  accidentals: -1, relativeKey: 'D'  },
];

/* ═══════════════════════════════════════════════════════════
   Minor Keys (circle of fifths order starting from A)
   ═══════════════════════════════════════════════════════════ */

export const KEYS_MINOR: MusicalKey[] = [
  { root: 'A',  quality: 'minor', slug: 'a-minor',  displayName: 'A Minor',  accidentals: 0,  relativeKey: 'C'  },
  { root: 'E',  quality: 'minor', slug: 'e-minor',  displayName: 'E Minor',  accidentals: 1,  relativeKey: 'G'  },
  { root: 'B',  quality: 'minor', slug: 'b-minor',  displayName: 'B Minor',  accidentals: 2,  relativeKey: 'D'  },
  { root: 'Gb', quality: 'minor', slug: 'gb-minor', displayName: 'F# Minor', accidentals: 3,  relativeKey: 'A'  },
  { root: 'Db', quality: 'minor', slug: 'db-minor', displayName: 'C# Minor', accidentals: 4,  relativeKey: 'E'  },
  { root: 'Ab', quality: 'minor', slug: 'ab-minor', displayName: 'G# Minor', accidentals: 5,  relativeKey: 'B'  },
  { root: 'Eb', quality: 'minor', slug: 'eb-minor', displayName: 'Eb Minor', accidentals: -6, relativeKey: 'Gb' },
  { root: 'Bb', quality: 'minor', slug: 'bb-minor', displayName: 'Bb Minor', accidentals: -5, relativeKey: 'Db' },
  { root: 'F',  quality: 'minor', slug: 'f-minor',  displayName: 'F Minor',  accidentals: -4, relativeKey: 'Ab' },
  { root: 'C',  quality: 'minor', slug: 'c-minor',  displayName: 'C Minor',  accidentals: -3, relativeKey: 'Eb' },
  { root: 'G',  quality: 'minor', slug: 'g-minor',  displayName: 'G Minor',  accidentals: -2, relativeKey: 'Bb' },
  { root: 'D',  quality: 'minor', slug: 'd-minor',  displayName: 'D Minor',  accidentals: -1, relativeKey: 'F'  },
];

/* ═══════════════════════════════════════════════════════════
   Combined
   ═══════════════════════════════════════════════════════════ */

export const ALL_KEYS: MusicalKey[] = [...KEYS_MAJOR, ...KEYS_MINOR];

/* ═══════════════════════════════════════════════════════════
   Lookup Utilities
   ═══════════════════════════════════════════════════════════ */

/**
 * Look up a key by its URL slug (e.g., "c-major", "g-minor").
 */
export function getKeyBySlug(slug: string): MusicalKey | undefined {
  return ALL_KEYS.find((k) => k.slug === slug);
}

/**
 * Get the relative major or minor key.
 * Major key → returns its relative minor.
 * Minor key → returns its relative major.
 */
export function getRelativeKey(key: MusicalKey): MusicalKey {
  const targetQuality = key.quality === 'major' ? 'minor' : 'major';
  const result = ALL_KEYS.find(
    (k) => k.root === key.relativeKey && k.quality === targetQuality,
  );
  if (!result) {
    throw new Error(
      `Relative key not found for ${key.displayName} (looking for ${key.relativeKey} ${targetQuality})`,
    );
  }
  return result;
}
