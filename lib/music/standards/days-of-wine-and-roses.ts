// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const DAYS_OF_WINE_AND_ROSES: Standard = {
  title: 'Days of Wine and Roses',
  slug: 'days-of-wine-and-roses',
  composer: 'Henry Mancini',
  year: 1962,
  form: 'AB',
  defaultKey: 'F major',
  alternateKey: 'C major',
  tempo: {
    slow: 100,
    medium: 140,
    fast: 180,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'ballad', 'intermediate', 'mancini'],
  description:
    'Days of Wine and Roses is a beloved standard composed by Henry Mancini in 1962 for the film of the same name. This 32-bar AB form features smooth voice leading and elegant ii-V progressions through multiple key centers. The tune has a romantic, flowing quality and is a favorite among jazz musicians for its beautiful harmonic movement and singable melody.',

  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 9, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 17, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 20, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 21, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 25, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
  ],
};
