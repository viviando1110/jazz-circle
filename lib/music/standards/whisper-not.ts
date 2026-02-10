// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const WHISPER_NOT: Standard = {
  title: 'Whisper Not',
  slug: 'whisper-not',
  composer: 'Benny Golson',
  year: 1956,
  form: 'AABA',
  defaultKey: 'C minor',
  alternateKey: 'D minor',
  tempo: { slow: 120, medium: 140, fast: 160 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'bebop', 'hard-bop', 'minor', 'ballad'],
  description: 'A lyrical minor composition with elegant harmonic movement. Benny Golson\'s beautiful melody works as both an up-tempo swinger and a haunting ballad, featuring sophisticated chord progressions that inspire creative improvisation.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7alt', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7alt', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Cm7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7alt', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7alt', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Cm7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Am7b5', beats: 2 }, { symbol: 'D7alt', beats: 2 }] },
        { bar: 20, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7alt', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'G7alt', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7alt', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7alt', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Cm7', beats: 4 }] },
      ],
    },
  ],
};
