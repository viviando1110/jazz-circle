'use client';

import { useState, useCallback } from 'react';
import type { MusicalKey, RenderedProgression } from '@/lib/music/types';
import { KEYS_MAJOR, getKeyBySlug } from '@/lib/music/keys';
import { JAZZ_PROGRESSIONS, renderProgression } from '@/lib/music/progressions';
import { ProgressionList } from '@/components/progressions/ProgressionList';
import { ProgressionPlayer } from '@/components/progressions/ProgressionPlayer';

export default function ProgressionsPageClient() {
  const [keySlug, setKeySlug] = useState('c-major');
  const [activeProgression, setActiveProgression] = useState<RenderedProgression | null>(null);

  const selectedKey: MusicalKey = getKeyBySlug(keySlug) ?? KEYS_MAJOR[0];
  const progressions = JAZZ_PROGRESSIONS.map((t) => renderProgression(t, selectedKey));

  const handleProgressionClick = useCallback((prog: RenderedProgression) => {
    setActiveProgression((prev) =>
      prev?.template.id === prog.template.id ? null : prog,
    );
  }, []);

  return (
    <div className="space-y-6">
      {/* Key selector */}
      <div className="flex items-center gap-3">
        <label htmlFor="key-select" className="text-sm text-[var(--cream-dim)]">
          Key:
        </label>
        <select
          id="key-select"
          value={keySlug}
          onChange={(e) => {
            setKeySlug(e.target.value);
            setActiveProgression(null);
          }}
          className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-sm text-[var(--cream)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
        >
          {KEYS_MAJOR.map((k) => (
            <option key={k.slug} value={k.slug}>
              {k.displayName}
            </option>
          ))}
        </select>
      </div>

      {/* Progression list */}
      <ProgressionList
        progressions={progressions}
        onProgressionClick={handleProgressionClick}
      />

      {/* Player */}
      {activeProgression && (
        <div className="animate-fade-up">
          <ProgressionPlayer progression={activeProgression} />
        </div>
      )}
    </div>
  );
}
