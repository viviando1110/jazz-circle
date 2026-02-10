'use client';

import type { NoteName, ChordQuality } from '@/lib/music/types';
import { getScaleSuggestions } from '@/lib/music/scales';
import { getScaleNotes, SCALES } from '@/lib/music/scales';
import PianoKeyboard from '@/components/piano/PianoKeyboard';
import { useState } from 'react';

interface ScaleGuideProps {
  root: NoteName;
  quality: ChordQuality;
}

export default function ScaleGuide({ root, quality }: ScaleGuideProps) {
  const suggestions = getScaleSuggestions(quality);
  const [activeIndex, setActiveIndex] = useState(0);

  if (suggestions.length === 0) {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
        <p className="text-sm text-[var(--cream-dim)]">
          No scale suggestions for {root}{quality}.
        </p>
      </div>
    );
  }

  const active = suggestions[activeIndex];
  const scaleNotes = getScaleNotes(root, active.scale);
  const scaleData = SCALES[active.scale];
  const degrees = scaleData.intervals.map((_, i) => i + 1);

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 space-y-4">
      <div className="flex items-baseline justify-between">
        <h3 className="text-sm font-bold text-[var(--cream)]">Scale Guide</h3>
        <span className="text-xs text-[var(--cream-dim)]">
          {root}{quality}
        </span>
      </div>

      {/* Scale tabs */}
      {suggestions.length > 1 && (
        <div className="flex gap-2">
          {suggestions.map((s, i) => (
            <button
              key={s.scale}
              onClick={() => setActiveIndex(i)}
              className={`
                px-3 py-1 rounded text-xs font-medium
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]
                ${i === activeIndex
                  ? 'bg-[var(--gold)] text-[var(--bg)]'
                  : 'bg-[var(--surface)] text-[var(--cream-dim)] hover:text-[var(--cream)]'
                }
              `}
            >
              {s.scale}
              {s.priority === 'primary' && (
                <span className="ml-1 opacity-60">*</span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Scale info */}
      <div className="space-y-2">
        <div>
          <p className="text-sm font-semibold text-[var(--gold)]">
            {root} {active.scale}
          </p>
          <p className="text-xs text-[var(--cream-dim)]">
            {scaleData.description}
          </p>
        </div>

        {active.tip && (
          <p className="text-xs text-[var(--cream-dim)] italic border-l-2 border-[var(--gold)] pl-2">
            {active.tip}
          </p>
        )}
      </div>

      {/* Piano keyboard with scale highlighted */}
      <PianoKeyboard
        highlightedNotes={[root]}
        scaleNotes={scaleNotes}
      />

      {/* Scale degrees */}
      <div className="flex gap-1 flex-wrap">
        {scaleNotes.map((note, i) => (
          <span
            key={i}
            className={`
              px-2 py-0.5 rounded text-xs font-mono
              ${i === 0
                ? 'bg-[var(--gold)] text-[var(--bg)] font-bold'
                : 'bg-[var(--surface)] text-[var(--cream-dim)]'
              }
            `}
          >
            {note}
            <span className="opacity-50 ml-0.5">{degrees[i]}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
