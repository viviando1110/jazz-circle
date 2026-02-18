// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const MOANIN: Standard = {
  title: "Moanin'",
  slug: 'moanin',
  composer: 'Bobby Timmons',
  year: 1958,
  form: 'AABA',
  defaultKey: 'F minor',
  alternateKey: 'E minor',
  tempo: { slow: 120, medium: 140, fast: 160 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'beginner',
  tags: ['standard', 'gospel', 'soul-jazz', 'hard-bop', 'minor'],
  description: 'A gospel-infused hard bop anthem with one of jazz\'s most recognizable riffs. Bobby Timmons\' composition for Art Blakey\'s Jazz Messengers epitomizes the soul-jazz movement with its churchy feel and infectious groove.',
  style: 'Hard Bop',
  historicalContext: 'Composed by pianist Bobby Timmons for Art Blakey & the Jazz Messengers, Moanin\' was recorded in 1958 on the album of the same name. Timmons\'s gospel and blues-drenched composition became one of the definitive statements of hard bop\'s soul and funk influences. Charles Mingus also had a well-known piece called "Moanin\'" (an earlier, separate composition) — the Timmons version is the hard bop standard.',
  notableRecordings: [
    'Art Blakey & the Jazz Messengers — Moanin\' (1958)',
    'Bobby Timmons — (various recordings)',
    'Widely covered — (hard bop soul jazz staple)',
  ],
  harmonicSummary: 'Moanin\' (Timmons) is a blues-rooted hard bop tune in F major with a gospel-inflected character. The melody is built around a call-and-response motif, and the chord changes combine standard blues motion (I7, IV7, V7 in F) with bebop jazz vocabulary. The "call" of the theme uses blues chromatic inflection, while the "response" is more harmonically elaborate. The soul and groove of the piece come from the blues foundation, while the jazz harmony adds sophistication. It is commonly played at medium-up swing tempos.',
  metaDescription: 'Moanin\' chord changes and harmonic analysis. Bobby Timmons\'s gospel-blues hard bop standard (1958): F major, call-and-response — Art Blakey classic, with notation and scale guides.',

  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Fm7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Fm7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'C7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Fm7', beats: 4 }] },
      ],
    },
  ],
};
