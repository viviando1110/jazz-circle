'use client';

import { useMemo, useCallback } from 'react';
import type { RenderedProgression } from '@/lib/music/types';
import { getChordVoicing } from '@/lib/music/chords';
import { usePlayback } from '@/hooks/usePlayback';
import { PlaybackControls } from '@/components/audio/PlaybackControls';

interface ProgressionPlayerProps {
  progression: RenderedProgression;
  defaultTempo?: number;
}

export function ProgressionPlayer({
  progression,
  defaultTempo = 120,
}: ProgressionPlayerProps) {
  const {
    isPlaying,
    currentChordIndex,
    tempo,
    play,
    stop,
    setTempo,
  } = usePlayback(defaultTempo);

  const chordData = useMemo(
    () =>
      progression.chords.map((chord) => {
        const voicing = getChordVoicing(chord.root, chord.quality, 4);
        return { notes: voicing.midiNotes, durationBeats: 4 };
      }),
    [progression],
  );

  const handlePlay = useCallback(() => {
    void play(chordData);
  }, [play, chordData]);

  const currentChordLabel =
    currentChordIndex >= 0
      ? progression.chords[currentChordIndex]?.name
      : undefined;

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-neutral-100">
        {progression.template.name}
      </h3>

      {/* Chord display */}
      <div className="flex flex-wrap gap-1.5">
        {progression.chords.map((chord, i) => (
          <span
            key={i}
            className={`rounded px-2 py-1 font-mono text-sm transition-colors ${
              currentChordIndex === i
                ? 'bg-amber-500/25 text-amber-300'
                : 'bg-neutral-700/40 text-neutral-300'
            }`}
          >
            {chord.name}
          </span>
        ))}
      </div>

      {/* Playback controls */}
      <PlaybackControls
        isPlaying={isPlaying}
        tempo={tempo}
        currentChordIndex={currentChordIndex}
        totalChords={progression.chords.length}
        onPlay={handlePlay}
        onStop={stop}
        onTempoChange={setTempo}
        currentChordLabel={currentChordLabel}
      />
    </div>
  );
}
