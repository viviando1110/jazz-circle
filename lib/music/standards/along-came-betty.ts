// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const ALONG_CAME_BETTY: Standard = {
  title: 'Along Came Betty',
  slug: 'along-came-betty',
  composer: 'Benny Golson',
  year: 1958,
  form: 'ABAB',
  defaultKey: 'Bb major',
  alternateKey: 'C major',
  tempo: { slow: 140, medium: 160, fast: 180 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'advanced',
  tags: ['standard', 'bebop', 'hard-bop', 'complex-changes'],
  description: 'A sophisticated hard bop composition with intricate chord changes. Benny Golson\'s tribute to Betty Carter features a challenging harmonic progression that moves through multiple tonal centers, testing improvisers\' skills.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Bbmaj7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'F7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 19, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 20, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 21, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 22, chords: [{ symbol: 'Bbmaj7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 23, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'F7', beats: 4 }] },
      ],
    },
  ],
};
