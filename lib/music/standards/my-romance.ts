// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const MY_ROMANCE: Standard = {
  title: 'My Romance',
  slug: 'my-romance',
  composer: 'Richard Rodgers',
  year: 1935,
  form: 'AABA',
  defaultKey: 'C major',
  alternateKey: 'Bb major',
  tempo: { slow: 80, medium: 110, fast: 140 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'ballad', 'rodgers-hart', '1930s'],
  description: 'Classic Rodgers and Hart ballad with beautiful voice leading. A favorite for ballad playing with sophisticated harmonic movement.',
  style: 'Jazz Standard',
  historicalContext: 'Composed by Richard Rodgers with lyrics by Lorenz Hart for the 1935 Broadway musical Jumbo, My Romance is one of the most recorded Rodgers and Hart songs in jazz. Its gentle, lilting character and clean harmonic language make it popular with both singers and pianists. Bill Evans\'s solo piano version is considered the definitive jazz interpretation.',
  notableRecordings: [
    'Jimmy Durante — (1935 original Broadway)',
    'Bill Evans — Waltz for Debby (1961)',
    'Tony Bennett — (various recordings)',
    'Widely recorded — (jazz standard)',
  ],
  harmonicSummary: 'My Romance is a 32-bar AABA standard in C major with accessible, song-like harmonic movement. The A sections feature clean ii-V-I progressions in C with diatonic secondary dominants, creating a flowing, symmetrical harmonic rhythm. The bridge briefly tonicizes the subdominant (F major) before the final A resolves home. Its predictable but satisfying harmonic movement and lush melody make it an ideal vehicle for lyrical improvisation and chord melody playing.',
  metaDescription: 'My Romance chord changes and harmonic analysis. Rodgers/Hart 1935 jazz standard in C major: clean ii-V-I, AABA form — Bill Evans piano classic, with notation, playback, and scale guides.',

  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Em7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Ebdim7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'G7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
  ],
};
