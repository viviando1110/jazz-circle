// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const SATIN_DOLL: Standard = {
  title: 'Satin Doll',
  slug: 'satin-doll',
  composer: 'Duke Ellington',
  year: 1953,
  form: 'AABA',
  defaultKey: 'C major',
  alternateKey: 'Bb major',
  tempo: {
    slow: 100,
    medium: 140,
    fast: 180,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'beginner',
  tags: ['standard', 'swing', 'beginner', 'duke ellington'],
  description:
    'Satin Doll is a classic Duke Ellington composition from 1953 featuring sophisticated yet accessible harmony. The tune is built on parallel ii-V progressions in the A sections, making it ideal for practicing voice leading and ii-V patterns. The bridge shifts to the IV and bVI key areas, providing harmonic variety. This is a must-know standard for any jazz musician.',

  sections: [
    {
      name: 'A1',
      label: 'A Section (First)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 2, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Cmaj7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
    {
      name: 'A2',
      label: 'A Section (Second)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (Bridge)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 18, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 19, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 22, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 23, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
    {
      name: 'A3',
      label: 'A Section (Final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 26, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
    },
  ],
};
