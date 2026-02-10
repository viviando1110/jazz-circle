// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const THE_NEARNESS_OF_YOU: Standard = {
  title: 'The Nearness of You',
  slug: 'the-nearness-of-you',
  composer: 'Hoagy Carmichael',
  year: 1937,
  form: 'AABA',
  defaultKey: 'F major',
  alternateKey: 'C major',
  tempo: { slow: 60, medium: 80, fast: 100 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'beginner',
  tags: ['standard', 'ballad', 'romantic', 'swing-era', 'popular'],
  description: 'A timeless romantic ballad from the Great American Songbook. Hoagy Carmichael\'s warm melody and accessible chord changes make this an ideal introduction to jazz ballads while offering depth for sophisticated interpretation.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'C7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'C7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
  ],
};
