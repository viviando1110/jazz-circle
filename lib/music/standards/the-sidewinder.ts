// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const THE_SIDEWINDER: Standard = {
  title: 'The Sidewinder',
  slug: 'the-sidewinder',
  composer: 'Lee Morgan',
  year: 1963,
  form: 'AABA',
  defaultKey: 'Eb major',
  alternateKey: 'F major',
  tempo: { slow: 120, medium: 140, fast: 160 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'beginner',
  tags: ['standard', 'soul-jazz', 'groove', 'funk', 'boogaloo'],
  description: 'A funky boogaloo tune that became a surprise hit. Lee Morgan\'s infectious groove and simple blues-based changes made this one of Blue Note\'s biggest commercial successes, crossing over to R&B radio.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Ab7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Ab7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Eb7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Ab7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Ab7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Eb7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Ab7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Ab7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Eb7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Ab7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'Ab7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Bb7', beats: 4 }] },
      ],
    },
  ],
};
