// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const A_NIGHT_IN_TUNISIA: Standard = {
  title: 'A Night in Tunisia',
  slug: 'a-night-in-tunisia',
  composer: 'Dizzy Gillespie',
  year: 1942,
  form: 'AABA',
  defaultKey: 'D minor',
  alternateKey: 'E minor',
  tempo: { slow: 160, medium: 200, fast: 240 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'advanced',
  tags: ['standard', 'bebop', 'gillespie', '1940s', 'latin', 'afro-cuban'],
  description: "Dizzy Gillespie's bebop classic with Afro-Cuban influences. Features the distinctive half-step harmonic movement and a challenging bebop bridge.",
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Eb7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 2, chords: [{ symbol: 'Eb7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Eb7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Eb7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Eb7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Eb7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Dm7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Eb7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Eb7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Eb7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Eb7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Eb7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Am7b5', beats: 2 }, { symbol: 'D7b9', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Gm7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Am7b5', beats: 2 }, { symbol: 'D7b9', beats: 2 }] },
        { bar: 20, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7b9', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Dm7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Eb7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 26, chords: [{ symbol: 'Eb7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Eb7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Eb7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Eb7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Am7b5', beats: 2 }, { symbol: 'D7b9', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Dm7', beats: 4 }] },
      ],
    },
  ],
};
