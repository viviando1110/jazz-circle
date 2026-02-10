// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const NEFERTITI: Standard = {
  title: 'Nefertiti',
  slug: 'nefertiti',
  composer: 'Wayne Shorter',
  year: 1967,
  form: 'AB',
  defaultKey: 'Bb major',
  alternateKey: 'C major',
  tempo: { slow: 100, medium: 130, fast: 160 },
  timeSignature: '4/4',
  totalBars: 16,
  difficulty: 'advanced',
  tags: ['hard-bop', 'modal', 'modern'],
  description: 'A mesmerizing Wayne Shorter composition featuring a repeating melody with subtle harmonic shifts. Famous for the Miles Davis recording where the rhythm section improvises while the horns play the melody repeatedly.',
  sections: [
    {
      name: 'A',
      label: 'A Section (bars 1-8)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Cm7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (bars 9-16)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'F7sus4', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
      ],
    },
  ],
};
