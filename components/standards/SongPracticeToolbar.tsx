'use client';

import { useState } from 'react';
import ScaleGuide from '@/components/practice/ScaleGuide';
import VoiceLeadingVisualizer from '@/components/practice/VoiceLeadingVisualizer';
import LickGenerator from '@/components/practice/LickGenerator';
import type { NoteName, ChordQuality } from '@/lib/music/types';

interface SongChord {
  root: NoteName;
  quality: ChordQuality;
  symbol: string;
}

interface SongPracticeToolbarProps {
  chords: SongChord[];
  currentChordIndex: number;
  isPlaying: boolean;
}

type PracticeTab = 'improvise' | 'voiceleading' | 'licks';

const TABS: { id: PracticeTab; label: string }[] = [
  { id: 'improvise', label: 'Improvise' },
  { id: 'voiceleading', label: 'Voice Leading' },
  { id: 'licks', label: 'Licks' },
];

export function SongPracticeToolbar({ chords, currentChordIndex, isPlaying }: SongPracticeToolbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<PracticeTab>('improvise');

  if (chords.length === 0) return null;

  // Use the current playing chord, or first chord when not playing
  const idx = isPlaying && currentChordIndex >= 0 ? currentChordIndex : 0;
  const currentChord = chords[Math.min(idx, chords.length - 1)];

  const tabBtnBase = 'px-3 py-1.5 rounded text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]';

  return (
    <div className="mt-2">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-1.5 rounded text-sm font-medium text-[var(--cream-dim)] hover:text-[var(--cream)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
        aria-expanded={isOpen}
      >
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        Practice Tools
        {isPlaying && currentChord && (
          <span className="text-xs text-[var(--gold)] font-mono ml-1">
            ({currentChord.symbol})
          </span>
        )}
      </button>

      {/* Collapsible panel */}
      {isOpen && (
        <div className="mt-2 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 space-y-4">
          {/* Tab buttons */}
          <div className="flex gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${tabBtnBase} ${
                  activeTab === tab.id
                    ? 'bg-[var(--gold)] text-[var(--bg)]'
                    : 'bg-[var(--surface)] text-[var(--cream-dim)] hover:text-[var(--cream)]'
                }`}
                aria-pressed={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === 'improvise' && (
            <ScaleGuide
              root={currentChord.root}
              quality={currentChord.quality}
            />
          )}

          {activeTab === 'voiceleading' && (
            <VoiceLeadingVisualizer songChords={chords} />
          )}

          {activeTab === 'licks' && (
            <LickGenerator
              initialRoot={currentChord.root}
              initialQuality={currentChord.quality}
            />
          )}
        </div>
      )}
    </div>
  );
}
