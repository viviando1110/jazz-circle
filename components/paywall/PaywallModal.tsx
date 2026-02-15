'use client';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTrial: () => void;
  onSelectMonthly: () => void;
  onSelectAnnual: () => void;
}

export function PaywallModal({
  isOpen,
  onClose,
  onStartTrial,
  onSelectMonthly,
  onSelectAnnual,
}: PaywallModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal content */}
      <div className="relative w-full max-w-md rounded-lg bg-[var(--card)] p-6 shadow-xl">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-[var(--cream-dim)] hover:text-[var(--cream)] transition-colors"
          aria-label="Close"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--cream)] pr-8">
            Unlock 102+ Jazz Standards
          </h2>
          <p className="text-[var(--cream-dim)] text-sm leading-relaxed">
            Get instant access to the complete collection of jazz standards with chord
            changes, harmonic analysis, and interactive practice tools. Start your free
            trial today.
          </p>

          {/* Buttons */}
          <div className="space-y-3 pt-2">
            {/* Trial button - prominent */}
            <button
              type="button"
              onClick={onStartTrial}
              className="w-full rounded-lg bg-amber-500 px-6 py-3 font-semibold text-neutral-900 hover:bg-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              Start 7-Day Free Trial
            </button>

            {/* Monthly button */}
            <button
              type="button"
              onClick={onSelectMonthly}
              className="w-full rounded-lg border-2 border-[var(--border)] px-6 py-3 font-semibold text-[var(--cream)] hover:border-[var(--gold)] hover:bg-[var(--card-hi)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50"
            >
              $4.99/month
            </button>

            {/* Annual button with badge */}
            <button
              type="button"
              onClick={onSelectAnnual}
              className="w-full rounded-lg border-2 border-[var(--border)] px-6 py-3 font-semibold text-[var(--cream)] hover:border-[var(--gold)] hover:bg-[var(--card-hi)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 relative"
            >
              <span>$49.99/year</span>
              <span className="ml-2 rounded bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-400">
                Save 17%
              </span>
            </button>
          </div>

          {/* Restore purchases link */}
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => {
                // Placeholder - will be implemented later
                console.log('Restore purchases clicked');
              }}
              className="text-xs text-neutral-400 hover:text-neutral-300 transition-colors underline underline-offset-2"
            >
              Restore Purchases
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
