// lib/music/standards/autumn-leaves.ts
// Autumn Leaves — chord changes, analysis, and practice guidance.
// NOTE: Only chord progressions, analysis, and practice tips.
// NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const AUTUMN_LEAVES: Standard = {
  title: 'Autumn Leaves',
  slug: 'autumn-leaves',
  composer: 'Joseph Kosma',
  year: 1945,
  form: 'AABA',
  defaultKey: 'G minor',
  alternateKey: 'E minor',
  tempo: { slow: 120, medium: 160, fast: 200 },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'beginner',
  tags: ['standard', 'beginner', 'ii-V-I', 'minor key', 'circle of fourths'],
  description:
    'The quintessential jazz standard for beginners. Autumn Leaves cycles through a complete ii-V-I in the relative major and then ii-V-i in the relative minor, making it the perfect vehicle for practicing the most important jazz progression in both major and minor contexts.',
  style: 'Jazz Standard',
  historicalContext: 'Originally composed by Joseph Kosma as "Les feuilles mortes" for the 1946 French film Les Portes de la nuit, with lyrics by Jacques Prévert. The English adaptation by Johnny Mercer gave it the title Autumn Leaves. It became one of the most recorded jazz standards ever, prized by students and masters alike for its elegant cycling through ii-V-I progressions in both a major and its relative minor key.',
  notableRecordings: [
    'Cannonball Adderley — Somethin\' Else (1958)',
    'Bill Evans — Portrait in Jazz (1959)',
    'Miles Davis — Miles Davis Plays for Lovers (1956)',
    'Keith Jarrett — Standards, Vol. 1 (1983)',
  ],
  harmonicSummary: 'Autumn Leaves cycles through a complete ii-V-I in Bb major (Cm7→F7→Bbmaj7→Ebmaj7) and then a ii-V-i in G minor (Am7b5→D7→Gm7), making it the textbook vehicle for learning these two foundational progressions side by side. The tune moves through the circle of fourths continuously, with the relative major (Bb) and relative minor (Gm) sharing all the same diatonic chords. The final section adds a chromatic chain of ii-Vs (Gm7→C7→Fm7→Bb7→Ebmaj7) before resolving home.',
  metaDescription: 'Autumn Leaves chord changes and harmonic analysis. Joseph Kosma\'s classic jazz standard: ii-V-I in Bb major and ii-V-i in G minor, with notation, playback, and scale guides.',

  sections: [
    // Section A (bars 1-8)
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Am7b5', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Gm7', beats: 4 }] },
      ],
      analysis: {
        summary: 'ii-V-I in Bb major, then ii-V-i in G minor.',
        insight:
          'The first 4 bars descend through the circle of fourths in Bb major (Cm7→F7→Bbmaj7→Ebmaj7), then bars 5-8 do the same in G minor (Am7b5→D7→Gm7). This is the core of the tune.',
        scaleGuide: [
          'Cm7: C Dorian (C D Eb F G A Bb)',
          'F7: F Mixolydian (F G A Bb C D Eb)',
          'Bbmaj7: Bb Ionian (Bb C D Eb F G A)',
          'Ebmaj7: Eb Lydian (Eb F G A Bb C D)',
          'Am7b5: A Locrian (A Bb C D Eb F G)',
          'D7: D Harmonic Minor of G (D Eb F# G A Bb C) or D Altered',
          'Gm7: G Dorian (G A Bb C D E F) or G Aeolian (G A Bb C D Eb F)',
        ],
        practiceTips: [
          'Practice the ii-V-I in Bb major first, then the ii-V-i in G minor.',
          'Note how Ebmaj7 (IVmaj7 of Bb) connects smoothly to Am7b5 (iiø7 of G minor).',
          'On the D7, try using the G harmonic minor scale for an authentic minor V7 sound.',
        ],
      },
    },

    // Section A repeat (bars 9-16)
    {
      name: 'A2',
      label: 'A Section (repeat)',
      bars: [
        { bar: 9,  chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Am7b5', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Gm7', beats: 4 }] },
      ],
      analysis: {
        summary: 'Identical to the A section. Repetition builds familiarity.',
        insight:
          'Use the repeat to try different approaches: first time through play safe with chord tones, second time add more scalar/chromatic ideas.',
        scaleGuide: [
          'Same as A section — see above.',
        ],
        practiceTips: [
          'Try playing the same lick in both the major and minor ii-V for comparison.',
          'Focus on smooth voice leading between chord tones across bar lines.',
        ],
      },
    },

    // Section B (bars 17-24)
    {
      name: 'B',
      label: 'B Section (Bridge)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Am7b5', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
      ],
      analysis: {
        summary: 'Reversed order: ii-V-i in G minor first, then ii-V-I in Bb major.',
        insight:
          'The bridge flips the A section order — minor resolution first, then major. This creates a feeling of arrival at Bbmaj7.',
        scaleGuide: [
          'Am7b5: A Locrian or Locrian #2',
          'D7: D Altered or D Phrygian Dominant (5th mode of G harmonic minor)',
          'Gm7: G Dorian',
          'Cm7: C Dorian',
          'F7: F Mixolydian',
          'Bbmaj7: Bb Ionian or Bb Lydian',
        ],
        practiceTips: [
          'The ii-V-i to ii-V-I transition is a great place to practice connecting phrases across key centers.',
          'Try a long melodic line that flows from Gm7 through Cm7 to F7 to Bbmaj7.',
        ],
      },
    },

    // Section C (bars 25-32)
    {
      name: 'C',
      label: 'C Section (Ending)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Am7b5', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 29, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'Am7b5', beats: 2 }, { symbol: 'D7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Gm7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Gm7', beats: 4 }] },
      ],
      analysis: {
        summary: 'Final resolution: ii-V-i with passing chords, ending on Gm.',
        insight:
          'Bars 27-28 add chromatic motion: Gm7→C7→Fm7→Bb7→Ebmaj7 is a chain of ii-Vs descending. Bar 30 sets up the final ii-V-i cadence in G minor.',
        scaleGuide: [
          'Am7b5: A Locrian',
          'D7: D Altered (strong resolution to Gm)',
          'Gm7: G Dorian',
          'C7: C Mixolydian (secondary dominant)',
          'Fm7: F Dorian',
          'Bb7: Bb Mixolydian',
          'Ebmaj7: Eb Lydian',
          'Final Am7b5→D7→Gm7: classic minor ii-V-i',
        ],
        practiceTips: [
          'The chromatic ii-V chain in bars 27-28 is great for practicing ii-V licks in different keys back to back.',
          'For the final cadence, try using D altered scale resolving to G Dorian for maximum tension-release.',
          'Practice the turnaround (bars 30-32) separately — it sets up the repeat.',
        ],
      },
    },
  ],
};
