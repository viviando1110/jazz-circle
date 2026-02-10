// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const INVITATION: Standard = {
  title: 'Invitation',
  slug: 'invitation',
  composer: 'Bronislau Kaper',
  year: 1952,
  form: 'ABAC',
  defaultKey: 'C minor',
  alternateKey: 'D minor',
  tempo: { slow: 120, medium: 160, fast: 200 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'advanced',
  tags: ['standard', 'latin', 'ballad'],
  description: 'A sophisticated Latin-jazz standard with complex chromatic harmony and dramatic melodic contours. Features rich minor tonality and challenging voice leading.',
  sections: [
    {
      name: 'A',
      label: 'A Section (bars 1-8)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Cm6', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Cm6', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7b9', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Cm6', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Abmaj7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (bars 9-16)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Cm6', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Cm6', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7b9', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Cm6', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 17-24)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Cm6', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Cm6', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7b9', beats: 2 }] },
        { bar: 20, chords: [{ symbol: 'Cm6', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Abmaj7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
    {
      name: 'C',
      label: 'C Section (bars 25-32)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Am7b5', beats: 2 }, { symbol: 'D7b9', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7b9', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Cm6', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7b9', beats: 2 }] },
      ],
    },
  ],
};
