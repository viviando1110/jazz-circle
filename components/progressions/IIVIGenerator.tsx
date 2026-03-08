'use client';

import { useState, useCallback, useRef } from 'react';
import { KEYS_MAJOR } from '@/lib/music/keys';
import { getDiatonicChords, getChordVoicing } from '@/lib/music/chords';
import { useAudio } from '@/components/audio/useAudio';
import type { MusicalKey, DiatonicChord } from '@/lib/music/types';

interface IIVIChords {
  ii: DiatonicChord;
  V: DiatonicChord;
  I: DiatonicChord;
}

function getIIVI(key: MusicalKey): IIVIChords {
  const diatonic = getDiatonicChords(key);
  return {
    ii: diatonic[1],
    V: diatonic[4],
    I: diatonic[0],
  };
}

function pickRandomKey(previousRoot: string | null): MusicalKey {
  const candidates = KEYS_MAJOR.filter((k) => k.root !== previousRoot);
  const index = Math.floor(Math.random() * candidates.length);
  return candidates[index];
}

export function IIVIGenerator() {
  const [key, setKey] = useState<MusicalKey | null>(null);
  const [chords, setChords] = useState<IIVIChords | null>(null);
  const [activeChordIndex, setActiveChordIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const previousRootRef = useRef<string | null>(null);
  const { playProgression, stop } = useAudio();

  const handleGenerate = useCallback(() => {
    stop();
    setIsPlaying(false);
    setActiveChordIndex(null);

    const newKey = pickRandomKey(previousRootRef.current);
    previousRootRef.current = newKey.root;
    setKey(newKey);
    setChords(getIIVI(newKey));
  }, [stop]);

  const handlePlay = useCallback(async () => {
    if (!chords) return;

    if (isPlaying) {
      stop();
      setIsPlaying(false);
      setActiveChordIndex(null);
      return;
    }

    const progression = [chords.ii, chords.V, chords.I].map((chord) => ({
      notes: getChordVoicing(chord.root, chord.quality, 4).midiNotes,
      durationBeats: 4,
    }));

    setIsPlaying(true);
    setActiveChordIndex(0);

    await playProgression(progression, 120, (index) => {
      setActiveChordIndex(index);
    });

    setIsPlaying(false);
    setActiveChordIndex(null);
  }, [chords, isPlaying, playProgression, stop]);

  const chordEntries = chords
    ? [
        { chord: chords.ii, label: 'ii' },
        { chord: chords.V, label: 'V' },
        { chord: chords.I, label: 'I' },
      ]
    : null;

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
      <h2 className="text-lg text-[var(--gold)] font-serif font-bold mb-4">
        Random ii-V-I Generator
      </h2>

      <div className="flex gap-3 mb-6">
        <button
          onClick={handleGenerate}
          className="bg-[var(--gold)] text-[var(--bg)] px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Generate
        </button>
        {chords && (
          <button
            onClick={handlePlay}
            className="border border-[var(--gold)] text-[var(--gold)] px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            {isPlaying ? 'Stop' : 'Play'}
          </button>
        )}
      </div>

      {key && chordEntries && (
        <>
          <p className="text-[var(--cream)] font-serif text-xl font-bold mb-4">
            Key of {key.displayName}
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {chordEntries.map(({ chord, label }, i) => (
              <div
                key={label}
                className={`rounded-lg border border-[var(--border)] p-4 text-center transition-all ${
                  activeChordIndex === i
                    ? 'ring-2 ring-[var(--gold)] bg-[var(--card-hi)]'
                    : 'bg-[var(--card)]'
                }`}
              >
                <p className="text-[var(--cream)] text-lg font-bold">
                  {chord.name}
                </p>
                <p className="text-[var(--cream-dim)] text-sm mt-1">
                  {chord.roman}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      <p className="text-[var(--cream-dim)] text-sm">
        Try this in all 12 keys! The ii-V-I is the most important jazz
        progression.
      </p>
    </div>
  );
}
