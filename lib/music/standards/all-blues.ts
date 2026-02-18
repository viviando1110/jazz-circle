// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const ALL_BLUES: Standard = {
  title: 'All Blues',
  slug: 'all-blues',
  composer: 'Miles Davis',
  year: 1959,
  form: 'Blues',
  defaultKey: 'G major',
  alternateKey: 'F major',
  tempo: { slow: 100, medium: 130, fast: 160 },
  timeSignature: '3/4',
  totalBars: 12,
  difficulty: 'beginner',
  tags: ['blues', 'modal', 'waltz', 'miles-davis', 'kind-of-blue'],
  description: 'A modal jazz waltz blues from Kind of Blue. Features a simple but effective 12-bar blues structure in 3/4 time with modal approach.',
  style: 'Modal Jazz',
  historicalContext: 'Composed by Miles Davis for the landmark album Kind of Blue (1959), All Blues is a 12-bar blues in G played in 3/4 waltz time. Rather than conventional bebop substitutions, it uses sustained dominant 7th chords and parallel chromatic tritones in the saxophone voicings, creating a hypnotic, modal atmosphere that exemplified the new direction Davis was charting.',
  notableRecordings: [
    'Miles Davis — Kind of Blue (1959)',
    'Miles Davis — Miles Davis in Person: Friday Night at the Blackhawk (1961)',
    'Widely covered — (standard blues-waltz in the jazz repertoire)',
  ],
  harmonicSummary: 'All Blues is a 12-bar blues in G major in 3/4 time, using I7 (G7), IV7 (C7), and V7 (D7) with a 4-bar introductory vamp on G7 before each chorus. The harmonic simplicity is by design — Davis wanted soloists to focus on melodic development over modal harmony rather than navigating rapid chord changes. The saxophones play parallel tritone voicings (Db/D) during the G7 sections, adding orchestral texture. Its waltz feel and modal approach distinguish it from conventional jazz blues.',
  metaDescription: 'All Blues chord changes and harmonic analysis. Miles Davis\'s modal jazz waltz from Kind of Blue (1959): 12-bar blues in 3/4, G7 modal approach, with notation, playback, and scale guides.',
  sections: [
    {
      name: 'Blues',
      label: 'Blues Form',
      bars: [
        { bar: 1, chords: [{ symbol: 'G7', beats: 3 }] },
        { bar: 2, chords: [{ symbol: 'G7', beats: 3 }] },
        { bar: 3, chords: [{ symbol: 'G7', beats: 3 }] },
        { bar: 4, chords: [{ symbol: 'G7', beats: 3 }] },
        { bar: 5, chords: [{ symbol: 'C7', beats: 3 }] },
        { bar: 6, chords: [{ symbol: 'C7', beats: 3 }] },
        { bar: 7, chords: [{ symbol: 'G7', beats: 3 }] },
        { bar: 8, chords: [{ symbol: 'G7', beats: 3 }] },
        { bar: 9, chords: [{ symbol: 'D7#9', beats: 3 }] },
        { bar: 10, chords: [{ symbol: 'Eb7#9', beats: 1.5 }, { symbol: 'D7#9', beats: 1.5 }] },
        { bar: 11, chords: [{ symbol: 'G7', beats: 3 }] },
        { bar: 12, chords: [{ symbol: 'G7', beats: 3 }] },
      ],
    },
  ],
};
