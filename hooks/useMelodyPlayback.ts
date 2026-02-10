'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { useAudio } from '@/components/audio/useAudio';
import type { MelodyNote } from '@/lib/music/types';

interface UseMelodyPlaybackReturn {
  play: (notes: MelodyNote[], bpm: number) => Promise<void>;
  stop: () => void;
  isPlaying: boolean;
  currentNoteIndex: number;
}

export function useMelodyPlayback(): UseMelodyPlaybackReturn {
  const { init, stop: engineStop } = useAudio();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(-1);

  const timeoutIds = useRef<ReturnType<typeof setTimeout>[]>([]);
  const cancelledRef = useRef(false);

  const clearTimeouts = useCallback(() => {
    for (const id of timeoutIds.current) {
      clearTimeout(id);
    }
    timeoutIds.current = [];
  }, []);

  const stop = useCallback(() => {
    cancelledRef.current = true;
    clearTimeouts();
    engineStop();
    setIsPlaying(false);
    setCurrentNoteIndex(-1);
  }, [clearTimeouts, engineStop]);

  const play = useCallback(
    async (notes: MelodyNote[], bpm: number) => {
      if (isPlaying) {
        stop();
        return;
      }

      const engine = await init();
      if (!engine) return;

      cancelledRef.current = false;
      setIsPlaying(true);

      const secondsPerBeat = 60 / bpm;
      let cumulativeTime = 0;

      for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        const startTime = cumulativeTime;
        const durationSec = note.durationBeats * secondsPerBeat;

        const id = setTimeout(() => {
          if (cancelledRef.current) return;
          setCurrentNoteIndex(i);
          engine.playNote?.(note.midi, durationSec, note.velocity ?? 0.8);
        }, startTime * 1000);
        timeoutIds.current.push(id);

        cumulativeTime += durationSec;
      }

      // Schedule completion
      const endId = setTimeout(() => {
        if (cancelledRef.current) return;
        setIsPlaying(false);
        setCurrentNoteIndex(-1);
      }, cumulativeTime * 1000);
      timeoutIds.current.push(endId);
    },
    [isPlaying, stop, init],
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cancelledRef.current = true;
      for (const id of timeoutIds.current) {
        clearTimeout(id);
      }
    };
  }, []);

  return { play, stop, isPlaying, currentNoteIndex };
}
