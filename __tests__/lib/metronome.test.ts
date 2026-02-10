import { describe, it, expect } from 'vitest';
import {
  generateClickSchedule,
  calculateBarDuration,
} from '@/lib/music/metronome';

describe('generateClickSchedule', () => {
  it('returns 8 clicks for 8 beats without count-in', () => {
    const schedule = generateClickSchedule(120, 8, false);
    expect(schedule).toHaveLength(8);
  });

  it('spaces clicks at 0.5s intervals at 120 BPM', () => {
    const schedule = generateClickSchedule(120, 8, false);
    expect(schedule[0].time).toBe(0);
    expect(schedule[1].time).toBe(0.5);
    expect(schedule[7].time).toBe(3.5);
  });

  it('returns 12 clicks with count-in (4 + 8)', () => {
    const schedule = generateClickSchedule(120, 8, true);
    expect(schedule).toHaveLength(12);
  });

  it('accents beat 1 of each bar (index 0, 4, 8, ...)', () => {
    const schedule = generateClickSchedule(120, 8, false);
    expect(schedule[0].accent).toBe(true);
    expect(schedule[1].accent).toBe(false);
    expect(schedule[2].accent).toBe(false);
    expect(schedule[3].accent).toBe(false);
    expect(schedule[4].accent).toBe(true);
    expect(schedule[5].accent).toBe(false);
    expect(schedule[6].accent).toBe(false);
    expect(schedule[7].accent).toBe(false);
  });

  it('count-in clicks also follow accent pattern', () => {
    const schedule = generateClickSchedule(120, 4, true);
    // 4 count-in + 4 main = 8 total
    expect(schedule).toHaveLength(8);
    // Index 0 (count-in beat 1) is accented
    expect(schedule[0].accent).toBe(true);
    expect(schedule[1].accent).toBe(false);
    expect(schedule[2].accent).toBe(false);
    expect(schedule[3].accent).toBe(false);
    // Index 4 (main beat 1) is accented
    expect(schedule[4].accent).toBe(true);
  });

  it('all times are non-negative', () => {
    const schedule = generateClickSchedule(120, 8, true);
    for (const click of schedule) {
      expect(click.time).toBeGreaterThanOrEqual(0);
    }
  });

  it('adjacent clicks differ by exactly 60/bpm seconds', () => {
    const bpm = 90;
    const expectedInterval = 60 / bpm;
    const schedule = generateClickSchedule(bpm, 8, false);
    for (let i = 1; i < schedule.length; i++) {
      const diff = schedule[i].time - schedule[i - 1].time;
      expect(diff).toBeCloseTo(expectedInterval, 10);
    }
  });

  it('returns empty array for zero beats', () => {
    expect(generateClickSchedule(120, 0, false)).toEqual([]);
    expect(generateClickSchedule(120, 0, true)).toEqual([]);
  });

  it('respects custom beatsPerBar for 3/4 time', () => {
    const schedule = generateClickSchedule(120, 6, false, 3);
    // In 3/4 time: accent at index 0, 3
    expect(schedule[0].accent).toBe(true);
    expect(schedule[1].accent).toBe(false);
    expect(schedule[2].accent).toBe(false);
    expect(schedule[3].accent).toBe(true);
    expect(schedule[4].accent).toBe(false);
    expect(schedule[5].accent).toBe(false);
  });
});

describe('calculateBarDuration', () => {
  it('returns 2.0 seconds for 120 BPM in 4/4', () => {
    expect(calculateBarDuration(120, 4)).toBe(2.0);
  });

  it('returns 4.0 seconds for 60 BPM in 4/4', () => {
    expect(calculateBarDuration(60, 4)).toBe(4.0);
  });

  it('returns 1.5 seconds for 120 BPM in 3/4', () => {
    expect(calculateBarDuration(120, 3)).toBe(1.5);
  });
});
