// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const JUST_FRIENDS: Standard = {
  title: 'Just Friends',
  slug: 'just-friends',
  composer: 'John Klenner',
  year: 1931,
  form: 'AB',
  defaultKey: 'C major',
  alternateKey: 'F major',
  tempo: {
    slow: 100,
    medium: 140,
    fast: 180,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'swing', 'intermediate', 'ii-V-I'],
  description:
    'Just Friends is a beautiful standard composed by John Klenner in 1931 featuring smooth voice leading and classic ii-V-I progressions. This 32-bar AB form is ideal for intermediate players working on connecting chord changes and developing melodic ideas through key centers. The tune has a lyrical, flowing quality that rewards sensitive phrasing.',

  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Cmaj7', beats: 2 }, { symbol: 'Am7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 17, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 25, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 26, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
    },
  ],
};
