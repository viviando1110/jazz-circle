// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const BLUES_FOR_ALICE: Standard = {
  title: 'Blues for Alice',
  slug: 'blues-for-alice',
  composer: 'Charlie Parker',
  year: 1951,
  form: 'Blues',
  defaultKey: 'F major',
  alternateKey: 'Bb major',
  tempo: { slow: 140, medium: 180, fast: 220 },
  timeSignature: '4/4',
  totalBars: 12,
  difficulty: 'advanced',
  tags: ['standard', 'bebop', 'parker', '1950s', 'blues', 'bebop-blues'],
  description: "Charlie Parker's advanced bebop blues with complex chromatic ii-V substitutions. A masterclass in bebop harmony over the blues form.",
  sections: [
    {
      name: 'Blues',
      label: 'Advanced Bebop Blues Chorus',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fmaj7', beats: 2 }, { symbol: 'Em7', beats: 1 }, { symbol: 'A7', beats: 1 }] },
        { bar: 2, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Bbmaj7', beats: 2 }, { symbol: 'Bbm7', beats: 1 }, { symbol: 'Eb7', beats: 1 }] },
        { bar: 5, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Fmaj7', beats: 2 }, { symbol: 'Am7', beats: 1 }, { symbol: 'D7', beats: 1 }] },
        { bar: 9, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Fmaj7', beats: 2 }, { symbol: 'Cm7', beats: 1 }, { symbol: 'F7', beats: 1 }] },
        { bar: 11, chords: [{ symbol: 'Bbmaj7', beats: 2 }, { symbol: 'Bbm7', beats: 1 }, { symbol: 'Eb7', beats: 1 }] },
        { bar: 12, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
      ],
    },
  ],
};
