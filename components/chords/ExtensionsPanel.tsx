'use client';

import type { ChordQuality } from '@/lib/music/types';
import { EXTENSIONS_MAP } from '@/lib/music/chords';

interface ExtensionsPanelProps {
  quality: ChordQuality;
}

export default function ExtensionsPanel({ quality }: ExtensionsPanelProps) {
  const extensions = EXTENSIONS_MAP[quality] ?? [];

  if (extensions.length === 0) {
    return (
      <div className="text-sm text-[var(--cream-muted)]">
        No common extensions for {quality} chords.
      </div>
    );
  }

  return (
    <div>
      <h4 className="text-xs font-semibold text-[var(--cream-muted)] uppercase tracking-wider mb-2">
        Available Extensions ({quality})
      </h4>
      <div className="flex flex-wrap gap-2">
        {extensions.map((ext) => (
          <span
            key={ext}
            className="text-sm font-mono px-2 py-1 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--cream)]"
          >
            {ext}
          </span>
        ))}
      </div>
    </div>
  );
}
