// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const KILLER_JOE: Standard = {
  title: 'Killer Joe',
  slug: 'killer-joe',
  composer: 'Benny Golson',
  year: 1960,
  form: 'AB',
  defaultKey: 'C major',
  alternateKey: 'F major',
  tempo: { slow: 100, medium: 120, fast: 140 },
  timeSignature: '4/4',
  totalBars: 16,
  difficulty: 'beginner',
  tags: ['standard', 'groove', 'soul-jazz', 'vamp', 'funk'],
  description: 'A funky, groove-oriented tune with a catchy bass line. Benny Golson\'s composition for Quincy Jones became a soul-jazz staple, featuring a simple harmonic structure that lets the rhythm section shine.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'C7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'C7', beats: 4 }] },
      ],
    },
  ],
};
