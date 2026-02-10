// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const RECORDA_ME: Standard = {
  title: 'Recorda-Me',
  slug: 'recorda-me',
  composer: 'Joe Henderson',
  year: 1963,
  form: 'AB',
  defaultKey: 'A minor',
  alternateKey: 'D minor',
  tempo: { slow: 140, medium: 180, fast: 220 },
  timeSignature: '4/4',
  totalBars: 24,
  difficulty: 'intermediate',
  tags: ['hard-bop', 'modal', 'modern'],
  description: 'A classic Joe Henderson composition combining bossa nova feel with hard bop harmony. Features a 16-bar A section with modal minor tonality and an 8-bar contrasting B section.',
  sections: [
    {
      name: 'A',
      label: 'A Section (bars 1-16)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Dm9', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Dm9', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'E7alt', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Dm9', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Dm9', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'E7alt', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Am6', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section / Bridge (bars 17-24)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'E7alt', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Am6', beats: 4 }] },
      ],
    },
  ],
};
