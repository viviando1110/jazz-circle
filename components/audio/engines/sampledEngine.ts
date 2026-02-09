// Placeholder sampled engine for Phase 2.
// Implements the same AudioEngine interface so it can be swapped in seamlessly.

import type { AudioEngine } from './types';

export function createSampledEngine(): AudioEngine {
  return {
    isReady: false,

    async init(): Promise<void> {
      // Sampled engine not yet implemented — no-op.
    },

    async playChord(): Promise<void> {
      // Sampled engine not yet implemented — no-op.
    },

    async playProgression(): Promise<void> {
      // Sampled engine not yet implemented — no-op.
    },

    stop(): void {
      // Sampled engine not yet implemented — no-op.
    },
  };
}
