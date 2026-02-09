'use client';

import { useCallback, useState } from 'react';
import type { MusicalKey, DiatonicChord } from '@/lib/music/types';

export interface KeySelectionActions {
  selectedKey: MusicalKey | null;
  activeChord: DiatonicChord | null;
  hoveredWedge: string | null;
  showExtensions: boolean;
  selectKey: (key: MusicalKey) => void;
  selectChord: (chord: DiatonicChord | null) => void;
  setHoveredWedge: (id: string | null) => void;
  toggleExtensions: () => void;
  clearSelection: () => void;
}

export function useKeySelection(): KeySelectionActions {
  const [selectedKey, setSelectedKey] = useState<MusicalKey | null>(null);
  const [activeChord, setActiveChord] = useState<DiatonicChord | null>(null);
  const [hoveredWedge, setHoveredWedge] = useState<string | null>(null);
  const [showExtensions, setShowExtensions] = useState(false);

  const selectKey = useCallback((key: MusicalKey) => {
    setSelectedKey(key);
    setActiveChord(null);
  }, []);

  const selectChord = useCallback((chord: DiatonicChord | null) => {
    setActiveChord(chord);
  }, []);

  const toggleExtensions = useCallback(() => {
    setShowExtensions((prev) => !prev);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedKey(null);
    setActiveChord(null);
    setHoveredWedge(null);
    setShowExtensions(false);
  }, []);

  return {
    selectedKey,
    activeChord,
    hoveredWedge,
    showExtensions,
    selectKey,
    selectChord,
    setHoveredWedge,
    toggleExtensions,
    clearSelection,
  };
}
