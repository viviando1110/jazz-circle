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
  init: () => Promise<void>;
}

const AudioCtx = createContext<AudioContextValue>({
  engine: null,
  isReady: false,
  init: async () => {},
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

  const init = useCallback(async () => {
    const engine = engineRef.current;
    if (!engine) return;
    if (engine.isReady) {
      setIsReady(true);
      return;
    }
    try {
      await engine.init();
      setIsReady(true);
    } catch {
      // Sampled engine failed — try synth fallback.
      engineRef.current = createSynthEngine();
      try {
        await engineRef.current.init();
        setIsReady(true);
      } catch {
        // Both engines failed — stay not ready.
      }
    }
  }, []);

  // Auto-init on first user gesture (click or keydown).
  // Keep listeners alive until init actually succeeds.
  // If sampled engine fails, fall back to synth engine.
  useEffect(() => {
    if (isReady) return;

    const handleGesture = async () => {
      const engine = engineRef.current;
      if (!engine) return;
      try {
        await engine.init();
        setIsReady(true);
        window.removeEventListener('click', handleGesture);
        window.removeEventListener('keydown', handleGesture);
      } catch {
        // Sampled engine failed to load — fall back to synth engine.
        // This can happen if sample URLs are unreachable or CORS issues occur.
        engineRef.current = createSynthEngine();
        try {
          await engineRef.current.init();
          setIsReady(true);
          window.removeEventListener('click', handleGesture);
          window.removeEventListener('keydown', handleGesture);
        } catch {
          // Synth engine also failed — keep listeners alive for next gesture.
        }
      }
    };

    window.addEventListener('click', handleGesture);
    window.addEventListener('keydown', handleGesture);

    return () => {
      window.removeEventListener('click', handleGesture);
      window.removeEventListener('keydown', handleGesture);
    };
  }, [isReady]);

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
