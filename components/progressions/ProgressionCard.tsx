'use client';

import type { RenderedProgression } from '@/lib/music/types';

interface ProgressionCardProps {
  progression: RenderedProgression;
  onPlay?: () => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  essential: 'bg-emerald-500/20 text-emerald-400',
  turnaround: 'bg-blue-500/20 text-blue-400',
  blues: 'bg-purple-500/20 text-purple-400',
  modal: 'bg-orange-500/20 text-orange-400',
  advanced: 'bg-red-500/20 text-red-400',
};

export function ProgressionCard({ progression, onPlay }: ProgressionCardProps) {
  const { template, chords } = progression;
  const categoryClass = CATEGORY_COLORS[template.category] ?? 'bg-neutral-500/20 text-neutral-400';

  return (
    <div className="rounded-lg border border-neutral-700 bg-neutral-800/50 p-4">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="font-semibold text-neutral-100">{template.name}</h3>
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase ${categoryClass}`}>
          {template.category}
        </span>
      </div>

      {/* Chord sequence */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {chords.map((chord, i) => (
          <span
            key={i}
            className="rounded bg-neutral-700/60 px-2 py-0.5 font-mono text-sm text-neutral-200"
          >
            {chord.name}
          </span>
        ))}
      </div>

      <p className="mb-3 text-xs text-neutral-400">{template.description}</p>

      {onPlay && (
        <button
          type="button"
          onClick={onPlay}
          className="inline-flex items-center gap-1.5 rounded bg-amber-500/15 px-3 py-1.5 text-xs font-medium text-amber-400 transition-colors hover:bg-amber-500/25"
        >
          <span aria-hidden="true">&#9654;</span>
          Play
        </button>
      )}
    </div>
  );
}
