// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const DESAFINADO: Standard = {
  title: 'Desafinado',
  slug: 'desafinado',
  composer: 'Antonio Carlos Jobim',
  year: 1959,
  form: 'AABA',
  defaultKey: 'F major',
  alternateKey: 'C major',
  tempo: { slow: 120, medium: 150, fast: 180 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['bossa-nova', 'latin', 'standard'],
  description: 'One of the most iconic bossa nova compositions, featuring sophisticated harmonic movement and chromatic voice leading. The title means "out of tune," adding irony to this harmonically rich piece.',
  sections: [
    {
      name: 'A',
      label: 'A Section (bars 1-8)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7b9', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 9-16)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section / Bridge (bars 17-24)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Gbmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Gbmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'B7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Emaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 25-32)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Fmaj7', beats: 2 }, { symbol: 'Gm7', beats: 1 }, { symbol: 'C7', beats: 1 }] },
      ],
    },
  ],
};
