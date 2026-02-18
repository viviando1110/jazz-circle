// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const FREDDIE_FREELOADER: Standard = {
  title: 'Freddie Freeloader',
  slug: 'freddie-freeloader',
  composer: 'Miles Davis',
  year: 1959,
  form: 'Blues',
  defaultKey: 'Bb major',
  alternateKey: 'F major',
  tempo: { slow: 100, medium: 140, fast: 180 },
  timeSignature: '4/4',
  totalBars: 12,
  difficulty: 'beginner',
  tags: ['blues', 'swing', 'miles-davis', 'kind-of-blue', 'beginner-friendly'],
  description: 'A classic 12-bar blues from Kind of Blue. Features straightforward blues harmony perfect for beginners and a swinging feel.',
  style: 'Modal Jazz',
  historicalContext: 'Composed by Miles Davis and recorded on Kind of Blue (1959), Freddie Freeloader is the only track on the album featuring Wynton Kelly on piano instead of Bill Evans. Named after a fictional character in Davis\'s social circle, it is a swinging 12-bar blues in Bb that contrasts with the modal pieces on the album through its more conventional blues harmonic structure.',
  notableRecordings: [
    'Miles Davis — Kind of Blue (1959, with Wynton Kelly on piano)',
    'Widely covered — (blues from the most famous jazz album of all time)',
  ],
  harmonicSummary: 'Freddie Freeloader is a straightforward 12-bar blues in Bb major with a relaxed, swinging groove. The changes follow a standard blues structure: Bb7 (I)→Eb7 (IV)→Bb7 (I)→F7 (V)→Eb7 (IV)→Bb7 with turnaround. Unlike other tracks on Kind of Blue that use modal harmony, Freddie Freeloader uses traditional blues changes. Wynton Kelly\'s blues-inflected piano style suits the tune better than Evans\'s more impressionistic approach. Its simplicity and groove make it one of the most accessible pieces on Kind of Blue.',
  metaDescription: 'Freddie Freeloader chord changes and harmonic analysis. Miles Davis\'s 12-bar Bb blues from Kind of Blue (1959): standard blues changes, with notation, playback, and scale guides.',
  sections: [
    {
      name: 'Blues',
      label: 'Blues Form',
      bars: [
        { bar: 1, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'F7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Eb7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Bb7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'F7', beats: 4 }] },
      ],
    },
  ],
};
