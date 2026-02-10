// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const WAVE: Standard = {
  title: 'Wave',
  slug: 'wave',
  composer: 'Antonio Carlos Jobim',
  year: 1967,
  form: 'AABA',
  defaultKey: 'D major',
  alternateKey: 'G major',
  tempo: { slow: 110, medium: 140, fast: 170 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['bossa-nova', 'latin', 'ballad'],
  description: 'One of Jobim\'s most sophisticated compositions, featuring rich chromatic harmony and lush chord voicings. The flowing melodic line evokes ocean waves, complemented by complex harmonic movement.',
  sections: [
    {
      name: 'A',
      label: 'A Section (bars 1-8)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Bm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 9-16)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Bm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section / Bridge (bars 17-24)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Em7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'F#m7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'B7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 25-32)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Bm7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Dmaj7', beats: 2 }, { symbol: 'Em7', beats: 1 }, { symbol: 'A7', beats: 1 }] },
      ],
    },
  ],
};
