// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const I_GOT_RHYTHM: Standard = {
  title: 'I Got Rhythm',
  slug: 'i-got-rhythm',
  composer: 'George Gershwin',
  year: 1930,
  form: 'AABA',
  defaultKey: 'Bb major',
  alternateKey: 'F major',
  tempo: {
    slow: 120,
    medium: 180,
    fast: 240,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'beginner',
  tags: ['standard', 'rhythm changes', 'beginner', 'gershwin', 'bebop'],
  description:
    'I Got Rhythm is a foundational jazz standard composed by George Gershwin in 1930. The chord progression, known as "rhythm changes," is one of the most important harmonic frameworks in jazz, serving as the basis for countless bebop compositions. This 32-bar AABA form is essential for any jazz musician and provides the foundation for learning bebop language and improvisation.',
  style: 'Jazz Standard',
  historicalContext: 'Composed by George Gershwin with lyrics by Ira Gershwin for the 1930 Broadway musical Girl Crazy, I Got Rhythm\'s chord changes became the most widely used harmonic template in jazz history — known simply as "Rhythm changes." Hundreds of bebop tunes are contrafacts built on its AABA progression in Bb major, from "Anthropology" to "Oleo" to "Moose the Mooche."',
  notableRecordings: [
    'Ethel Merman — Girl Crazy (1930, original Broadway)',
    'Louis Armstrong — (1931 recording)',
    'Charlie Parker — (various contrafacts on these changes)',
    'Thelonious Monk — (various recordings)',
  ],
  harmonicSummary: 'I Got Rhythm defines the "Rhythm changes" form: a 32-bar AABA in Bb major. The A section is a I-vi-ii-V turnaround (Bbmaj7→Gm7→Cm7→F7) with a chromatic I-I7-IV-#IVdim-I elaboration in bars 5-8. The bridge (B section) cycles through four dominant 7th chords a fifth apart: D7→G7→C7→F7 (two bars each), moving through secondary dominants. The A section\'s simple but infectious turnaround and the bridge\'s cycling dominants became the harmonic foundation for the entire bebop repertoire.',
  metaDescription: 'I Got Rhythm chord changes and harmonic analysis. Gershwin\'s 1930 standard: "Rhythm changes" — the most imitated jazz harmonic template, Bb major AABA, with notation and scale guides.',

  sections: [
    {
      name: 'A1',
      label: 'A Section (First)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Bbmaj7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 2, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Bbmaj7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Abmaj7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
      ],
    },
    {
      name: 'A2',
      label: 'A Section (Second)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Bbmaj7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 10, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Bbmaj7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Abmaj7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (Bridge)',
      bars: [
        { bar: 17, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'F7', beats: 4 }] },
      ],
    },
    {
      name: 'A3',
      label: 'A Section (Final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Bbmaj7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 26, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Bbmaj7', beats: 2 }, { symbol: 'G7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Abmaj7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Cm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 32, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
      ],
    },
  ],
};
