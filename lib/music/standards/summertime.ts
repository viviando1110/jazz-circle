// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const SUMMERTIME: Standard = {
  title: 'Summertime',
  slug: 'summertime',
  composer: 'George Gershwin',
  year: 1935,
  form: 'ABAC',
  defaultKey: 'A minor',
  alternateKey: 'D minor',
  tempo: {
    slow: 60,
    medium: 80,
    fast: 100,
  },
  timeSignature: '4/4',
  totalBars: 16,
  difficulty: 'beginner',
  tags: ['standard', 'ballad', 'beginner', 'minor key', 'gershwin'],
  description:
    'Summertime is one of the most recorded jazz standards, composed by George Gershwin for the opera Porgy and Bess in 1935. This 16-bar tune features a simple yet beautiful minor key progression with bluesy inflections. The melody is hauntingly lyrical, and the harmony is accessible for beginners while allowing for sophisticated harmonic substitutions at advanced levels.',

  sections: [
    {
      name: 'A1',
      label: 'A Section (First)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'E7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'E7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 5, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'E7', beats: 2 }, { symbol: 'Am6', beats: 2 }] },
      ],
    },
    {
      name: 'A2',
      label: 'A Section (Second)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'E7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'E7', beats: 4 }] },
      ],
    },
    {
      name: 'C',
      label: 'C Section (Ending)',
      bars: [
        { bar: 13, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'E7', beats: 2 }, { symbol: 'Am6', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Am6', beats: 4 }] },
      ],
    },
  ],
};
