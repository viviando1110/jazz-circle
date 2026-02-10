// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const GOODBYE_PORK_PIE_HAT: Standard = {
  title: 'Goodbye Pork Pie Hat',
  slug: 'goodbye-pork-pie-hat',
  composer: 'Charles Mingus',
  year: 1959,
  form: 'AB',
  defaultKey: 'Eb major',
  alternateKey: 'F major',
  tempo: { slow: 60, medium: 80, fast: 100 },
  timeSignature: '4/4',
  totalBars: 12,
  difficulty: 'advanced',
  tags: ['standard', 'ballad', 'mingus', '1950s', 'blues'],
  description: "Charles Mingus's tribute to Lester Young. A 12-bar blues with sophisticated harmonic substitutions and a mournful melody.",
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Am7b5', beats: 2 }, { symbol: 'D7b9', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 7, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
      ],
    },
  ],
};
