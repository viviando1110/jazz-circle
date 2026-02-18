// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const ON_GREEN_DOLPHIN_STREET: Standard = {
  title: 'On Green Dolphin Street',
  slug: 'on-green-dolphin-street',
  composer: 'Bronislau Kaper',
  year: 1947,
  form: 'ABAB',
  defaultKey: 'C major',
  alternateKey: 'Eb major',
  tempo: {
    slow: 120,
    medium: 160,
    fast: 200,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'latin', 'intermediate', 'bossa nova'],
  description:
    'On Green Dolphin Street is a latin jazz standard composed by Bronislau Kaper in 1947 for the film Green Dolphin Street. This 32-bar ABAB form features a distinctive A section with descending chromatic movement and a contrasting B section with ii-V progressions. Often played as a bossa nova, this tune is essential repertoire for understanding latin jazz harmony.',
  style: 'Jazz Standard',
  historicalContext: 'Composed by Bronislau Kaper with lyrics by Ned Washington for the 1947 MGM film Green Dolphin Street, the tune was largely forgotten until Miles Davis recorded it in 1958 on Jazz Track. That recording — with Bill Evans on piano — transformed it into a jazz standard. John Coltrane also recorded it, further cementing its place in the repertoire.',
  notableRecordings: [
    'Miles Davis — Jazz Track (1958, with Bill Evans)',
    'John Coltrane — (various recordings)',
    'Bill Evans — (various trio recordings)',
    'Widely recorded — (jazz standard from 1958 onward)',
  ],
  harmonicSummary: 'On Green Dolphin Street is a 32-bar AABA standard in C major with a distinctive first A section that pivots between C major and Db major (a half-step modulation) before settling into C. This half-step key pivot in bars 1-8 is the tune\'s defining harmonic feature — the same relationship as Blue Bossa but within a longer form. The second A section stays in C major. The bridge moves to Eb major before the final A returns home. This combination of a half-step pivot and conventional ii-V-I makes it harmonically distinctive.',
  metaDescription: 'On Green Dolphin Street chord changes and harmonic analysis. Bronislau Kaper\'s 1947 standard: C major with Db modulation — Miles Davis & Coltrane classic, with notation and scale guides.',

  sections: [
    {
      name: 'A1',
      label: 'A Section (First)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B1',
      label: 'B Section (First)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Am7b5', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
      ],
    },
    {
      name: 'A2',
      label: 'A Section (Second)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 22, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B2',
      label: 'B Section (Second)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 26, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
    },
  ],
};
