'use client';

import type { StandardSection } from '@/lib/music/types';

interface ChordChartProps {
  sections: StandardSection[];
  activeBarIndex?: number;
  onBarClick?: (bar: number) => void;
}

export function ChordChart({ sections, activeBarIndex, onBarClick }: ChordChartProps) {
  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <div key={section.name}>
          {/* Section header */}
          <div className="mb-2 flex items-center gap-2">
            <span className="inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded bg-amber-500/20 px-1.5 text-sm font-bold text-amber-400">
              {section.name}
            </span>
            <span className="text-sm text-neutral-400">{section.label}</span>
          </div>

          {/* Bar grid */}
          <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
            {section.bars.map((bar) => {
              const isActive = activeBarIndex === bar.bar - 1;
              return (
                <button
                  key={bar.bar}
                  type="button"
                  onClick={() => onBarClick?.(bar.bar - 1)}
                  className={`
                    group relative flex min-h-[3.5rem] items-center justify-center
                    rounded border px-2 py-3 text-center font-mono
                    transition-colors
                    ${isActive
                      ? 'border-amber-500 bg-amber-500/15 text-amber-300'
                      : 'border-neutral-700 bg-neutral-800/60 text-neutral-200 hover:border-neutral-500 hover:bg-neutral-700/60'
                    }
                  `}
                >
                  {/* Bar number */}
                  <span className="absolute left-1.5 top-1 text-[10px] text-neutral-400">
                    {bar.bar}
                  </span>

                  {/* Chord symbols */}
                  <span className="flex flex-wrap items-center justify-center gap-x-2 text-sm font-semibold md:text-base">
                    {bar.chords.map((chord, ci) => (
                      <span key={ci}>
                        {chord.symbol}
                        {bar.chords.length > 1 && ci < bar.chords.length - 1 && (
                          <span className="ml-1 text-neutral-500">|</span>
                        )}
                      </span>
                    ))}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
