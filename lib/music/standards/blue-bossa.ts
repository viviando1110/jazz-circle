// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const BLUE_BOSSA: Standard = {
  title: 'Blue Bossa',
  slug: 'blue-bossa',
  composer: 'Kenny Dorham',
  year: 1963,
  form: 'AB',
  defaultKey: 'C minor',
  alternateKey: 'A minor',
  tempo: {
    slow: 120,
    medium: 160,
    fast: 200,
  },
  timeSignature: '4/4',
  totalBars: 16,
  difficulty: 'beginner',
  tags: ['standard', 'beginner', 'bossa nova', 'minor key', 'ii-V-I'],
  description:
    'Blue Bossa is a beginner-friendly bossa nova standard composed by Kenny Dorham in 1963. This 16-bar tune is an excellent introduction to jazz harmony, featuring a clear ii-V-i progression in the home key and a beautiful modulation to the relative major (Db) in the bridge. The straightforward harmonic structure and moderate tempo make it ideal for developing jazz vocabulary in minor keys while exploring the characteristic bossa nova rhythm.',

  sections: [
    {
      name: 'A',
      label: 'A Section (Home Key)',
      bars: [
        {
          bar: 1,
          chords: [{ symbol: 'Cm7', beats: 4 }],
        },
        {
          bar: 2,
          chords: [{ symbol: 'Cm7', beats: 4 }],
        },
        {
          bar: 3,
          chords: [{ symbol: 'Fm7', beats: 4 }],
        },
        {
          bar: 4,
          chords: [{ symbol: 'Fm7', beats: 4 }],
        },
        {
          bar: 5,
          chords: [{ symbol: 'Dm7b5', beats: 4 }],
        },
        {
          bar: 6,
          chords: [{ symbol: 'G7', beats: 4 }],
        },
        {
          bar: 7,
          chords: [{ symbol: 'Cm7', beats: 4 }],
        },
        {
          bar: 8,
          chords: [{ symbol: 'Cm7', beats: 4 }],
        },
      ],
      analysis: {
        summary:
          'Classic ii-V-i progression in C minor with extended tonic chords. The A section establishes the home key through a clear minor ii-V-i cadence.',
        insight:
          'The form begins with two bars of tonic (Cm7), creating space and anticipation before moving to the subdominant Fm7. Bars 5-7 present the essential ii-V-i cadence (Dm7b5-G7-Cm7) that defines the key. The extended tonic at the end (bars 7-8) provides stability before the bridge modulation.',
        scaleGuide: [
          'Cm7: C Dorian (C D Eb F G A Bb)',
          'Fm7: F Dorian (F G Ab Bb C D Eb)',
          'Dm7b5: D Locrian (D Eb F G Ab Bb C)',
          'G7: G Mixolydian b9 b13 (G Ab Bb B D Eb F) or G Altered (G Ab Bb B Db Eb F)',
        ],
        practiceTips: [
          'Practice the ii-V-i progression (bars 5-7) slowly, connecting each chord smoothly with voice leading.',
          'Over the Cm7 tonic, experiment with both C Dorian and C minor pentatonic scales to develop melodic ideas.',
          'The G7 in bar 6 is the key tension point—try altered scale tensions (b9, #9, b13) to create forward motion to Cm7.',
        ],
      },
    },
    {
      name: 'B',
      label: 'B Section (Bridge - Relative Major)',
      bars: [
        {
          bar: 9,
          chords: [{ symbol: 'Ebm7', beats: 4 }],
        },
        {
          bar: 10,
          chords: [{ symbol: 'Ab7', beats: 4 }],
        },
        {
          bar: 11,
          chords: [{ symbol: 'Dbmaj7', beats: 4 }],
        },
        {
          bar: 12,
          chords: [{ symbol: 'Dbmaj7', beats: 4 }],
        },
        {
          bar: 13,
          chords: [{ symbol: 'Dm7b5', beats: 4 }],
        },
        {
          bar: 14,
          chords: [{ symbol: 'G7', beats: 4 }],
        },
        {
          bar: 15,
          chords: [{ symbol: 'Cm7', beats: 4 }],
        },
        {
          bar: 16,
          chords: [{ symbol: 'Cm7', beats: 4 }],
        },
      ],
      analysis: {
        summary:
          'Modulation to the relative major (Db) via ii-V-I, then returning to C minor through the home key ii-V-i. This creates harmonic contrast and color.',
        insight:
          'The bridge introduces a bright, major-key contrast through a ii-V-I in Db major (Ebm7-Ab7-Dbmaj7). This is a classic relative major modulation—Db is the bIII of C minor. The two bars of Dbmaj7 provide breathing room before returning to the minor key through the familiar Dm7b5-G7-Cm7 turnaround. This structure mirrors the A section\'s ending, creating formal unity.',
        scaleGuide: [
          'Ebm7: Eb Dorian (Eb F Gb Ab Bb C Db)',
          'Ab7: Ab Mixolydian (Ab Bb C Db Eb F Gb)',
          'Dbmaj7: Db Ionian (Db Eb F Gb Ab Bb C)',
          'Dm7b5: D Locrian (D Eb F G Ab Bb C)',
          'G7: G Mixolydian b9 b13 (G Ab Bb B D Eb F) or G Altered (G Ab Bb B Db Eb F)',
        ],
        practiceTips: [
          'Emphasize the contrast between the bright Db major section (bars 11-12) and the return to C minor—use major scale ideas over Dbmaj7.',
          'Practice the modulation smoothly: connect Ebm7 to Ab7 using guide tones (Gb to F, Bb to C) and resolve cleanly to Dbmaj7.',
          'The return to C minor (bars 13-16) should feel like coming home—use the same ii-V-i vocabulary from the A section for consistency.',
        ],
      },
    },
  ],
};
