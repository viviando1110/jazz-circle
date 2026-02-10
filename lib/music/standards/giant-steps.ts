// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const GIANT_STEPS: Standard = {
  title: 'Giant Steps',
  slug: 'giant-steps',
  composer: 'John Coltrane',
  year: 1960,
  form: 'AB',
  defaultKey: 'B major',
  alternateKey: 'C major',
  tempo: { slow: 180, medium: 240, fast: 300 },
  timeSignature: '4/4',
  totalBars: 16,
  difficulty: 'advanced',
  tags: ['hard-bop', 'bebop', 'modern'],
  description: 'Perhaps the most challenging composition in the jazz repertoire. Features rapid modulations through three tonal centers (B, G, Eb) using the "Coltrane changes" pattern. A landmark composition that revolutionized jazz harmony.',
  sections: [
    {
      name: 'A',
      label: 'A Section (bars 1-8)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Bmaj7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 2, chords: [{ symbol: 'Gmaj7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Am7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Gmaj7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'F#7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Bmaj7', beats: 2 }, { symbol: 'Fm7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Bb7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (bars 9-16)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Am7', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Gmaj7', beats: 2 }, { symbol: 'C#m7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'F#7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Bmaj7', beats: 2 }, { symbol: 'Fm7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'C#m7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'F#7', beats: 4 }] },
      ],
    },
  ],
};
