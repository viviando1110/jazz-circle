// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const I_LOVE_YOU: Standard = {
  title: 'I Love You',
  slug: 'i-love-you',
  composer: 'Cole Porter',
  year: 1943,
  form: 'ABAC',
  defaultKey: 'F major',
  alternateKey: 'Eb major',
  tempo: { slow: 80, medium: 110, fast: 140 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'porter', 'romantic'],
  description: 'A Cole Porter classic with elegant harmonic progression. Features distinctive chromatic movement and secondary dominants.',
  style: 'Jazz Standard',
  historicalContext: 'Composed by Cole Porter for the 1943 Broadway musical Mexican Hayride, I Love You has a somewhat unusual AABA structure and harmonic language typical of Porter\'s sophisticated approach. Despite sharing a title with many other songs, this Porter composition is identified by its specific chord changes and has become a jazz standard in its own right.',
  notableRecordings: [
    'Bing Crosby — (1944 recording)',
    'Charlie Parker — (various recordings)',
    'Bud Powell — (various recordings)',
  ],
  harmonicSummary: 'I Love You (Cole Porter) is a 32-bar AABA standard in F major with Porter\'s characteristic harmonic sophistication. The A section moves through F major with secondary dominants and chromatic passing chords, creating forward harmonic momentum. The bridge provides contrast through a different key area before the final A resolves home. The tune\'s clean harmonic structure and swing feel make it a versatile vehicle for jazz improvisation at medium to fast tempos.',
  metaDescription: 'I Love You chord changes and harmonic analysis. Cole Porter\'s 1943 jazz standard in F major: AABA form, secondary dominants, with notation, playback, and scale guides.',

  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Fmaj7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 17, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 19, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 21, chords: [{ symbol: 'Fmaj7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 22, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'C',
      label: 'C Section',
      bars: [
        { bar: 25, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Fmaj7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
  ],
};
