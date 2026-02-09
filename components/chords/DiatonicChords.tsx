'use client';

import type { MusicalKey, DiatonicChord } from '@/lib/music/types';
import { getDiatonicChords } from '@/lib/music/chords';
import ChordCard from '@/components/chords/ChordCard';

interface DiatonicChordsProps {
  musicalKey: MusicalKey;
  activeChord: DiatonicChord | null;
  onChordClick: (chord: DiatonicChord) => void;
}

export default function DiatonicChords({
  musicalKey,
  activeChord,
  onChordClick,
}: DiatonicChordsProps) {
  const chords = getDiatonicChords(musicalKey);

  return (
    <div>
      <h3 className="text-sm font-semibold text-[var(--cream-muted)] mb-3">
        Diatonic 7th Chords in {musicalKey.displayName}
      </h3>
      <div className="flex gap-2 overflow-x-auto pb-2 md:grid md:grid-cols-7 md:overflow-visible">
        {chords.map((chord) => (
          <ChordCard
            key={chord.degree}
            chord={chord}
            isActive={activeChord?.degree === chord.degree}
            onClick={() => onChordClick(chord)}
          />
        ))}
      </div>
    </div>
  );
}
