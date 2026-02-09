'use client';

interface TransposeToggleProps {
  activeKey: string;
  onChange: (key: string) => void;
}

const KEY_OPTIONS = [
  { value: 'gm', label: 'G Minor (Real Book)' },
  { value: 'em', label: 'E Minor (Popular)' },
] as const;

export function TransposeToggle({ activeKey, onChange }: TransposeToggleProps) {
  return (
    <div className="flex gap-1 rounded-lg bg-neutral-800 p-1" role="group" aria-label="Key selection">
      {KEY_OPTIONS.map((opt) => {
        const isActive = activeKey === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`
              rounded-md px-3 py-1.5 text-sm font-medium transition-colors
              ${isActive
                ? 'bg-amber-500/20 text-amber-400'
                : 'text-neutral-400 hover:text-neutral-200'
              }
            `}
            aria-pressed={isActive}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
