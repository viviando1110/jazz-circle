'use client';

import { useState, useCallback } from 'react';
import { CHROMATIC } from '@/lib/constants';
import { getAllVoicings } from '@/lib/music/voicings';
import { midiToNote } from '@/lib/music/theory';
import { useAudio } from '@/components/audio/useAudio';
import PianoKeyboard from '@/components/piano/PianoKeyboard';
import type { NoteName, ChordQuality, VoicingType } from '@/lib/music/types';

const QUALITIES: { value: ChordQuality; label: string }[] = [
  { value: 'maj7', label: 'maj7' },
  { value: 'm7', label: 'm7' },
  { value: '7', label: '7' },
  { value: 'm7b5', label: 'm7b5' },
  { value: 'dim7', label: 'dim7' },
  { value: '9', label: '9' },
  { value: 'm9', label: 'm9' },
  { value: 'maj9', label: 'maj9' },
  { value: '6', label: '6' },
  { value: 'm6', label: 'm6' },
];

const VOICING_LABELS: Record<VoicingType, string> = {
  'root-position': 'Root Position',
  'rootless-a': 'Rootless A',
  'rootless-b': 'Rootless B',
  'shell': 'Shell',
  'drop2': 'Drop 2',
  'drop3': 'Drop 3',
};

const VOICING_ORDER: VoicingType[] = [
  'root-position', 'rootless-a', 'rootless-b', 'shell', 'drop2', 'drop3',
];

function formatNotes(midi: number[]): string {
  return midi.map((m) => {
    const { note, octave } = midiToNote(m);
    return `${note}${octave}`;
  }).join(' - ');
}

export default function VoicingLibrary() {
  const [root, setRoot] = useState<NoteName>('C');
  const [quality, setQuality] = useState<ChordQuality>('maj7');
  const [selected, setSelected] = useState<VoicingType>('root-position');
  const { playChord } = useAudio();

  const voicings = getAllVoicings(root, quality);

  const handlePlay = useCallback(async (type: VoicingType) => {
    setSelected(type);
    await playChord(voicings[type], 1.5);
  }, [playChord, voicings]);

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 sm:p-6">
      {/* Chord selector */}
      <div className="flex flex-wrap gap-3 mb-6">
        <label className="flex flex-col gap-1">
          <span className="text-xs text-[var(--cream-dim)] font-mono">Root</span>
          <select
            value={root}
            onChange={(e) => setRoot(e.target.value as NoteName)}
            className="rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--cream)] px-3 py-1.5 text-sm"
          >
            {CHROMATIC.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs text-[var(--cream-dim)] font-mono">Quality</span>
          <select
            value={quality}
            onChange={(e) => setQuality(e.target.value as ChordQuality)}
            className="rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--cream)] px-3 py-1.5 text-sm"
          >
            {QUALITIES.map((q) => (
              <option key={q.value} value={q.value}>{q.label}</option>
            ))}
          </select>
        </label>
        <div className="flex items-end">
          <span className="text-lg font-serif text-[var(--gold)] font-bold">
            {root}{quality}
          </span>
        </div>
      </div>

      {/* Voicing grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {VOICING_ORDER.map((type) => {
          const midi = voicings[type];
          const isSelected = type === selected;
          return (
            <div
              key={type}
              className={`rounded-lg border p-3 transition-colors ${
                isSelected
                  ? 'border-[var(--gold)] bg-[var(--gold)]/5'
                  : 'border-[var(--border)] bg-[var(--surface)]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-sm font-bold font-serif ${
                  isSelected ? 'text-[var(--gold)]' : 'text-[var(--cream)]'
                }`}>
                  {VOICING_LABELS[type]}
                </h3>
                <button
                  onClick={() => handlePlay(type)}
                  aria-label={`Play ${VOICING_LABELS[type]} voicing`}
                  className="rounded bg-[var(--card)] border border-[var(--border)] px-3 py-1 text-xs text-[var(--cream)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
                >
                  Play
                </button>
              </div>
              <p className="text-xs font-mono text-[var(--cream-dim)] mb-2">
                {formatNotes(midi)}
              </p>
              <PianoKeyboard
                highlightedNotes={[]}
                midiNotes={midi}
                animateTransition
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
