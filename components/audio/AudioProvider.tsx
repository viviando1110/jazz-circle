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

  // Create engine lazily on first mount (client only).
  if (engineRef.current === null) {
    engineRef.current = createSynthEngine();
  }

  const init = useCallback(async () => {
    const engine = engineRef.current;
    if (!engine || engine.isReady) return;
    await engine.init();
    setIsReady(true);
  }, []);

  // Auto-init on first user gesture (click or keydown).
  useEffect(() => {
    const handleGesture = () => {
      void init();
      window.removeEventListener('click', handleGesture);
      window.removeEventListener('keydown', handleGesture);
    };

    window.addEventListener('click', handleGesture, { once: true });
    window.addEventListener('keydown', handleGesture, { once: true });

    return () => {
      window.removeEventListener('click', handleGesture);
      window.removeEventListener('keydown', handleGesture);
    };
  }, [init]);

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
