'use client';

import type { MusicalKey } from '@/lib/music/types';
import { getDiatonicChords } from '@/lib/music/chords';
import { chordToVexKeys } from '@/lib/music/vexflow-utils';
import StaffNotation from '@/components/notation/StaffNotation';

interface DiatonicStaffDisplayProps {
  musicalKey: MusicalKey;
}

export default function DiatonicStaffDisplay({ musicalKey }: DiatonicStaffDisplayProps) {
  const diatonicChords = getDiatonicChords(musicalKey);

  const chords = diatonicChords.map((chord) => ({
    symbol: chord.name,
    keys: chordToVexKeys(chord.root, chord.quality),
    beats: 1,
  }));

  return <StaffNotation chords={chords} />;
}
