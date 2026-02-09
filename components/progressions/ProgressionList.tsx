'use client';

import type { RenderedProgression } from '@/lib/music/types';
import { ProgressionCard } from './ProgressionCard';

interface ProgressionListProps {
  progressions: RenderedProgression[];
  onProgressionClick?: (progression: RenderedProgression) => void;
}

export function ProgressionList({ progressions, onProgressionClick }: ProgressionListProps) {
  if (progressions.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {progressions.map((prog) => (
        <ProgressionCard
          key={prog.template.id}
          progression={prog}
          onPlay={onProgressionClick ? () => onProgressionClick(prog) : undefined}
        />
      ))}
    </div>
  );
}
