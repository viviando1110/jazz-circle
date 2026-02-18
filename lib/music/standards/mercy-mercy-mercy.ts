// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const MERCY_MERCY_MERCY: Standard = {
  title: 'Mercy, Mercy, Mercy',
  slug: 'mercy-mercy-mercy',
  composer: 'Joe Zawinul',
  year: 1966,
  form: 'AB',
  defaultKey: 'Bb major',
  alternateKey: 'C major',
  tempo: { slow: 80, medium: 100, fast: 120 },
  timeSignature: '4/4',
  totalBars: 16,
  difficulty: 'beginner',
  tags: ['standard', 'soul-jazz', 'gospel', 'groove', 'funk'],
  description: 'A soulful gospel-funk groove that became a crossover hit. Joe Zawinul\'s composition with Cannonball Adderley features a simple, hypnotic vamp that appeals to both jazz and R&B audiences.',
  style: 'Hard Bop',
  historicalContext: 'Composed by Austrian-born keyboardist Joe Zawinul (later of Weather Report) while a member of the Cannonball Adderley Quintet, Mercy Mercy Mercy was recorded live at Club DeLisa in Chicago in 1966. The recording — with Zawinul playing electric piano and Adderley\'s funky, soulful tenor sax — became a surprise pop hit and helped pioneer soul jazz and funk jazz.',
  notableRecordings: [
    'Cannonball Adderley Quintet — Mercy, Mercy, Mercy! Live at "The Club" (1966)',
    'Joe Zawinul — (various recordings)',
    'Widely covered — (soul jazz standard)',
  ],
  harmonicSummary: 'Mercy Mercy Mercy is a simple, gospel-influenced soul jazz tune in Bb major built on a I-IV-I-V progression with a funky, laid-back groove. The harmonic changes are minimal and repetitive — Bb7, Eb7, F7 — creating a hypnotic blues feel over a two-feel electric piano groove. The simplicity of the changes is the point: like the best blues, the music\'s depth comes from the feel, the bent notes, the dynamics, and the blues vocabulary rather than harmonic complexity. Zawinul\'s electric piano comping style became influential in the development of fusion.',
  metaDescription: 'Mercy Mercy Mercy chord changes and harmonic analysis. Joe Zawinul\'s soul jazz classic (1966): Bb major blues groove — Cannonball Adderley live hit, with notation, playback, and scale guides.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Bb7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Bb7', beats: 4 }] },
      ],
    },
  ],
};
