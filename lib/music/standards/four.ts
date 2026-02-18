// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const FOUR: Standard = {
  title: 'Four',
  slug: 'four',
  composer: 'Miles Davis',
  year: 1954,
  form: 'AABA',
  defaultKey: 'Eb major',
  alternateKey: 'F major',
  tempo: {
    slow: 140,
    medium: 180,
    fast: 220,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'bebop', 'intermediate', 'miles davis', 'rhythm changes'],
  description:
    'Four is a bebop composition by Miles Davis from 1954, based on the chord changes of I Got Rhythm. This 32-bar AABA form features the classic "rhythm changes" progression with added chromatic passing chords and bebop alterations. The tune is a staple of the jazz repertoire and demonstrates how bebop musicians transformed standard progressions with additional harmonic sophistication.',
  style: 'Bebop',
  historicalContext: 'Composed by Miles Davis (though often attributed to Eddie Vinson, a dispute that remains unresolved) and recorded in 1954, Four is a brisk bebop vehicle in Eb major with a swinging, melodically inventive theme. It became a staple of the hard bop repertoire and is one of the most commonly called tunes at jazz jam sessions.',
  notableRecordings: [
    'Miles Davis — (1954 recording)',
    'Sonny Rollins — (various recordings)',
    'Bill Evans — (various recordings)',
    'Widely played — (jam session standard)',
  ],
  harmonicSummary: 'Four is a 32-bar AABA standard in Eb major with clean, bebop-friendly harmonic movement. The A section features clear ii-V-I progressions in Eb with some chromatic passing chords (a brief move to Ab major). The bridge moves to a contrasting key center (Eb minor / Db major area) before the final A returns home. At medium-up to fast tempos, Four rewards clean bebop lines and smooth navigation of the ii-V-I cycles. Its manageable harmonic changes make it a good stepping stone from basic changes to more complex bebop.',
  metaDescription: 'Four chord changes and harmonic analysis. Miles Davis\'s bebop standard (1954): Eb major, AABA form, clean ii-V-I progressions — jam session staple, with notation and scale guides.',

  sections: [
    {
      name: 'A1',
      label: 'A Section (First)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 4, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Am7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'D7', beats: 4 }] },
      ],
    },
    {
      name: 'A2',
      label: 'A Section (Second)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Gmaj7', beats: 2 }, { symbol: 'Em7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Gmaj7', beats: 2 }, { symbol: 'Gm7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (Bridge)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 20, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 22, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A3',
      label: 'A Section (Final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
  ],
};
