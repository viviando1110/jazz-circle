import { describe, it, expect } from 'vitest';
import { JAZZ_PROGRESSIONS, renderProgression } from '@/lib/music/progressions';
import { KEYS_MAJOR } from '@/lib/music/keys';
import type { MusicalKey } from '@/lib/music/types';

/* ═══════════════════════════════════════════════════════════
   Progression Template Sanity
   ═══════════════════════════════════════════════════════════ */

describe('JAZZ_PROGRESSIONS', () => {
  it('has 5 templates', () => {
    expect(JAZZ_PROGRESSIONS).toHaveLength(5);
  });

  it('each template has a unique id', () => {
    const ids = JAZZ_PROGRESSIONS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('jazz blues has 12 degrees (12 bars)', () => {
    const blues = JAZZ_PROGRESSIONS.find((p) => p.id === 'jazz-blues');
    expect(blues).toBeDefined();
    expect(blues!.degrees).toHaveLength(12);
  });
});

/* ═══════════════════════════════════════════════════════════
   renderProgression — ii-V-I in C Major
   ═══════════════════════════════════════════════════════════ */

describe('renderProgression — ii-V-I in C Major', () => {
  const cMajor = KEYS_MAJOR.find((k) => k.root === 'C')!;
  const iiVI = JAZZ_PROGRESSIONS.find((p) => p.id === 'ii-V-I')!;
  const rendered = renderProgression(iiVI, cMajor);

  it('produces 3 chords', () => {
    expect(rendered.chords).toHaveLength(3);
  });

  it('produces Dm7 → G7 → Cmaj7', () => {
    const names = rendered.chords.map((c) => c.name);
    expect(names).toEqual(['Dm7', 'G7', 'Cmaj7']);
  });

  it('preserves the template reference', () => {
    expect(rendered.template.id).toBe('ii-V-I');
  });

  it('preserves the key reference', () => {
    expect(rendered.key.root).toBe('C');
  });
});

/* ═══════════════════════════════════════════════════════════
   renderProgression — ii-V-I in All 12 Major Keys
   ═══════════════════════════════════════════════════════════ */

describe('renderProgression — ii-V-I in all 12 major keys', () => {
  const iiVI = JAZZ_PROGRESSIONS.find((p) => p.id === 'ii-V-I')!;

  // Expected ii-V-I chord names for each major key
  const expectedChords: Record<string, string[]> = {
    C:  ['Dm7', 'G7', 'Cmaj7'],
    G:  ['Am7', 'D7', 'Gmaj7'],
    D:  ['Em7', 'A7', 'Dmaj7'],
    A:  ['Bm7', 'E7', 'Amaj7'],
    E:  ['Gbm7', 'B7', 'Emaj7'],
    B:  ['Dbm7', 'Gb7', 'Bmaj7'],
    Gb: ['Abm7', 'Db7', 'Gbmaj7'],
    Db: ['Ebm7', 'Ab7', 'Dbmaj7'],
    Ab: ['Bbm7', 'Eb7', 'Abmaj7'],
    Eb: ['Fm7', 'Bb7', 'Ebmaj7'],
    Bb: ['Cm7', 'F7', 'Bbmaj7'],
    F:  ['Gm7', 'C7', 'Fmaj7'],
  };

  for (const key of KEYS_MAJOR) {
    it(`${key.displayName}: ${expectedChords[key.root].join(' → ')}`, () => {
      const rendered = renderProgression(iiVI, key);
      const names = rendered.chords.map((c) => c.name);
      expect(names).toEqual(expectedChords[key.root]);
    });
  }
});

/* ═══════════════════════════════════════════════════════════
   renderProgression — I-vi-ii-V turnaround
   ═══════════════════════════════════════════════════════════ */

describe('renderProgression — I-vi-ii-V in C Major', () => {
  const cMajor = KEYS_MAJOR.find((k) => k.root === 'C')!;
  const turnaround = JAZZ_PROGRESSIONS.find((p) => p.id === 'I-vi-ii-V')!;
  const rendered = renderProgression(turnaround, cMajor);

  it('produces Cmaj7 → Am7 → Dm7 → G7', () => {
    const names = rendered.chords.map((c) => c.name);
    expect(names).toEqual(['Cmaj7', 'Am7', 'Dm7', 'G7']);
  });
});

/* ═══════════════════════════════════════════════════════════
   renderProgression — Jazz Blues
   ═══════════════════════════════════════════════════════════ */

describe('renderProgression — Jazz Blues in C Major', () => {
  const cMajor = KEYS_MAJOR.find((k) => k.root === 'C')!;
  const blues = JAZZ_PROGRESSIONS.find((p) => p.id === 'jazz-blues')!;
  const rendered = renderProgression(blues, cMajor);

  it('produces 12 chords (12 bars)', () => {
    expect(rendered.chords).toHaveLength(12);
  });

  it('starts on I chord', () => {
    expect(rendered.chords[0].name).toBe('Cmaj7');
  });
});

/* ═══════════════════════════════════════════════════════════
   renderProgression — All templates render without error
   ═══════════════════════════════════════════════════════════ */

describe('all progressions render in all 12 major keys without error', () => {
  for (const template of JAZZ_PROGRESSIONS) {
    for (const key of KEYS_MAJOR) {
      it(`${template.name} in ${key.displayName}`, () => {
        const rendered = renderProgression(template, key);
        expect(rendered.chords.length).toBe(template.degrees.length);
        for (const chord of rendered.chords) {
          expect(chord.root).toBeDefined();
          expect(chord.quality).toBeDefined();
          expect(chord.name).toBeDefined();
        }
      });
    }
  }
});
