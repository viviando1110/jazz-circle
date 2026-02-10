// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const ORNITHOLOGY: Standard = {
  title: 'Ornithology',
  slug: 'ornithology',
  composer: 'Charlie Parker',
  year: 1946,
  form: 'AABA',
  defaultKey: 'G major',
  alternateKey: 'C major',
  tempo: { slow: 180, medium: 220, fast: 280 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'advanced',
  tags: ['standard', 'bebop', 'parker', '1940s', 'contrafact'],
  description: "Charlie Parker's bebop contrafact over \"How High the Moon\". One of the most iconic bebop compositions with a virtuosic melody line.",
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Bb7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Am7b5', beats: 2 }, { symbol: 'D7b9', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Bb7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Am7b5', beats: 2 }, { symbol: 'D7b9', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
      ],
    },
  ],
};
