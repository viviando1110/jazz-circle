// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const DOLPHIN_DANCE: Standard = {
  title: 'Dolphin Dance',
  slug: 'dolphin-dance',
  composer: 'Herbie Hancock',
  year: 1965,
  form: 'Through-composed',
  defaultKey: 'Eb major',
  alternateKey: 'C major',
  tempo: { slow: 140, medium: 160, fast: 180 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'advanced',
  tags: ['standard', 'modal', 'complex-harmony', 'through-composed'],
  description: 'A harmonically sophisticated composition with flowing, through-composed form. Features complex chord progressions and chromatic movement that challenge improvisers while maintaining a lyrical, dance-like quality.',
  sections: [
    {
      name: 'A',
      label: 'First Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'Second Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
      ],
    },
    {
      name: 'C',
      label: 'Third Section',
      bars: [
        { bar: 17, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 19, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 21, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 23, chords: [{ symbol: 'Dmaj7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
      ],
    },
    {
      name: 'D',
      label: 'Final Section',
      bars: [
        { bar: 25, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
  ],
};
