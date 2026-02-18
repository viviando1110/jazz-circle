// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const MOMENT_S_NOTICE: Standard = {
  title: "Moment's Notice",
  slug: 'moment-s-notice',
  composer: 'John Coltrane',
  year: 1957,
  form: 'AABA',
  defaultKey: 'Eb major',
  alternateKey: 'F major',
  tempo: { slow: 160, medium: 200, fast: 260 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'advanced',
  tags: ['hard-bop', 'bebop', 'modern'],
  description: 'A challenging Coltrane composition featuring rapid key changes through the cycle of fifths. The tune moves through multiple tonal centers, requiring advanced harmonic understanding and technical facility.',
  style: 'Post-Bop',
  historicalContext: 'Composed by John Coltrane and recorded on his landmark Blue Note album Blue Train (1957), Moment\'s Notice is one of Coltrane\'s most sophisticated compositions. Its complex, rapidly moving chord changes — featuring ii-V-I progressions in multiple keys moving at a pace of two chords per bar — showcased the harmonic complexity Coltrane was developing before his later modal period.',
  notableRecordings: [
    'John Coltrane — Blue Train (1957)',
    'Widely studied — (Coltrane composition requiring harmonic fluency)',
  ],
  harmonicSummary: 'Moment\'s Notice is a 32-bar composition (typically AABA) in F major with rapidly shifting ii-V-I progressions that move through multiple key centers at two chords per bar. The A section cycles through ii-V-I patterns in Eb, Db, F, and Db major in quick succession. The harmonic movement is denser than any standard of its era, requiring complete fluency in ii-V-I patterns in all keys. It foreshadowed the harmonic density of Giant Steps (1960) and remains one of the most challenging bebop/post-bop heads to navigate.',
  metaDescription: 'Moment\'s Notice chord changes and harmonic analysis. John Coltrane\'s post-bop composition (1957): rapid ii-V-I in multiple keys — from Blue Train, with notation, playback, and scale guides.',

  sections: [
    {
      name: 'A',
      label: 'A Section (bars 1-8)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Abm7', beats: 2 }] },
        { bar: 2, chords: [{ symbol: 'Db7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Gbmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 9-16)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Abm7', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Db7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Gbmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section / Bridge (bars 17-24)',
      bars: [
        { bar: 17, chords: [{ symbol: 'C#m7', beats: 2 }, { symbol: 'F#7', beats: 2 }] },
        { bar: 18, chords: [{ symbol: 'Bmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 20, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Ab7', beats: 2 }] },
        { bar: 22, chords: [{ symbol: 'Dbmaj7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 25-32)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Abm7', beats: 2 }] },
        { bar: 26, chords: [{ symbol: 'Db7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Gbmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
  ],
};
