'use client';

import type { DiatonicChord } from '@/lib/music/types';

interface ChordCardProps {
  chord: DiatonicChord;
  isActive: boolean;
  onClick: () => void;
}

export default function ChordCard({ chord, isActive, onClick }: ChordCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center
        px-3 py-3 rounded-lg border
        transition-all duration-200
        min-w-[72px]
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]
        ${isActive
          ? 'bg-[var(--gold)] border-[var(--gold)] text-[var(--bg)] motion-safe:animate-pulse'
          : 'bg-[var(--card)] border-[var(--border)] text-[var(--cream)] hover:border-[var(--gold)] hover:bg-[var(--surface)]'
        }
      `}
    >
      <span className="text-sm font-bold">{chord.name}</span>
      <span className={`text-xs mt-0.5 ${isActive ? 'text-[var(--bg)]/70' : 'text-[var(--cream-muted)]'}`}>
        {chord.roman}
      </span>
    </button>
  );
}
