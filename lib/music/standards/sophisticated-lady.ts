// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const SOPHISTICATED_LADY: Standard = {
  title: 'Sophisticated Lady',
  slug: 'sophisticated-lady',
  composer: 'Duke Ellington',
  year: 1933,
  form: 'AABA',
  defaultKey: 'Ab major',
  alternateKey: 'F major',
  tempo: { slow: 60, medium: 80, fast: 100 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'advanced',
  tags: ['standard', 'ellington', 'ballad', 'complex', 'chromatic'],
  description: 'An Ellington masterpiece with sophisticated chromatic harmony. Features extensive reharmonization and complex voice leading.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Dbmaj7', beats: 2 }, { symbol: 'Dbm7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Dbmaj7', beats: 2 }, { symbol: 'Dbm7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 19, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Bb7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 25, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Dbmaj7', beats: 2 }, { symbol: 'Dbm7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
      ],
    },
  ],
};
