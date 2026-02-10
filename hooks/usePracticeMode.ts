'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { useAudio } from '@/components/audio/useAudio';
import { generateClickSchedule } from '@/lib/music/metronome';
import type { PracticeConfig, AudioEngine } from '@/lib/music/types';

interface UsePracticeModeReturn {
  config: PracticeConfig;
  isPlaying: boolean;
  currentBeat: number;
  currentBar: number;
  isCountingIn: boolean;
  startPractice: (chords: { notes: number[]; durationBeats: number }[]) => Promise<void>;
  stopPractice: () => void;
  setTempo: (bpm: number) => void;
  toggleMetronome: () => void;
  toggleLoop: () => void;
  toggleCountIn: () => void;
}

export function usePracticeMode(defaultTempo = 120): UsePracticeModeReturn {
  const { init, stop: engineStop } = useAudio();
  const [config, setConfig] = useState<PracticeConfig>({
    tempo: defaultTempo,
    countIn: true,
    loop: false,
    metronomeOn: true,
    timeSignature: [4, 4],
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(-1);
  const [currentBar, setCurrentBar] = useState(-1);
  const [isCountingIn, setIsCountingIn] = useState(false);

  const timeoutIds = useRef<ReturnType<typeof setTimeout>[]>([]);
  const cancelledRef = useRef(false);
  const engineRef = useRef<AudioEngine | null>(null);

  const clearTimeouts = useCallback(() => {
    for (const id of timeoutIds.current) {
      clearTimeout(id);
    }
    timeoutIds.current = [];
  }, []);

  const stopPractice = useCallback(() => {
    cancelledRef.current = true;
    clearTimeouts();
    engineStop();
    setIsPlaying(false);
    setCurrentBeat(-1);
    setCurrentBar(-1);
    setIsCountingIn(false);
  }, [clearTimeouts, engineStop]);

  const schedulePlayback = useCallback(
    (engine: AudioEngine, chords: { notes: number[]; durationBeats: number }[]) => {
      cancelledRef.current = false;
      const beatsPerBar = config.timeSignature[0];
      const secondsPerBeat = 60 / config.tempo;

      // Calculate total beats in the progression
      const totalBeats = chords.reduce((sum, c) => sum + c.durationBeats, 0);

      // Generate the click schedule
      const clickSchedule = generateClickSchedule(
        config.tempo,
        totalBeats,
        config.countIn,
        beatsPerBar,
      );
      const countInBeats = config.countIn ? 4 : 0;

      if (config.countIn) {
        setIsCountingIn(true);
      }

      // Schedule metronome clicks and beat tracking
      for (let i = 0; i < clickSchedule.length; i++) {
        const click = clickSchedule[i];
        const id = setTimeout(() => {
          if (cancelledRef.current) return;

          const beatIndex = i - countInBeats;
          if (beatIndex >= 0) {
            setCurrentBeat(beatIndex % beatsPerBar);
            setCurrentBar(Math.floor(beatIndex / beatsPerBar));
            if (beatIndex === 0) {
              setIsCountingIn(false);
            }
          } else {
            // During count-in
            setCurrentBeat(i % beatsPerBar);
          }

          if (config.metronomeOn) {
            engine.playClick?.(click.accent);
          }
        }, click.time * 1000);
        timeoutIds.current.push(id);
      }

      // Schedule chord playback (offset by count-in duration)
      const chordOffset = countInBeats * secondsPerBeat;
      let beatOffset = 0;

      for (let i = 0; i < chords.length; i++) {
        const chord = chords[i];
        const chordTime = chordOffset + beatOffset * secondsPerBeat;
        const chordDuration = chord.durationBeats * secondsPerBeat;

        const id = setTimeout(() => {
          if (cancelledRef.current) return;
          engine.playChord(chord.notes, chordDuration * 0.9);
        }, chordTime * 1000);
        timeoutIds.current.push(id);

        beatOffset += chord.durationBeats;
      }

      // Schedule end-of-progression
      const totalDuration = (countInBeats + totalBeats) * secondsPerBeat;
      const endId = setTimeout(() => {
        if (cancelledRef.current) return;

        if (config.loop) {
          // Restart the playback
          clearTimeouts();
          schedulePlayback(engine, chords);
        } else {
          setIsPlaying(false);
          setCurrentBeat(-1);
          setCurrentBar(-1);
          setIsCountingIn(false);
        }
      }, totalDuration * 1000);
      timeoutIds.current.push(endId);
    },
    [config, clearTimeouts],
  );

  const startPractice = useCallback(
    async (chords: { notes: number[]; durationBeats: number }[]) => {
      if (isPlaying) {
        stopPractice();
        return;
      }

      const engine = await init();
      if (!engine) return;

      engineRef.current = engine;
      setIsPlaying(true);
      setCurrentBeat(0);
      setCurrentBar(0);

      schedulePlayback(engine, chords);
    },
    [isPlaying, stopPractice, init, schedulePlayback],
  );

  const setTempo = useCallback((bpm: number) => {
    setConfig((prev) => ({ ...prev, tempo: bpm }));
  }, []);

  const toggleMetronome = useCallback(() => {
    setConfig((prev) => ({ ...prev, metronomeOn: !prev.metronomeOn }));
  }, []);

  const toggleLoop = useCallback(() => {
    setConfig((prev) => ({ ...prev, loop: !prev.loop }));
  }, []);

  const toggleCountIn = useCallback(() => {
    setConfig((prev) => ({ ...prev, countIn: !prev.countIn }));
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cancelledRef.current = true;
      for (const id of timeoutIds.current) {
        clearTimeout(id);
      }
      engineRef.current?.stop();
    };
  }, []);

  return {
    config,
    isPlaying,
    currentBeat,
    currentBar,
    isCountingIn,
    startPractice,
    stopPractice,
    setTempo,
    toggleMetronome,
    toggleLoop,
    toggleCountIn,
  };
}
