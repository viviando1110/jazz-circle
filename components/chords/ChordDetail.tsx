'use client';

import { useState } from 'react';
import type { DiatonicChord } from '@/lib/music/types';
import { getChordNotes } from '@/lib/music/chords';
import { getScaleSuggestions } from '@/lib/music/scales';

interface ChordDetailProps {
  chord: DiatonicChord;
}

export default function ChordDetail({ chord }: ChordDetailProps) {
  const [expanded, setExpanded] = useState(true);
  const notes = getChordNotes(chord.root, chord.quality);
  const suggestions = getScaleSuggestions(chord.quality);

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-4 py-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
      >
        <div>
          <span className="text-base font-bold text-[var(--cream)]">{chord.name}</span>
          <span className="text-sm text-[var(--cream-muted)] ml-2">({chord.roman})</span>
        </div>
        <span className="text-[var(--cream-muted)] text-xs">
          {expanded ? 'Collapse' : 'Expand'}
        </span>
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-3">
          <div>
            <h4 className="text-xs font-semibold text-[var(--cream-muted)] uppercase tracking-wider mb-1">
              Chord Tones
            </h4>
            <div className="flex gap-2">
              {notes.map((note, i) => (
                <span
                  key={i}
                  className="text-sm font-mono px-2 py-0.5 rounded bg-[var(--surface)] text-[var(--gold)]"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[var(--cream-muted)] uppercase tracking-wider mb-1">
              Intervals (semitones)
            </h4>
            <span className="text-sm font-mono text-[var(--cream)]">
              {chord.intervals.join(' - ')}
            </span>
          </div>

          {suggestions.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-[var(--cream-muted)] uppercase tracking-wider mb-1">
                Scale Suggestions
              </h4>
              <ul className="space-y-1.5">
                {suggestions.map((s) => (
                  <li key={s.scale} className="text-sm">
                    <span className={`inline-block px-1.5 py-0.5 rounded text-xs font-semibold mr-2 ${
                      s.priority === 'primary'
                        ? 'bg-[var(--gold)] text-[var(--bg)]'
                        : 'bg-[var(--surface)] text-[var(--cream-muted)]'
                    }`}>
                      {s.priority === 'primary' ? 'Primary' : 'Alt'}
                    </span>
                    <span className="text-[var(--cream)] font-medium">{s.scale}</span>
                    {s.tip && (
                      <span className="text-[var(--cream-muted)] ml-1 text-xs">
                        — {s.tip}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
