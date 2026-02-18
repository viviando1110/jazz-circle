// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const BEAUTIFUL_LOVE: Standard = {
  title: 'Beautiful Love',
  slug: 'beautiful-love',
  composer: 'Victor Young',
  year: 1931,
  form: 'ABAC',
  defaultKey: 'D minor',
  alternateKey: 'E minor',
  tempo: {
    slow: 100,
    medium: 140,
    fast: 180,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'minor key', 'intermediate', 'ii-V-i'],
  description:
    'Beautiful Love is a romantic standard composed by Victor Young in 1931 featuring elegant minor key harmony. This 32-bar ABAC form moves through multiple minor key centers with classic ii-V-i progressions, making it excellent for developing facility in minor keys. The tune has a sophisticated, wistful quality and is a favorite for exploring minor harmony and voice leading.',
  style: 'Jazz Standard',
  historicalContext: 'First published in 1931 with music attributed to Victor Young (later also credited to Egbert Van Alstyne and others), Beautiful Love is a waltz-time ballad that became a beloved vehicle for lyrical jazz improvisation. Its gentle D minor tonality and flowing ii-V-i progressions give it a bittersweet, introspective character well-suited to the ballad style.',
  notableRecordings: [
    'Bill Evans — (various trio recordings)',
    'Chet Baker — (various recordings)',
    'Widely recorded — (common in the jazz ballad repertoire)',
  ],
  harmonicSummary: 'Beautiful Love is an AABA standard in D minor that cycles through minor ii-V-i progressions (Em7b5→A7→Dm) with gentle harmonic rhythm. The relative major (F) provides tonal contrast in the A sections, and the bridge moves through related key areas. Its sparse, diatonic harmonic language and three-beat feel give improvisers ample space to develop long melodic lines. The tune is ideal for practicing minor key voice leading and lyrical phrasing.',
  metaDescription: 'Beautiful Love chord changes and harmonic analysis. 1931 jazz ballad in D minor: minor ii-V-i cycles, AABA form, with notation, playback, and scale guides.',

  sections: [
    {
      name: 'A1',
      label: 'A Section (First)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'E7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Dm6', beats: 4 }] },
      ],
    },
    {
      name: 'A2',
      label: 'A Section (Second)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 20, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 22, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Bm7b5', beats: 2 }, { symbol: 'E7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
      ],
    },
    {
      name: 'C',
      label: 'C Section (Ending)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Em7b5', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Dm6', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Dm6', beats: 4 }] },
      ],
    },
  ],
};
