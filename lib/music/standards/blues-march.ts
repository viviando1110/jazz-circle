// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const BLUES_MARCH: Standard = {
  title: 'Blues March',
  slug: 'blues-march',
  composer: 'Benny Golson',
  year: 1958,
  form: 'Blues',
  defaultKey: 'Bb major',
  alternateKey: 'F major',
  tempo: { slow: 120, medium: 140, fast: 160 },
  timeSignature: '4/4',
  totalBars: 12,
  difficulty: 'beginner',
  tags: ['standard', 'blues', 'hard-bop', 'march', 'bebop'],
  description: 'A spirited blues with a martial swing feel. Benny Golson\'s composition for Art Blakey\'s Jazz Messengers combines traditional blues changes with a march-like rhythmic character that\'s both playful and hard-driving.',
  style: 'Hard Bop',
  historicalContext: 'Composed by Benny Golson in 1958 for the Art Blakey & the Jazz Messengers album Moanin\', Blues March was one of Golson\'s signature pieces with the Messengers and helped define the hard bop style. Its swinging march feel — a blues played with a two-beat emphasis recalling military marching bands — became an instantly recognizable part of the hard bop repertoire.',
  notableRecordings: [
    'Art Blakey & the Jazz Messengers — Moanin\' (1958)',
    'Benny Golson — (various recordings)',
  ],
  harmonicSummary: 'Blues March is a 12-bar blues in Bb with a march-like two-feel swing groove instead of standard 4/4 jazz swing. The chord changes follow a standard Bb blues structure — I7 (Bb7), IV7 (Eb7), V7 (F7) — with bebop-era ii-V turnarounds. The march rhythmic character transforms the familiar blues form into something distinctly energetic, and the simple harmonic structure allows soloists to focus on rhythmic invention and blues vocabulary.',
  metaDescription: 'Blues March chord changes and harmonic analysis. Benny Golson\'s hard bop standard (1958): 12-bar Bb blues with march feel, from Art Blakey\'s Moanin\', with notation and scale guides.',
  sections: [
    {
      name: 'A',
      label: 'Blues Form',
      bars: [
        { bar: 1, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
      ],
    },
  ],
};
