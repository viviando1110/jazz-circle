import type { NoteName, ChordQuality } from '@/lib/music/types';
import { CHROMATIC } from '@/lib/constants';

/**
 * Parse a chord symbol into root (NoteName) and quality (ChordQuality).
 * Falls back to 'm7' if quality is unrecognized.
 */
export function parseForVoicing(symbol: string): { root: NoteName; quality: ChordQuality } {
  let root: NoteName;
  let qualityStr: string;

  // Try two-char root (e.g., Db, Eb, Gb, Ab, Bb)
  if (symbol.length >= 2 && CHROMATIC.includes(symbol.slice(0, 2) as NoteName)) {
    root = symbol.slice(0, 2) as NoteName;
    qualityStr = symbol.slice(2);
  } else {
    root = symbol.slice(0, 1) as NoteName;
    qualityStr = symbol.slice(1);
  }

  // Map common quality strings
  const QUALITY_MAP: Record<string, ChordQuality> = {
    'maj7': 'maj7', 'm7': 'm7', '7': '7', 'm7b5': 'm7b5', 'dim7': 'dim7',
    'maj9': 'maj9', '9': '9', 'm9': 'm9', 'sus4': 'sus4', '7sus4': '7sus4',
    '6': '6', 'm6': 'm6', '7alt': '7alt', '7b9': '7b9', '7#9': '7#9',
    'maj7#11': 'maj7#11', '13': '13', 'm11': 'm11', '6/9': '6/9',
    'aug': 'aug', 'augmaj7': 'augmaj7', 'maj13': 'maj13',
  };

  // Handle bare triads
  if (qualityStr === '') return { root, quality: 'maj7' };
  if (qualityStr === 'm') return { root, quality: 'm7' };

  const quality: ChordQuality = QUALITY_MAP[qualityStr] ?? 'm7';
  return { root, quality };
}
