// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const JOY_SPRING: Standard = {
  title: 'Joy Spring',
  slug: 'joy-spring',
  composer: 'Clifford Brown',
  year: 1954,
  form: 'AABA',
  defaultKey: 'F major',
  alternateKey: 'Bb major',
  tempo: { slow: 180, medium: 220, fast: 260 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'advanced',
  tags: ['standard', 'bebop', 'clifford-brown', '1950s', 'hard-bop'],
  description: "Clifford Brown's bebop composition with challenging chromaticism and rapid chord changes. A favorite among advanced players for its harmonic sophistication.",
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Fmaj7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Fmaj7', beats: 2 }, { symbol: 'Abm7', beats: 1 }, { symbol: 'Db7', beats: 1 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Fmaj7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Bm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'E7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Fmaj7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
  ],
};
