// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const CONFIRMATION: Standard = {
  title: 'Confirmation',
  slug: 'confirmation',
  composer: 'Charlie Parker',
  year: 1946,
  form: 'AABA',
  defaultKey: 'F major',
  alternateKey: 'Bb major',
  tempo: {
    slow: 160,
    medium: 220,
    fast: 280,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'advanced',
  tags: ['standard', 'bebop', 'advanced', 'charlie parker', 'fast tempo'],
  description:
    'Confirmation is a quintessential bebop composition by Charlie Parker from 1946. This 32-bar AABA form features rapid chord changes, chromatic movement, and the intricate melodic lines characteristic of Parker\'s genius. The tune is a rite of passage for bebop musicians and demands technical precision, harmonic understanding, and the ability to navigate complex changes at high speeds.',
  style: 'Bebop',
  historicalContext: 'Composed by Charlie Parker in the mid-1940s and recorded in 1946, Confirmation is widely considered Parker\'s compositional masterpiece — a 32-bar bebop tune whose melody perfectly outlines its sophisticated chord changes at high speed. Unlike many bebop tunes, it has a genuinely original chord progression rather than a contrafact, making it a cornerstone of the bebop repertoire.',
  notableRecordings: [
    'Charlie Parker — (1946 recording)',
    'Charlie Parker — (multiple recordings and alternate takes)',
    'Bill Evans — (various recordings)',
    'Widely studied — (considered Parker\'s finest composition)',
  ],
  harmonicSummary: 'Confirmation is a 32-bar AABA standard in F major with one of the most harmonically inventive chord progressions in bebop. The A section alone passes through F major, C minor, Bb major, and Eb major via smooth chromatic ii-V progressions. The tune modulates through multiple key centers within each A section, requiring fluid movement across ii-V-I patterns in F, Bb, and Eb. At bebop tempos, the melody itself teaches the changes — Parker\'s lines outline each chord with extraordinary precision.',
  metaDescription: 'Confirmation chord changes and harmonic analysis. Charlie Parker\'s bebop masterpiece (1946): F major, multi-key ii-V progressions, AABA — considered his finest composition, with notation and scale guides.',

  sections: [
    {
      name: 'A1',
      label: 'A Section (First)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A2',
      label: 'A Section (Second)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (Bridge)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 18, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 20, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 22, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 23, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
      ],
    },
    {
      name: 'A3',
      label: 'A Section (Final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
  ],
};
