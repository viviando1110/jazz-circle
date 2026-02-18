// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const SUMMERTIME: Standard = {
  title: 'Summertime',
  slug: 'summertime',
  composer: 'George Gershwin',
  year: 1935,
  form: 'ABAC',
  defaultKey: 'A minor',
  alternateKey: 'D minor',
  tempo: {
    slow: 60,
    medium: 80,
    fast: 100,
  },
  timeSignature: '4/4',
  totalBars: 16,
  difficulty: 'beginner',
  tags: ['standard', 'ballad', 'beginner', 'minor key', 'gershwin'],
  description:
    'Summertime is one of the most recorded jazz standards, composed by George Gershwin for the opera Porgy and Bess in 1935. This 16-bar tune features a simple yet beautiful minor key progression with bluesy inflections. The melody is hauntingly lyrical, and the harmony is accessible for beginners while allowing for sophisticated harmonic substitutions at advanced levels.',
  style: 'Jazz Standard',
  historicalContext: 'Composed by George Gershwin for his 1935 folk opera Porgy and Bess (with lyrics by DuBose Heyward), Summertime is one of the most performed songs in the history of Western music. Its haunting A minor melody over a simple but hypnotic ii-V-i progression has attracted jazz, blues, soul, and pop artists across nearly a century. Ella Fitzgerald and Louis Armstrong\'s recording and Janis Joplin\'s rock version are particularly famous.',
  notableRecordings: [
    'Ella Fitzgerald & Louis Armstrong — Porgy and Bess (1957)',
    'Miles Davis — Porgy and Bess (1958, arr. Gil Evans)',
    'Janis Joplin — Cheap Thrills (1968)',
    'John Coltrane — (various recordings)',
  ],
  harmonicSummary: 'Summertime is based on a repeating two-chord vamp alternating between Am6 (or Am7) and E7 — essentially a minor i→V7 oscillation. The harmonic simplicity is the point: the two-chord modal vamp in A minor invites melodic invention over a static harmonic canvas. More harmonically developed jazz arrangements often add a bridge with additional chord movement (to C major and back), but the core of the tune is always the hypnotic minor vamp. The A minor pentatonic and A Dorian scales are the primary improvisation tools.',
  metaDescription: 'Summertime chord changes and harmonic analysis. George Gershwin\'s 1935 classic: A minor two-chord vamp (Am→E7) from Porgy and Bess — with notation, playback, and scale guides.',

  sections: [
    {
      name: 'A1',
      label: 'A Section (First)',
      bars: [
        { bar: 1, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'E7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'E7', beats: 4 }] },
      ],
    },
    {
      name: 'B',
      label: 'B Section',
      bars: [
        { bar: 5, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 8, chords: [{ symbol: 'E7', beats: 2 }, { symbol: 'Am6', beats: 2 }] },
      ],
    },
    {
      name: 'A2',
      label: 'A Section (Second)',
      bars: [
        { bar: 9, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'E7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'E7', beats: 4 }] },
      ],
    },
    {
      name: 'C',
      label: 'C Section (Ending)',
      bars: [
        { bar: 13, chords: [{ symbol: 'Am6', beats: 4 }] },
        { bar: 14, chords: [{ symbol: 'Dm7', beats: 2 }, { symbol: 'F7', beats: 2 }] },
        { bar: 15, chords: [{ symbol: 'E7', beats: 2 }, { symbol: 'Am6', beats: 2 }] },
        { bar: 16, chords: [{ symbol: 'Am6', beats: 4 }] },
      ],
    },
  ],
};
