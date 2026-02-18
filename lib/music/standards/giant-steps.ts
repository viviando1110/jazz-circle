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
  style: 'Post-Bop',
  historicalContext: 'Composed by John Coltrane and recorded in 1959 for the album Giant Steps (released 1960), this landmark piece introduced what became known as "Coltrane changes" — a system of cycling major thirds that divided the octave into three equal parts. It represented a complete break from traditional jazz harmony and remains one of the most studied and discussed compositions in jazz.',
  notableRecordings: [
    'John Coltrane — Giant Steps (1960)',
    'Widely studied — (the most analyzed composition in jazz harmony)',
  ],
  harmonicSummary: 'Giant Steps cycles through three key centers a major third apart: B major, G major, and Eb major — each a major third (4 semitones) away from the next. These three keys divide the octave into equal thirds, creating a symmetrical harmonic system. The changes move at two chords per bar in a 16-bar form, cycling B major→D7→G major→Bb7→Eb major→Am7 D7→G major, etc. At the original fast tempo (≈ 286 BPM), navigating these key centers demands complete fluency in ii-V-I patterns in B, G, and Eb simultaneously.',
  metaDescription: 'Giant Steps chord changes and harmonic analysis. John Coltrane\'s 1959 masterpiece: "Coltrane changes" — three key centers a major third apart (B, G, Eb), with notation and scale guides.',
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
