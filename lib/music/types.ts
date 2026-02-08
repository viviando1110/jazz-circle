// lib/music/types.ts
// SHARED TYPES — The contract between all modules.
// Build this FIRST. Every agent depends on these types.

/* ═══════════════════════════════════════════════════════════
   Core Music Theory Types
   ═══════════════════════════════════════════════════════════ */

/** Chromatic note name (sharps use #, flats use b) */
export type NoteName =
  | 'C' | 'Db' | 'D' | 'Eb' | 'E' | 'F'
  | 'Gb' | 'G' | 'Ab' | 'A' | 'Bb' | 'B';

/** Key quality */
export type KeyQuality = 'major' | 'minor';

/** A musical key (e.g., "C major", "G minor") */
export interface MusicalKey {
  root: NoteName;
  quality: KeyQuality;
  /** URL-friendly slug: "c-major", "g-minor" */
  slug: string;
  /** Display name: "C Major", "G Minor" */
  displayName: string;
  /** Number of sharps (+) or flats (-). C=0, G=1, F=-1, etc. */
  accidentals: number;
  /** Relative major/minor key root */
  relativeKey: NoteName;
}

/* ═══════════════════════════════════════════════════════════
   Chord Types
   ═══════════════════════════════════════════════════════════ */

/** Jazz chord quality */
export type ChordQuality =
  | 'maj7' | 'm7' | '7' | 'm7b5' | 'dim7'    // Basic 7ths
  | 'maj9' | '9' | 'm9' | 'maj13' | '13'       // Extensions
  | 'm11' | 'maj7#11' | '7#9' | '7b9' | '7alt' // Altered
  | '6' | 'm6' | '6/9' | 'sus4' | '7sus4'      // Other
  | 'aug' | 'augmaj7';                           // Augmented

/** A chord in a diatonic context */
export interface DiatonicChord {
  /** Root note name */
  root: NoteName;
  /** Jazz quality (e.g., "maj7", "m7", "7") */
  quality: ChordQuality;
  /** Full display name (e.g., "Cmaj7", "Dm7") */
  name: string;
  /** Roman numeral (e.g., "Imaj7", "iim7", "V7") */
  roman: string;
  /** Scale degree 1-7 */
  degree: number;
  /** Semitone intervals from root (e.g., [0, 4, 7, 11] for maj7) */
  intervals: number[];
}

/** Chord with voicing information (for piano display) */
export interface ChordVoicing {
  root: NoteName;
  quality: ChordQuality;
  /** MIDI note numbers for the voicing */
  midiNotes: number[];
  /** Note names in the voicing */
  noteNames: NoteName[];
}

/* ═══════════════════════════════════════════════════════════
   Scale Types
   ═══════════════════════════════════════════════════════════ */

export type ScaleName =
  | 'Ionian' | 'Dorian' | 'Phrygian' | 'Lydian'
  | 'Mixolydian' | 'Aeolian' | 'Locrian'
  | 'Melodic Minor' | 'Harmonic Minor'
  | 'Lydian Dominant' | 'Altered' | 'Locrian #2'
  | 'Whole-Half Diminished' | 'Half-Whole Diminished'
  | 'Whole Tone' | 'Blues' | 'Bebop Dominant'
  | 'Pentatonic Major' | 'Pentatonic Minor';

export interface Scale {
  name: ScaleName;
  /** Semitone intervals from root */
  intervals: number[];
  /** Which chord qualities this scale works over */
  worksOver: ChordQuality[];
  /** Brief description for the UI */
  description: string;
}

/** Scale suggestion for a specific chord */
export interface ScaleSuggestion {
  scale: ScaleName;
  /** "Primary" = most common, "Alternative" = more advanced */
  priority: 'primary' | 'alternative';
  /** Tip for the player */
  tip?: string;
}

/* ═══════════════════════════════════════════════════════════
   Progression Types
   ═══════════════════════════════════════════════════════════ */

export interface ProgressionTemplate {
  /** Unique ID */
  id: string;
  /** Display name (e.g., "ii – V – I") */
  name: string;
  /** Scale degrees (0-indexed: 0=I, 1=ii, 2=iii, etc.) */
  degrees: number[];
  /** Description */
  description: string;
  /** Bar count label */
  bars: string;
  /** Category for grouping */
  category: 'essential' | 'turnaround' | 'blues' | 'modal' | 'advanced';
}

/** A progression rendered in a specific key */
export interface RenderedProgression {
  template: ProgressionTemplate;
  key: MusicalKey;
  chords: DiatonicChord[];
}

/* ═══════════════════════════════════════════════════════════
   Standard (Real Book) Types
   ═══════════════════════════════════════════════════════════ */

export interface StandardBar {
  bar: number;
  chords: {
    symbol: string;
    beats: number;
  }[];
}

export interface SectionAnalysis {
  summary: string;
  insight: string;
  scaleGuide: string[];
  practiceTips: string[];
}

export interface StandardSection {
  name: string;
  label: string;
  bars: StandardBar[];
  analysis: SectionAnalysis;
}

export interface Standard {
  title: string;
  slug: string;
  composer: string;
  year: number;
  form: string;
  defaultKey: string;
  alternateKey: string;
  tempo: { slow: number; medium: number; fast: number };
  timeSignature: string;
  totalBars: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  description: string;
  sections: StandardSection[];
}

/* ═══════════════════════════════════════════════════════════
   Audio Engine Types (Provider Pattern)
   ═══════════════════════════════════════════════════════════ */

export interface AudioEngine {
  /** Initialize the audio context (must be called on user gesture) */
  init(): Promise<void>;
  /** Play a single chord */
  playChord(notes: number[], duration?: number): Promise<void>;
  /** Play a sequence of chords at a given BPM */
  playProgression(
    chords: { notes: number[]; durationBeats: number }[],
    bpm: number,
    onChordChange?: (index: number) => void
  ): Promise<void>;
  /** Stop all playback */
  stop(): void;
  /** Whether the audio engine is initialized and ready */
  isReady: boolean;
}

/* ═══════════════════════════════════════════════════════════
   UI State Types
   ═══════════════════════════════════════════════════════════ */

export interface KeySelectionState {
  selectedKey: MusicalKey | null;
  activeChord: DiatonicChord | null;
  hoveredWedge: string | null;
  showExtensions: boolean;
}

/* ═══════════════════════════════════════════════════════════
   SEO Types
   ═══════════════════════════════════════════════════════════ */

export interface PageMeta {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
}

/* ═══════════════════════════════════════════════════════════
   Extension Mapping Types
   ═══════════════════════════════════════════════════════════ */

export interface ChordExtensions {
  quality: ChordQuality;
  extensions: string[];
}

/** Maps a chord quality to its common jazz extensions */
export type ExtensionMap = Record<string, string[]>;
