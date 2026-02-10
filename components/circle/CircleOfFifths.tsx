'use client';

import { CIRCLE_OF_FIFTHS_ORDER, KEYS_MAJOR, KEYS_MINOR } from '@/lib/music/keys';
import type { MusicalKey } from '@/lib/music/types';
import Wedge from '@/components/circle/Wedge';
import CircleCenter from '@/components/circle/CircleCenter';

interface CircleOfFifthsProps {
  selectedKey: MusicalKey | null;
  hoveredWedge: string | null;
  onSelectKey: (key: MusicalKey) => void;
  onHoverWedge: (id: string | null) => void;
  compact?: boolean;
}

const CX = 250;
const CY = 250;
const WEDGE_ANGLE = 30;
const OUTER_R = 240;
const MID_OUTER_R = 170;
const MID_INNER_R = 110;
const INNER_R = 60;
const CENTER_R = 55;

const DIM_SEMITONES = 11;

const NOTE_INDEX: Record<string, number> = {
  C: 0, Db: 1, D: 2, Eb: 3, E: 4, F: 5,
  Gb: 6, G: 7, Ab: 8, A: 9, Bb: 10, B: 11,
};
const CHROMATIC = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];

function dimRoot(majorRoot: string): string {
  return CHROMATIC[(NOTE_INDEX[majorRoot] + DIM_SEMITONES) % 12];
}

export default function CircleOfFifths({
  selectedKey,
  hoveredWedge,
  onSelectKey,
  onHoverWedge,
  compact = false,
}: CircleOfFifthsProps) {
  const minorByRelative = new Map<string, MusicalKey>();
  KEYS_MINOR.forEach((k) => minorByRelative.set(k.relativeKey, k));

  return (
    <div className={compact
      ? "w-full max-w-[200px] md:max-w-[300px] mx-auto"
      : "w-full max-w-[300px] md:max-w-[440px] mx-auto"
    }>
      <svg
        viewBox="0 0 500 500"
        width="100%"
        role="application"
        aria-label="Circle of Fifths — select a key"
      >
        {CIRCLE_OF_FIFTHS_ORDER.map((note, i) => {
          const startAngle = i * WEDGE_ANGLE - WEDGE_ANGLE / 2;
          const endAngle = startAngle + WEDGE_ANGLE;
          const majorKey = KEYS_MAJOR[i];
          const minorKey = minorByRelative.get(note);
          const dimNote = dimRoot(note);
          const majorId = `major-${note}`;
          const minorId = `minor-${minorKey?.root ?? note}`;
          const dimId = `dim-${dimNote}`;

          return (
            <g key={note}>
              <Wedge
                label={note}
                isSelected={selectedKey?.root === note && selectedKey.quality === 'major'}
                isHovered={hoveredWedge === majorId}
                onClick={() => onSelectKey(majorKey)}
                onMouseEnter={() => onHoverWedge(majorId)}
                onMouseLeave={() => onHoverWedge(null)}
                ring="major"
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={MID_OUTER_R}
                outerRadius={OUTER_R}
                cx={CX}
                cy={CY}
              />
              {minorKey && (
                <Wedge
                  label={minorKey.root}
                  isSelected={selectedKey?.root === minorKey.root && selectedKey.quality === 'minor'}
                  isHovered={hoveredWedge === minorId}
                  onClick={() => onSelectKey(minorKey)}
                  onMouseEnter={() => onHoverWedge(minorId)}
                  onMouseLeave={() => onHoverWedge(null)}
                  ring="minor"
                  startAngle={startAngle}
                  endAngle={endAngle}
                  innerRadius={MID_INNER_R}
                  outerRadius={MID_OUTER_R}
                  cx={CX}
                  cy={CY}
                />
              )}
              <Wedge
                label={`${dimNote}ø`}
                isSelected={false}
                isHovered={hoveredWedge === dimId}
                onClick={() => onSelectKey(majorKey)}
                onMouseEnter={() => onHoverWedge(dimId)}
                onMouseLeave={() => onHoverWedge(null)}
                ring="dim"
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={INNER_R}
                outerRadius={MID_INNER_R}
                cx={CX}
                cy={CY}
              />
            </g>
          );
        })}
        <CircleCenter
          selectedKey={selectedKey}
          cx={CX}
          cy={CY}
          radius={CENTER_R}
        />
      </svg>
    </div>
  );
}
