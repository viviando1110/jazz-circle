// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const WELL_YOU_NEEDNT: Standard = {
  title: "Well You Needn't",
  slug: 'well-you-neednt',
  composer: 'Thelonious Monk',
  year: 1947,
  form: 'AABA',
  defaultKey: 'F major',
  alternateKey: 'C major',
  tempo: { slow: 140, medium: 180, fast: 220 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'bebop', 'monk', '1940s', 'hard-bop'],
  description: "Thelonious Monk's composition with a distinctive angular melody and straightforward harmony. A bebop classic with Monk's characteristic wit.",
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'F7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'F7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'F7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'F7', beats: 4 }] },
      ],
    },
  ],
};
