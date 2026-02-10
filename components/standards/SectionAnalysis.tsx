'use client';

import { useState } from 'react';
import type { StandardSection } from '@/lib/music/types';

interface SectionAnalysisProps {
  section: StandardSection;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export function SectionAnalysis({
  section,
  isExpanded: controlledExpanded,
  onToggle,
}: SectionAnalysisProps) {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const isExpanded = controlledExpanded ?? internalExpanded;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalExpanded((prev) => !prev);
    }
  };

  const { analysis } = section;

  // Skip rendering if this section has no analysis data
  if (!analysis) return null;

  return (
    <div className="rounded-lg border border-neutral-700 bg-neutral-800/50">
      {/* Header */}
      <button
        type="button"
        onClick={handleToggle}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-amber-500/20 text-xs font-bold text-amber-400">
            {section.name}
          </span>
          <span className="font-semibold text-neutral-100">{section.label}</span>
        </div>
        <span
          className={`text-neutral-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          &#9662;
        </span>
      </button>

      {/* Collapsible body */}
      {isExpanded && (
        <div className="space-y-4 border-t border-neutral-700 px-4 py-4">
          {/* Summary */}
          <div>
            <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
              Summary
            </h4>
            <p className="text-sm text-neutral-200">{analysis.summary}</p>
          </div>

          {/* Insight */}
          <div>
            <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
              Harmonic Insight
            </h4>
            <p className="text-sm text-neutral-300">{analysis.insight}</p>
          </div>

          {/* Scale Guide */}
          <div>
            <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
              Scale Guide
            </h4>
            <ul className="space-y-1">
              {analysis.scaleGuide.map((guide, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                  <span className="mt-0.5 text-amber-500" aria-hidden="true">&#9835;</span>
                  <span className="font-mono text-xs">{guide}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Tips */}
          <div>
            <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
              Practice Tips
            </h4>
            <ul className="space-y-1">
              {analysis.practiceTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
