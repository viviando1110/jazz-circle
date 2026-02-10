// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const ONE_NOTE_SAMBA: Standard = {
  title: 'One Note Samba',
  slug: 'one-note-samba',
  composer: 'Antonio Carlos Jobim',
  year: 1961,
  form: 'AABA',
  defaultKey: 'Bb major',
  alternateKey: 'C major',
  tempo: { slow: 130, medium: 160, fast: 200 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['bossa-nova', 'latin', 'standard'],
  description: 'Also known as "Samba de Uma Nota So," this playful Jobim composition features a repeated melody note over shifting harmonies. The A section demonstrates the bossa nova technique of constant melodic repetition with harmonic variation.',
  sections: [
    {
      name: 'A',
      label: 'A Section (bars 1-8)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Db7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Db7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 9-16)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Db7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Db7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section / Bridge (bars 17-24)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Abm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Db7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Gbmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Gbmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 25-32)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Db7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Db7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Fm7', beats: 1 }, { symbol: 'Bb7', beats: 1 }] },
      ],
    },
  ],
};
