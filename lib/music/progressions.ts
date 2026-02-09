// lib/music/progressions.ts
// Jazz progression templates and key-specific rendering.

import type {
  MusicalKey,
  ProgressionTemplate,
  RenderedProgression,
  DiatonicChord,
} from '@/lib/music/types';
import { getDiatonicChords } from '@/lib/music/chords';

/* ═══════════════════════════════════════════════════════════
   Progression Templates
   ═══════════════════════════════════════════════════════════

   degrees[] uses 0-indexed scale degrees: 0=I, 1=ii, 2=iii, etc.
   For jazz blues and other non-diatonic progressions, we use
   a custom rendering approach (see renderProgression).
   ═══════════════════════════════════════════════════════════ */

export const JAZZ_PROGRESSIONS: ProgressionTemplate[] = [
  {
    id: 'ii-V-I',
    name: 'ii – V – I',
    degrees: [1, 4, 0],
    description: 'The most fundamental jazz progression. Master this first.',
    bars: '4 bars',
    category: 'essential',
  },
  {
    id: 'I-vi-ii-V',
    name: 'I – vi – ii – V',
    degrees: [0, 5, 1, 4],
    description: 'Classic turnaround. Ends on V to loop back to I.',
    bars: '4 bars',
    category: 'turnaround',
  },
  {
    id: 'iii-vi-ii-V',
    name: 'iii – vi – ii – V',
    degrees: [2, 5, 1, 4],
    description: 'Extended turnaround starting from iii. Common in standards.',
    bars: '4 bars',
    category: 'turnaround',
  },
  {
    id: 'jazz-blues',
    name: 'Jazz Blues',
    degrees: [0, 3, 0, 0, 3, 3, 0, 0, 1, 4, 0, 4],
    description: '12-bar blues with jazz chord substitutions (dominant 7ths and ii-V).',
    bars: '12 bars',
    category: 'blues',
  },
  {
    id: 'modal-vamp',
    name: 'Modal Vamp',
    degrees: [0, 1],
    description: 'Two-chord vamp. Explore modal colors over a static harmony.',
    bars: '2 bars',
    category: 'modal',
  },
  {
    id: 'backdoor-ii-V',
    name: 'Backdoor ii – V',
    degrees: [3, 6],
    description: 'iv-m7 to bVII7 resolving to I. Smooth unexpected resolution.',
    bars: '4 bars',
    category: 'advanced',
  },
  {
    id: 'coltrane-changes',
    name: 'Coltrane Changes',
    degrees: [0, 4, 1, 5, 2, 0],
    description: 'Major third cycle. Giant Steps-style key center movement.',
    bars: '4 bars',
    category: 'advanced',
  },
];

/* ═══════════════════════════════════════════════════════════
   Rendering
   ═══════════════════════════════════════════════════════════ */

/**
 * Render a progression template in a specific key.
 * Converts scale degree indices to actual DiatonicChord objects.
 */
export function renderProgression(
  template: ProgressionTemplate,
  key: MusicalKey,
): RenderedProgression {
  const diatonic = getDiatonicChords(key);

  const chords: DiatonicChord[] = template.degrees.map((degree) => {
    // Clamp to valid diatonic degrees (0-6)
    const idx = ((degree % 7) + 7) % 7;
    return diatonic[idx];
  });

  return {
    template,
    key,
    chords,
  };
}
