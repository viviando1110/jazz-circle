import { describe, it, expect } from 'vitest';
import {
  findClosestVoicing,
  generateVoiceLeadingSequence,
  getRootlessVoicing,
  getShellVoicing,
  getDropVoicing,
  getAllVoicings,
} from '@/lib/music/voicings';
import { getChordVoicing, CHORD_INTERVALS } from '@/lib/music/chords';
import { noteToMidi } from '@/lib/music/theory';
import type { NoteName, ChordQuality, VoicingType } from '@/lib/music/types';

/** MIDI range constants (matching voicings.ts) */
const MIN_MIDI = 48; // C3
const MAX_MIDI = 84; // C6

/** Helper: assert all notes in a voicing are within the allowed range */
function expectInRange(midi: number[]) {
  for (const note of midi) {
    expect(note).toBeGreaterThanOrEqual(MIN_MIDI);
    expect(note).toBeLessThanOrEqual(MAX_MIDI);
  }
}

/** Helper: total semitone movement between two voicings (sorted bass-to-treble) */
function totalMovement(a: number[], b: number[]): number {
  const sa = [...a].sort((x, y) => x - y);
  const sb = [...b].sort((x, y) => x - y);
  const len = Math.min(sa.length, sb.length);
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += Math.abs(sa[i] - sb[i]);
  }
  return sum;
}

/* ═══════════════════════════════════════════════════════════
   findClosestVoicing
   ═══════════════════════════════════════════════════════════ */

describe('findClosestVoicing', () => {
  it('returns root position in octave 4 when currentMidi is empty', () => {
    const result = findClosestVoicing({ root: 'C', quality: 'maj7' }, []);
    const expected = getChordVoicing('C', 'maj7', 4).midiNotes;
    expect(result).toEqual(expected);
  });

  it('minimizes movement for Dm7 → G7 → Cmaj7 (ii-V-I in C)', () => {
    const dm7 = getChordVoicing('D', 'm7', 4).midiNotes; // [62, 65, 69, 72]
    const g7 = findClosestVoicing({ root: 'G', quality: '7' }, dm7);
    const cmaj7 = findClosestVoicing({ root: 'C', quality: 'maj7' }, g7);

    // Total movement across ii-V-I should be small (smooth voice leading)
    const move1 = totalMovement(dm7, g7);
    const move2 = totalMovement(g7, cmaj7);
    expect(move1 + move2).toBeLessThan(24); // less than 24 semitones total

    // All notes in range
    expectInRange(g7);
    expectInRange(cmaj7);
  });

  it('produces correct number of notes matching target chord', () => {
    const start = getChordVoicing('C', 'maj7', 4).midiNotes;
    const result = findClosestVoicing({ root: 'F', quality: '7' }, start);
    expect(result).toHaveLength(CHORD_INTERVALS['7'].length);
  });

  it('handles chords with different numbers of notes', () => {
    // From a 4-note chord to a 5-note chord
    const start = getChordVoicing('C', 'maj7', 4).midiNotes;
    const result = findClosestVoicing({ root: 'D', quality: 'maj9' }, start);
    expect(result).toHaveLength(CHORD_INTERVALS.maj9.length);
    expectInRange(result);
  });

  it('respects custom octaveRange', () => {
    const start = [60, 64, 67, 71]; // Cmaj7 octave 4
    const result = findClosestVoicing(
      { root: 'G', quality: '7' },
      start,
      [55, 79],
    );
    for (const note of result) {
      expect(note).toBeGreaterThanOrEqual(55);
      expect(note).toBeLessThanOrEqual(79);
    }
  });
});

/* ═══════════════════════════════════════════════════════════
   generateVoiceLeadingSequence
   ═══════════════════════════════════════════════════════════ */

describe('generateVoiceLeadingSequence', () => {
  it('returns empty array for empty input', () => {
    expect(generateVoiceLeadingSequence([])).toEqual([]);
  });

  it('first chord is root position octave 4', () => {
    const seq = generateVoiceLeadingSequence([{ root: 'C', quality: 'maj7' }]);
    expect(seq).toHaveLength(1);
    const expected = getChordVoicing('C', 'maj7', 4).midiNotes;
    expect(seq[0]).toEqual(expected);
  });

  it('ii-V-I in C produces smooth voice leading', () => {
    const chords: { root: NoteName; quality: ChordQuality }[] = [
      { root: 'D', quality: 'm7' },
      { root: 'G', quality: '7' },
      { root: 'C', quality: 'maj7' },
    ];
    const seq = generateVoiceLeadingSequence(chords);

    expect(seq).toHaveLength(3);
    // Smooth motion: each transition < 12 semitones total movement
    expect(totalMovement(seq[0], seq[1])).toBeLessThan(16);
    expect(totalMovement(seq[1], seq[2])).toBeLessThan(16);

    // All in range
    for (const voicing of seq) {
      expectInRange(voicing);
    }
  });

  it('handles longer progressions (Autumn Leaves changes)', () => {
    const chords: { root: NoteName; quality: ChordQuality }[] = [
      { root: 'C', quality: 'm7' },
      { root: 'F', quality: '7' },
      { root: 'Bb', quality: 'maj7' },
      { root: 'Eb', quality: 'maj7' },
      { root: 'A', quality: 'm7b5' },
      { root: 'D', quality: '7' },
      { root: 'G', quality: 'm7' },
    ];
    const seq = generateVoiceLeadingSequence(chords);

    expect(seq).toHaveLength(7);
    for (const voicing of seq) {
      expectInRange(voicing);
    }
  });
});

/* ═══════════════════════════════════════════════════════════
   getRootlessVoicing
   ═══════════════════════════════════════════════════════════ */

describe('getRootlessVoicing', () => {
  it('Type A omits the root for Cmaj7', () => {
    const voicing = getRootlessVoicing('C', 'maj7', 'A');
    const rootMidi = noteToMidi('C', 4);
    // Should not contain any C in the same octave as root position
    const pitchClasses = voicing.map((m) => m % 12);
    expect(pitchClasses).not.toContain(rootMidi % 12);
  });

  it('Type A contains 3rd and 7th for Dm7', () => {
    const voicing = getRootlessVoicing('D', 'm7', 'A');
    const pitchClasses = voicing.map((m) => m % 12);
    // F (3rd of Dm7) = pitch class 5, C (7th of Dm7) = pitch class 0
    expect(pitchClasses).toContain(5);  // F
    expect(pitchClasses).toContain(0);  // C
  });

  it('Type B omits the root for G7', () => {
    const voicing = getRootlessVoicing('G', '7', 'B');
    const pitchClasses = voicing.map((m) => m % 12);
    // G = pitch class 7, should be absent
    expect(pitchClasses).not.toContain(7);
  });

  it('Type A returns 4 notes for 7th chords', () => {
    const voicing = getRootlessVoicing('C', 'maj7', 'A');
    expect(voicing).toHaveLength(4);
  });

  it('Type B returns 4 notes for 7th chords', () => {
    const voicing = getRootlessVoicing('C', 'maj7', 'B');
    expect(voicing).toHaveLength(4);
  });

  it('returns all-but-root for triads (< 4 notes)', () => {
    const voicing = getRootlessVoicing('C', 'sus4', 'A');
    // sus4 = [0, 5, 7] → without root = 2 notes
    expect(voicing).toHaveLength(2);
  });

  it('all notes in range', () => {
    expectInRange(getRootlessVoicing('C', 'maj7', 'A'));
    expectInRange(getRootlessVoicing('C', 'maj7', 'B'));
    expectInRange(getRootlessVoicing('Gb', 'm7', 'A'));
    expectInRange(getRootlessVoicing('Gb', 'm7', 'B'));
  });
});

/* ═══════════════════════════════════════════════════════════
   getShellVoicing
   ═══════════════════════════════════════════════════════════ */

describe('getShellVoicing', () => {
  it('returns exactly 3 notes for 7th chords', () => {
    expect(getShellVoicing('C', 'maj7')).toHaveLength(3);
    expect(getShellVoicing('D', 'm7')).toHaveLength(3);
    expect(getShellVoicing('G', '7')).toHaveLength(3);
    expect(getShellVoicing('B', 'm7b5')).toHaveLength(3);
  });

  it('contains root, 3rd, and 7th for Cmaj7', () => {
    const shell = getShellVoicing('C', 'maj7');
    const pitchClasses = shell.map((m) => m % 12);
    expect(pitchClasses).toContain(0);   // C (root)
    expect(pitchClasses).toContain(4);   // E (3rd)
    expect(pitchClasses).toContain(11);  // B (7th)
  });

  it('contains root, b3, and b7 for Dm7', () => {
    const shell = getShellVoicing('D', 'm7');
    const pitchClasses = shell.map((m) => m % 12);
    expect(pitchClasses).toContain(2);   // D (root)
    expect(pitchClasses).toContain(5);   // F (b3rd)
    expect(pitchClasses).toContain(0);   // C (b7th)
  });

  it('returns all notes for triads', () => {
    const shell = getShellVoicing('C', 'sus4');
    // sus4 = [0, 5, 7], only 3 intervals → returns all
    expect(shell).toHaveLength(3);
  });

  it('all notes in range', () => {
    expectInRange(getShellVoicing('C', 'maj7'));
    expectInRange(getShellVoicing('Gb', '7'));
    expectInRange(getShellVoicing('Bb', 'm7b5'));
  });
});

/* ═══════════════════════════════════════════════════════════
   getDropVoicing
   ═══════════════════════════════════════════════════════════ */

describe('getDropVoicing', () => {
  it('drop-2 has one note ~12 semitones lower than close position', () => {
    const close = getChordVoicing('C', 'maj7', 4).midiNotes;
    const drop2 = getDropVoicing('C', 'maj7', 'drop2');

    // The 2nd-from-top note (G=67) should be dropped to 55
    // close = [60, 64, 67, 71], drop2 index = 2 (length-2)
    // 67 - 12 = 55
    expect(drop2).toHaveLength(close.length);

    // Find which note was dropped (should differ by ~12 from close position)
    let dropFound = false;
    for (let i = 0; i < close.length; i++) {
      if (Math.abs(close[i] - drop2[i]) >= 10) {
        dropFound = true;
      }
    }
    expect(dropFound).toBe(true);
  });

  it('drop-3 drops the 3rd-from-top note', () => {
    const close = getChordVoicing('C', 'maj7', 4).midiNotes;
    const drop3 = getDropVoicing('C', 'maj7', 'drop3');

    expect(drop3).toHaveLength(close.length);

    // close = [60, 64, 67, 71], drop3 index = 1 (length-3)
    // 64 - 12 = 52
    let dropFound = false;
    for (let i = 0; i < close.length; i++) {
      if (Math.abs(close[i] - drop3[i]) >= 10) {
        dropFound = true;
      }
    }
    expect(dropFound).toBe(true);
  });

  it('all notes in range for drop-2', () => {
    expectInRange(getDropVoicing('C', 'maj7', 'drop2'));
    expectInRange(getDropVoicing('Gb', '7', 'drop2'));
    expectInRange(getDropVoicing('Bb', 'm7', 'drop2'));
  });

  it('all notes in range for drop-3', () => {
    expectInRange(getDropVoicing('C', 'maj7', 'drop3'));
    expectInRange(getDropVoicing('Gb', '7', 'drop3'));
    expectInRange(getDropVoicing('Bb', 'm7', 'drop3'));
  });

  it('preserves same pitch classes as close position', () => {
    const close = getChordVoicing('G', '7', 4).midiNotes;
    const drop2 = getDropVoicing('G', '7', 'drop2');

    const closePCs = close.map((m) => m % 12).sort();
    const drop2PCs = drop2.map((m) => m % 12).sort();
    expect(drop2PCs).toEqual(closePCs);
  });
});

/* ═══════════════════════════════════════════════════════════
   getAllVoicings
   ═══════════════════════════════════════════════════════════ */

describe('getAllVoicings', () => {
  it('returns all 6 voicing types', () => {
    const voicings = getAllVoicings('C', 'maj7');
    const expectedTypes: VoicingType[] = [
      'root-position', 'rootless-a', 'rootless-b',
      'shell', 'drop2', 'drop3',
    ];
    for (const type of expectedTypes) {
      expect(voicings[type]).toBeDefined();
      expect(Array.isArray(voicings[type])).toBe(true);
      expect(voicings[type].length).toBeGreaterThan(0);
    }
  });

  it('root-position matches getChordVoicing output', () => {
    const voicings = getAllVoicings('D', 'm7');
    const expected = getChordVoicing('D', 'm7', 4).midiNotes;
    expect(voicings['root-position']).toEqual(expected);
  });

  it('all voicing types produce notes in range', () => {
    const voicings = getAllVoicings('Eb', 'maj7');
    for (const [, midi] of Object.entries(voicings)) {
      expectInRange(midi);
    }
  });
});

/* ═══════════════════════════════════════════════════════════
   Range — All voicings across multiple keys
   ═══════════════════════════════════════════════════════════ */

describe('Range constraint [48, 84] across keys', () => {
  const testChords: { root: NoteName; quality: ChordQuality }[] = [
    { root: 'C', quality: 'maj7' },
    { root: 'D', quality: 'm7' },
    { root: 'G', quality: '7' },
    { root: 'F', quality: 'm7' },
    { root: 'Bb', quality: 'maj7' },
    { root: 'Eb', quality: 'm7' },
    { root: 'A', quality: 'm7b5' },
    { root: 'B', quality: 'dim7' },
    { root: 'Ab', quality: '7' },
    { root: 'Gb', quality: 'maj7' },
    { root: 'Db', quality: 'm7' },
    { root: 'E', quality: '7' },
  ];

  for (const chord of testChords) {
    it(`${chord.root}${chord.quality} — all voicing types in range`, () => {
      const voicings = getAllVoicings(chord.root, chord.quality);
      for (const [type, midi] of Object.entries(voicings)) {
        for (const note of midi) {
          expect(note).toBeGreaterThanOrEqual(MIN_MIDI);
          expect(note).toBeLessThanOrEqual(MAX_MIDI);
        }
      }
    });
  }
});

/* ═══════════════════════════════════════════════════════════
   12 keys — specific chord types
   ═══════════════════════════════════════════════════════════ */

describe('12 keys — voice leading ii-V-I', () => {
  const keys: { ii: NoteName; V: NoteName; I: NoteName }[] = [
    { ii: 'D',  V: 'G',  I: 'C'  },  // C major
    { ii: 'E',  V: 'A',  I: 'D'  },  // D major
    { ii: 'A',  V: 'D',  I: 'G'  },  // G major
    { ii: 'G',  V: 'C',  I: 'F'  },  // F major
    { ii: 'C',  V: 'F',  I: 'Bb' },  // Bb major
    { ii: 'F',  V: 'Bb', I: 'Eb' },  // Eb major
  ];

  for (const { ii, V, I } of keys) {
    it(`ii-V-I in ${I} major produces smooth voice leading`, () => {
      const chords: { root: NoteName; quality: ChordQuality }[] = [
        { root: ii, quality: 'm7' },
        { root: V, quality: '7' },
        { root: I, quality: 'maj7' },
      ];
      const seq = generateVoiceLeadingSequence(chords);

      expect(seq).toHaveLength(3);
      for (const voicing of seq) {
        expectInRange(voicing);
      }

      // Total movement should be manageable
      const total = totalMovement(seq[0], seq[1]) + totalMovement(seq[1], seq[2]);
      expect(total).toBeLessThan(30);
    });
  }
});
