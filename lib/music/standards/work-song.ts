// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const WORK_SONG: Standard = {
  title: 'Work Song',
  slug: 'work-song',
  composer: 'Nat Adderley',
  year: 1960,
  form: 'Blues',
  defaultKey: 'F minor',
  alternateKey: 'E minor',
  tempo: { slow: 100, medium: 120, fast: 140 },
  timeSignature: '4/4',
  totalBars: 12,
  difficulty: 'beginner',
  tags: ['standard', 'blues', 'soul-jazz', 'minor-blues', 'hard-bop'],
  description: 'A soulful minor blues evoking the sound of chain gang work songs. Nat Adderley\'s powerful composition became a soul-jazz standard, featuring a simple but deeply expressive melody over a minor blues progression.',
  sections: [
    {
      name: 'A',
      label: 'Minor Blues',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'C7', beats: 4 }] },
      ],
    },
  ],
};
