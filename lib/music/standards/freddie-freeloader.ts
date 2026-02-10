// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const FREDDIE_FREELOADER: Standard = {
  title: 'Freddie Freeloader',
  slug: 'freddie-freeloader',
  composer: 'Miles Davis',
  year: 1959,
  form: 'Blues',
  defaultKey: 'Bb major',
  alternateKey: 'F major',
  tempo: { slow: 100, medium: 140, fast: 180 },
  timeSignature: '4/4',
  totalBars: 12,
  difficulty: 'beginner',
  tags: ['blues', 'swing', 'miles-davis', 'kind-of-blue', 'beginner-friendly'],
  description: 'A classic 12-bar blues from Kind of Blue. Features straightforward blues harmony perfect for beginners and a swinging feel.',
  sections: [
    {
      name: 'Blues',
      label: 'Blues Form',
      bars: [
        { bar: 1, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'F7', beats: 4 }] },
      ],
    },
  ],
};
