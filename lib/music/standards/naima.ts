// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const NAIMA: Standard = {
  title: 'Naima',
  slug: 'naima',
  composer: 'John Coltrane',
  year: 1959,
  form: 'ABAB',
  defaultKey: 'Eb major',
  alternateKey: 'Bb major',
  tempo: { slow: 60, medium: 80, fast: 100 },
  timeSignature: '4/4',
  totalBars: 12,
  difficulty: 'advanced',
  tags: ['modal', 'ballad', 'modern'],
  description: 'A deeply spiritual ballad written by Coltrane for his first wife. Features lush, static harmonies with a meditative quality. The unconventional form (ABAB over 12 bars) and rich harmonic colors make this an advanced study in modern jazz harmony.',
  sections: [
    {
      name: 'A',
      label: 'A Section (bars 1-3)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Bbmaj7', beats: 2 }] },
        { bar: 2, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (bars 4-6)',
      bars: [
        { bar: 4, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Bmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 7-9)',
      bars: [
        { bar: 7, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Bbmaj7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 9, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (bars 10-12)',
      bars: [
        { bar: 10, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Bmaj7', beats: 4 }] },
      ],
    },
  ],
};
