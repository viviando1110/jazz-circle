// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const EVERYTHING_HAPPENS_TO_ME: Standard = {
  title: 'Everything Happens to Me',
  slug: 'everything-happens-to-me',
  composer: 'Matt Dennis',
  year: 1940,
  form: 'AABA',
  defaultKey: 'Eb major',
  alternateKey: 'F major',
  tempo: { slow: 60, medium: 80, fast: 100 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'ballad', 'romantic'],
  description: 'A melancholic ballad made famous by Frank Sinatra. Features smooth voice leading and romantic harmonic progressions.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Abm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Db7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Gbmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Gbmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Bb7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 25, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
  ],
};
