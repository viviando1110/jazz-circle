'use client';

import { useState } from 'react';
import ChordQualityQuiz from './ChordQualityQuiz';
import KeyIdentificationQuiz from './KeyIdentificationQuiz';

type Mode = 'chord-quality' | 'key-id';

export default function EarTrainingClient() {
  const [mode, setMode] = useState<Mode>('chord-quality');

  const tabClass = (active: boolean) =>
    active
      ? 'bg-[var(--gold)]/20 text-[var(--gold)] border border-[var(--gold)]/40 rounded-lg px-4 py-2 text-sm font-medium'
      : 'bg-[var(--surface)] text-[var(--cream-dim)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm font-medium hover:text-[var(--cream)]';

  return (
    <div>
      {/* Mode tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setMode('chord-quality')}
          className={tabClass(mode === 'chord-quality')}
        >
          Chord Quality
        </button>
        <button
          onClick={() => setMode('key-id')}
          className={tabClass(mode === 'key-id')}
        >
          Identify the Key
        </button>
      </div>

      {mode === 'chord-quality' ? (
        <ChordQualityQuiz />
      ) : (
        <KeyIdentificationQuiz />
      )}
    </div>
  );
}
