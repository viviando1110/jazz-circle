// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const HAVE_YOU_MET_MISS_JONES: Standard = {
  title: 'Have You Met Miss Jones?',
  slug: 'have-you-met-miss-jones',
  composer: 'Richard Rodgers & Lorenz Hart',
  year: 1937,
  form: 'AABA',
  defaultKey: 'F major',
  alternateKey: 'Eb major',
  tempo: {
    slow: 120,
    medium: 160,
    fast: 200,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'swing', 'intermediate', 'rodgers and hart'],
  description:
    'Have You Met Miss Jones? is a sophisticated standard by Rodgers and Hart from 1937 featuring unexpected harmonic surprises. This 32-bar AABA form is notable for its bridge, which contains one of the most dramatic key shifts in the standard repertoire—a sudden jump up a major third. The tune requires smooth navigation of distant modulations and is beloved by jazz musicians for its harmonic adventure.',
  style: 'Jazz Standard',
  historicalContext: 'Composed by Richard Rodgers with lyrics by Lorenz Hart for the 1937 Broadway musical I\'d Rather Be Right, Have You Met Miss Jones? is notable for its unusually adventurous bridge, which predates Giant Steps by over 20 years in cycling through key centers a major third apart. The bridge\'s cycle of major thirds was far ahead of its time harmonically.',
  notableRecordings: [
    'Fats Waller — (1937 recording)',
    'Bill Evans — (various recordings)',
    'Oscar Peterson — (various recordings)',
    'Widely covered — (jazz standard)',
  ],
  harmonicSummary: 'Have You Met Miss Jones is a 32-bar AABA standard in F major. The A sections are in F major with standard ii-V-I progressions. The remarkable 8-bar bridge cycles through three key centers a major third apart — Bb major→Db major→A major→F major — a system that John Coltrane would later formalize as "Coltrane changes" in Giant Steps (1960). This forward-thinking bridge makes the tune historically significant and harmonically challenging, as the key changes move by major thirds rather than the more common fifth motion.',
  metaDescription: 'Have You Met Miss Jones chord changes and harmonic analysis. Rodgers/Hart 1937 standard: F major, bridge cycles major thirds (Bb→Db→A→F) — pre-figuring Coltrane changes, with notation and scale guides.',

  sections: [
    {
      name: 'A1',
      label: 'A Section (First)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Fmaj7', beats: 2 }, { symbol: 'Dm7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
      ],
    },
    {
      name: 'A2',
      label: 'A Section (Second)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (Bridge)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 20, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 21, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
      ],
    },
    {
      name: 'A3',
      label: 'A Section (Final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
      ],
    },
  ],
};
