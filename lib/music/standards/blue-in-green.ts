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
