// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const NIGHT_AND_DAY: Standard = {
  title: 'Night and Day',
  slug: 'night-and-day',
  composer: 'Cole Porter',
  year: 1932,
  form: 'ABAC',
  defaultKey: 'Eb major',
  alternateKey: 'C major',
  tempo: {
    slow: 100,
    medium: 120,
    fast: 160,
  },
  timeSignature: '4/4',
  totalBars: 32,
  difficulty: 'intermediate',
  tags: ['standard', 'cole porter', 'intermediate', 'sophisticated'],
  description:
    'Night and Day is a sophisticated Cole Porter composition from 1932 featuring chromatic harmony and unexpected modulations. This 32-bar ABAC form showcases Porter\'s masterful use of chromatic voice leading and surprising key changes. The tune is a favorite among jazz musicians for its harmonic complexity and elegant melodic construction.',
  style: 'Jazz Standard',
  historicalContext: 'Composed by Cole Porter for the 1932 Broadway musical Gay Divorce (later filmed as The Gay Divorcee), Night and Day became one of the most enduring American standards. Its unusual 48-bar form (for the full song), striking opening repeated-note melody, and sophisticated harmonic movement made it a jazz vehicle from the swing era onward. The film version with Fred Astaire and Ginger Rogers cemented its popularity.',
  notableRecordings: [
    'Fred Astaire — The Gay Divorcee (1934 film)',
    'Frank Sinatra — (multiple recordings)',
    'Ella Fitzgerald — (various recordings)',
    'Benny Goodman — (various swing recordings)',
  ],
  harmonicSummary: 'Night and Day is typically played in a 32-bar AABA form (a shortened version of the full song) in Eb major. The A section opens on a striking chord (Bb7sus4 or Ab major over Eb) that creates harmonic ambiguity before resolving through ii-V-I progressions in Eb. Porter\'s harmonic language features unexpected chromatic chords and a particularly dramatic moment in the bridge. The tune\'s unusual opening harmony — hovering on a single note against changing bass notes — is one of the most recognized openings in the standard repertoire.',
  metaDescription: 'Night and Day chord changes and harmonic analysis. Cole Porter\'s 1932 jazz standard in Eb major: distinctive one-note opening, AABA form — with notation, playback, and scale guides.',

  sections: [
    {
      name: 'A1',
      label: 'A Section (First)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 6, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 9, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 12, chords: [{ symbol: 'Fmaj7', beats: 4 }] },
        { bar: 13, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 14, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 15, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'A2',
      label: 'A Section (Second)',
      bars: [
        { bar: 17, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 18, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 19, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 20, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 21, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 22, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 23, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 24, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
    {
      name: 'C',
      label: 'C Section (Ending)',
      bars: [
        { bar: 25, chords: [{ symbol: 'Abmaj7', beats: 4 }] },
        { bar: 26, chords: [{ symbol: 'Gm7', beats: 2 }, { symbol: 'C7', beats: 2 }] },
        { bar: 27, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 28, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 29, chords: [{ symbol: 'Fm7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 30, chords: [{ symbol: 'Ebmaj7', beats: 2 }, { symbol: 'Bb7', beats: 2 }] },
        { bar: 31, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
        { bar: 32, chords: [{ symbol: 'Ebmaj7', beats: 4 }] },
      ],
    },
  ],
};
