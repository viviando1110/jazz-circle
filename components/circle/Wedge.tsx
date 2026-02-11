'use client';

import { describeWedge, textPosition } from '@/lib/utils';

interface WedgeProps {
  label: string;
  isSelected: boolean;
  isHovered: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  ring: 'major' | 'minor' | 'dim';
  startAngle: number;
  endAngle: number;
  innerRadius: number;
  outerRadius: number;
  cx: number;
  cy: number;
}

const RING_COLORS: Record<string, { base: string; hover: string; selected: string }> = {
  major: { base: 'var(--ring-major)', hover: 'var(--ring-major-hover)', selected: 'var(--ring-major-selected)' },
  minor: { base: 'var(--ring-minor)', hover: 'var(--ring-minor-hover)', selected: 'var(--ring-minor-selected)' },
  dim:   { base: 'var(--ring-dim)', hover: 'var(--ring-dim-hover)', selected: 'var(--ring-dim-selected)' },
};

export default function Wedge({
  label,
  isSelected,
  isHovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ring,
  startAngle,
  endAngle,
  innerRadius,
  outerRadius,
  cx,
  cy,
}: WedgeProps) {
  const colors = RING_COLORS[ring];
  const midAngle = (startAngle + endAngle) / 2;
  const labelR = (innerRadius + outerRadius) / 2;
  const pos = textPosition(cx, cy, labelR, midAngle);

  let fill = colors.base;
  if (isSelected) fill = colors.selected;
  else if (isHovered) fill = colors.hover;

  const path = describeWedge(cx, cy, innerRadius, outerRadius, startAngle, endAngle);

  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={`${label} ${ring}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
      style={{ cursor: 'pointer' }}
    >
      <path
        d={path}
        fill={fill}
        stroke="var(--bg)"
        strokeWidth={1.5}
        style={{
          transition: 'fill 200ms ease',
          filter: isSelected ? 'drop-shadow(0 0 6px rgba(200,149,108,0.5))' : 'none',
        }}
      />
      <text
        x={pos.x}
        y={pos.y}
        textAnchor="middle"
        dominantBaseline="central"
        fill={isSelected ? 'var(--bg)' : 'var(--cream)'}
        fontSize={ring === 'dim' ? 10 : ring === 'minor' ? 12 : 14}
        fontWeight={isSelected ? 700 : 500}
        style={{
          pointerEvents: 'none',
          transition: 'fill 200ms ease',
        }}
      >
        {label}
      </text>
    </g>
  );
}
