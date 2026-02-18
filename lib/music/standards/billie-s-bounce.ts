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
  style: 'Bebop',
  historicalContext: 'Composed by Charlie Parker and recorded at his landmark November 1945 Savoy session — one of the first bebop recordings issued commercially — Billie\'s Bounce is a straight F blues that showcases Parker\'s bebop language over the blues form. The session also included Miles Davis on trumpet and Dizzy Gillespie briefly at the piano, and produced several defining bebop recordings.',
  notableRecordings: [
    'Charlie Parker — Savoy Records (November 1945, with Miles Davis)',
    'Charlie Parker — (multiple alternate takes from the same session)',
    'Widely played — (essential bebop blues vehicle)',
  ],
  harmonicSummary: 'Billie\'s Bounce is a 12-bar F blues with bebop-era enhancements. The basic I7 (F7)→IV7 (Bb7) movement is embellished with a quick change to Bb7 in bar 2, a dominant 7th (F7) through bars 3-4, and a ii-V turnaround (Cm7→F7 or Gm7→C7→F7) in bars 11-12. The harmonic rhythm is one chord per bar, keeping it accessible while the bebop vocabulary over the top is demanding. It remains the first jazz blues most students learn to improvise on.',
  metaDescription: 'Billie\'s Bounce chord changes and harmonic analysis. Charlie Parker\'s F bebop blues (1945): 12-bar blues with bebop turnaround, with notation, playback, and scale guides.',
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
