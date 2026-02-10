'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { generateLick } from '@/lib/music/melody';
import { CHROMATIC } from '@/lib/constants';
import { useMelodyPlayback } from '@/hooks/useMelodyPlayback';
import MelodyDisplay from './MelodyDisplay';
import type { NoteName, ChordQuality, LickStyle, MelodyNote } from '@/lib/music/types';

interface LickGeneratorProps {
  /** Pre-set root note (e.g., from song playback). User can still override. */
  initialRoot?: NoteName;
  /** Pre-set chord quality (e.g., from song playback). User can still override. */
  initialQuality?: ChordQuality;
}

const QUALITIES: { value: ChordQuality; label: string }[] = [
  { value: 'maj7', label: 'maj7' },
  { value: 'm7', label: 'm7' },
  { value: '7', label: '7' },
  { value: 'm7b5', label: 'm7b5' },
  { value: 'dim7', label: 'dim7' },
];

const STYLES: { value: LickStyle; label: string }[] = [
  { value: 'bebop', label: 'Bebop' },
  { value: 'blues', label: 'Blues' },
  { value: 'modal', label: 'Modal' },
];

const BPM_DEFAULT = 120;

/**
 * Apply a deterministic variation to a lick based on a counter.
 * Rotates note order and shifts octave for variety.
 */
function applyVariation(notes: MelodyNote[], variationIndex: number): MelodyNote[] {
  if (variationIndex === 0 || notes.length === 0) return notes;

  const shift = variationIndex % 3;
  if (shift === 1) {
    // Shift all notes up an octave
    return notes.map((n) => ({ ...n, midi: n.midi + 12 }));
  }
  if (shift === 2) {
    // Reverse the melodic contour but keep rhythm
    const midis = notes.map((n) => n.midi).reverse();
    return notes.map((n, i) => ({ ...n, midi: midis[i] }));
  }
  // shift === 0 wraps back to original
  return notes;
}

export default function LickGenerator({ initialRoot, initialQuality }: LickGeneratorProps) {
  const [root, setRoot] = useState<NoteName>(initialRoot ?? 'C');
  const [quality, setQuality] = useState<ChordQuality>(initialQuality ?? 'maj7');
  const [style, setStyle] = useState<LickStyle>('bebop');
  const [bars, setBars] = useState<2 | 4>(2);
  const [melody, setMelody] = useState<MelodyNote[]>([]);
  const [variationCount, setVariationCount] = useState(0);
  const [bpm, setBpm] = useState(BPM_DEFAULT);

  // Track whether user has manually overridden the selectors
  const userOverrodeRef = useRef(false);

  const { play, stop, isPlaying, currentNoteIndex } = useMelodyPlayback();

  // Sync root/quality when props change (only if user hasn't manually overridden)
  useEffect(() => {
    if (initialRoot && !userOverrodeRef.current) {
      setRoot(initialRoot);
    }
  }, [initialRoot]);

  useEffect(() => {
    if (initialQuality && !userOverrodeRef.current) {
      setQuality(initialQuality);
    }
  }, [initialQuality]);

  const handleRootChange = useCallback((newRoot: NoteName) => {
    userOverrodeRef.current = true;
    setRoot(newRoot);
  }, []);

  const handleQualityChange = useCallback((newQuality: ChordQuality) => {
    userOverrodeRef.current = true;
    setQuality(newQuality);
  }, []);

  const handleGenerate = useCallback(() => {
    const lick = generateLick({ root, quality }, style, bars);
    setMelody(lick);
    setVariationCount(0);
  }, [root, quality, style, bars]);

  const handleAnotherOne = useCallback(() => {
    const lick = generateLick({ root, quality }, style, bars);
    const nextVariation = variationCount + 1;
    setMelody(applyVariation(lick, nextVariation));
    setVariationCount(nextVariation);
  }, [root, quality, style, bars, variationCount]);

  const handlePlay = useCallback(() => {
    if (isPlaying) {
      stop();
    } else if (melody.length > 0) {
      play(melody, bpm);
    }
  }, [isPlaying, stop, melody, play, bpm]);

  const selectBase =
    'rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 font-sans text-sm text-[var(--cream)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]';
  const btnBase =
    'rounded-lg px-4 py-2 font-sans text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)] disabled:opacity-50';

  return (
    <div className="space-y-6">
      {/* Chord selector row */}
      <div className="flex flex-wrap items-end gap-4">
        <label className="space-y-1">
          <span className="block text-xs font-sans text-[var(--cream-dim)] uppercase tracking-wider">Root</span>
          <select
            value={root}
            onChange={(e) => handleRootChange(e.target.value as NoteName)}
            className={selectBase}
            aria-label="Root note"
          >
            {CHROMATIC.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>

        <label className="space-y-1">
          <span className="block text-xs font-sans text-[var(--cream-dim)] uppercase tracking-wider">Quality</span>
          <select
            value={quality}
            onChange={(e) => handleQualityChange(e.target.value as ChordQuality)}
            className={selectBase}
            aria-label="Chord quality"
          >
            {QUALITIES.map((q) => (
              <option key={q.value} value={q.value}>{q.label}</option>
            ))}
          </select>
        </label>

        <label className="space-y-1">
          <span className="block text-xs font-sans text-[var(--cream-dim)] uppercase tracking-wider">Tempo</span>
          <input
            type="number"
            min={40}
            max={300}
            value={bpm}
            onChange={(e) => setBpm(Number(e.target.value))}
            className={`${selectBase} w-20`}
            aria-label="Tempo BPM"
          />
        </label>
      </div>

      {/* Style selector */}
      <div className="space-y-1">
        <span className="block text-xs font-sans text-[var(--cream-dim)] uppercase tracking-wider">Style</span>
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

      {/* Length selector */}
      <div className="space-y-1">
        <span className="block text-xs font-sans text-[var(--cream-dim)] uppercase tracking-wider">Length</span>
        <div className="flex gap-2">
          {([2, 4] as const).map((b) => (
            <button
              key={b}
              onClick={() => setBars(b)}
              className={`${btnBase} ${
                bars === b
                  ? 'bg-[var(--gold)] text-[var(--bg)]'
                  : 'border border-[var(--border)] bg-[var(--surface)] text-[var(--cream)] hover:border-[var(--gold)]'
              }`}
              aria-pressed={bars === b}
            >
              {b} bars
            </button>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleGenerate}
          className={`${btnBase} bg-[var(--gold)] text-[var(--bg)] hover:brightness-110`}
        >
          Generate
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
          </>
        )}
      </div>

      {/* Notation display */}
      <MelodyDisplay
        melody={melody}
        chordSymbols={melody.length > 0 ? [{ symbol: `${root}${quality}`, beatOffset: 0 }] : []}
        currentNoteIndex={currentNoteIndex}
      />
    </div>
  );
}
