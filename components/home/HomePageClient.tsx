'use client';

import { useKeySelection } from '@/hooks/useKeySelection';
import { getChordNotes } from '@/lib/music/chords';
import CircleOfFifths from '@/components/circle/CircleOfFifths';
import DiatonicChords from '@/components/chords/DiatonicChords';
import ChordDetail from '@/components/chords/ChordDetail';
import PianoKeyboard from '@/components/piano/PianoKeyboard';
import DiatonicStaffDisplay from '@/components/notation/DiatonicStaffDisplay';

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
    <div className="lg:flex lg:gap-8 lg:items-start">
      {/* Left column: Circle selector */}
      <div className="lg:w-[300px] lg:flex-shrink-0 mb-8 lg:mb-0 lg:sticky lg:top-20">
        <CircleOfFifths
          compact
          selectedKey={selectedKey}
          hoveredWedge={hoveredWedge}
          onSelectKey={selectKey}
          onHoverWedge={setHoveredWedge}
        />
        <p className="text-center text-xs text-neutral-400 mt-2">
          Click any key to see its diatonic 7th chords, scales, and voicings
        </p>
      </div>

      {/* Right column: Content */}
      <div className="flex-1 min-w-0 space-y-8">
        {selectedKey && (
          <>
            {/* Staff notation */}
            <DiatonicStaffDisplay musicalKey={selectedKey} />

            {/* Diatonic chords */}
            <div className="animate-fade-up">
              <DiatonicChords
                musicalKey={selectedKey}
                activeChord={activeChord}
                onChordClick={selectChord}
              />
            </div>

            {/* Chord detail + Piano */}
            {activeChord && (
              <div className="animate-fade-up space-y-4">
                <ChordDetail chord={activeChord} />
                <PianoKeyboard highlightedNotes={highlightedNotes} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
