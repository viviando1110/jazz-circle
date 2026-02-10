'use client';

import { useState, useMemo, useCallback } from 'react';
import type { Standard, StandardSection } from '@/lib/music/types';
import { transposeChordSymbol } from '@/lib/music/transpose-chord';
import { getChordVoicing } from '@/lib/music/chords';
import { usePlayback } from '@/hooks/usePlayback';
import { PlaybackControls } from '@/components/audio/PlaybackControls';
import { ChordChart } from './ChordChart';
import { SectionAnalysis } from './SectionAnalysis';
import { TransposeToggle } from './TransposeToggle';
import LeadSheetNotation from '@/components/notation/LeadSheetNotation';
import AdSlot from '@/components/ads/AdSlot';
import { SongPracticeToolbar } from './SongPracticeToolbar';
import { parseForVoicing } from '@/lib/music/parse-chord';

interface StandardPageClientProps {
  standard: Standard;
}

/** Transpose all chord symbols in sections by the given semitones. */
function transposeSections(sections: StandardSection[], semitones: number): StandardSection[] {
  if (semitones === 0) return sections;
  return sections.map((section) => ({
    ...section,
    bars: section.bars.map((bar) => ({
      ...bar,
      chords: bar.chords.map((chord) => ({
        ...chord,
        symbol: transposeChordSymbol(chord.symbol, semitones),
      })),
    })),
  }));
}

export function StandardPageClient({ standard }: StandardPageClientProps) {
  const [activeKey, setActiveKey] = useState('gm');
  const [expandedSection, setExpandedSection] = useState<string>(standard.sections[0]?.name ?? '');
  const [activeBarIndex, setActiveBarIndex] = useState(-1);

  const {
    isPlaying,
    currentChordIndex,
    tempo,
    play,
    stop,
    setTempo,
  } = usePlayback(standard.tempo.medium);

  // Gm is default (0 semitones), Em is -3 semitones
  const semitones = activeKey === 'em' ? -3 : 0;
  const displaySections = transposeSections(standard.sections, semitones);

  // Build chord data and chord-to-bar mapping
  const { allChords, chordToBar, chordLabels } = useMemo(() => {
    const chords: { notes: number[]; durationBeats: number }[] = [];
    const mapping: number[] = [];
    const labels: string[] = [];

    for (const section of displaySections) {
      for (const bar of section.bars) {
        for (const chord of bar.chords) {
          const { root, quality } = parseForVoicing(chord.symbol);
          const voicing = getChordVoicing(root, quality, 4);
          chords.push({ notes: voicing.midiNotes, durationBeats: chord.beats });
          mapping.push(bar.bar - 1);
          labels.push(chord.symbol);
        }
      }
    }

    return { allChords: chords, chordToBar: mapping, chordLabels: labels };
  }, [displaySections]);

  // Parsed chord data for practice toolbar
  const parsedChords = useMemo(() =>
    displaySections.flatMap((s) =>
      s.bars.flatMap((b) =>
        b.chords.map((c) => ({
          ...parseForVoicing(c.symbol),
          symbol: c.symbol,
          durationBeats: c.beats,
        }))
      )
    ),
    [displaySections]
  );

  const handlePlayThrough = useCallback(() => {
    if (isPlaying) {
      stop();
      setActiveBarIndex(-1);
      return;
    }

    void play(allChords, () => {
      setActiveBarIndex(-1);
    });
  }, [isPlaying, allChords, play, stop]);

  // Sync bar highlight with chord index from playback
  const currentBarIndex =
    currentChordIndex >= 0 ? (chordToBar[currentChordIndex] ?? -1) : activeBarIndex;

  const currentChordLabel =
    currentChordIndex >= 0 ? chordLabels[currentChordIndex] : undefined;

  const totalBars = standard.totalBars;
  const currentBar = currentBarIndex >= 0 ? currentBarIndex + 1 : undefined;
  const barInfo =
    currentBar !== undefined ? `Bar ${currentBar} of ${totalBars}` : undefined;

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4">
        <TransposeToggle activeKey={activeKey} onChange={setActiveKey} />
      </div>

      {/* Playback controls (sticky so visible while scrolling chart) */}
      <div className="sticky top-14 z-10 -mx-4 px-4 py-2 bg-[var(--bg)]/95 backdrop-blur-sm sm:-mx-6 sm:px-6">
      <PlaybackControls
        isPlaying={isPlaying}
        tempo={tempo}
        currentChordIndex={currentChordIndex}
        totalChords={allChords.length}
        onPlay={handlePlayThrough}
        onStop={() => {
          stop();
          setActiveBarIndex(-1);
        }}
        onTempoChange={setTempo}
        currentChordLabel={currentChordLabel}
        barInfo={barInfo}
      />
      <SongPracticeToolbar
        chords={parsedChords}
        currentChordIndex={currentChordIndex}
        isPlaying={isPlaying}
      />
      </div>

      {/* Lead Sheet Notation */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-100 mb-3">Notation</h2>
        <LeadSheetNotation sections={displaySections} />
      </div>

      <AdSlot slot="placeholder" format="horizontal" />

      {/* Chord Chart */}
      <ChordChart
        sections={displaySections}
        activeBarIndex={currentBarIndex}
        onBarClick={(bar) => setActiveBarIndex(bar)}
      />

      {/* Section Analysis (only if at least one section has analysis data) */}
      {standard.sections.some((s) => s.analysis) && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-100">Section Analysis</h2>
          {standard.sections.map((section) => (
            <SectionAnalysis
              key={section.name}
              section={section}
              isExpanded={expandedSection === section.name}
              onToggle={() =>
                setExpandedSection((prev) => (prev === section.name ? '' : section.name))
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
