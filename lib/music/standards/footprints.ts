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
  style: 'Post-Bop',
  historicalContext: 'Composed by Wayne Shorter and first recorded on his Blue Note album Adam\'s Apple (1966), Footprints was later recorded in a famous version by the Miles Davis Quintet on Miles Smiles (1967). The tune is a 12-bar minor blues in 3/4 (waltz) time, and the Davis Quintet\'s version — with its free, rhythmically floating approach — became one of the defining recordings of 1960s avant-garde jazz.',
  notableRecordings: [
    'Wayne Shorter — Adam\'s Apple (1966)',
    'Miles Davis Quintet — Miles Smiles (1967)',
    'Widely recorded — (modern jazz repertoire essential)',
  ],
  harmonicSummary: 'Footprints is a 12-bar minor blues in C minor played in 3/4 time. The changes follow a blues structure: Cm7 (I)→Fm7 (IV)→Cm7 (I)→Ab7 Db7 (tritone substitute turnaround)→Cm7. The 3/4 feel transforms the familiar blues into a modal, floating groove. Wayne Shorter\'s harmonic language — using Ab7 and Db7 as tritone substitutes in the turnaround — adds sophistication while maintaining the blues feeling. The Miles Davis Quintet version pushed even further into rhythmic freedom, treating the changes loosely.',
  metaDescription: 'Footprints chord changes and harmonic analysis. Wayne Shorter\'s minor blues in 3/4 (1966): C minor waltz blues — Miles Davis Quintet classic, with notation, playback, and scale guides.',
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
