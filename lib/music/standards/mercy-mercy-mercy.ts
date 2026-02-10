// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const MERCY_MERCY_MERCY: Standard = {
  title: 'Mercy, Mercy, Mercy',
  slug: 'mercy-mercy-mercy',
  composer: 'Joe Zawinul',
  year: 1966,
  form: 'AB',
  defaultKey: 'Bb major',
  alternateKey: 'C major',
  tempo: { slow: 80, medium: 100, fast: 120 },
  timeSignature: '4/4',
  totalBars: 16,
  difficulty: 'beginner',
  tags: ['standard', 'soul-jazz', 'gospel', 'groove', 'funk'],
  description: 'A soulful gospel-funk groove that became a crossover hit. Joe Zawinul\'s composition with Cannonball Adderley features a simple, hypnotic vamp that appeals to both jazz and R&B audiences.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Bb7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Bb7', beats: 4 }] },
      ],
    },
  ],
};
