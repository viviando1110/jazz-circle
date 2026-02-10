// Pure metronome timing utilities.
// No Tone.js, no React, no DOM — fully testable.

/**
 * Generate a schedule of click times for a metronome.
 * @param bpm - Beats per minute (must be > 0)
 * @param beats - Number of beats to schedule
 * @param countIn - If true, prepend 4 count-in clicks before the main beats
 * @param beatsPerBar - Beats per bar for accent grouping (default 4)
 * @returns Array of {time: seconds, accent: boolean} — beat 1 of each bar is accented
 */
export function generateClickSchedule(
  bpm: number,
  beats: number,
  countIn: boolean,
  beatsPerBar = 4,
): { time: number; accent: boolean }[] {
  if (beats <= 0) return [];

  const secondsPerBeat = 60 / bpm;
  const totalBeats = countIn ? 4 + beats : beats;
  const schedule: { time: number; accent: boolean }[] = [];

  for (let i = 0; i < totalBeats; i++) {
    schedule.push({
      time: i * secondsPerBeat,
      accent: i % beatsPerBar === 0,
    });
  }

  return schedule;
}

/**
 * Calculate the duration of one bar in seconds.
 */
export function calculateBarDuration(bpm: number, beatsPerBar: number): number {
  return (60 / bpm) * beatsPerBar;
}
