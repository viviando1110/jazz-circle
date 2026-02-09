'use client';

import { useState, useCallback } from 'react';
import type { MusicalKey, DiatonicChord, RenderedProgression } from '@/lib/music/types';
import { getChordNotes } from '@/lib/music/chords';
import { JAZZ_PROGRESSIONS, renderProgression } from '@/lib/music/progressions';
import DiatonicChords from '@/components/chords/DiatonicChords';
import ChordDetail from '@/components/chords/ChordDetail';
import PianoKeyboard from '@/components/piano/PianoKeyboard';
import { ProgressionList } from '@/components/progressions/ProgressionList';
import { ProgressionPlayer } from '@/components/progressions/ProgressionPlayer';
import DiatonicStaffDisplay from '@/components/notation/DiatonicStaffDisplay';

interface KeyPageClientProps {
  musicalKey: MusicalKey;
}

export default function KeyPageClient({ musicalKey }: KeyPageClientProps) {
  const [activeChord, setActiveChord] = useState<DiatonicChord | null>(null);
  const [activeProgression, setActiveProgression] = useState<RenderedProgression | null>(null);

  const highlightedNotes = activeChord
    ? getChordNotes(activeChord.root, activeChord.quality)
    : [];

  const progressions = JAZZ_PROGRESSIONS.map((t) => renderProgression(t, musicalKey));

  const handleProgressionClick = useCallback((prog: RenderedProgression) => {
    setActiveProgression((prev) =>
      prev?.template.id === prog.template.id ? null : prog,
    );
  }, []);

  return (
    <div className="space-y-8">
      {/* Staff notation */}
      <section>
        <DiatonicStaffDisplay musicalKey={musicalKey} />
      </section>

      {/* Diatonic chords */}
      <section>
        <DiatonicChords
          musicalKey={musicalKey}
          activeChord={activeChord}
          onChordClick={setActiveChord}
        />
      </section>

      {/* Chord detail + Piano */}
      {activeChord && (
        <section className="animate-fade-up space-y-4">
          <ChordDetail chord={activeChord} />
          <PianoKeyboard highlightedNotes={highlightedNotes} />
        </section>
      )}

      {/* Progressions */}
      <section>
        <h2 className="text-lg font-semibold text-[var(--cream)] mb-4">
          Common Progressions in {musicalKey.displayName}
        </h2>
        <ProgressionList
          progressions={progressions}
          onProgressionClick={handleProgressionClick}
        />
      </section>

      {/* Progression player */}
      {activeProgression && (
        <section className="animate-fade-up">
          <ProgressionPlayer progression={activeProgression} />
        </section>
      )}
    </div>
  );
}
