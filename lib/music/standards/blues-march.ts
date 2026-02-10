// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const BLUES_MARCH: Standard = {
  title: 'Blues March',
  slug: 'blues-march',
  composer: 'Benny Golson',
  year: 1958,
  form: 'Blues',
  defaultKey: 'Bb major',
  alternateKey: 'F major',
  tempo: { slow: 120, medium: 140, fast: 160 },
  timeSignature: '4/4',
  totalBars: 12,
  difficulty: 'beginner',
  tags: ['standard', 'blues', 'hard-bop', 'march', 'bebop'],
  description: 'A spirited blues with a martial swing feel. Benny Golson\'s composition for Art Blakey\'s Jazz Messengers combines traditional blues changes with a march-like rhythmic character that\'s both playful and hard-driving.',
  sections: [
    {
      name: 'A',
      label: 'Blues Form',
      bars: [
        { bar: 1, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
      ],
    },
  ],
};
