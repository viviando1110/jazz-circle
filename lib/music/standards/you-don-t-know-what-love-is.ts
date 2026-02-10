// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const YOU_DON_T_KNOW_WHAT_LOVE_IS: Standard = {
  title: "You Don't Know What Love Is",
  slug: 'you-don-t-know-what-love-is',
  composer: 'Gene de Paul',
  year: 1941,
  form: 'AABA',
  defaultKey: 'F minor',
  alternateKey: 'D minor',
  tempo: { slow: 50, medium: 70, fast: 90 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'ballad', 'minor', 'dramatic'],
  description: 'A deeply expressive minor key ballad. Features dramatic harmonic shifts and is a favorite for improvisation.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Gm7b5', beats: 2 }, { symbol: 'C7b9', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Fm7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Gm7b5', beats: 2 }, { symbol: 'C7b9', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Fm7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Ebm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Ab7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Cm7b5', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'F7b9', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'C7b9', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 25, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Abmaj7', beats: 2 }, { symbol: 'Dbmaj7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Gm7b5', beats: 2 }, { symbol: 'C7b9', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Fm7', beats: 4 }] },
      ],
    },
  ],
};
