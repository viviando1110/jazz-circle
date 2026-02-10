// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const ALONE_TOGETHER: Standard = {
  title: 'Alone Together',
  slug: 'alone-together',
  composer: 'Arthur Schwartz',
  year: 1932,
  form: 'ABAC',
  defaultKey: 'D minor',
  alternateKey: 'G minor',
  tempo: { slow: 80, medium: 120, fast: 160 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'minor', 'swing'],
  description: 'A minor key standard with sophisticated harmonic movement. Features chromatic ii-V progressions and dramatic melodic contour.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7b9', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Dm7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7b9', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Dm7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 17, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7b9', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Dm7', beats: 4 }] },
      ],
    },
    {
      name: 'C',
      label: 'C Section',
      bars: [
        { bar: 25, chords: [{ symbol: 'Bm7b5', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'E7b9', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Em7b5', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'A7b9', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Dm7', beats: 4 }] },
      ],
    },
  ],
};
