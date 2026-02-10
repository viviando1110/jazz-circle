'use client';

import { useState, useMemo } from 'react';
import { usePracticeMode } from '@/hooks/usePracticeMode';
import { KEYS_MAJOR } from '@/lib/music/keys';
import { JAZZ_PROGRESSIONS, renderProgression } from '@/lib/music/progressions';
import { getChordVoicing } from '@/lib/music/chords';
import MetronomeDisplay from '@/components/practice/MetronomeDisplay';
import ScaleGuide from '@/components/practice/ScaleGuide';
import type { MusicalKey } from '@/lib/music/types';

export default function PracticeMode() {
  const [selectedKey, setSelectedKey] = useState<MusicalKey>(KEYS_MAJOR[0]);
  const [progressionId, setProgressionId] = useState(JAZZ_PROGRESSIONS[0].id);

  const {
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
  } = usePracticeMode();

  const template = JAZZ_PROGRESSIONS.find((p) => p.id === progressionId) ?? JAZZ_PROGRESSIONS[0];
  const rendered = useMemo(() => renderProgression(template, selectedKey), [template, selectedKey]);

  const chordVoicings = useMemo(
    () =>
      rendered.chords.map((chord) => {
        const voicing = getChordVoicing(chord.root, chord.quality, 4);
        return { notes: voicing.midiNotes, durationBeats: 4 };
      }),
    [rendered],
  );

  // The chord currently playing (based on currentBar)
  const activeChord =
    isPlaying && currentBar >= 0 && currentBar < rendered.chords.length
      ? rendered.chords[currentBar]
      : null;

  function handlePlayStop() {
    if (isPlaying) {
      stopPractice();
    } else {
      startPractice(chordVoicings);
    }
  }

  return (
    <div className="space-y-6">
      {/* Controls row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Key selector */}
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-[var(--cream-dim)]">Key</span>
          <select
            value={selectedKey.slug}
            onChange={(e) => {
              const key = KEYS_MAJOR.find((k) => k.slug === e.target.value);
              if (key) setSelectedKey(key);
            }}
            disabled={isPlaying}
            className="bg-[var(--surface)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--cream)] focus-visible:outline-2 focus-visible:outline-[var(--gold)] disabled:opacity-50"
          >
            {KEYS_MAJOR.map((k) => (
              <option key={k.slug} value={k.slug}>
                {k.displayName}
              </option>
            ))}
          </select>
        </label>

        {/* Progression selector */}
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-[var(--cream-dim)]">Progression</span>
          <select
            value={progressionId}
            onChange={(e) => setProgressionId(e.target.value)}
            disabled={isPlaying}
            className="bg-[var(--surface)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--cream)] focus-visible:outline-2 focus-visible:outline-[var(--gold)] disabled:opacity-50"
          >
            {JAZZ_PROGRESSIONS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.bars})
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Tempo slider */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-[var(--cream-dim)]">Tempo</span>
          <span className="text-sm font-mono text-[var(--gold)]">{config.tempo} BPM</span>
        </div>
        <input
          type="range"
          min={40}
          max={240}
          value={config.tempo}
          onChange={(e) => setTempo(Number(e.target.value))}
          disabled={isPlaying}
          className="w-full accent-[var(--gold)] disabled:opacity-50"
          aria-label={`Tempo: ${config.tempo} BPM`}
        />
      </div>

      {/* Toggle buttons */}
      <div className="flex flex-wrap gap-2">
        <ToggleButton label="Metronome" active={config.metronomeOn} onClick={toggleMetronome} disabled={isPlaying} />
        <ToggleButton label="Count-in" active={config.countIn} onClick={toggleCountIn} disabled={isPlaying} />
        <ToggleButton label="Loop" active={config.loop} onClick={toggleLoop} disabled={isPlaying} />
      </div>

      {/* Chord display */}
      <div className="flex flex-wrap gap-2">
        {rendered.chords.map((chord, i) => (
          <div
            key={i}
            className={`
              px-3 py-2 rounded-lg border text-center min-w-[64px]
              ${i === currentBar
                ? 'bg-[var(--gold)] border-[var(--gold)] text-[var(--bg)]'
                : 'bg-[var(--card)] border-[var(--border)] text-[var(--cream)]'
              }
            `}
          >
            <span className="text-sm font-bold block">{chord.name}</span>
            <span className={`text-xs ${i === currentBar ? 'text-[var(--bg)]/70' : 'text-[var(--cream-dim)]'}`}>
              {chord.roman}
            </span>
          </div>
        ))}
      </div>

      {/* Metronome display */}
      <MetronomeDisplay
        beatsPerBar={config.timeSignature[0]}
        currentBeat={currentBeat}
        isCountingIn={isCountingIn}
      />

      {/* Play/Stop button */}
      <button
        onClick={handlePlayStop}
        className={`
          w-full py-3 rounded-lg font-bold text-lg
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]
          motion-safe:transition-colors
          ${isPlaying
            ? 'bg-[var(--surface)] border-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--card)]'
            : 'bg-[var(--gold)] text-[var(--bg)] hover:opacity-90'
          }
        `}
      >
        {isPlaying ? 'Stop' : 'Play'}
      </button>

      {/* Scale guide for the active chord */}
      {activeChord && (
        <ScaleGuide root={activeChord.root} quality={activeChord.quality} />
      )}
    </div>
  );
}

function ToggleButton({ label, active, onClick, disabled }: {
  label: string; active: boolean; onClick: () => void; disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-3 py-1.5 rounded-lg text-xs font-medium border
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]
        disabled:opacity-50
        ${active
          ? 'bg-[var(--gold)]/20 border-[var(--gold)] text-[var(--gold)]'
          : 'bg-[var(--surface)] border-[var(--border)] text-[var(--cream-dim)]'
        }
      `}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
