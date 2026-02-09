// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const STELLA_BY_STARLIGHT: Standard = {
  title: 'Stella by Starlight',
  slug: 'stella-by-starlight',
  composer: 'Victor Young',
  year: 1944,
  form: 'ABCD',
  defaultKey: 'Bb',
  alternateKey: 'G',
  tempo: {
    slow: 100,
    medium: 140,
    fast: 190,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'advanced',
  tags: ['standard', 'advanced', 'ii-V-I', 'key modulation', 'through-composed'],
  description:
    'One of the most harmonically sophisticated standards in the jazz repertoire. Through-composed with constantly shifting key centers, Stella by Starlight is a masterclass in ii-V-I resolution chains and chromatic harmonic movement. The tune never repeats a section, making it a unique challenge for improvisers.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Em7b5', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Ab7', beats: 4 }] },
      ],
      analysis: {
        summary:
          'Opens with a ii-V to D minor (Em7b5-A7), immediately followed by ii-V to Bb (Cm7-F7), then ii-V to Eb (Fm7-Bb7), resolving to Ebmaj7. The Ab7 at bar 8 is a chromatic surprise, functioning as a tritone substitution.',
        insight:
          'The opening is deceptive: the Em7b5-A7 suggests D minor, but instead of resolving there, it moves to Cm7-F7 in the home key. This sets up the harmonic ambiguity that defines the entire tune. The Ab7 prepares for the arrival on Bbmaj7 in section B.',
        scaleGuide: [
          'Em7b5: D melodic minor or B Locrian',
          'A7: A altered scale or D harmonic minor',
          'Cm7: C Dorian',
          'F7: F Mixolydian or F altered',
          'Fm7: F Dorian',
          'Bb7: Bb Mixolydian or Bb altered',
          'Ebmaj7: Eb major or Eb Lydian',
          'Ab7: Ab Lydian dominant or Db melodic minor',
        ],
        practiceTips: [
          'Practice the ii-V-I chain slowly, hearing each resolution before moving to the next key center',
          'Work on voice leading through the chromatic movement: Em7b5 → Cm7 → Fm7',
          'The Ab7 is crucial: treat it as a tritone sub for D7, creating smooth chromatic bass motion (Ab → G)',
          'Arpeggiate each chord slowly to internalize the complex harmonic structure',
        ],
      },
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        {
          bar: 10,
          chords: [
            { symbol: 'Em7b5', beats: 2 },
            { symbol: 'A7', beats: 2 },
          ],
        },
        { bar: 11, chords: [{ symbol: 'Dm7', beats: 4 }] },
        {
          bar: 12,
          chords: [
            { symbol: 'Bbm7', beats: 2 },
            { symbol: 'Eb7', beats: 2 },
          ],
        },
        { bar: 13, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        {
          bar: 14,
          chords: [
            { symbol: 'Em7b5', beats: 2 },
            { symbol: 'A7', beats: 2 },
          ],
        },
        { bar: 15, chords: [{ symbol: 'Am7b5', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'D7', beats: 4 }] },
      ],
      analysis: {
        summary:
          'Arrives at the tonic Bbmaj7, then navigates through multiple ii-V patterns targeting different key centers: D minor (bars 10-11), Ab major (bars 12-13), and back to D minor (bars 14-16). The section ends on D7, setting up the next modulation.',
        insight:
          'This section demonstrates Stella\'s signature harmonic technique: constant modulation via ii-V patterns. The Bbm7-Eb7 to Fmaj7 (bars 12-13) is particularly sophisticated—a ii-V to Ab that resolves deceptively to F, the dominant of the home key.',
        scaleGuide: [
          'Bbmaj7: Bb major or Bb Lydian',
          'Em7b5: D melodic minor or B Locrian',
          'A7: A altered scale',
          'Dm7: D Dorian',
          'Bbm7: Bb Dorian',
          'Eb7: Eb Mixolydian or Eb altered',
          'Fmaj7: F major or F Lydian',
          'Am7b5: G melodic minor or F# Locrian',
          'D7: D Mixolydian or D altered',
        ],
        practiceTips: [
          'Map out each key center before improvising: Bb → D minor → Ab → F → D minor',
          'Practice connecting the ii-V patterns smoothly—avoid thinking in isolated "boxes"',
          'The D7 at bar 16 is a pivot: it functions as V7/ii in G minor (section C)',
          'Work on chromatic approach tones between key centers for smooth transitions',
        ],
      },
    },
    {
      name: 'C',
      label: 'C Section',
      bars: [
        { bar: 17, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Cm7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Ab7', beats: 4 }] },
        { bar: 22, chords: [{ symbol: 'Ab7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 24, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
      ],
      analysis: {
        summary:
          'G7 (V7 of Cm) resolves to Cm7 (the ii chord in Bb). The Cm7 is sustained for two bars, then Ab7 (a chromatic approach chord) leads to the resolution on Bbmaj7. This section provides harmonic breathing room after the rapid modulations of A and B.',
        insight:
          'The two-bar chord durations are unusual for Stella and create a moment of relative stability. The G7 → Cm7 movement emphasizes the minor ii chord, highlighting the darker harmonic color. The Ab7 functions as a tritone substitution for D7 (V7 of Bb), creating chromatic bass motion (Ab → Bb).',
        scaleGuide: [
          'G7: G Mixolydian, G altered, or C harmonic minor',
          'Cm7: C Dorian or C Aeolian',
          'Ab7: Ab Lydian dominant or Db melodic minor',
          'Bbmaj7: Bb major or Bb Lydian',
        ],
        practiceTips: [
          'Use the longer chord durations to develop motifs—this is prime space for melodic development',
          'On G7, emphasize the b9 and b13 to highlight the dominant function to Cm',
          'The Cm7 offers a chance to explore darker colors: Aeolian, Dorian, or blues scale',
          'Practice voice leading: G (G7) → G (Cm7) → Ab (Ab7) → Bb (Bbmaj7) in the melody',
        ],
      },
    },
    {
      name: 'D',
      label: 'D Section',
      bars: [
        { bar: 25, chords: [{ symbol: 'Em7b5', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'A7', beats: 4 }] },
        { bar: 27, chords: [{ symbol: 'Dm7b5', beats: 4 }] },
        { bar: 28, chords: [{ symbol: 'G7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Cm7b5', beats: 4 }] },
        { bar: 30, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 31, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Bbmaj7', beats: 4 }] },
      ],
      analysis: {
        summary:
          'A descending chain of ii-V patterns brings the tune home: Em7b5-A7 (targeting D minor), Dm7b5-G7 (targeting C minor), Cm7b5-F7 (resolving to Bb major). This creates a cascading harmonic resolution sequence.',
        insight:
          'The final section is a masterpiece of voice leading. Each ii-V moves down a whole step (E → D → C), creating a stepwise descent in the bass. The half-diminished quality on each ii chord adds tension, making the final resolution to Bbmaj7 especially satisfying. This is one of the most elegant turnarounds in jazz.',
        scaleGuide: [
          'Em7b5: D melodic minor or B Locrian',
          'A7: A altered scale',
          'Dm7b5: C melodic minor or A Locrian',
          'G7: G altered scale or C harmonic minor',
          'Cm7b5: Bb melodic minor or G Locrian',
          'F7: F altered scale or Bb harmonic minor',
          'Bbmaj7: Bb major or Bb Lydian',
        ],
        practiceTips: [
          'Practice this section as a loop (bars 25-32) to master the descending ii-V chain',
          'Focus on voice leading: connect the guide tones (3rd and 7th) chromatically between chords',
          'The altered sound on each dominant (A7, G7, F7) is crucial—practice altered scales thoroughly',
          'Experiment with different resolutions: resolve each ii-V, or delay resolution until the final Bbmaj7',
          'Transcribe Bill Evans or Wynton Kelly on this tune to hear how masters navigate these changes',
        ],
      },
    },
  ],
};
