// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const CANTALOUPE_ISLAND: Standard = {
  title: 'Cantaloupe Island',
  slug: 'cantaloupe-island',
  composer: 'Herbie Hancock',
  year: 1964,
  form: 'ABAB',
  defaultKey: 'F minor',
  alternateKey: 'D minor',
  tempo: { slow: 100, medium: 130, fast: 160 },
  timeSignature: '4/4',
  totalBars: 16,
  difficulty: 'beginner',
  tags: ['modal', 'funk', 'hancock', 'groove', 'beginner-friendly'],
  description: 'A funky modal tune by Herbie Hancock. Features a simple 16-bar form with a strong groove and minimal harmonic movement.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Db9', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Db9', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Db9', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Db9', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Fm7', beats: 4 }] },
      ],
    },
  ],
};
