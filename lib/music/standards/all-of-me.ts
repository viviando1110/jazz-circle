// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const ALL_OF_ME: Standard = {
  title: 'All of Me',
  slug: 'all-of-me',
  composer: 'Gerald Marks & Seymour Simons',
  year: 1931,
  form: 'ABAC',
  defaultKey: 'C major',
  alternateKey: 'F major',
  tempo: {
    slow: 100,
    medium: 140,
    fast: 180,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'beginner',
  tags: ['standard', 'swing', 'beginner', 'classic'],
  description:
    'All of Me is a classic American standard from 1931 composed by Gerald Marks and Seymour Simons. This 32-bar ABAC form features simple, memorable changes that are perfect for beginners learning jazz. The tune includes basic ii-V progressions and a brief modulation to the relative minor, making it ideal for developing fundamental jazz vocabulary.',
  style: 'Jazz Standard',
  historicalContext: 'Composed by Gerald Marks with lyrics by Seymour Simons in 1931, All of Me was popularized through recordings by Ruth Etting, Paul Whiteman, and Louis Armstrong. Its diatonic-with-secondary-dominants harmonic language and memorable melody made it a perennial jazz standard across all eras, from the swing period through bebop and into contemporary jazz.',
  notableRecordings: [
    'Louis Armstrong — (1932 recording)',
    'Billie Holiday — (1941 recording)',
    'Frank Sinatra — (multiple recordings)',
    'Willie Nelson — Stardust (1978)',
  ],
  harmonicSummary: 'All of Me is a 32-bar AABA standard in C major built on a chain of secondary dominants. The A section cycles: Cmaj7→E7 (secondary dominant to Am)→A7 (secondary dominant to Dm)→Dm7→E7→Am7→D7→Dm7→G7→C. Each secondary dominant temporarily tonicizes the following chord, creating a bright, forward-moving harmonic momentum characteristic of the era. The bridge briefly tonicizes F major before the final A resolves home.',
  metaDescription: 'All of Me chord changes and harmonic analysis. Marks/Simons 1931 jazz standard in C major: secondary dominant chain, AABA form, with notation, playback, and scale guides.',

  sections: [
    {
      name: 'A1',
      label: 'A Section (First)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'E7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'E7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Dm7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'E7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'E7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Cmaj7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
    {
      name: 'A2',
      label: 'A Section (Second)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'E7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'E7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Dm7', beats: 4 }] },
      ],
    },
    {
      name: 'C',
      label: 'C Section (Ending)',
      bars: [
        { bar: 25, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Cmaj7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Em7', beats: 2 }, { symbol: 'A7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
    },
  ],
};
