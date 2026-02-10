// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const MAIDEN_VOYAGE: Standard = {
  title: 'Maiden Voyage',
  slug: 'maiden-voyage',
  composer: 'Herbie Hancock',
  year: 1965,
  form: 'AABA',
  defaultKey: 'D major',
  alternateKey: 'C major',
  tempo: { slow: 120, medium: 140, fast: 160 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'modal', 'sus-chords', 'quartal-harmony'],
  description: 'A modal jazz masterpiece built on sus chords and quartal harmony. The haunting, open sound evokes the ocean and became one of the defining compositions of 1960s modal jazz.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Dm7sus4', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Dm7sus4', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Ebm7sus4', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Ebm7sus4', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Dm7sus4', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Dm7sus4', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'F#m7sus4', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'F#m7sus4', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Dm7sus4', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Dm7sus4', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Ebm7sus4', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Ebm7sus4', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Dm7sus4', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Dm7sus4', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'F#m7sus4', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'F#m7sus4', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Bbm7sus4', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Bbm7sus4', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Cm7sus4', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Cm7sus4', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Bbm7sus4', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Bbm7sus4', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Dm7sus4', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Dm7sus4', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Dm7sus4', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Dm7sus4', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Ebm7sus4', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Ebm7sus4', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Dm7sus4', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'Dm7sus4', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'F#m7sus4', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'F#m7sus4', beats: 4 }] },
      ],
    },
  ],
};
