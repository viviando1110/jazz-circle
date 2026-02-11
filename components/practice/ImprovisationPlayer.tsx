'use client';

import { useState, useCallback, useMemo } from 'react';
import { generateImprovisation } from '@/lib/music/melody';
import { useMelodyPlayback } from '@/hooks/useMelodyPlayback';
import MelodyDisplay from './MelodyDisplay';
import ExportMIDIButton from '@/components/midi/ExportMIDIButton';
import type { NoteName, ChordQuality, LickStyle, MelodyNote } from '@/lib/music/types';

interface ImprovisationChord {
  root: NoteName;
  quality: ChordQuality;
  symbol: string;
  durationBeats: number;
}

interface ImprovisationPlayerProps {
  chords: ImprovisationChord[];
}

const STYLES: { value: LickStyle; label: string }[] = [
  { value: 'bebop', label: 'Bebop' },
  { value: 'blues', label: 'Blues' },
  { value: 'modal', label: 'Modal' },
];

const BPM_DEFAULT = 120;

export default function ImprovisationPlayer({ chords }: ImprovisationPlayerProps) {
  const [style, setStyle] = useState<LickStyle>('bebop');
  const [melody, setMelody] = useState<MelodyNote[]>([]);
  const [variationCount, setVariationCount] = useState(0);
  const [bpm, setBpm] = useState(BPM_DEFAULT);

  const { play, stop, isPlaying, currentNoteIndex } = useMelodyPlayback();

  const chordsAsInput = useMemo(
    () => chords.map((c) => ({ root: c.root, quality: c.quality, durationBeats: c.durationBeats })),
    [chords],
  );

  const chordSymbols = useMemo(() => {
    const symbols: { symbol: string; beatOffset: number }[] = [];
    let offset = 0;
    for (const c of chords) {
      symbols.push({ symbol: c.symbol, beatOffset: offset });
      offset += c.durationBeats;
    }
    return symbols;
  }, [chords]);

  const handleGenerate = useCallback(() => {
    if (isPlaying) stop();
    const solo = generateImprovisation(chordsAsInput, style, 0);
    setMelody(solo);
    setVariationCount(0);
  }, [chordsAsInput, style, isPlaying, stop]);

  const handleAnotherOne = useCallback(() => {
    if (isPlaying) stop();
    const next = variationCount + 1;
    const solo = generateImprovisation(chordsAsInput, style, next);
    setMelody(solo);
    setVariationCount(next);
  }, [chordsAsInput, style, variationCount, isPlaying, stop]);

  const handlePlay = useCallback(() => {
    if (isPlaying) {
      stop();
    } else if (melody.length > 0) {
      play(melody, bpm);
    }
  }, [isPlaying, stop, melody, play, bpm]);

  const btnBase =
    'rounded-lg px-4 py-2 font-sans text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)] disabled:opacity-50';
  const selectBase =
    'rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 font-sans text-sm text-[var(--cream)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]';

  return (
    <div className="space-y-4 mt-4 pt-4 border-t border-[var(--border)]">
      <h4 className="text-sm font-semibold text-[var(--cream)] uppercase tracking-wider">
        Solo Generator
      </h4>

      {/* Style + Tempo row */}
      <div className="flex flex-wrap items-end gap-4">
        <div className="space-y-1">
          <span className="block text-xs font-sans text-[var(--cream-dim)] uppercase tracking-wider">
            Style
          </span>
          <div className="flex gap-2">
            {STYLES.map((s) => (
              <button
                key={s.value}
                onClick={() => setStyle(s.value)}
                className={`${btnBase} ${
                  style === s.value
                    ? 'bg-[var(--gold)] text-[var(--bg)]'
                    : 'border border-[var(--border)] bg-[var(--surface)] text-[var(--cream)] hover:border-[var(--gold)]'
                }`}
                aria-pressed={style === s.value}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <label className="space-y-1">
          <span className="block text-xs font-sans text-[var(--cream-dim)] uppercase tracking-wider">
            Tempo
          </span>
          <input
            type="number"
            min={40}
            max={300}
            value={bpm}
            onChange={(e) => setBpm(Number(e.target.value))}
            className={`${selectBase} w-20`}
            aria-label="Solo tempo BPM"
          />
        </label>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleGenerate}
          className={`${btnBase} bg-[var(--gold)] text-[var(--bg)] hover:brightness-110`}
        >
          Generate Solo
        </button>

        {melody.length > 0 && (
          <>
            <button
              onClick={handlePlay}
              className={`${btnBase} border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg)]`}
            >
              {isPlaying ? 'Stop' : 'Play'}
            </button>

            <button
              onClick={handleAnotherOne}
              className={`${btnBase} border border-[var(--border)] text-[var(--cream-dim)] hover:border-[var(--gold)] hover:text-[var(--cream)]`}
            >
              Another one
            </button>

            <ExportMIDIButton notes={melody} bpm={bpm} filename="jazz-circle-solo" />
          </>
        )}
      </div>

      {/* Notation display */}
      <MelodyDisplay
        melody={melody}
        chordSymbols={melody.length > 0 ? chordSymbols : []}
        currentNoteIndex={currentNoteIndex}
      />
    </div>
  );
}
