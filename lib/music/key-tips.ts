// lib/music/key-tips.ts
// Pro tip data for each of the 24 keys + helper to find standards in a key.

import { STANDARDS } from '@/lib/music/standards/index';

/* ═══════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════ */

export interface KeyTip {
  /** Short headline, e.g. "The Horn Player's Home" */
  headline: string;
  /** 2-3 sentence tip about why this key matters in jazz */
  tip: string;
}

/* ═══════════════════════════════════════════════════════════
   Tips Data (keyed by slug)
   ═══════════════════════════════════════════════════════════ */

export const KEY_TIPS: Record<string, KeyTip> = {
  // Major keys
  'c-major': {
    headline: 'The Blank Canvas',
    tip: 'No sharps, no flats. Where every jazz student starts. Home to countless standards including the Great American Songbook.',
  },
  'g-major': {
    headline: "The Guitarist's Friend",
    tip: 'Natural open strings make this a favorite for guitar-based jazz. Common in bossa nova arrangements.',
  },
  'd-major': {
    headline: 'Bright and Cutting',
    tip: 'The brightness of D major cuts through an ensemble. Popular for up-tempo bebop heads.',
  },
  'a-major': {
    headline: 'The Warm Major Key',
    tip: 'Less common in jazz but warm and resonant. Guitarists love it for its open-string voicings.',
  },
  'e-major': {
    headline: 'The Road Less Traveled',
    tip: 'Rare in jazz but rich when explored. Concert pitch E challenges horn players.',
  },
  'b-major': {
    headline: 'Enharmonic Territory',
    tip: 'Practically Cb major. Rarely seen in jazz but useful for understanding enharmonic relationships.',
  },
  'gb-major': {
    headline: 'The Flat Side',
    tip: 'Enharmonic with F# major. Complex key signature but creates lush, dark harmonies.',
  },
  'db-major': {
    headline: 'Satin and Velvet',
    tip: 'A sophisticated key with a silky sound. Ballads and modal jazz love Db.',
  },
  'ab-major': {
    headline: 'The Jazz Ballad Key',
    tip: 'Beautiful for slow tempos. The flats create a warm, round sound perfect for ballads.',
  },
  'eb-major': {
    headline: 'The Jazz Workhorse',
    tip: 'Bb instruments play in concert Eb constantly. One of the most important jazz keys after Bb and F.',
  },
  'bb-major': {
    headline: "The Horn Player's Home",
    tip: 'Concert Bb is the most natural key for trumpets and tenor saxes. More jazz standards live here than almost anywhere else.',
  },
  'f-major': {
    headline: 'The Universal Key',
    tip: 'Comfortable for every instrument. The single flat makes it accessible while still sounding rich.',
  },

  // Minor keys
  'a-minor': {
    headline: 'The Natural Minor',
    tip: 'No sharps, no flats in natural minor. The relative minor of C, perfect for learning minor ii-V-i.',
  },
  'e-minor': {
    headline: "Autumn's Other Key",
    tip: 'The popular key for Autumn Leaves. Dark and brooding, great for minor blues.',
  },
  'b-minor': {
    headline: 'The Melancholy Key',
    tip: 'Less common but hauntingly beautiful. Creates deep, introspective moods.',
  },
  'gb-minor': {
    headline: 'Sharp Territory',
    tip: 'Enharmonic considerations make this tricky. Adds an edge to minor harmony.',
  },
  'db-minor': {
    headline: 'Distant and Exotic',
    tip: 'Far from home base, creating an otherworldly quality.',
  },
  'ab-minor': {
    headline: 'The Extreme',
    tip: 'At the edge of practical key signatures. Rarely used but theoretically interesting.',
  },
  'eb-minor': {
    headline: 'Film Noir',
    tip: 'Dark, moody, and cinematic. The quintessential noir jazz sound.',
  },
  'bb-minor': {
    headline: 'Deep Blues',
    tip: 'One of the deepest, darkest minor keys. Gospel and soul-jazz connections.',
  },
  'f-minor': {
    headline: 'The Minor Workhorse',
    tip: 'Relative of Ab major. Home to many jazz standards with a serious, searching quality.',
  },
  'c-minor': {
    headline: 'Classical Meets Jazz',
    tip: "Beethoven's favorite minor key works beautifully in jazz. Strong, dramatic character.",
  },
  'g-minor': {
    headline: 'The Natural Choice',
    tip: 'Relative minor of Bb, making it extremely common in jazz. Essential for minor key mastery.',
  },
  'd-minor': {
    headline: 'The Dorian Key',
    tip: 'D Dorian is the first mode most jazz students learn. "So What" lives here.',
  },
};

/* ═══════════════════════════════════════════════════════════
   Helper
   ═══════════════════════════════════════════════════════════ */

/** Get standard titles + slugs that live in a given key */
export function getStandardsInKey(
  keyDisplayName: string,
): { title: string; slug: string }[] {
  return STANDARDS
    .filter((s) => s.defaultKey === keyDisplayName)
    .map((s) => ({ title: s.title, slug: s.slug }));
}
