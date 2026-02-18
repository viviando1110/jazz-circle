// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const I_HEAR_A_RHAPSODY: Standard = {
  title: 'I Hear a Rhapsody',
  slug: 'i-hear-a-rhapsody',
  composer: 'George Fragos, Jack Baker, Dick Gasparre',
  year: 1940,
  form: 'AABA',
  defaultKey: 'Eb major',
  alternateKey: 'F major',
  tempo: { slow: 100, medium: 140, fast: 180 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'swing', 'bebop'],
  description: 'A bebop favorite with flowing harmonic movement. Features classic ii-V progressions and chromaticism.',
  style: 'Jazz Standard',
  historicalContext: 'Composed by George Fragos, Jack Baker, and Dick Gasparre in 1940, I Hear a Rhapsody became a jazz standard through recordings by Glenn Miller and Jimmy Dorsey. Its sweeping, rhapsodic melody and appealing harmonic progressions made it a favorite of jazz musicians through the swing and bebop eras.',
  notableRecordings: [
    'Jimmy Dorsey — (1941 recording)',
    'Bud Powell — (various recordings)',
    'Bill Evans — (various recordings)',
  ],
  harmonicSummary: 'I Hear a Rhapsody is a 32-bar AABA standard typically in C major with warm, singable harmonic progressions. The A section features clear ii-V-I motion in C with some secondary dominant color, while the bridge moves to a contrasting tonal area before returning home. The tune\'s straightforward harmonic language and memorable melody make it a good vehicle for swing-era and bebop vocabulary, and it is often played at medium swing tempos.',
  metaDescription: 'I Hear a Rhapsody chord changes and harmonic analysis. Fragos/Baker/Gasparre 1940 jazz standard in C major: AABA form, ii-V-I progressions, with notation, playback, and scale guides.',

  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Gbmaj7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Gbmaj7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
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
        { bar: 23, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Bb7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 25, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Gbmaj7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
  ],
};
