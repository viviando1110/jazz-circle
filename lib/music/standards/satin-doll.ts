// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const SATIN_DOLL: Standard = {
  title: 'Satin Doll',
  slug: 'satin-doll',
  composer: 'Duke Ellington',
  year: 1953,
  form: 'AABA',
  defaultKey: 'C major',
  alternateKey: 'Bb major',
  tempo: {
    slow: 100,
    medium: 140,
    fast: 180,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'beginner',
  tags: ['standard', 'swing', 'beginner', 'duke ellington'],
  description:
    'Satin Doll is a classic Duke Ellington composition from 1953 featuring sophisticated yet accessible harmony. The tune is built on parallel ii-V progressions in the A sections, making it ideal for practicing voice leading and ii-V patterns. The bridge shifts to the IV and bVI key areas, providing harmonic variety. This is a must-know standard for any jazz musician.',
  style: 'Jazz Standard',
  historicalContext: 'Composed by Duke Ellington and Billy Strayhorn in 1953 (with lyrics later added by Johnny Mercer), Satin Doll became the closing theme for the Ellington orchestra and one of the most recognized jazz standards. Its sophisticated but accessible harmonic movement and swinging character made it a universal crowd-pleaser and jazz education staple.',
  notableRecordings: [
    'Duke Ellington Orchestra — (1953 original and multiple recordings)',
    'Ella Fitzgerald & Duke Ellington — (various recordings)',
    'Widely covered — (jazz standard and big band staple)',
  ],
  harmonicSummary: 'Satin Doll is a 32-bar AABA standard in C major built on a chain of ii-V progressions that cycle through the circle of fifths. The A section features: Dm7→G7 (ii-V in C), Em7→A7 (ii-V in D), Am7→D7 (ii-V in G), then Abm7→Db7 (chromatic ii-V a tritone away) before resolving Cmaj7. This alternation of diatonic and chromatic ii-V pairs — cycling through C, D, G, and the tritone Db — gives the tune its sophisticated but ear-friendly harmonic movement. The bridge touches G major before the final A returns home.',
  metaDescription: 'Satin Doll chord changes and harmonic analysis. Ellington/Strayhorn 1953 jazz standard in C major: ii-V cycle of fifths with chromatic pivot — with notation, playback, and scale guides.',

  sections: [
    {
      name: 'A1',
      label: 'A Section (First)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 2, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Cmaj7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
    {
      name: 'A2',
      label: 'A Section (Second)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (Bridge)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 18, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 19, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 22, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 23, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
    {
      name: 'A3',
      label: 'A Section (Final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 26, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
    },
  ],
};
