'use client';

import { useKeySelection } from '@/hooks/useKeySelection';
import { getChordNotes } from '@/lib/music/chords';
import CircleOfFifths from '@/components/circle/CircleOfFifths';
import DiatonicChords from '@/components/chords/DiatonicChords';
import ChordDetail from '@/components/chords/ChordDetail';
import PianoKeyboard from '@/components/piano/PianoKeyboard';

export default function HomePageClient() {
  const {
    selectedKey,
    activeChord,
    hoveredWedge,
    selectKey,
    selectChord,
    setHoveredWedge,
  } = useKeySelection();

  const highlightedNotes = activeChord
    ? getChordNotes(activeChord.root, activeChord.quality)
    : [];

  return (
    <div className="space-y-8">
      {/* Circle */}
      <div className="flex justify-center">
        <CircleOfFifths
          selectedKey={selectedKey}
          hoveredWedge={hoveredWedge}
          onSelectKey={selectKey}
          onHoverWedge={setHoveredWedge}
        />
      </div>

      {/* Diatonic chords */}
      {selectedKey && (
        <div className="animate-fade-up">
          <DiatonicChords
            musicalKey={selectedKey}
            activeChord={activeChord}
            onChordClick={selectChord}
          />
        </div>
      )}

      {/* Chord detail + Piano */}
      {activeChord && (
        <div className="animate-fade-up space-y-4">
          <ChordDetail chord={activeChord} />
          <PianoKeyboard highlightedNotes={highlightedNotes} />
        </div>
      )}
    </div>
  );
}
