// Salamander Grand Piano sampled engine using Tone.js Sampler.
// Warm acoustic piano sound with reverb. Implements AudioEngine interface.

import * as Tone from 'tone';
import type { AudioEngine } from './types';

/** Convert MIDI note numbers to Tone.js note names (e.g., "C4", "D#3"). */
function midiToNoteNames(notes: number[]): string[] {
  return notes.map((midi) => Tone.Frequency(midi, 'midi').toNote());
}

export function createSampledEngine(): AudioEngine {
  let sampler: Tone.Sampler | null = null;
  let reverb: Tone.Reverb | null = null;
  let clickHigh: Tone.MembraneSynth | null = null;
  let clickLow: Tone.MembraneSynth | null = null;
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

      if (!sampler) {
        // Load sparse set of Salamander Grand Piano samples (every 3rd note).
        // Tone.js will interpolate between samples for missing notes.
        const baseUrl = 'https://tonejs.github.io/audio/salamander/';
        sampler = new Tone.Sampler({
          urls: {
            C1: 'C1.mp3',
            'D#1': 'Ds1.mp3',
            'F#1': 'Fs1.mp3',
            A1: 'A1.mp3',
            C2: 'C2.mp3',
            'D#2': 'Ds2.mp3',
            'F#2': 'Fs2.mp3',
            A2: 'A2.mp3',
            C3: 'C3.mp3',
            'D#3': 'Ds3.mp3',
            'F#3': 'Fs3.mp3',
            A3: 'A3.mp3',
            C4: 'C4.mp3',
            'D#4': 'Ds4.mp3',
            'F#4': 'Fs4.mp3',
            A4: 'A4.mp3',
            C5: 'C5.mp3',
            'D#5': 'Ds5.mp3',
            'F#5': 'Fs5.mp3',
            A5: 'A5.mp3',
            C6: 'C6.mp3',
            'D#6': 'Ds6.mp3',
            'F#6': 'Fs6.mp3',
            A6: 'A6.mp3',
            C7: 'C7.mp3',
          },
          baseUrl,
        });

        sampler.connect(reverb);
        reverb.toDestination();

        // Wait for all samples to load.
        await Tone.loaded();
      }

      ready = true;
    },

    async playChord(notes: number[], duration = 1): Promise<void> {
      if (!sampler || !ready) return;

      const noteNames = midiToNoteNames(notes);
      sampler.triggerAttackRelease(noteNames, duration);
    },

    async playProgression(chords, bpm, onChordChange): Promise<void> {
      if (!sampler || !ready) return;

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

            const noteNames = midiToNoteNames(chord.notes);
            // Play for slightly less than the full duration to avoid overlap.
            sampler!.triggerAttackRelease(noteNames, chordDuration * 0.9);
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

      if (sampler) {
        sampler.releaseAll();
      }
    },

    async playNote(midi: number, duration = 0.5, velocity = 0.8): Promise<void> {
      if (!sampler || !ready) return;
      const noteName = Tone.Frequency(midi, 'midi').toNote();
      sampler.triggerAttackRelease(noteName, duration, undefined, velocity);
    },

    async playClick(accent: boolean): Promise<void> {
      if (!ready) return;

      if (!clickHigh) {
        clickHigh = new Tone.MembraneSynth({
          pitchDecay: 0.008,
          octaves: 2,
          envelope: { attack: 0.001, decay: 0.1, sustain: 0, release: 0.05 },
        }).toDestination();
        clickLow = new Tone.MembraneSynth({
          pitchDecay: 0.008,
          octaves: 2,
          envelope: { attack: 0.001, decay: 0.08, sustain: 0, release: 0.05 },
        }).toDestination();
      }

      if (accent) {
        clickHigh.triggerAttackRelease('C5', '16n');
      } else {
        clickLow!.triggerAttackRelease('G4', '16n');
      }
    },
  };

  return engine;
}
