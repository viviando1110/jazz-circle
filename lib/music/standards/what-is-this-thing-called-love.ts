// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const WHAT_IS_THIS_THING_CALLED_LOVE: Standard = {
  title: 'What Is This Thing Called Love?',
  slug: 'what-is-this-thing-called-love',
  composer: 'Cole Porter',
  year: 1929,
  form: 'AABA',
  defaultKey: 'C major',
  alternateKey: 'D major',
  tempo: { slow: 160, medium: 200, fast: 260 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'bebop', 'up-tempo'],
  description: 'A classic Cole Porter tune with a minor tonality and dramatic harmonic shifts. The A sections move through cycle of fifths progressions, while the bridge provides harmonic relief.',
  sections: [
    {
      name: 'A',
      label: 'A Section (bars 1-8)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Abmaj7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 9-16)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Cm7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section / Bridge (bars 17-24)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Ebm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Ab7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Dm7b5', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'G7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 25-32)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
  ],
};
