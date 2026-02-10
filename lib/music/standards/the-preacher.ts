// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const THE_PREACHER: Standard = {
  title: 'The Preacher',
  slug: 'the-preacher',
  composer: 'Horace Silver',
  year: 1955,
  form: 'AABA',
  defaultKey: 'F major',
  alternateKey: 'Bb major',
  tempo: { slow: 120, medium: 140, fast: 160 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'beginner',
  tags: ['standard', 'gospel', 'soul-jazz', 'funky'],
  description: 'A gospel-influenced hard bop tune with a churchy feel. One of Horace Silver\'s earliest hits, featuring a call-and-response melody that evokes Sunday morning church services.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'F7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'F7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'F7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'F7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'C7', beats: 4 }] },
      ],
    },
  ],
};
