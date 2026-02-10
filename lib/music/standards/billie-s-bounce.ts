// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const BILLIES_BOUNCE: Standard = {
  title: "Billie's Bounce",
  slug: 'billie-s-bounce',
  composer: 'Charlie Parker',
  year: 1945,
  form: 'Blues',
  defaultKey: 'F major',
  alternateKey: 'Bb major',
  tempo: { slow: 120, medium: 160, fast: 200 },
  timeSignature: '4/4',
  totalBars: 12,
  difficulty: 'intermediate',
  tags: ['standard', 'bebop', 'parker', '1940s', 'blues', 'bebop-blues'],
  description: "Charlie Parker's bebop blues in F. A perfect introduction to bebop harmony with classic ii-V substitutions over the blues form.",
  sections: [
    {
      name: 'Blues',
      label: 'Bebop Blues Chorus',
      bars: [
        { bar: 1, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Bdim7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 9, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'F7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
      ],
    },
  ],
};
