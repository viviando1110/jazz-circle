// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const GOODBYE_PORK_PIE_HAT: Standard = {
  title: 'Goodbye Pork Pie Hat',
  slug: 'goodbye-pork-pie-hat',
  composer: 'Charles Mingus',
  year: 1959,
  form: 'AB',
  defaultKey: 'Eb major',
  alternateKey: 'F major',
  tempo: { slow: 60, medium: 80, fast: 100 },
  timeSignature: '4/4',
  totalBars: 12,
  difficulty: 'advanced',
  tags: ['standard', 'ballad', 'mingus', '1950s', 'blues'],
  description: "Charles Mingus's tribute to Lester Young. A 12-bar blues with sophisticated harmonic substitutions and a mournful melody.",
  style: 'Post-Bop',
  historicalContext: 'Composed by Charles Mingus in 1959 as an elegy for tenor saxophonist Lester Young, who died on March 15, 1959 — the day of the recording session. Young\'s porkpie hat was his trademark. The piece is one of the most emotionally powerful and harmonically distinctive compositions in jazz, with Mingus\'s characteristic use of unexpected chromatic harmony and blues feeling combined.',
  notableRecordings: [
    'Charles Mingus — Mingus Ah Um (1959)',
    'Joni Mitchell — Mingus (1979, with lyrics)',
    'Jeff Beck — Wired (1976)',
    'Widely recorded — (Mingus\'s most celebrated elegy)',
  ],
  harmonicSummary: 'Goodbye Pork Pie Hat is a slow, mournful ballad in F major with Mingus\'s characteristic chromatic harmonic language. The form blends blues feeling with jazz harmony, featuring unexpected chromatic chord movements, parallel harmony, and extended voicings. The harmonic language avoids predictable ii-V-I patterns in favor of more chromatic, emotionally charged progressions that mirror the grieving character of the piece. Its distinctive harmonic fingerprint makes it one of the most recognizable Mingus compositions.',
  metaDescription: 'Goodbye Pork Pie Hat chord changes and harmonic analysis. Charles Mingus\'s 1959 elegy for Lester Young: F major, chromatic blues harmony — from Mingus Ah Um, with notation and scale guides.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Am7b5', beats: 2 }, { symbol: 'D7b9', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 7, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
      ],
    },
  ],
};
