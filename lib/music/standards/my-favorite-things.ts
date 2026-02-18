// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const MY_FAVORITE_THINGS: Standard = {
  title: 'My Favorite Things',
  slug: 'my-favorite-things',
  composer: 'Richard Rodgers',
  year: 1959,
  form: 'AABA',
  defaultKey: 'E minor',
  alternateKey: 'D minor',
  tempo: { slow: 120, medium: 160, fast: 200 },
  timeSignature: '3/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'modal', 'waltz', 'minor'],
  description: 'A modal jazz waltz from The Sound of Music. Features alternating Em and E major sections with a Cmaj7-D7-G progression in the bridge.',
  style: 'Post-Bop',
  historicalContext: 'Composed by Richard Rodgers with lyrics by Oscar Hammerstein II for the 1959 Broadway musical The Sound of Music, My Favorite Things was transformed from a charming children\'s song into a landmark jazz piece by John Coltrane\'s soprano saxophone recording in 1960. Coltrane\'s version — treating the minor and major sections as modal vamps — became one of the best-selling jazz recordings of the 1960s.',
  notableRecordings: [
    'John Coltrane — My Favorite Things (1960, soprano saxophone)',
    'The Sound of Music — (1959 original Broadway)',
    'McCoy Tyner — (various recordings)',
  ],
  harmonicSummary: 'In Coltrane\'s jazz interpretation, My Favorite Things alternates between E minor (the verse) and E major (the chorus) — treated as modal vamps rather than song form. The E minor section uses E Dorian mode, while the E major section uses E major (Ionian). Coltrane extended each section into long modal improvisations, often 10-20 minutes in concert, treating each chord as a modal area to explore at length. The tune\'s simple waltz feel (3/4) and tonic/relative major alternation created an ideal framework for this modal approach.',
  metaDescription: 'My Favorite Things chord changes and harmonic analysis. Rodgers/Hammerstein 1959 standard — Coltrane\'s modal soprano sax transformation: E minor / E major vamps, with notation and scale guides.',

  sections: [
    {
      name: 'A',
      label: 'A Section (Em)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Em', beats: 3 }] },
        { bar: 2, chords: [{ symbol: 'Em', beats: 3 }] },
        { bar: 3, chords: [{ symbol: 'Fmaj7', beats: 3 }] },
        { bar: 4, chords: [{ symbol: 'Fmaj7', beats: 3 }] },
        { bar: 5, chords: [{ symbol: 'Em', beats: 3 }] },
        { bar: 6, chords: [{ symbol: 'Em', beats: 3 }] },
        { bar: 7, chords: [{ symbol: 'Fmaj7', beats: 3 }] },
        { bar: 8, chords: [{ symbol: 'Fmaj7', beats: 3 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (E major)',
      bars: [
        { bar: 9, chords: [{ symbol: 'E', beats: 3 }] },
        { bar: 10, chords: [{ symbol: 'E', beats: 3 }] },
        { bar: 11, chords: [{ symbol: 'Amaj7', beats: 3 }] },
        { bar: 12, chords: [{ symbol: 'Amaj7', beats: 3 }] },
        { bar: 13, chords: [{ symbol: 'E', beats: 3 }] },
        { bar: 14, chords: [{ symbol: 'E', beats: 3 }] },
        { bar: 15, chords: [{ symbol: 'Amaj7', beats: 3 }] },
        { bar: 16, chords: [{ symbol: 'Amaj7', beats: 3 }] },
      ],
    },
    {
      name: 'B',
      label: 'Bridge',
      bars: [
        { bar: 17, chords: [{ symbol: 'Cmaj7', beats: 3 }] },
        { bar: 18, chords: [{ symbol: 'Cmaj7', beats: 3 }] },
        { bar: 19, chords: [{ symbol: 'Fmaj7', beats: 3 }] },
        { bar: 20, chords: [{ symbol: 'Fmaj7', beats: 3 }] },
        { bar: 21, chords: [{ symbol: 'Bm7', beats: 3 }] },
        { bar: 22, chords: [{ symbol: 'Bm7', beats: 3 }] },
        { bar: 23, chords: [{ symbol: 'E7', beats: 3 }] },
        { bar: 24, chords: [{ symbol: 'E7', beats: 3 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (Em)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Em', beats: 3 }] },
        { bar: 26, chords: [{ symbol: 'Em', beats: 3 }] },
        { bar: 27, chords: [{ symbol: 'Fmaj7', beats: 3 }] },
        { bar: 28, chords: [{ symbol: 'Fmaj7', beats: 3 }] },
        { bar: 29, chords: [{ symbol: 'Em', beats: 3 }] },
        { bar: 30, chords: [{ symbol: 'Em', beats: 3 }] },
        { bar: 31, chords: [{ symbol: 'Fmaj7', beats: 3 }] },
        { bar: 32, chords: [{ symbol: 'Em', beats: 3 }] },
      ],
    },
  ],
};
