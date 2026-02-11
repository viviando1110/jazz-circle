'use client';

import { useMIDI } from '@/hooks/useMIDI';

export default function MIDIStatus() {
  const { isSupported, isConnected, devices, requestAccess, error } = useMIDI();

  if (!isSupported) {
    return (
      <div className="flex items-center gap-2 text-xs text-[var(--cream-dim)]">
        <span className="w-2 h-2 rounded-full bg-[var(--cream-dim)] opacity-50" />
        MIDI requires Chrome
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[var(--cream-dim)]" />
        <button
          onClick={requestAccess}
          className="text-xs text-[var(--cream-dim)] hover:text-[var(--cream)] underline transition-colors"
        >
          Connect MIDI
        </button>
        {error && (
          <span className="text-xs text-[var(--rose)]">{error}</span>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-xs text-[var(--cream-dim)]">
      <span className="w-2 h-2 rounded-full bg-[var(--green)]" />
      {devices[0]?.name ?? 'MIDI Connected'}
      {devices.length > 1 && (
        <span className="text-[var(--cream-dim)]">+{devices.length - 1} more</span>
      )}
    </div>
  );
}
