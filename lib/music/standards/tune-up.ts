// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const TUNE_UP: Standard = {
  title: 'Tune Up',
  slug: 'tune-up',
  composer: 'Miles Davis',
  year: 1953,
  form: 'AAB',
  defaultKey: 'D major',
  alternateKey: 'C major',
  tempo: { slow: 140, medium: 180, fast: 220 },
  timeSignature: '4/4',
  totalBars: 24,
  difficulty: 'intermediate',
  tags: ['standard', 'bebop', 'davis', '1950s', 'ii-v'],
  description: "Miles Davis's composition built entirely on ii-V progressions descending by whole steps. An essential study piece for learning ii-V patterns in all keys.",
  sections: [
    {
      name: 'A',
      label: 'A Section (first cycle)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Em7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (second cycle)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Em7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 17, chords: [{ symbol: 'Em7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Em7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
      ],
    },
  ],
};
