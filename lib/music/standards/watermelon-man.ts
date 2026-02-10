// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const WATERMELON_MAN: Standard = {
  title: 'Watermelon Man',
  slug: 'watermelon-man',
  composer: 'Herbie Hancock',
  year: 1962,
  form: 'Blues',
  defaultKey: 'F major',
  alternateKey: 'Bb major',
  tempo: { slow: 100, medium: 120, fast: 140 },
  timeSignature: '4/4',
  totalBars: 16,
  difficulty: 'beginner',
  tags: ['standard', 'blues', 'funk', 'soul-jazz', 'groove'],
  description: 'A funky 16-bar blues with a memorable bass line. One of Herbie Hancock\'s most popular compositions, featuring a simple but infectious groove that made it a hit in both jazz and pop circles.',
  sections: [
    {
      name: 'A',
      label: 'Blues Form',
      bars: [
        { bar: 1, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'C7', beats: 4 }] },
      ],
    },
  ],
};
