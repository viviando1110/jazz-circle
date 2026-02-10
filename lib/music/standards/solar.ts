// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const SOLAR: Standard = {
  title: 'Solar',
  slug: 'solar',
  composer: 'Miles Davis',
  year: 1954,
  form: 'AB',
  defaultKey: 'C minor',
  alternateKey: 'D minor',
  tempo: {
    slow: 120,
    medium: 160,
    fast: 200,
  },
  timeSignature: '4/4',
  totalBars: 12,
  difficulty: 'intermediate',
  tags: ['standard', 'modal', 'intermediate', 'minor key', 'miles davis'],
  description:
    'Solar is a 12-bar minor blues composed by Miles Davis in 1954, though it differs significantly from traditional blues changes. This composition features a descending ii-V pattern and is built on minor ii-V-i progressions, making it an excellent vehicle for developing vocabulary over minor harmony. The compact 12-bar form allows for focused improvisation and harmonic exploration.',

  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 7, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Dm7b5', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'G7', beats: 4 }] },
      ],
    },
  ],
};
