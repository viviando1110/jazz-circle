// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const DARN_THAT_DREAM: Standard = {
  title: 'Darn That Dream',
  slug: 'darn-that-dream',
  composer: 'Jimmy Van Heusen',
  year: 1939,
  form: 'AABA',
  defaultKey: 'G major',
  alternateKey: 'F major',
  tempo: { slow: 60, medium: 80, fast: 100 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'ballad', 'romantic'],
  description: 'A beautiful ballad with rich harmonic movement. Features chromatic bass lines and effective use of altered dominants.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'E7b9', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'E7b9', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'D7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'E7b9', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Gmaj7', beats: 2 }, { symbol: 'Em7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'D7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 25, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'E7b9', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Gmaj7', beats: 2 }, { symbol: 'Em7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
      ],
    },
  ],
};
