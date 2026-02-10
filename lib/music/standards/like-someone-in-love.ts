// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const LIKE_SOMEONE_IN_LOVE: Standard = {
  title: 'Like Someone in Love',
  slug: 'like-someone-in-love',
  composer: 'Jimmy Van Heusen',
  year: 1944,
  form: 'ABAC',
  defaultKey: 'C major',
  alternateKey: 'F major',
  tempo: { slow: 90, medium: 120, fast: 160 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'ballad', 'van-heusen', '1940s'],
  description: 'Jimmy Van Heusen ballad with a memorable melody. Features interesting harmonic turns and is beloved by vocalists and instrumentalists.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Em7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'G7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'G7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 19, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 21, chords: [{ symbol: 'Em7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'G7', beats: 4 }] },
      ],
    },
    {
      name: 'C',
      label: 'C Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'E7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
  ],
};
