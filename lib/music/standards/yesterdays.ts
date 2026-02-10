// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const YESTERDAYS: Standard = {
  title: 'Yesterdays',
  slug: 'yesterdays',
  composer: 'Jerome Kern',
  year: 1933,
  form: 'AABA',
  defaultKey: 'D minor',
  alternateKey: 'E minor',
  tempo: { slow: 100, medium: 120, fast: 140 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'ballad', 'minor', 'show-tune', 'nostalgic'],
  description: 'A wistful minor ballad from the musical "Roberta". Jerome Kern\'s composition features sophisticated harmonic movement and a melancholic quality that has made it a favorite among jazz musicians for reflective interpretations.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7alt', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7alt', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7alt', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Em7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7alt', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7alt', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7alt', beats: 2 }] },
      ],
    },
  ],
};
