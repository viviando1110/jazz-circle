// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const MISTY: Standard = {
  title: 'Misty',
  slug: 'misty',
  composer: 'Erroll Garner',
  year: 1954,
  form: 'AABA',
  defaultKey: 'Eb major',
  alternateKey: 'C major',
  tempo: {
    slow: 60,
    medium: 80,
    fast: 100,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'beginner',
  tags: ['standard', 'ballad', 'beginner', 'romantic'],
  description:
    'Misty is a beautiful ballad composed by Erroll Garner in 1954. This AABA form features lush, romantic harmony with a mix of major and minor ii-V progressions. The melody is stepwise and lyrical, making it accessible for beginners while offering harmonic sophistication. The bridge provides contrast with a shift to the IV key area.',
  style: 'Ballad',
  historicalContext: 'Composed by pianist Erroll Garner in 1954 (with lyrics later added by Johnny Burke), Misty is one of the most beloved jazz ballads ever written. Garner composed the melody while flying over the Pacific Ocean, reportedly inspired by the clouds below. Johnny Mathis\'s vocal recording (1959) made it a pop hit, but the Erroll Garner piano version remains the jazz touchstone.',
  notableRecordings: [
    'Erroll Garner — (1954, the original piano version)',
    'Johnny Mathis — (1959, pop hit)',
    'Charlie Parker — (various recordings)',
    'Sarah Vaughan — (various recordings)',
  ],
  harmonicSummary: 'Misty is a 32-bar AABA ballad in Eb major with rich, lush harmony characteristic of Erroll Garner\'s orchestral piano style. The A section begins on a I chord (Ebmaj7) and moves through an expressive chain of secondary dominants and ii-V-I progressions that give it a sweeping, romantic quality. The bridge moves to the subdominant area (Ab major) before the final A returns home. The wide arc of the harmonic movement — from warmth to drama and back — mirrors the melodic shape of the tune.',
  metaDescription: 'Misty chord changes and harmonic analysis. Erroll Garner\'s 1954 jazz ballad in Eb major: lush secondary dominants, AABA form — with notation, playback, and scale guides.',

  sections: [
    {
      name: 'A1',
      label: 'A Section (First)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 3, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 5, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 7, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A2',
      label: 'A Section (Second)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 11, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 13, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section (Bridge)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Am7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Gmaj7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
      ],
    },
    {
      name: 'A3',
      label: 'A Section (Final)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Bbm7', beats: 2 }, { symbol: 'Eb7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'Abm7', beats: 2 }, { symbol: 'Db7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Cm7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
  ],
};
