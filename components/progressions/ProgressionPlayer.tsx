'use client';

import { useState, useCallback } from 'react';
import type { RenderedProgression } from '@/lib/music/types';
import { useAudio } from '@/components/audio/useAudio';
import { getChordVoicing } from '@/lib/music/chords';

interface TempoOption {
  label: string;
  bpm: number;
}

interface ProgressionPlayerProps {
  progression: RenderedProgression;
  tempoOptions?: TempoOption[];
}

const DEFAULT_TEMPOS: TempoOption[] = [
  { label: 'Slow', bpm: 80 },
  { label: 'Medium', bpm: 120 },
  { label: 'Fast', bpm: 160 },
];

export function ProgressionPlayer({
  progression,
  tempoOptions = DEFAULT_TEMPOS,
}: ProgressionPlayerProps) {
  const { playProgression, stop, init } = useAudio();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChordIndex, setActiveChordIndex] = useState(-1);
  const [selectedTempo, setSelectedTempo] = useState(1); // index into tempoOptions

  const handlePlay = useCallback(async () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
      setActiveChordIndex(-1);
      return;
    }

    await init();
    setIsPlaying(true);
    setActiveChordIndex(0);

    const chordData = progression.chords.map((chord) => {
      const voicing = getChordVoicing(chord.root, chord.quality, 4);
      return { notes: voicing.midiNotes, durationBeats: 4 };
    });

    const bpm = tempoOptions[selectedTempo]?.bpm ?? 120;

    try {
      await playProgression(chordData, bpm, (index) => {
        setActiveChordIndex(index);
      });
    } finally {
      setIsPlaying(false);
      setActiveChordIndex(-1);
    }
  }, [isPlaying, progression, playProgression, stop, init, selectedTempo, tempoOptions]);

  return (
    <div className="rounded-lg border border-neutral-700 bg-neutral-800/50 p-4">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h3 className="font-semibold text-neutral-100">{progression.template.name}</h3>

        {/* Tempo selector */}
        <div className="flex gap-1 rounded bg-neutral-900 p-0.5">
          {tempoOptions.map((opt, i) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => setSelectedTempo(i)}
              className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
                selectedTempo === i
                  ? 'bg-neutral-700 text-neutral-100'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chord display */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {progression.chords.map((chord, i) => (
          <span
            key={i}
            className={`rounded px-2 py-1 font-mono text-sm transition-colors ${
              activeChordIndex === i
                ? 'bg-amber-500/25 text-amber-300'
                : 'bg-neutral-700/40 text-neutral-300'
            }`}
          >
            {chord.name}
          </span>
        ))}
      </div>

      {/* Play/Stop button */}
      <button
        type="button"
        onClick={handlePlay}
        className={`inline-flex items-center gap-2 rounded px-4 py-2 text-sm font-medium transition-colors ${
          isPlaying
            ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
            : 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'
        }`}
      >
        <span aria-hidden="true">{isPlaying ? '\u25A0' : '\u25B6'}</span>
        {isPlaying ? 'Stop' : 'Play'}
      </button>
    </div>
  );
}
