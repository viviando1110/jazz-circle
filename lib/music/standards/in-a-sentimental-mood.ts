// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const IN_A_SENTIMENTAL_MOOD: Standard = {
  title: 'In a Sentimental Mood',
  slug: 'in-a-sentimental-mood',
  composer: 'Duke Ellington',
  year: 1935,
  form: 'AABA',
  defaultKey: 'F major',
  alternateKey: 'Bb major',
  tempo: { slow: 60, medium: 80, fast: 100 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'ballad', 'ellington', '1930s'],
  description: 'Duke Ellington ballad known for its lush harmonies and chromatic movement. Features sophisticated voice leading and romantic chord progressions.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'Dm7/C', beats: 2 }] },
        { bar: 2, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'Bbm7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'Dm7/C', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'Bbm7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'Dm7/C', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'Bbm7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'Dm7/C', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'Bbm7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 19, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 21, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 23, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Fmaj7', beats: 2 }, { symbol: 'Am7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'Dm7/C', beats: 2 }] },
        { bar: 26, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'Bbm7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'Dm7/C', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'Bbm7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
      ],
    },
  ],
};
