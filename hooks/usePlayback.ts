'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { useAudio } from '@/components/audio/useAudio';

export interface PlaybackState {
  isPlaying: boolean;
  currentChordIndex: number;
  tempo: number;
}

export interface PlaybackActions {
  play: (
    chords: { notes: number[]; durationBeats: number }[],
    onComplete?: () => void,
  ) => Promise<void>;
  pause: () => void;
  stop: () => void;
  setTempo: (bpm: number) => void;
}

export type UsePlaybackReturn = PlaybackState & PlaybackActions;

export function usePlayback(defaultTempo = 120): UsePlaybackReturn {
  const { playProgression, stop: engineStop, init } = useAudio();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentChordIndex, setCurrentChordIndex] = useState(-1);
  const [tempo, setTempoState] = useState(defaultTempo);
  const tempoRef = useRef(defaultTempo);

  const stopRef = useRef<() => void>(() => {});

  const stop = useCallback(() => {
    engineStop();
    setIsPlaying(false);
    setCurrentChordIndex(-1);
  }, [engineStop]);

  // Keep ref in sync so cleanup can call latest stop
  stopRef.current = stop;

  // Stop playback when the component unmounts (e.g. page navigation)
  useEffect(() => {
    return () => stopRef.current();
  }, []);

  const pause = useCallback(() => {
    engineStop();
    setIsPlaying(false);
  }, [engineStop]);

  const setTempo = useCallback((bpm: number) => {
    tempoRef.current = bpm;
    setTempoState(bpm);
  }, []);

  const play = useCallback(
    async (
      chords: { notes: number[]; durationBeats: number }[],
      onComplete?: () => void,
    ) => {
      if (isPlaying) {
        stop();
        return;
      }

      await init();
      setIsPlaying(true);
      setCurrentChordIndex(0);

      try {
        await playProgression(chords, tempoRef.current, (index) => {
          setCurrentChordIndex(index);
        });
        onComplete?.();
      } finally {
        setIsPlaying(false);
        setCurrentChordIndex(-1);
      }
    },
    [isPlaying, playProgression, stop, init],
  );

  return {
    isPlaying,
    currentChordIndex,
    tempo,
    play,
    pause,
    stop,
    setTempo,
  };
}
