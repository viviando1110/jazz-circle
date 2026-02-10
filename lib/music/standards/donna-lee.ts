// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const DONNA_LEE: Standard = {
  title: 'Donna Lee',
  slug: 'donna-lee',
  composer: 'Charlie Parker',
  year: 1947,
  form: 'AB',
  defaultKey: 'Ab major',
  alternateKey: 'F major',
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
    'Donna Lee is a bebop masterpiece composed by Charlie Parker in 1947, based on the chord changes of Indiana (Back Home Again in Indiana). This 32-bar AB form features extremely fast-moving eighth-note lines and challenging harmonic rhythm. The melody itself is an exercise in bebop language, making this tune essential study material for advanced bebop musicians.',

  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 17, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 22, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 25, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 26, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Abmaj7', beats: 2 }, { symbol: 'Gm7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
      ],
    },
  ],
};
