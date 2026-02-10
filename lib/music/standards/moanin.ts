// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const MOANIN: Standard = {
  title: "Moanin'",
  slug: 'moanin',
  composer: 'Bobby Timmons',
  year: 1958,
  form: 'AABA',
  defaultKey: 'F minor',
  alternateKey: 'E minor',
  tempo: { slow: 120, medium: 140, fast: 160 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'beginner',
  tags: ['standard', 'gospel', 'soul-jazz', 'hard-bop', 'minor'],
  description: 'A gospel-infused hard bop anthem with one of jazz\'s most recognizable riffs. Bobby Timmons\' composition for Art Blakey\'s Jazz Messengers epitomizes the soul-jazz movement with its churchy feel and infectious groove.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Fm7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Fm7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'C7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Fm7', beats: 4 }] },
      ],
    },
  ],
};
