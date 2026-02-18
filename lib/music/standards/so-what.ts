// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import { Standard } from '@/lib/music/types';

export const SO_WHAT: Standard = {
  title: 'So What',
  slug: 'so-what',
  composer: 'Miles Davis',
  year: 1959,
  form: 'AABA',
  defaultKey: 'D minor',
  alternateKey: 'Eb minor',
  tempo: {
    slow: 100,
    medium: 136,
    fast: 180,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'beginner',
  tags: ['standard', 'beginner', 'modal jazz', 'minor key', 'Miles Davis'],
  description:
    'The defining modal jazz composition from Miles Davis\' landmark 1959 album Kind of Blue. So What revolutionized jazz by abandoning traditional chord progressions in favor of static modal harmony, using only two chords across 32 bars. This simplicity forces musicians to focus on melodic invention, phrasing, and rhythmic development rather than navigating complex changes. The tune\'s iconic bassline and relaxed swing feel made it one of the most influential recordings in jazz history.',
  style: 'Modal Jazz',
  historicalContext: 'Composed by Miles Davis and first recorded for the landmark album Kind of Blue (1959), So What pioneered modal jazz improvisation. Rather than rapid chord changes, the tune uses static modal harmony — two chords across 32 bars — forcing soloists to create interest through melodic development rather than chord navigation. It remains one of the best-selling jazz albums of all time.',
  notableRecordings: [
    'Miles Davis — Kind of Blue (1959)',
    'Bill Evans Trio — Waltz for Debby (live at Village Vanguard, 1961)',
    'John Coltrane — A Love Supreme (influence)',
  ],
  harmonicSummary: 'So What uses only two chords across its 32-bar AABA form: 16 bars of D Dorian (A section, repeated), 8 bars of Eb Dorian (bridge, a half-step up), and a return to D Dorian (final A). The half-step modulation in the bridge is the tune\'s sole harmonic event. This modal framework — derived from Miles Davis\'s interest in George Russell\'s Lydian Chromatic Concept — freed soloists from functional harmony and opened a new era of jazz improvisation.',
  metaDescription: 'So What chord changes and harmonic analysis. Miles Davis\'s modal jazz masterpiece from Kind of Blue (1959): D Dorian / Eb Dorian, AABA form, with scale guides and practice tips.',
  sections: [
    {
      name: 'A',
      label: 'A Section',
      bars: [
        { bar: 1, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Dm7', beats: 4 }] },
        { bar: 16, chords: [{ symbol: 'Dm7', beats: 4 }] },
      ],
      analysis: {
        summary:
          'Sixteen bars of D Dorian mode, establishing the primary tonal center with no harmonic movement.',
        insight:
          'This section exemplifies modal jazz at its purest. With no chord changes to navigate, the improviser must create interest through melodic development, rhythmic variation, and dynamic control. The static harmony encourages exploration of the D Dorian sound world (D E F G A B C) and rewards patience and space. Listen to how Miles Davis builds his solo gradually, using motivic development and call-and-response with the rhythm section.',
        scaleGuide: [
          'Dm7: D Dorian (D E F G A B C) - use the natural 6th (B) and natural 7th (C) that distinguish Dorian from natural minor',
          'Focus on the characteristic Dorian sound: the raised 6th gives it a brighter quality than Aeolian',
          'Explore tensions: 9th (E), 11th (G), 13th (B) all sound great over Dm7',
        ],
        practiceTips: [
          'Start simple: play just a few well-chosen notes rather than running scales up and down',
          'Use space effectively - silence is just as important as sound in modal playing',
          'Build phrases gradually: start with a simple motif and develop it through repetition, variation, and expansion',
          'Practice playing "horizontally" through the mode rather than thinking vertically about chord tones',
          'Work on making the Dorian mode sing: emphasize the characteristic 6th scale degree (B)',
          'Listen to the original recording repeatedly to internalize the feel and phrasing approach',
          'Try playing just chord tones (D F A C) first, then add color tones one at a time',
        ],
      },
    },
    {
      name: 'B',
      label: 'B Section (Bridge)',
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
      analysis: {
        summary:
          'Eight bars of Eb Dorian, a half-step modulation up from the A section, creating harmonic contrast through modal shift rather than functional harmony.',
        insight:
          'The bridge provides relief and contrast by moving up a half step to Eb Dorian. This subtle shift creates significant tonal color change while maintaining the modal concept. The challenge here is to make this new key center feel fresh while maintaining continuity with your A section ideas. Notice how the half-step relationship creates a smooth, almost imperceptible modulation - you can hear it as a brightening or lifting of the tonal center.',
        scaleGuide: [
          'Ebm7: Eb Dorian (Eb F Gb Ab Bb C Db) - same intervallic structure as D Dorian, transposed up a half step',
          'Characteristic Dorian tones: natural 6th (C) and natural 7th (Db)',
          'Available tensions: 9th (F), 11th (Ab), 13th (C)',
        ],
        practiceTips: [
          'Make the modulation to Eb feel natural - you might transpose a motif from the A section up a half step',
          'Alternatively, use the bridge as a chance to introduce new melodic material and build contrast',
          'The half-step relationship between D and Eb creates interesting chromatic possibilities at the seam (bars 16-17 and 24-25)',
          'Practice the transition between keys smoothly - the modulation should feel inevitable, not jarring',
          'Work on hearing the subtle tonal shift: Eb Dorian has a similar but distinct character from D Dorian',
          'Try playing the same phrase in both keys to hear how the half-step transposition affects the color',
        ],
      },
    },
    {
      name: 'A2',
      label: 'A Section (return)',
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
      analysis: {
        summary:
          'Return to D Dorian for the final eight bars, completing the AABA form and resolving back to the home key.',
        insight:
          'The final A section brings us home to D Dorian after the brief excursion to Eb. This is where you can bring your solo to a satisfying conclusion or build to a climax. The return feels like coming home, and you can use this to your advantage by referencing ideas from the opening A section, creating a sense of unity and closure. Many great soloists save their strongest statements for this final section.',
        scaleGuide: [
          'Dm7: D Dorian (D E F G A B C) - same as the opening A section',
          'Emphasize the return to the home key by landing strongly on D',
          'All the same scale and tension notes from the first A section apply here',
        ],
        practiceTips: [
          'Use this section to create a sense of resolution and completion in your solo',
          'Consider bringing back melodic ideas from the first A section for unity',
          'Build toward a climax or wind down gracefully depending on your musical intent',
          'The transition from Eb back to D (bars 24-25) is a great place for a strong melodic statement',
          'Practice ending your phrases decisively - weak endings undermine an otherwise strong solo',
          'Listen to how different soloists on the recording handle the return to D Dorian',
          'Experiment with dynamics: this final section could be louder, softer, or gradually changing',
        ],
      },
    },
  ],
};
