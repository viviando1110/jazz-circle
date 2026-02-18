// NOTE: Only chord progressions, analysis, and practice tips. NO melody or lyrics (copyrighted).

import type { Standard } from '@/lib/music/types';

export const WORK_SONG: Standard = {
  title: 'Work Song',
  slug: 'work-song',
  composer: 'Nat Adderley',
  year: 1960,
  form: 'Blues',
  defaultKey: 'F minor',
  alternateKey: 'E minor',
  tempo: { slow: 100, medium: 120, fast: 140 },
  timeSignature: '4/4',
  totalBars: 12,
  difficulty: 'beginner',
  tags: ['standard', 'blues', 'soul-jazz', 'minor-blues', 'hard-bop'],
  description: 'A soulful minor blues evoking the sound of chain gang work songs. Nat Adderley\'s powerful composition became a soul-jazz standard, featuring a simple but deeply expressive melody over a minor blues progression.',
  style: 'Hard Bop',
  historicalContext: 'Composed by Nat Adderley (brother of Cannonball Adderley) and recorded by the Cannonball Adderley Sextet on the album of the same name in 1960, Work Song was a soul jazz crossover hit with a gospel-blues character inspired by African American work songs and field hollers. It has been covered in numerous jazz, soul, and popular music contexts.',
  notableRecordings: [
    'Cannonball Adderley — Work Song (1960)',
    'Oscar Brown Jr. — (vocal version with lyrics)',
    'Herb Alpert & the Tijuana Brass — (1966 pop version)',
    'Widely covered — (soul jazz standard)',
  ],
  harmonicSummary: 'Work Song is a 16-bar minor blues in F minor with a driving, gospel-inflected groove. The chord changes are rooted in blues: Fm7 (I minor)→Bbm7 (IV minor)→Fm7 (I)→C7 (V7)→Fm7, following a minor blues structure with bebop-era ii-V turnaround. The 16-bar form (rather than 12) adds two extra bars at the turnaround, giving it a slightly extended, hypnotic quality. The minor key and gospel feel create a powerful emotional character that transcends jazz audiences.',
  metaDescription: 'Work Song chord changes and harmonic analysis. Nat Adderley\'s soul jazz blues standard (1960): F minor 16-bar blues, gospel groove — Cannonball Adderley classic, with notation and scale guides.',
  sections: [
    {
      name: 'A',
      label: 'Minor Blues',
      bars: [
        { bar: 1, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 2, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 3, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 4, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 5, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 6, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 7, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 8, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 9, chords: [{ symbol: 'C7', beats: 4 }] },
        { bar: 10, chords: [{ symbol: 'Bbm7', beats: 4 }] },
        { bar: 11, chords: [{ symbol: 'Fm7', beats: 4 }] },
        { bar: 12, chords: [{ symbol: 'C7', beats: 4 }] },
      ],
    },
  ],
};
