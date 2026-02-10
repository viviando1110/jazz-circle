'use client';

interface MetronomeDisplayProps {
  beatsPerBar: number;
  currentBeat: number; // 0-indexed, -1 when not playing
  isCountingIn: boolean;
}

export default function MetronomeDisplay({
  beatsPerBar,
  currentBeat,
  isCountingIn,
}: MetronomeDisplayProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {isCountingIn && (
        <span className="text-xs font-mono text-[var(--gold)] uppercase tracking-wider">
          Count-in
        </span>
      )}
      <div className="flex items-center gap-3" role="status" aria-label="Beat indicator">
        {Array.from({ length: beatsPerBar }, (_, i) => {
          const isActive = i === currentBeat;
          return (
            <span
              key={i}
              className={`
                rounded-full border-2 motion-safe:transition-all motion-safe:duration-150
                ${isActive
                  ? 'w-4 h-4 bg-[var(--gold)] border-[var(--gold)]'
                  : 'w-3 h-3 bg-transparent border-[var(--border)]'
                }
              `}
              aria-hidden="true"
            />
          );
        })}
        <span className="sr-only">
          {currentBeat >= 0 ? `Beat ${currentBeat + 1} of ${beatsPerBar}` : 'Stopped'}
        </span>
      </div>
    </div>
  );
}
