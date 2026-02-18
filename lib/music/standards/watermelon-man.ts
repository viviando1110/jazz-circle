// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const WATERMELON_MAN: Standard = {
  title: 'Watermelon Man',
  slug: 'watermelon-man',
  composer: 'Herbie Hancock',
  year: 1962,
  form: 'Blues',
  defaultKey: 'F major',
  alternateKey: 'Bb major',
  tempo: { slow: 100, medium: 120, fast: 140 },
  timeSignature: '4/4',
  totalBars: 16,
  difficulty: 'beginner',
  tags: ['standard', 'blues', 'funk', 'soul-jazz', 'groove'],
  description: 'A funky 16-bar blues with a memorable bass line. One of Herbie Hancock\'s most popular compositions, featuring a simple but infectious groove that made it a hit in both jazz and pop circles.',
  style: 'Hard Bop',
  historicalContext: 'Composed by Herbie Hancock and recorded on his Blue Note debut Takin\' Off (1962), Watermelon Man became a surprise hit when Mongo Santamaría recorded a Latin version that reached the pop charts in 1963. Hancock himself recorded a drastically different, African-influenced version on his groundbreaking fusion album Head Hunters (1973), one of the best-selling jazz albums of all time.',
  notableRecordings: [
    'Herbie Hancock — Takin\' Off (1962)',
    'Mongo Santamaría — (1963, Latin pop crossover version)',
    'Herbie Hancock — Head Hunters (1973, African funk version)',
  ],
  harmonicSummary: 'Watermelon Man is a 16-bar blues in F major (or C major in some arrangements) with a funky, gospel-blues feel. The changes follow a standard blues structure — I7 (F7), IV7 (Bb7), V7 (C7) — with a two-feel or funky 4/4 groove. The simplicity of the blues changes contrasts with the sophistication of Hancock\'s rhythmic approach and the blues vocabulary he brings to improvisation. The Head Hunters version adds a repeating 16th-note mbira (thumb piano) intro figure and a groove-focused fusion approach.',
  metaDescription: 'Watermelon Man chord changes and harmonic analysis. Herbie Hancock\'s funk blues standard (1962): F major blues groove — from the jazz and Head Hunters fusion versions, with notation and scale guides.',
  sections: [
    {
      name: 'A',
      label: 'Blues Form',
      bars: [
        { bar: 1, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'C7', beats: 4 }] },
      ],
    },
  ],
};
