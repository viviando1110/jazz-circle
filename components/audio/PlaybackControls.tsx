'use client';

interface PlaybackControlsProps {
  isPlaying: boolean;
  tempo: number;
  currentChordIndex: number;
  totalChords: number;
  onPlay: () => void;
  onStop: () => void;
  onTempoChange: (bpm: number) => void;
  /** Optional label for current chord (e.g., "Dm7") */
  currentChordLabel?: string;
  /** Optional bar info (e.g., "Bar 3 of 32") */
  barInfo?: string;
}

const MIN_TEMPO = 60;
const MAX_TEMPO = 200;

export function PlaybackControls({
  isPlaying,
  tempo,
  currentChordIndex,
  totalChords,
  onPlay,
  onStop,
  onTempoChange,
  currentChordLabel,
  barInfo,
}: PlaybackControlsProps) {
  const progress =
    totalChords > 0 && currentChordIndex >= 0
      ? ((currentChordIndex + 1) / totalChords) * 100
      : 0;

  return (
    <div className="rounded-lg border border-neutral-700 bg-neutral-800/50 p-3 space-y-3">
      {/* Top row: play/stop + progress info */}
      <div className="flex items-center gap-3">
        {/* Play/Stop */}
        <button
          type="button"
          onClick={isPlaying ? onStop : onPlay}
          className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-lg transition-colors ${
            isPlaying
              ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
              : 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'
          }`}
          aria-label={isPlaying ? 'Stop playback' : 'Start playback'}
        >
          <span aria-hidden="true">{isPlaying ? '\u25A0' : '\u25B6'}</span>
        </button>

        {/* Progress bar */}
        <div className="flex-1 min-w-0">
          <div className="h-1.5 rounded-full bg-neutral-700 overflow-hidden">
            <div
              className="h-full rounded-full bg-amber-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-1 flex items-center justify-between text-xs text-neutral-400">
            <span>
              {currentChordLabel ??
                (isPlaying && currentChordIndex >= 0
                  ? `Chord ${currentChordIndex + 1} of ${totalChords}`
                  : 'Ready')}
            </span>
            {barInfo && <span>{barInfo}</span>}
          </div>
        </div>
      </div>

      {/* Bottom row: tempo control */}
      <div className="flex items-center gap-3">
        <label
          htmlFor="tempo-slider"
          className="text-xs font-medium text-neutral-400 whitespace-nowrap"
        >
          Tempo
        </label>
        <input
          id="tempo-slider"
          type="range"
          min={MIN_TEMPO}
          max={MAX_TEMPO}
          value={tempo}
          onChange={(e) => onTempoChange(Number(e.target.value))}
          className="flex-1 h-1.5 rounded-full appearance-none bg-neutral-700 accent-amber-500 cursor-pointer"
          disabled={isPlaying}
        />
        <span className="text-xs font-mono text-neutral-300 w-12 text-right">
          {tempo} BPM
        </span>
      </div>
    </div>
  );
}
