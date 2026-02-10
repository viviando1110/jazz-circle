// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const HOW_HIGH_THE_MOON: Standard = {
  title: 'How High the Moon',
  slug: 'how-high-the-moon',
  composer: 'Morgan Lewis',
  year: 1940,
  form: 'AB',
  defaultKey: 'G major',
  alternateKey: 'F major',
  tempo: {
    slow: 120,
    medium: 180,
    fast: 240,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'bebop', 'intermediate', 'fast tempo'],
  description:
    'How High the Moon is a popular bebop standard composed by Morgan Lewis in 1940. This 32-bar AB form is characterized by rapid chord changes and frequent ii-V progressions, making it a favorite for bebop improvisers. The tune moves through multiple key centers, challenging players to navigate harmonic complexity at fast tempos.',

  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Bm7', beats: 2 }, { symbol: 'E7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Bm7', beats: 2 }, { symbol: 'E7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 17, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 20, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 21, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 25, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 26, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Bm7', beats: 2 }, { symbol: 'E7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Bm7', beats: 2 }, { symbol: 'E7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
      ],
    },
  ],
};
