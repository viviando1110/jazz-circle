// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const ROUND_MIDNIGHT: Standard = {
  title: "'Round Midnight",
  slug: 'round-midnight',
  composer: 'Thelonious Monk',
  year: 1944,
  form: 'AABA',
  defaultKey: 'Eb minor',
  alternateKey: 'C minor',
  tempo: { slow: 50, medium: 70, fast: 90 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'advanced',
  tags: ['standard', 'ballad', 'monk', '1940s', 'bebop'],
  description: "Thelonious Monk's masterpiece ballad with complex chromatic harmony and unusual voice leading. One of the most recorded jazz standards.",
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ebm7/Db', beats: 2 }] },
        { bar: 2, chords: [{ symbol: 'Cm7b5', beats: 2 }, { symbol: 'F7b9', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Abmaj7', beats: 2 }, { symbol: 'Fm7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Abmaj7', beats: 2 }, { symbol: 'Abm7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Gm7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ebm7/Db', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Cm7b5', beats: 2 }, { symbol: 'F7b9', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Abmaj7', beats: 2 }, { symbol: 'Fm7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Abmaj7', beats: 2 }, { symbol: 'Abm7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 18, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 20, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 22, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Cm7b5', beats: 1 }, { symbol: 'F7b9', beats: 1 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ebm7/Db', beats: 2 }] },
        { bar: 26, chords: [{ symbol: 'Cm7b5', beats: 2 }, { symbol: 'F7b9', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Abmaj7', beats: 2 }, { symbol: 'Fm7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Abmaj7', beats: 2 }, { symbol: 'Abm7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Cm7b5', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'F7b9', beats: 2 }, { symbol: 'Bbm7', beats: 2 }] },
      ],
    },
  ],
};
