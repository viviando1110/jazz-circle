'use client';

import { useMemo } from 'react';
import { useMIDI } from '@/hooks/useMIDI';
import { detectChord } from '@/lib/music/chord-detect';
import PianoKeyboard from '@/components/piano/PianoKeyboard';
import MIDIStatus from './MIDIStatus';

export default function MIDIChordDetector() {
  const { isSupported, isConnected, activeNotes, requestAccess } = useMIDI();

  const detectedChord = useMemo(() => {
    if (activeNotes.size < 3) return null;
    return detectChord(Array.from(activeNotes));
  }, [activeNotes]);

  if (!isSupported) {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 text-center">
        <p className="text-[var(--cream-dim)] text-sm">
          MIDI keyboard input requires Google Chrome.
        </p>
        <p className="text-[var(--cream-dim)] text-xs mt-1">
          Open this page in Chrome to use your MIDI keyboard for live chord detection.
        </p>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 text-center space-y-3">
        <p className="text-[var(--cream-dim)] text-sm">
          Connect a MIDI keyboard to detect chords in real time.
        </p>
        <button
          onClick={requestAccess}
          className="rounded-lg px-4 py-2 text-sm font-medium bg-[var(--gold)] text-[var(--bg)] hover:brightness-110 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
        >
          Connect MIDI Keyboard
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <MIDIStatus />
        {detectedChord && (
          <span className="text-lg font-bold text-[var(--gold)] font-mono">
            {detectedChord.root}{detectedChord.quality}
          </span>
        )}
        {activeNotes.size > 0 && !detectedChord && (
          <span className="text-sm text-[var(--cream-dim)] italic">
            {activeNotes.size} note{activeNotes.size !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      <PianoKeyboard
        highlightedNotes={detectedChord?.notes ?? []}
        midiInputNotes={activeNotes}
      />

      {activeNotes.size === 0 && (
        <p className="text-center text-xs text-[var(--cream-dim)]">
          Play notes on your MIDI keyboard to detect chords
        </p>
      )}
    </div>
  );
}
