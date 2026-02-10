// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const OLD_FOLKS: Standard = {
  title: 'Old Folks',
  slug: 'old-folks',
  composer: 'Willard Robison',
  year: 1938,
  form: 'AABA',
  defaultKey: 'C major',
  alternateKey: 'F major',
  tempo: { slow: 50, medium: 70, fast: 90 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'ballad', 'introspective'],
  description: 'A deeply expressive ballad with rich harmonic content. Features chromatic voice leading and sophisticated reharmonization opportunities.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Em7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Em7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
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
        { bar: 21, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 25, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
    },
  ],
};
