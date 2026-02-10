// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const IF_I_SHOULD_LOSE_YOU: Standard = {
  title: 'If I Should Lose You',
  slug: 'if-i-should-lose-you',
  composer: 'Ralph Rainger',
  year: 1935,
  form: 'ABAC',
  defaultKey: 'Db major',
  alternateKey: 'F major',
  tempo: { slow: 120, medium: 160, fast: 200 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'bebop', 'ballad'],
  description: 'A beautiful ballad with rich harmonic movement, popular among bebop musicians. Features chromatic descending bass lines and ii-V progressions.',
  sections: [
    {
      name: 'A',
      label: 'A Section (bars 1-8)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Gbmaj7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Gm7b5', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (bars 9-16)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Dbmaj7', beats: 2 }, { symbol: 'Bbm7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 17-24)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 19, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 20, chords: [{ symbol: 'Gbmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Gm7b5', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 22, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 23, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'C',
      label: 'C Section (bars 25-32)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Gm7b5', beats: 2 }, { symbol: 'C7b9', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Dbmaj7', beats: 2 }, { symbol: 'Ebm7', beats: 1 }, { symbol: 'Ab7', beats: 1 }] },
      ],
    },
  ],
};
