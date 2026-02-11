'use client';

import { useCallback } from 'react';
import { createMidiFile, downloadMidiFile } from '@/lib/music/midi-export';
import type { MelodyNote } from '@/lib/music/types';

interface ExportMIDIButtonProps {
  notes: MelodyNote[];
  bpm: number;
  filename?: string;
}

export default function ExportMIDIButton({ notes, bpm, filename = 'jazz-circle' }: ExportMIDIButtonProps) {
  const handleExport = useCallback(() => {
    const data = createMidiFile(notes, bpm, filename);
    downloadMidiFile(data, `${filename}.mid`);
  }, [notes, bpm, filename]);

  return (
    <button
      onClick={handleExport}
      disabled={notes.length === 0}
      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium border border-[var(--border)] text-[var(--cream-dim)] hover:border-[var(--gold)] hover:text-[var(--cream)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)] disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Export as MIDI file"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      MIDI
    </button>
  );
}
