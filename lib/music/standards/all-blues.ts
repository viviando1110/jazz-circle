// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const ALL_BLUES: Standard = {
  title: 'All Blues',
  slug: 'all-blues',
  composer: 'Miles Davis',
  year: 1959,
  form: 'Blues',
  defaultKey: 'G major',
  alternateKey: 'F major',
  tempo: { slow: 100, medium: 130, fast: 160 },
  timeSignature: '3/4',
  totalBars: 12,
  difficulty: 'beginner',
  tags: ['blues', 'modal', 'waltz', 'miles-davis', 'kind-of-blue'],
  description: 'A modal jazz waltz blues from Kind of Blue. Features a simple but effective 12-bar blues structure in 3/4 time with modal approach.',
  sections: [
    {
      name: 'Blues',
      label: 'Blues Form',
      bars: [
        { bar: 1, chords: [{ symbol: 'G7', beats: 3 }] },
        { bar: 2, chords: [{ symbol: 'G7', beats: 3 }] },
        { bar: 3, chords: [{ symbol: 'G7', beats: 3 }] },
        { bar: 4, chords: [{ symbol: 'G7', beats: 3 }] },
        { bar: 5, chords: [{ symbol: 'C7', beats: 3 }] },
        { bar: 6, chords: [{ symbol: 'C7', beats: 3 }] },
        { bar: 7, chords: [{ symbol: 'G7', beats: 3 }] },
        { bar: 8, chords: [{ symbol: 'G7', beats: 3 }] },
        { bar: 9, chords: [{ symbol: 'D7#9', beats: 3 }] },
        { bar: 10, chords: [{ symbol: 'Eb7#9', beats: 1.5 }, { symbol: 'D7#9', beats: 1.5 }] },
        { bar: 11, chords: [{ symbol: 'G7', beats: 3 }] },
        { bar: 12, chords: [{ symbol: 'G7', beats: 3 }] },
      ],
    },
  ],
};
