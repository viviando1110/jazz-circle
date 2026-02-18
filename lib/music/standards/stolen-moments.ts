// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const STOLEN_MOMENTS: Standard = {
  title: 'Stolen Moments',
  slug: 'stolen-moments',
  composer: 'Oliver Nelson',
  year: 1961,
  form: 'Blues',
  defaultKey: 'C minor',
  alternateKey: 'D minor',
  tempo: { slow: 100, medium: 120, fast: 140 },
  timeSignature: '4/4',
  totalBars: 12,
  difficulty: 'intermediate',
  tags: ['standard', 'blues', 'minor-blues', 'modal', 'soul-jazz'],
  description: 'A hauntingly beautiful minor blues with modal elements. Oliver Nelson\'s masterpiece features a sophisticated harmonic approach that moves beyond traditional blues changes while maintaining the form\'s emotional core.',
  style: 'Post-Bop',
  historicalContext: 'Composed by Oliver Nelson and recorded on his landmark album Blues and the Abstract Truth (Blue Note, 1961), Stolen Moments is a minor-key modal composition that blends blues feeling with jazz harmony. The album\'s all-star lineup — including Freddie Hubbard, Eric Dolphy, and Bill Evans — produced one of the most celebrated jazz recordings of the 1960s.',
  notableRecordings: [
    'Oliver Nelson — Blues and the Abstract Truth (1961)',
    'Widely recorded — (modal jazz standard)',
  ],
  harmonicSummary: 'Stolen Moments is a slow, brooding minor-key composition in C minor with a modal, blues-inflected character. The A sections are built on a sustained Cm pedal with shifting upper-voice harmonies — creating the characteristic "stolen moment" feeling of suspended time. The tune\'s harmonic language blends modal jazz (static minor chord areas) with blues feeling (bent notes, minor pentatonic coloring). The bridge provides harmonic contrast before returning to the dark, introspective C minor atmosphere.',
  metaDescription: 'Stolen Moments chord changes and harmonic analysis. Oliver Nelson\'s modal post-bop classic (1961): C minor, blues-inflected harmony — from Blues and the Abstract Truth, with notation and scale guides.',
  sections: [
    {
      name: 'A',
      label: 'Minor Blues',
      bars: [
        { bar: 1, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7alt', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Dm7b5', beats: 2 }, { symbol: 'G7alt', beats: 2 }] },
      ],
    },
  ],
};
