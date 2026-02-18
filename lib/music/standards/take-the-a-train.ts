// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const TAKE_THE_A_TRAIN: Standard = {
  title: 'Take the A Train',
  slug: 'take-the-a-train',
  composer: 'Billy Strayhorn',
  year: 1941,
  form: 'AABA',
  defaultKey: 'C',
  alternateKey: 'Eb',
  tempo: {
    slow: 120,
    medium: 160,
    fast: 220,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'beginner',
  tags: ['standard', 'beginner', 'swing', 'Ellington', 'Lydian', '#IV'],
  description:
    "Duke Ellington's signature tune, notable for its use of the #IV dominant chord that gives it its distinctive Lydian flavor.",
  style: 'Jazz Standard',
  historicalContext: 'Composed by Billy Strayhorn in 1939 and adopted as the theme song of the Duke Ellington Orchestra, Take the A Train is one of the most recognizable jazz tunes ever written. Strayhorn wrote it after Ellington gave him subway directions to his apartment in Harlem — take the A train to Sugar Hill. It remained the Ellington band\'s signature opening theme for decades.',
  notableRecordings: [
    'Duke Ellington Orchestra — (1941 recording, with Billy Strayhorn on piano)',
    'Duke Ellington Orchestra — (multiple recordings across five decades)',
    'Ella Fitzgerald — (various recordings)',
    'Widely covered — (jazz standard and big band staple)',
  ],
  harmonicSummary: 'Take the A Train is a 32-bar AABA standard in C major with a distinctive harmonic feature: the D7#11 chord in bar 2 — a Lydian Dominant sound that was harmonically forward-thinking for 1939. The progression: C→D7#11→Dm7→G7→C establishes the home key with a chromatic approach chord before the conventional ii-V-I. The bridge moves to F major before returning. The D7#11 (tritone above the root, giving a Lydian Dominant color) is the harmonic fingerprint of the tune and gives it its bright, distinctive character.',
  metaDescription: 'Take the A Train chord changes and harmonic analysis. Billy Strayhorn\'s 1939 Ellington theme in C major: distinctive D7#11 Lydian Dominant, with notation, playback, and scale guides.',
  sections: [
    {
      name: 'A',
      label: 'A (bars 1-8)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
      analysis: {
        summary:
          'Classic A section featuring the signature #IV dominant (D7) followed by a standard ii-V-I resolution.',
        insight:
          'The D7 chord in bars 3-4 is NOT functioning as a secondary dominant (V/V). Instead, it acts as a #IVdom chord, creating the distinctive Lydian sound that defines this tune. This is sometimes called a "tritone substitution approach" or simply the #IV dominant. The D7 resolves down a half-step to Dm7, creating a smooth chromatic voice leading that differs from the typical V/V → V motion.',
        scaleGuide: [
          'Cmaj7 (bars 1-2, 7-8): C Ionian (C D E F G A B) or C Lydian for a brighter sound',
          'D7 (bars 3-4): D Lydian Dominant (D E F# G# A B C) for the #IV sound, or D Mixolydian (D E F# G A B C) for a simpler approach',
          'Dm7 (bar 5): D Dorian (D E F G A B C)',
          'G7 (bar 6): G Mixolydian (G A B C D E F) or G altered for tension',
        ],
        practiceTips: [
          'Focus on the D7 chord: this is the defining harmonic feature of the tune. Practice hearing the difference between D7 as #IVdom (going to Dm7) versus D7 as V/V (going to G7).',
          'Voice lead the D7 → Dm7 motion smoothly. The root moves down a half-step (D to D♭/C#), creating a chromatic descent.',
          'Experiment with D Lydian Dominant over the D7 for that characteristic "Take the A Train" sound: emphasize the F# and G# (raised 4th and raised 5th).',
          'The ii-V-I in bars 5-7 is straightforward: use this as an anchor point when learning the tune.',
          'Try playing just Cmaj7 → D7 → Dm7 → G7 → Cmaj7 in a loop to internalize the harmonic motion before adding rhythm and melody.',
        ],
      },
    },
    {
      name: 'A',
      label: 'A2 (bars 9-16)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
      analysis: {
        summary: 'Second A section — identical harmonic structure to the first A.',
        insight:
          'The repetition of the A section reinforces the characteristic #IV dominant sound. Use this repetition to experiment with different melodic ideas or rhythmic variations while maintaining the same harmonic framework.',
        scaleGuide: [
          'Cmaj7 (bars 9-10, 15-16): C Ionian or C Lydian',
          'D7 (bars 11-12): D Lydian Dominant or D Mixolydian',
          'Dm7 (bar 13): D Dorian',
          'G7 (bar 14): G Mixolydian or G altered',
        ],
        practiceTips: [
          'Since this section is harmonically identical to the first A, focus on melodic and rhythmic development.',
          'Try different voicings for the same chords to keep the sound fresh.',
          'Practice transitioning smoothly from bar 16 into the bridge (bar 17) — the shift from Cmaj7 to Fmaj7 is important.',
          'Listen to how great players vary their improvisation between the first and second A sections despite identical changes.',
        ],
      },
    },
    {
      name: 'B',
      label: 'B (bars 17-24)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'G7', beats: 4 }] },
      ],
      analysis: {
        summary:
          'Bridge section moves to the subdominant (IV) for four bars, then returns via the signature D7 and ii-V.',
        insight:
          'The bridge provides harmonic contrast by dwelling on Fmaj7 (the IV chord) for a full four bars. This creates a sense of brightness and lift before returning to the familiar D7 → Dm7 → G7 pattern. The extended stay on Fmaj7 is a classic AABA bridge technique, providing relief from the tonic while setting up the return to the final A section.',
        scaleGuide: [
          'Fmaj7 (bars 17-20): F Lydian (F G A B C D E) for a bright, open sound, or F Ionian (F G A Bb C D E) for a more traditional approach',
          'D7 (bars 21-22): D Lydian Dominant (D E F# G# A B C) or D Mixolydian',
          'Dm7 (bar 23): D Dorian (D E F G A B C)',
          'G7 (bar 24): G Mixolydian (G A B C D E F)',
        ],
        practiceTips: [
          'The four-bar Fmaj7 section offers a great opportunity to develop a melodic idea. Use the space to build tension and release.',
          'Emphasize the Lydian sound over Fmaj7 by highlighting the B natural (the #4 of F). This gives the bridge a brighter, more modern sound.',
          'Practice voice leading from Fmaj7 (bar 20) to D7 (bar 21): the roots move up a major 6th or down a minor 3rd.',
          'The D7 → Dm7 → G7 motion in bars 21-24 is your signal that the bridge is ending and the final A section is approaching.',
          'Think of the bridge as a journey: you move away from home (Cmaj7) to the IV area (Fmaj7), then navigate back via the D7 signpost.',
        ],
      },
    },
    {
      name: 'A',
      label: 'A3 (bars 25-32)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'D7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Cmaj7', beats: 4 }] },
      ],
      analysis: {
        summary:
          'Final A section — return to the home key with the signature #IV dominant sound.',
        insight:
          'The final A section brings the tune full circle, restating the opening harmonic structure. The resolution to Cmaj7 in bars 31-32 provides a satisfying conclusion. Many players will use bar 32 to set up the turnaround back to the top of the form when repeating, or to signal the ending if wrapping up the performance.',
        scaleGuide: [
          'Cmaj7 (bars 25-26, 31-32): C Ionian or C Lydian',
          'D7 (bars 27-28): D Lydian Dominant or D Mixolydian',
          'Dm7 (bar 29): D Dorian',
          'G7 (bar 30): G Mixolydian or G altered',
        ],
        practiceTips: [
          'The final A section is your chance to bring the tune home. Build to a climax or wind down depending on the arrangement.',
          'Bar 32 is crucial for signaling intent: if repeating the form, set up the return to bar 1; if ending, prepare the final cadence.',
          'Practice common ending variations: ending on Cmaj7, using a ii-V-I cadence in bar 32, or adding a tag.',
          'Compare the three A sections in your practice: notice how the same harmonic structure can support completely different melodic and rhythmic content.',
          'Once you have the form memorized, focus on connecting the sections smoothly and telling a complete musical story across all 32 bars.',
        ],
      },
    },
  ],
};
