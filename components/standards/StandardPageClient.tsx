'use client';

import { useState, useCallback } from 'react';
import type { Standard, StandardSection } from '@/lib/music/types';
import { transposeChordSymbol } from '@/lib/music/transpose-chord';
import { getChordVoicing } from '@/lib/music/chords';
import { useAudio } from '@/components/audio/useAudio';
import { ChordChart } from './ChordChart';
import { SectionAnalysis } from './SectionAnalysis';
import { TransposeToggle } from './TransposeToggle';
import type { NoteName, ChordQuality } from '@/lib/music/types';
import { CHROMATIC } from '@/lib/constants';

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

/**
 * Parse a chord symbol into root (NoteName) and quality (ChordQuality).
 * Falls back to 'm7' if quality is unrecognized.
 */
function parseForVoicing(symbol: string): { root: NoteName; quality: ChordQuality } {
  let root: NoteName;
  let qualityStr: string;

  // Try two-char root
  if (symbol.length >= 2 && CHROMATIC.includes(symbol.slice(0, 2) as NoteName)) {
    root = symbol.slice(0, 2) as NoteName;
    qualityStr = symbol.slice(2);
  } else {
    root = symbol.slice(0, 1) as NoteName;
    qualityStr = symbol.slice(1);
  }

  // Map common quality strings
  const QUALITY_MAP: Record<string, ChordQuality> = {
    'maj7': 'maj7', 'm7': 'm7', '7': '7', 'm7b5': 'm7b5', 'dim7': 'dim7',
    'maj9': 'maj9', '9': '9', 'm9': 'm9', 'sus4': 'sus4', '7sus4': '7sus4',
    '6': '6', 'm6': 'm6',
  };

  const quality: ChordQuality = QUALITY_MAP[qualityStr] ?? 'm7';
  return { root, quality };
}

export function StandardPageClient({ standard }: StandardPageClientProps) {
  const [activeKey, setActiveKey] = useState('gm');
  const [expandedSection, setExpandedSection] = useState<string>(standard.sections[0]?.name ?? '');
  const [activeBarIndex, setActiveBarIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const { playProgression, stop, init } = useAudio();

  // Gm is default (0 semitones), Em is -3 semitones
  const semitones = activeKey === 'em' ? -3 : 0;
  const displaySections = transposeSections(standard.sections, semitones);

  const handlePlayThrough = useCallback(async () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
      setActiveBarIndex(-1);
      return;
    }

    await init();
    setIsPlaying(true);

    // Build chord data from all bars
    const allChords: { notes: number[]; durationBeats: number }[] = [];
    for (const section of displaySections) {
      for (const bar of section.bars) {
        for (const chord of bar.chords) {
          const { root, quality } = parseForVoicing(chord.symbol);
          const voicing = getChordVoicing(root, quality, 4);
          allChords.push({ notes: voicing.midiNotes, durationBeats: chord.beats });
        }
      }
    }

    // Build a mapping from chord index to bar index
    const chordToBar: number[] = [];
    for (const section of displaySections) {
      for (const bar of section.bars) {
        for (let ci = 0; ci < bar.chords.length; ci++) {
          chordToBar.push(bar.bar - 1);
        }
      }
    }

    const bpm = standard.tempo.medium;

    try {
      await playProgression(allChords, bpm, (chordIdx) => {
        setActiveBarIndex(chordToBar[chordIdx] ?? -1);
      });
    } finally {
      setIsPlaying(false);
      setActiveBarIndex(-1);
    }
  }, [isPlaying, displaySections, playProgression, stop, init, standard.tempo.medium]);

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4">
        <TransposeToggle activeKey={activeKey} onChange={setActiveKey} />

        <button
          type="button"
          onClick={handlePlayThrough}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            isPlaying
              ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
              : 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'
          }`}
        >
          <span aria-hidden="true">{isPlaying ? '\u25A0' : '\u25B6'}</span>
          {isPlaying ? 'Stop' : 'Play Through Changes'}
        </button>
      </div>

      {/* Chord Chart */}
      <ChordChart
        sections={displaySections}
        activeBarIndex={activeBarIndex}
        onBarClick={(bar) => setActiveBarIndex(bar)}
      />

      {/* Section Analysis */}
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
    </div>
  );
}
