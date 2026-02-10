'use client';

import { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { KEYS_MAJOR } from '@/lib/music/keys';
import { getDiatonicChords } from '@/lib/music/chords';
import { generateVoiceLeadingSequence } from '@/lib/music/voicings';
import { midiToNote } from '@/lib/music/theory';
import { useAudio } from '@/components/audio/useAudio';
import PianoKeyboard from '@/components/piano/PianoKeyboard';
import type { NoteName, ChordQuality, MusicalKey } from '@/lib/music/types';

interface SongChord {
  root: NoteName;
  quality: ChordQuality;
  symbol: string;
}

interface VoiceLeadingVisualizerProps {
  /** When provided, uses these chords instead of key/preset selectors */
  songChords?: SongChord[];
}

const PRESETS = [
  { name: 'ii - V - I',        degrees: [1, 4, 0] },
  { name: 'I - vi - ii - V',   degrees: [0, 5, 1, 4] },
  { name: 'iii - vi - ii - V', degrees: [2, 5, 1, 4] },
  { name: 'I - IV - V - I',    degrees: [0, 3, 4, 0] },
  { name: 'Full diatonic',     degrees: [0, 1, 2, 3, 4, 5, 6] },
];

function formatMidi(midi: number[]): string {
  return midi.map((m) => { const { note, octave } = midiToNote(m); return `${note}${octave}`; }).join(', ');
}

function totalMovement(a: number[], b: number[]): number {
  let sum = 0;
  for (let i = 0; i < Math.min(a.length, b.length); i++) sum += Math.abs(a[i] - b[i]);
  return sum;
}

const BTN = 'rounded bg-[var(--surface)] border border-[var(--border)] px-4 py-2 text-sm text-[var(--cream)] hover:bg-[var(--card)] disabled:opacity-40 disabled:cursor-not-allowed';
const SELECT = 'rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--cream)] px-3 py-1.5 text-sm';

export default function VoiceLeadingVisualizer({ songChords }: VoiceLeadingVisualizerProps) {
  const [selectedKey, setSelectedKey] = useState<MusicalKey>(KEYS_MAJOR[0]);
  const [presetIdx, setPresetIdx] = useState(0);
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { playChord } = useAudio();

  const isSongMode = !!songChords && songChords.length > 0;

  // Compute chords + labels based on mode
  const { chords, stepLabels } = useMemo(() => {
    if (isSongMode) {
      return {
        chords: songChords.map((c) => ({ root: c.root, quality: c.quality })),
        stepLabels: songChords.map((c) => c.symbol),
      };
    }
    const preset = PRESETS[presetIdx];
    const diatonic = getDiatonicChords(selectedKey);
    return {
      chords: preset.degrees.map((d) => ({
        root: diatonic[d].root as NoteName,
        quality: diatonic[d].quality as ChordQuality,
      })),
      stepLabels: preset.degrees.map((d) => diatonic[d].name),
    };
  }, [isSongMode, songChords, presetIdx, selectedKey]);

  const sequence = useMemo(() => generateVoiceLeadingSequence(chords), [chords]);
  const currentMidi = sequence[step] ?? [];

  const goTo = useCallback(async (i: number) => {
    setStep(i);
    if (sequence[i]) await playChord(sequence[i], 1.5);
  }, [playChord, sequence]);

  const stopAuto = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    setIsPlaying(false);
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    setIsPlaying(true);
    let idx = step;
    playChord(sequence[idx] ?? [], 1.5);
    timerRef.current = setInterval(() => {
      idx++;
      if (idx >= sequence.length) { stopAuto(); return; }
      setStep(idx);
      playChord(sequence[idx] ?? [], 1.5);
    }, 1800);
  }, [step, sequence, playChord, stopAuto]);

  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); }, []);
  useEffect(() => { setStep(0); stopAuto(); }, [selectedKey, presetIdx, songChords, stopAuto]);

  const movement = step < sequence.length - 1 ? totalMovement(sequence[step], sequence[step + 1]) : null;

  return (
    <div className={isSongMode ? '' : 'rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 sm:p-6'}>
      {/* Selectors — only in standalone mode */}
      {!isSongMode && (
        <div className="flex flex-wrap gap-3 mb-6">
          <label className="flex flex-col gap-1">
            <span className="text-xs text-[var(--cream-dim)] font-mono">Key</span>
            <select value={selectedKey.slug} onChange={(e) => {
              const k = KEYS_MAJOR.find((k) => k.slug === e.target.value);
              if (k) setSelectedKey(k);
            }} className={SELECT}>
              {KEYS_MAJOR.map((k) => <option key={k.slug} value={k.slug}>{k.displayName}</option>)}
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs text-[var(--cream-dim)] font-mono">Progression</span>
            <select value={presetIdx} onChange={(e) => setPresetIdx(Number(e.target.value))} className={SELECT}>
              {PRESETS.map((p, i) => <option key={p.name} value={i}>{p.name}</option>)}
            </select>
          </label>
        </div>
      )}

      {/* Chord progression steps */}
      <div className="flex flex-wrap gap-2 mb-4">
        {stepLabels.map((label, i) => (
          <button key={`${label}-${i}`} onClick={() => goTo(i)} className={`px-3 py-1 rounded text-sm font-mono transition-colors ${
            i === step ? 'bg-[var(--gold)] text-[var(--bg)] font-bold' : 'bg-[var(--surface)] text-[var(--cream-dim)] hover:text-[var(--cream)]'
          }`}>
            {label}
          </button>
        ))}
      </div>

      <PianoKeyboard highlightedNotes={[]} midiNotes={currentMidi} animateTransition />

      {/* Voicing info */}
      <div className="mt-4 space-y-1 text-sm font-mono text-[var(--cream-dim)]">
        <p><span className="text-[var(--cream)]">Voicing:</span> {formatMidi(currentMidi)}</p>
        {movement !== null && (
          <p><span className="text-[var(--cream)]">Movement to next:</span> {movement} semitone{movement !== 1 ? 's' : ''}</p>
        )}
      </div>

      {/* Controls */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={() => { if (step > 0) goTo(step - 1); }} disabled={step === 0} className={BTN}>Previous</button>
        <button onClick={() => { if (step < sequence.length - 1) goTo(step + 1); }} disabled={step === sequence.length - 1} className={BTN}>Next</button>
        <button onClick={() => playChord(currentMidi, 1.5)} className={BTN}>Replay</button>
        <button onClick={isPlaying ? stopAuto : startAuto} className={`rounded px-4 py-2 text-sm font-bold ${
          isPlaying ? 'bg-red-800/50 border border-red-600 text-red-200 hover:bg-red-800/70' : 'bg-[var(--gold)]/20 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)]/30'
        }`}>
          {isPlaying ? 'Stop' : 'Auto-play'}
        </button>
      </div>

      <p className="mt-3 text-xs text-[var(--cream-dim)] font-mono">Step {step + 1} of {sequence.length}</p>
    </div>
  );
}
