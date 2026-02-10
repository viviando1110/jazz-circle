// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const BLACK_ORPHEUS: Standard = {
  title: 'Black Orpheus',
  slug: 'black-orpheus',
  composer: 'Luiz Bonfa',
  year: 1959,
  form: 'ABA',
  defaultKey: 'A minor',
  alternateKey: 'E minor',
  tempo: { slow: 120, medium: 160, fast: 200 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'beginner',
  tags: ['bossa-nova', 'latin', 'ballad'],
  description: 'Also known as "Manha de Carnaval," this beautiful bossa nova standard features straightforward harmonic progressions perfect for beginners. The minor tonality and Latin feel make it a jazz essential.',
  sections: [
    {
      name: 'A',
      label: 'A Section (bars 1-8)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Bm7b5', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'E7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'E7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section / Bridge (bars 9-16)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 17-24)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Bm7b5', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'E7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'E7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Am6', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 25-32)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Bm7b5', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'E7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'E7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Am6', beats: 2 }, { symbol: 'E7', beats: 2 }] },
      ],
    },
  ],
};
