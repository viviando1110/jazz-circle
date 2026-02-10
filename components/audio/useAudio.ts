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
      // Use context engine if available, otherwise init lazily.
      // This handles the first-play case where context hasn't re-rendered yet.
      const eng = engine ?? await init();
      if (!eng) return;
      if (!eng.isReady) await eng.init();
      await eng.playChord(notes, duration);
    },
    [engine, init],
  );

  const playProgression = useCallback(
    async (
      chords: { notes: number[]; durationBeats: number }[],
      bpm: number,
      onChordChange?: (index: number) => void,
    ) => {
      const eng = engine ?? await init();
      if (!eng) return;
      if (!eng.isReady) await eng.init();
      await eng.playProgression(chords, bpm, onChordChange);
    },
    [engine, init],
  );

  const stop = useCallback(() => {
    engine?.stop();
  }, [engine]);

  return { playChord, playProgression, stop, isReady, init };
}
