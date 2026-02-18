// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const NICAS_DREAM: Standard = {
  title: "Nica's Dream",
  slug: 'nicas-dream',
  composer: 'Horace Silver',
  year: 1956,
  form: 'AABA',
  defaultKey: 'Bb minor',
  alternateKey: 'A minor',
  tempo: { slow: 140, medium: 160, fast: 180 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'bebop', 'hard-bop', 'minor'],
  description: 'A hard bop classic written for Pannonica de Koenigswarter, the jazz patroness. Features a memorable minor melody with sophisticated chord changes and a driving bebop rhythm.',
  style: 'Hard Bop',
  historicalContext: 'Composed by Horace Silver in 1956 and recorded by the Horace Silver Quintet, Nica\'s Dream was dedicated to jazz patron Pannonica "Nica" de Koenigswarter, a baroness who was a close friend and supporter of many jazz musicians including Thelonious Monk and Charlie Parker. It became one of Silver\'s most popular compositions and a hard bop standard.',
  notableRecordings: [
    'Horace Silver Quintet — (1956 recording)',
    'Art Blakey & the Jazz Messengers — (various recordings)',
    'Widely recorded — (hard bop standard)',
  ],
  harmonicSummary: 'Nica\'s Dream is a Latin-tinged hard bop tune in Bb minor built on a driving vamp that alternates between Bbm7 and Eb7, establishing a minor blues feel with a Latin clave rhythm. The form moves between this vamp section and a more harmonically active bridge with ii-V-I progressions in related key areas. The combination of Latin rhythm, minor blues tonality, and bebop harmonic language represents Silver\'s distinctive fusion of jazz tradition with Afro-Cuban influence.',
  metaDescription: 'Nica\'s Dream chord changes and harmonic analysis. Horace Silver\'s hard bop Latin standard (1956): Bb minor, Latin groove — dedicated to jazz patron Nica, with notation and scale guides.',

  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Eb7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
      ],
    },
  ],
};
