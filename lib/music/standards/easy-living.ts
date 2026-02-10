// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const EASY_LIVING: Standard = {
  title: 'Easy Living',
  slug: 'easy-living',
  composer: 'Ralph Rainger',
  year: 1937,
  form: 'AABA',
  defaultKey: 'F major',
  alternateKey: 'Eb major',
  tempo: { slow: 60, medium: 80, fast: 100 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'ballad', 'romantic'],
  description: 'A sophisticated ballad with lush harmonic movement. Features chromatic bass lines and rich ii-V progressions.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'C7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 25, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Fmaj7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
  ],
};
