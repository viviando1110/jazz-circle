// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const IN_A_MELLOW_TONE: Standard = {
  title: 'In a Mellow Tone',
  slug: 'in-a-mellow-tone',
  composer: 'Duke Ellington',
  year: 1939,
  form: 'AABA',
  defaultKey: 'Ab major',
  alternateKey: 'F major',
  tempo: { slow: 120, medium: 160, fast: 200 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'swing', 'ellington', '1930s'],
  description: 'Duke Ellington swing tune with a laid-back groove. Features straightforward harmony perfect for developing swing feel.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Eb7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
      ],
    },
  ],
};
