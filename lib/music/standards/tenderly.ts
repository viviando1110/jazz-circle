// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const TENDERLY: Standard = {
  title: 'Tenderly',
  slug: 'tenderly',
  composer: 'Walter Gross',
  year: 1946,
  form: 'AABA',
  defaultKey: 'Eb major',
  alternateKey: 'F major',
  tempo: {
    slow: 50,
    medium: 70,
    fast: 90,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'ballad', 'intermediate', 'romantic'],
  description:
    'Tenderly is a beautiful ballad composed by Walter Gross in 1946 with lyrics by Jack Lawrence. This 32-bar AABA form features lush harmony and gentle modulations, making it a favorite for romantic performances. The tune showcases smooth voice leading and elegant chord progressions, requiring sensitive phrasing and emotional depth. It has been recorded by countless jazz artists and remains a essential ballad in the jazz repertoire.',
  style: 'Ballad',
  historicalContext: 'Composed by Walter Gross with lyrics by Jack Lawrence in 1946, Tenderly became a jazz standard and pop ballad through recordings by Rosemary Clooney and Sarah Vaughan. Its warm, diatonic harmonic language and gently lilting 3/4 feel give it an old-fashioned, intimate charm that has kept it in the repertoire for over seventy years.',
  notableRecordings: [
    'Rosemary Clooney — (1952, one of the definitive pop versions)',
    'Sarah Vaughan — (various recordings)',
    'Charlie Parker — (various recordings)',
    'Widely recorded — (jazz ballad standard)',
  ],
  harmonicSummary: 'Tenderly is a 32-bar AABA ballad in Eb major played in 3/4 waltz time. The A sections feature warm, diatonic ii-V-I progressions in Eb with some secondary dominants adding color — the harmony is lush without being complex. The bridge provides harmonic contrast through a brief modulation before the final A returns home. The waltz feel and comfortable harmonic language make it a good vehicle for practicing lyrical, singing jazz improvisation and developing a natural sense of phrase in 3/4.',
  metaDescription: 'Tenderly chord changes and harmonic analysis. Walter Gross\'s 1946 jazz waltz ballad in Eb major: 3/4 time, diatonic ii-V-I, AABA — with notation, playback, and scale guides.',

  sections: [
    {
      name: 'A1',
      label: 'A Section (First)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Abmaj7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A2',
      label: 'A Section (Second)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Abmaj7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (Bridge)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'Gbm7', beats: 2 }] },
        { bar: 22, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 23, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
      ],
    },
    {
      name: 'A3',
      label: 'A Section (Final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Abmaj7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
  ],
};
