// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const BEAUTIFUL_LOVE: Standard = {
  title: 'Beautiful Love',
  slug: 'beautiful-love',
  composer: 'Victor Young',
  year: 1931,
  form: 'ABAC',
  defaultKey: 'D minor',
  alternateKey: 'E minor',
  tempo: {
    slow: 100,
    medium: 140,
    fast: 180,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'minor key', 'intermediate', 'ii-V-i'],
  description:
    'Beautiful Love is a romantic standard composed by Victor Young in 1931 featuring elegant minor key harmony. This 32-bar ABAC form moves through multiple minor key centers with classic ii-V-i progressions, making it excellent for developing facility in minor keys. The tune has a sophisticated, wistful quality and is a favorite for exploring minor harmony and voice leading.',

  sections: [
    {
      name: 'A1',
      label: 'A Section (First)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'E7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Dm6', beats: 4 }] },
      ],
    },
    {
      name: 'A2',
      label: 'A Section (Second)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 20, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 22, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'E7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
      ],
    },
    {
      name: 'C',
      label: 'C Section (Ending)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Dm6', beats: 4 }] },
      ],
    },
  ],
};
