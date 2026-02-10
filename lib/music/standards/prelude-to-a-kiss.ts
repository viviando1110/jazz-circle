// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const PRELUDE_TO_A_KISS: Standard = {
  title: 'Prelude to a Kiss',
  slug: 'prelude-to-a-kiss',
  composer: 'Duke Ellington',
  year: 1938,
  form: 'AABA',
  defaultKey: 'D major',
  alternateKey: 'F major',
  tempo: { slow: 50, medium: 70, fast: 90 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'ellington', 'ballad', 'romantic'],
  description: 'An Ellington masterpiece with lush chromatic harmony. Features sophisticated reharmonization and beautiful voice leading.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Dmaj7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Dmaj7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'F#m7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'B7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Em7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Bm7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Em7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'A7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 25, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Dmaj7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
      ],
    },
  ],
};
