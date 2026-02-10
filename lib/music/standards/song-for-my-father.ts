// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const SONG_FOR_MY_FATHER: Standard = {
  title: 'Song for My Father',
  slug: 'song-for-my-father',
  composer: 'Horace Silver',
  year: 1964,
  form: 'AABA',
  defaultKey: 'F minor',
  alternateKey: 'E minor',
  tempo: { slow: 120, medium: 140, fast: 160 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'beginner',
  tags: ['standard', 'latin', 'bossa-nova', 'soul-jazz', 'modal'],
  description: 'A Latin-tinged soul-jazz classic with a memorable bass line. Horace Silver wrote this as a tribute to his father, incorporating Cape Verdean rhythmic influences. The simple modal structure makes it accessible for beginners.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Ebm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Ab7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
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
        { bar: 13, chords: [{ symbol: 'Ebm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Ab7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
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
        { bar: 29, chords: [{ symbol: 'Ebm7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'Ab7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
      ],
    },
  ],
};
