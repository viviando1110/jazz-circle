'use client';

import { useEffect, useRef, useState } from 'react';

interface AdSlotProps {
  slotId: string;
  format: 'horizontal' | 'rectangle';
}

export default function AdSlot({ slotId, format }: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const heightClass = format === 'horizontal' ? 'h-[90px]' : 'h-[250px]';

  return (
    <div
      ref={containerRef}
      className={`w-full ${heightClass} flex items-center justify-center bg-[var(--surface)] border border-[var(--border)] rounded-lg text-xs text-[var(--cream-dim)]`}
      data-ad-slot={slotId}
    >
      Ad
    </div>
  );
}
