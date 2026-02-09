'use client';

import { useCallback } from 'react';
import { useAudioContext } from './AudioProvider';

/**
 * Hook for components to play chords and progressions.
 * Components should NEVER import Tone.js directly — use this hook instead.
 */
export function useAudio() {
  const { engine, isReady, init } = useAudioContext();

  const playChord = useCallback(
    async (notes: number[], duration?: number) => {
      if (!engine) return;
      if (!engine.isReady) await engine.init();
      await engine.playChord(notes, duration);
    },
    [engine],
  );

  const playProgression = useCallback(
    async (
      chords: { notes: number[]; durationBeats: number }[],
      bpm: number,
      onChordChange?: (index: number) => void,
    ) => {
      if (!engine) return;
      if (!engine.isReady) await engine.init();
      await engine.playProgression(chords, bpm, onChordChange);
    },
    [engine],
  );

  const stop = useCallback(() => {
    engine?.stop();
  }, [engine]);

  return { playChord, playProgression, stop, isReady, init };
}
