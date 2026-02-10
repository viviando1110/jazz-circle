// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const BODY_AND_SOUL: Standard = {
  title: 'Body and Soul',
  slug: 'body-and-soul',
  composer: 'Johnny Green',
  year: 1930,
  form: 'AABA',
  defaultKey: 'Db major',
  alternateKey: 'Eb major',
  tempo: {
    slow: 50,
    medium: 70,
    fast: 90,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'advanced',
  tags: ['standard', 'ballad', 'advanced', 'chromatic', 'coleman hawkins'],
  description:
    'Body and Soul is one of the most revered jazz ballads, composed by Johnny Green in 1930. Made famous by Coleman Hawkins\' 1939 recording, this 32-bar AABA form features sophisticated chromatic harmony, unexpected modulations, and rich voice leading. The tune demands harmonic maturity and is considered essential repertoire for advanced jazz musicians.',

  sections: [
    {
      name: 'A1',
      label: 'A Section (First)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 2, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Dbmaj7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
      ],
    },
    {
      name: 'A2',
      label: 'A Section (Second)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (Bridge)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'F#m7', beats: 2 }, { symbol: 'B7', beats: 2 }] },
        { bar: 19, chords: [{ symbol: 'Emaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'G#m7', beats: 2 }, { symbol: 'C#7', beats: 2 }] },
        { bar: 21, chords: [{ symbol: 'F#maj7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 23, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
      ],
    },
    {
      name: 'A3',
      label: 'A Section (Final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 26, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
      ],
    },
  ],
};
