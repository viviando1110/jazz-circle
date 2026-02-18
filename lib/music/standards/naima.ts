// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const NAIMA: Standard = {
  title: 'Naima',
  slug: 'naima',
  composer: 'John Coltrane',
  year: 1959,
  form: 'ABAB',
  defaultKey: 'Eb major',
  alternateKey: 'Bb major',
  tempo: { slow: 60, medium: 80, fast: 100 },
  timeSignature: '4/4',
  totalBars: 12,
  difficulty: 'advanced',
  tags: ['modal', 'ballad', 'modern'],
  description: 'A deeply spiritual ballad written by Coltrane for his first wife. Features lush, static harmonies with a meditative quality. The unconventional form (ABAB over 12 bars) and rich harmonic colors make this an advanced study in modern jazz harmony.',
  style: 'Post-Bop',
  historicalContext: 'Composed by John Coltrane and recorded on Giant Steps (1960), Naima was named after Coltrane\'s first wife Juanita (Naima) Grubbs. The piece is one of Coltrane\'s most tender and personal compositions — a slow ballad with a distinctive pedal point bass and shimmering, suspended harmonic language that stands apart from both his bebop and modal works.',
  notableRecordings: [
    'John Coltrane — Giant Steps (1960)',
    'John Coltrane — Live at the Village Vanguard (1961)',
    'McCoy Tyner — (various recordings)',
  ],
  harmonicSummary: 'Naima is a ballad in Eb major built on a sustained pedal-point bass note (Eb) beneath shifting upper-voice harmonies. The A sections feature chords moving over this Eb pedal: Abmaj7/Eb→Bbmaj7/Eb→Ebmaj7, creating a suspended, glowing sound. The bridge briefly moves away from the pedal before returning. The harmonic language is modal and impressionistic rather than functional, with no traditional ii-V-I resolution. The pedal point technique creates an almost sacred, meditative atmosphere unlike any other standard ballad.',
  metaDescription: 'Naima chord changes and harmonic analysis. John Coltrane\'s ballad (1960): Eb pedal-point with shifting harmonics, from Giant Steps — with notation, playback, and scale guides.',

  sections: [
    {
      name: 'A',
      label: 'A Section (bars 1-3)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Bbmaj7', beats: 2 }] },
        { bar: 2, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (bars 4-6)',
      bars: [
        { bar: 4, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Bmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A',
      label: 'A Section (bars 7-9)',
      bars: [
        { bar: 7, chords: [{ symbol: 'Ebm7', beats: 2 }, { symbol: 'Bbmaj7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Am7', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 9, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (bars 10-12)',
      bars: [
        { bar: 10, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Bmaj7', beats: 4 }] },
      ],
    },
  ],
};
