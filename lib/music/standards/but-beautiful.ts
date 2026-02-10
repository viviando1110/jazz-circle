// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const BUT_BEAUTIFUL: Standard = {
  title: 'But Beautiful',
  slug: 'but-beautiful',
  composer: 'Jimmy Van Heusen',
  year: 1947,
  form: 'AABA',
  defaultKey: 'G major',
  alternateKey: 'F major',
  tempo: { slow: 60, medium: 80, fast: 100 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'ballad', 'romantic'],
  description: 'A classic ballad with sophisticated harmony. Features chromatic movement and effective use of secondary dominants.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Gmaj7', beats: 2 }, { symbol: 'Em7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Bm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'E7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'D7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 25, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
      ],
    },
  ],
};
