import { describe, it, expect } from 'vitest';
import { detectChord } from '@/lib/music/chord-detect';

describe('detectChord', () => {
  it('returns null for fewer than 3 notes', () => {
    expect(detectChord([])).toBeNull();
    expect(detectChord([60])).toBeNull();
    expect(detectChord([60, 64])).toBeNull();
  });

  it('detects Cmaj7 in root position', () => {
    // C4, E4, G4, B4 = 60, 64, 67, 71
    const result = detectChord([60, 64, 67, 71]);
    expect(result).not.toBeNull();
    expect(result!.root).toBe('C');
    expect(result!.quality).toBe('maj7');
    expect(result!.inversion).toBe(0);
  });

  it('detects Dm7 in root position', () => {
    // D4, F4, A4, C5 = 62, 65, 69, 72
    const result = detectChord([62, 65, 69, 72]);
    expect(result).not.toBeNull();
    expect(result!.root).toBe('D');
    expect(result!.quality).toBe('m7');
  });

  it('detects G7 in root position', () => {
    // G3, B3, D4, F4 = 55, 59, 62, 65
    const result = detectChord([55, 59, 62, 65]);
    expect(result).not.toBeNull();
    expect(result!.root).toBe('G');
    expect(result!.quality).toBe('7');
  });

  it('detects Am7b5 (half-diminished)', () => {
    // A3, C4, Eb4, G4 = 57, 60, 63, 67
    const result = detectChord([57, 60, 63, 67]);
    expect(result).not.toBeNull();
    expect(result!.root).toBe('A');
    expect(result!.quality).toBe('m7b5');
  });

  it('detects Bdim7', () => {
    // B3, D4, F4, Ab4 = 59, 62, 65, 68
    const result = detectChord([59, 62, 65, 68]);
    expect(result).not.toBeNull();
    expect(result!.root).toBe('B');
    expect(result!.quality).toBe('dim7');
  });

  it('detects chord in first inversion (bass is not root)', () => {
    // E4, G4, B4, C5 = Cmaj7 first inversion = 64, 67, 71, 72
    const result = detectChord([64, 67, 71, 72]);
    expect(result).not.toBeNull();
    // Should still detect as C chord
    expect(result!.root).toBe('C');
    expect(result!.quality).toBe('maj7');
  });

  it('handles duplicate pitch classes across octaves', () => {
    // C3, E4, G4, B4, C5 = 48, 64, 67, 71, 72
    const result = detectChord([48, 64, 67, 71, 72]);
    expect(result).not.toBeNull();
    expect(result!.root).toBe('C');
    expect(result!.quality).toBe('maj7');
  });

  it('detects chords in different keys', () => {
    // Ebmaj7: Eb4, G4, Bb4, D5 = 63, 67, 70, 74
    const result = detectChord([63, 67, 70, 74]);
    expect(result).not.toBeNull();
    expect(result!.root).toBe('Eb');
    expect(result!.quality).toBe('maj7');
  });

  it('detects sus4 chord', () => {
    // Csus4: C4, F4, G4 = 60, 65, 67
    const result = detectChord([60, 65, 67]);
    expect(result).not.toBeNull();
    expect(result!.root).toBe('C');
    expect(result!.quality).toBe('sus4');
  });

  it('returns null when pitch classes < 3 (duplicates)', () => {
    // C, C, E = only 2 unique pitch classes (0, 4) — not enough to identify a chord
    expect(detectChord([60, 72, 64])).toBeNull();
    // All C's = 1 unique pitch class
    expect(detectChord([60, 72, 84])).toBeNull();
  });
});
