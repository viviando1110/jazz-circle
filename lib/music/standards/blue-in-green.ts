// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const BLUE_IN_GREEN: Standard = {
  title: 'Blue in Green',
  slug: 'blue-in-green',
  composer: 'Miles Davis',
  year: 1959,
  form: 'Through-composed',
  defaultKey: 'Bb major',
  alternateKey: 'G major',
  tempo: { slow: 60, medium: 80, fast: 100 },
  timeSignature: '3/4',
  totalBars: 10,
  difficulty: 'advanced',
  tags: ['modal', 'ballad', 'kind-of-blue'],
  description: 'A hauntingly beautiful ballad from Kind of Blue, featuring a 10-bar form in 3/4 time. The sparse, modal harmony and chromatic voice leading create an impressionistic soundscape. Authorship disputed between Miles Davis and Bill Evans.',
  style: 'Modal Jazz',
  historicalContext: 'First recorded on Kind of Blue (1959), Blue in Green is a hauntingly beautiful 10-bar ballad with a disputed composer credit — Miles Davis claimed authorship, but Bill Evans maintained he composed the tune. This credit dispute remains unresolved; the copyright is registered to Miles Davis. The piece exemplifies the impressionistic, floating harmonic quality of the Kind of Blue sessions.',
  notableRecordings: [
    'Miles Davis — Kind of Blue (1959)',
    'Bill Evans — Waltz for Debby (1961)',
    'Ahmad Jamal — (1994 recording)',
  ],
  harmonicSummary: 'Blue in Green has an unusual 10-bar form (not the standard 8, 12, or 32 bars) with a slow harmonic rhythm of extended chords. The harmony drifts between Bb major and G minor: Dm7→G7alt→Cmaj7→A7alt→Dm7→Db7→Cmaj7→Am7b5 D7→Gm7 Bb7→A7alt→Dm7 creating an impressionistic, tonally ambiguous atmosphere. The wide-spaced, slow-moving chords reward patient melodic development over rapid bebop lines.',
  metaDescription: 'Blue in Green chord changes and harmonic analysis. Miles Davis/Bill Evans ballad from Kind of Blue (1959): 10-bar modal form, extended chords, with notation, playback, and scale guides.',
  sections: [
    {
      name: 'A',
      label: 'Complete Form (bars 1-10)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Gm', beats: 3 }] },
        { bar: 2, chords: [{ symbol: 'A7alt', beats: 3 }] },
        { bar: 3, chords: [{ symbol: 'Dm7', beats: 3 }] },
        { bar: 4, chords: [{ symbol: 'Db7alt', beats: 3 }] },
        { bar: 5, chords: [{ symbol: 'Cmaj7', beats: 3 }] },
        { bar: 6, chords: [{ symbol: 'Fm7', beats: 1.5 }, { symbol: 'Bb7', beats: 1.5 }] },
        { bar: 7, chords: [{ symbol: 'Ebmaj7', beats: 3 }] },
        { bar: 8, chords: [{ symbol: 'Am7', beats: 1.5 }, { symbol: 'D7', beats: 1.5 }] },
        { bar: 9, chords: [{ symbol: 'Gm', beats: 3 }] },
        { bar: 10, chords: [{ symbol: 'A7alt', beats: 3 }] },
      ],
    },
  ],
};
