// Triangle-wave PolySynth engine using Tone.js.
// Warm jazz sound with reverb. Implements AudioEngine interface.

import * as Tone from 'tone';
import type { AudioEngine } from './types';

/** Convert MIDI note numbers to Tone.js frequency values. */
function midiToFrequencies(notes: number[]): number[] {
  return notes.map((midi) => Tone.Frequency(midi, 'midi').toFrequency());
}

export function createSynthEngine(): AudioEngine {
  let synth: Tone.PolySynth | null = null;
  let reverb: Tone.Reverb | null = null;
  let ready = false;

  // Cancellation handle for in-progress progression playback.
  let progressionTimeoutIds: ReturnType<typeof setTimeout>[] = [];
  let cancelled = false;

  const engine: AudioEngine = {
    get isReady() {
      return ready;
    },

    async init(): Promise<void> {
      if (ready) return;

      // Must be called inside a user gesture handler.
      await Tone.start();

      if (!reverb) {
        reverb = new Tone.Reverb({ decay: 1.5, wet: 0.2 });
        await reverb.ready;
      }

      if (!synth) {
        synth = new Tone.PolySynth(Tone.Synth, {
          oscillator: { type: 'triangle' },
          envelope: {
            attack: 0.02,
            decay: 0.3,
            sustain: 0.5,
            release: 0.5,
          },
        });

        synth.connect(reverb);
        reverb.toDestination();
      }

      ready = true;
    },

    async playChord(notes: number[], duration = 1): Promise<void> {
      if (!synth || !ready) return;

      const freqs = midiToFrequencies(notes);
      synth.triggerAttackRelease(freqs, duration);
    },

    async playProgression(chords, bpm, onChordChange): Promise<void> {
      if (!synth || !ready) return;

      // Cancel any in-progress playback first.
      engine.stop();
      cancelled = false;

      const secondsPerBeat = 60 / bpm;
      let offsetSeconds = 0;

      return new Promise<void>((resolve) => {
        chords.forEach((chord, i) => {
          const chordStart = offsetSeconds;
          const chordDuration = chord.durationBeats * secondsPerBeat;

          const timeoutId = setTimeout(() => {
            if (cancelled) return;

            onChordChange?.(i);

            const freqs = midiToFrequencies(chord.notes);
            // Play for slightly less than the full duration to avoid overlap.
            synth!.triggerAttackRelease(freqs, chordDuration * 0.9);
          }, chordStart * 1000);

          progressionTimeoutIds.push(timeoutId);
          offsetSeconds += chordDuration;
        });

        // Resolve when the last chord finishes.
        const endTimeoutId = setTimeout(() => {
          if (!cancelled) {
            progressionTimeoutIds = [];
            resolve();
          }
        }, offsetSeconds * 1000);

        progressionTimeoutIds.push(endTimeoutId);
      });
    },

    stop(): void {
      cancelled = true;

      for (const id of progressionTimeoutIds) {
        clearTimeout(id);
      }
      progressionTimeoutIds = [];

      if (synth) {
        synth.releaseAll();
      }
    },
  };

  return engine;
}
