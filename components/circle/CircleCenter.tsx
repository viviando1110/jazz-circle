'use client';

import type { MusicalKey } from '@/lib/music/types';

interface CircleCenterProps {
  selectedKey: MusicalKey | null;
  cx: number;
  cy: number;
  radius: number;
}

function accidentalLabel(n: number): string {
  if (n === 0) return 'No sharps or flats';
  if (n > 0) return `${n} sharp${n > 1 ? 's' : ''}`;
  const abs = Math.abs(n);
  return `${abs} flat${abs > 1 ? 's' : ''}`;
}

export default function CircleCenter({
  selectedKey,
  cx,
  cy,
  radius,
}: CircleCenterProps) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={radius} fill="var(--surface)" stroke="var(--border)" strokeWidth={1} />
      {selectedKey ? (
        <>
          <text
            x={cx}
            y={cy - 12}
            textAnchor="middle"
            dominantBaseline="central"
            fill="var(--cream)"
            fontSize={16}
            fontWeight={700}
          >
            {selectedKey.displayName}
          </text>
          <text
            x={cx}
            y={cy + 8}
            textAnchor="middle"
            dominantBaseline="central"
            fill="var(--cream-muted)"
            fontSize={10}
          >
            {accidentalLabel(selectedKey.accidentals)}
          </text>
          <text
            x={cx}
            y={cy + 22}
            textAnchor="middle"
            dominantBaseline="central"
            fill="var(--cream-muted)"
            fontSize={9}
          >
            Rel: {selectedKey.relativeKey} {selectedKey.quality === 'major' ? 'minor' : 'major'}
          </text>
        </>
      ) : (
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="central"
          fill="var(--cream-muted)"
          fontSize={12}
        >
          Select a key
        </text>
      )}
    </g>
  );
}
