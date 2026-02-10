'use client';

import {
  createContext,
  useContext,
  useRef,
  useCallback,
  useState,
  useEffect,
  type ReactNode,
} from 'react';
import type { AudioEngine } from './engines/types';
import { createSampledEngine } from './engines/sampledEngine';
import { createSynthEngine } from './engines/synthEngine';

interface AudioContextValue {
  engine: AudioEngine | null;
  isReady: boolean;
  init: () => Promise<AudioEngine | null>;
}

const AudioCtx = createContext<AudioContextValue>({
  engine: null,
  isReady: false,
  init: async () => null,
});

export function AudioProvider({ children }: { children: ReactNode }) {
  const engineRef = useRef<AudioEngine | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Create engine client-side only (Tone.js requires browser APIs).
  // Try sampled engine first, fall back to synth if loading fails.
  useEffect(() => {
    if (engineRef.current === null) {
      engineRef.current = createSampledEngine();
    }
  }, []);

  const init = useCallback(async (): Promise<AudioEngine | null> => {
    let engine = engineRef.current;
    if (!engine) return null;
    if (engine.isReady) {
      setIsReady(true);
      return engine;
    }
    try {
      await engine.init();
      setIsReady(true);
      return engine;
    } catch {
      // Sampled engine failed — try synth fallback.
      engineRef.current = createSynthEngine();
      engine = engineRef.current;
      try {
        await engine.init();
        setIsReady(true);
        return engine;
      } catch {
        // Both engines failed — stay not ready.
        return null;
      }
    }
  }, []);

  // Audio init is handled lazily: useAudio().playChord / playProgression
  // call engine.init() before playing. This avoids window-level click
  // listeners that can interfere with other interactive elements (e.g. SVG
  // circle wedges) on the first page load.

  return (
    <AudioCtx.Provider
      value={{ engine: engineRef.current, isReady, init }}
    >
      {children}
    </AudioCtx.Provider>
  );
}

export function useAudioContext(): AudioContextValue {
  return useContext(AudioCtx);
}
