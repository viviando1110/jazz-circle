// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const MY_ONE_AND_ONLY_LOVE: Standard = {
  title: 'My One and Only Love',
  slug: 'my-one-and-only-love',
  composer: 'Guy Wood',
  year: 1953,
  form: 'AABA',
  defaultKey: 'C major',
  alternateKey: 'Eb major',
  tempo: { slow: 60, medium: 80, fast: 100 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'ballad', 'romantic', 'slow'],
  description: 'One of the most beautiful ballads in the jazz repertoire. Guy Wood\'s composition features lush harmonic progressions and a deeply romantic character, making it a favorite for intimate performances and vocal interpretations.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Cmaj7', beats: 2 }, { symbol: 'Am7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'Am7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Cmaj7', beats: 2 }, { symbol: 'Am7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Cmaj7', beats: 2 }, { symbol: 'Am7', beats: 2 }] },
        { bar: 20, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 21, chords: [{ symbol: 'Em7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'G7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Cmaj7', beats: 2 }, { symbol: 'Am7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
  ],
};
