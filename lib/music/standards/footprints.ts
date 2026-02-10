// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const FOOTPRINTS: Standard = {
  title: 'Footprints',
  slug: 'footprints',
  composer: 'Wayne Shorter',
  year: 1966,
  form: 'AB',
  defaultKey: 'C minor',
  alternateKey: 'F minor',
  tempo: { slow: 140, medium: 180, fast: 220 },
  timeSignature: '6/4',
  totalBars: 12,
  difficulty: 'intermediate',
  tags: ['hard-bop', 'modal', 'modern'],
  description: 'A Wayne Shorter classic with a memorable bass line and modal harmony. The 12-bar form in 6/4 time creates an unusual rhythmic feel, while the modal minor tonality provides freedom for improvisation.',
  sections: [
    {
      name: 'A',
      label: 'A Section (bars 1-6)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Cm7', beats: 6 }] },
        { bar: 2, chords: [{ symbol: 'Cm7', beats: 6 }] },
        { bar: 3, chords: [{ symbol: 'Cm7', beats: 6 }] },
        { bar: 4, chords: [{ symbol: 'Cm7', beats: 6 }] },
        { bar: 5, chords: [{ symbol: 'Fm7', beats: 6 }] },
        { bar: 6, chords: [{ symbol: 'Fm7', beats: 6 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (bars 7-12)',
      bars: [
        { bar: 7, chords: [{ symbol: 'Cm7', beats: 6 }] },
        { bar: 8, chords: [{ symbol: 'Cm7', beats: 6 }] },
        { bar: 9, chords: [{ symbol: 'Fm7', beats: 6 }] },
        { bar: 10, chords: [{ symbol: 'Fm7', beats: 6 }] },
        { bar: 11, chords: [{ symbol: 'Cm7', beats: 6 }] },
        { bar: 12, chords: [{ symbol: 'Cm7', beats: 6 }] },
      ],
    },
  ],
};
