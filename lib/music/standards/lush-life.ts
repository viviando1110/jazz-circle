// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const LUSH_LIFE: Standard = {
  title: 'Lush Life',
  slug: 'lush-life',
  composer: 'Billy Strayhorn',
  year: 1949,
  form: 'Through-composed',
  defaultKey: 'Db major',
  alternateKey: 'C major',
  tempo: { slow: 50, medium: 70, fast: 90 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'advanced',
  tags: ['standard', 'ballad', 'strayhorn', 'complex', 'chromatic'],
  description: 'A sophisticated masterpiece by Billy Strayhorn with through-composed form. Features extensive chromaticism, modulations, and some of the most challenging harmony in the jazz repertoire.',
  sections: [
    {
      name: 'A',
      label: 'Section A',
      bars: [
        { bar: 1, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'C#dim7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'Section B',
      bars: [
        { bar: 9, chords: [{ symbol: 'Abm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Db7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Gbmaj7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'E7b9', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
      ],
    },
    {
      name: 'C',
      label: 'Section C',
      bars: [
        { bar: 17, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 19, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'C#dim7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 23, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
      ],
    },
    {
      name: 'D',
      label: 'Section D',
      bars: [
        { bar: 25, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
      ],
    },
  ],
};
