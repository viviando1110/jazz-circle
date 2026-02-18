// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const IMPRESSIONS: Standard = {
  title: 'Impressions',
  slug: 'impressions',
  composer: 'John Coltrane',
  year: 1961,
  form: 'AABA',
  defaultKey: 'D minor',
  alternateKey: 'E minor',
  tempo: { slow: 140, medium: 180, fast: 240 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['modal', 'hard-bop', 'modern'],
  description: 'A modal jazz classic based on the form of "So What" from Kind of Blue. Features simple two-chord changes that allow for extensive modal improvisation. The A sections use Dorian mode, while the bridge moves up a half-step.',
  style: 'Modal Jazz',
  historicalContext: 'Composed by John Coltrane (with some dispute as to whether John Lewis contributed to the form), Impressions was recorded multiple times by Coltrane between 1961 and 1963. It is a direct contrafact of Miles Davis\'s "So What" — using the same AABA structure with D Dorian for the A sections and Eb Dorian for the bridge — but Coltrane\'s approach to improvisation over it was dramatically different from Davis\'s.',
  notableRecordings: [
    'John Coltrane — Impressions (1963)',
    'John Coltrane — (live recordings, 1961-1965)',
    'Compared to: Miles Davis — So What (the source tune)',
  ],
  harmonicSummary: 'Impressions uses the same modal structure as "So What": D Dorian for 16 bars (A section, repeated), Eb Dorian for 8 bars (bridge), and D Dorian for a final 8 bars. The Dm7→Ebm7→Dm7 movement — just two chords in 32 bars — creates the same static modal framework as So What. However, Coltrane\'s improvisational approach was far more dense and complex than Davis\'s, treating the modal canvas as an opportunity for motivic development and "sheets of sound" technique. The D Dorian mode (D E F G A B C) and Eb Dorian (Eb F Gb Ab Bb C Db) are the only scales needed.',
  metaDescription: 'Impressions chord changes and harmonic analysis. John Coltrane\'s modal jazz contrafact on So What: D Dorian / Eb Dorian, AABA — with notation, playback, and scale guides.',

  sections: [
    {
      name: 'A',
      label: 'A Section (bars 1-8)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Dm7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 9-16)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Dm7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section / Bridge (bars 17-24)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Ebm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Ebm7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Ebm7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Ebm7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Ebm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Ebm7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Ebm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Ebm7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 25-32)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Dm7', beats: 4 }] },
      ],
    },
  ],
};
