// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const STOLEN_MOMENTS: Standard = {
  title: 'Stolen Moments',
  slug: 'stolen-moments',
  composer: 'Oliver Nelson',
  year: 1961,
  form: 'Blues',
  defaultKey: 'C minor',
  alternateKey: 'D minor',
  tempo: { slow: 100, medium: 120, fast: 140 },
  timeSignature: '4/4',
  totalBars: 12,
  difficulty: 'intermediate',
  tags: ['standard', 'blues', 'minor-blues', 'modal', 'soul-jazz'],
  description: 'A hauntingly beautiful minor blues with modal elements. Oliver Nelson\'s masterpiece features a sophisticated harmonic approach that moves beyond traditional blues changes while maintaining the form\'s emotional core.',
  sections: [
    {
      name: 'A',
      label: 'Minor Blues',
      bars: [
        { bar: 1, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7alt', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7alt', beats: 2 }] },
      ],
    },
  ],
};
