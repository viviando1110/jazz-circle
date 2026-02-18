// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const CANTALOUPE_ISLAND: Standard = {
  title: 'Cantaloupe Island',
  slug: 'cantaloupe-island',
  composer: 'Herbie Hancock',
  year: 1964,
  form: 'ABAB',
  defaultKey: 'F minor',
  alternateKey: 'D minor',
  tempo: { slow: 100, medium: 130, fast: 160 },
  timeSignature: '4/4',
  totalBars: 16,
  difficulty: 'beginner',
  tags: ['modal', 'funk', 'hancock', 'groove', 'beginner-friendly'],
  description: 'A funky modal tune by Herbie Hancock. Features a simple 16-bar form with a strong groove and minimal harmonic movement.',
  style: 'Hard Bop',
  historicalContext: 'Composed by Herbie Hancock and first recorded on his Blue Note album Empyrean Isles (1964), Cantaloupe Island is a funky, modal-tinged hard bop piece built on a repeated vamp. Its hypnotic Fm7 groove achieved mainstream recognition decades later when the British acid jazz group US3 sampled it for their 1993 hip-hop hit "Cantaloop (Flip Fantasia)".',
  notableRecordings: [
    'Herbie Hancock — Empyrean Isles (1964)',
    'US3 — Cantaloop (Flip Fantasia) (1993, sample-based)',
    'Herbie Hancock — (various live recordings)',
  ],
  harmonicSummary: 'Cantaloupe Island is a three-section vamp tune built on three repeated two-bar modal grooves: Fm7 (F Dorian), Db7 (Lydian Dominant), and Dm7 (D Dorian). Rather than conventional chord progressions, each section is a static vamp on a single chord with a funky rhythmic feel. The tune has almost no harmonic motion in the traditional sense — soloists improvise over each modal area using the appropriate scale (Dorian over the m7 chords, Lydian Dominant over Db7).',
  metaDescription: 'Cantaloupe Island chord changes and harmonic analysis. Herbie Hancock\'s modal hard bop vamp (1964): Fm7, Db7, Dm7 modal sections, from Empyrean Isles, with notation and scale guides.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Db9', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Db9', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Db9', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Db9', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Fm7', beats: 4 }] },
      ],
    },
  ],
};
