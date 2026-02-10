# Scratchpad — Jazz Circle

## 2026-02-10 — Phase 3: Practice Tools & Melody Generation

### Wave 1 — Foundation (complete)
- Added Phase 3 types to `lib/music/types.ts`: MelodyNote, VoicingType, LickStyle, MelodyOptions, PracticeConfig
- Extended AudioEngine with optional `playNote` and `playClick` methods
- Created `lib/music/voicings.ts` — voice leading, rootless/shell/drop voicings
- Created `lib/music/melody.ts` — practice melody + lick generator (bebop/blues/modal)
- Created `lib/music/metronome.ts` — pure timing utilities
- Extended both audio engines (sampled + synth) with playNote + MembraneSynth clicks
- Created `hooks/usePracticeMode.ts` — metronome + count-in + loop + chord playback
- Enhanced PianoKeyboard with `midiNotes` prop for octave-specific MIDI highlighting
- **97 new tests** (voicings: 47, melody: 38, metronome: 12), all passing

### Wave 2 — UI Components (complete)
- Created 7 new components in `components/practice/`:
  - MetronomeDisplay, ScaleGuide, PracticeMode, VoiceLeadingVisualizer, VoicingLibrary, MelodyDisplay, LickGenerator
- Created `hooks/useMelodyPlayback.ts` for playing MelodyNote sequences
- Created 3 new pages: /practice, /voicings, /practice/melody
- Updated Header navigation with Practice + Voicings links
- Updated sitemap.xml

### Voice Leading Algorithm Fix
- ❌ Initial centroid-based approach had >40 semitone movement for ii-V-I
- ✅ Fixed with permutation search: assigns target notes to voice slots minimizing total movement
- Key insight: result array must be indexed by CURRENT voice slot, not target note index
- Permutation brute-force is fine for n<=6 (720 permutations max, typical jazz chords 4-5 notes)

### Wave 3 — Song Practice Integration (complete)
- Extracted `parseForVoicing` from `StandardPageClient.tsx` to `lib/music/parse-chord.ts` (shared utility)
- Created `SongPracticeToolbar` — collapsible 3-tab toolbar (Improvise/Voice Leading/Licks) for song pages
- Adapted `VoiceLeadingVisualizer` with optional `songChords` prop (hides key/preset selectors in song mode)
- Adapted `LickGenerator` with `initialRoot`/`initialQuality` props (syncs from song playback, user can override)
- Wired into `StandardPageClient.tsx` — toolbar appears below PlaybackControls in sticky area
- ScaleGuide updates reactively as `currentChordIndex` changes during playback
- **13 new tests** for parse-chord utility

### Stats
- 144 static pages, 294 tests (was 281), zero type errors
- Build passes, all pages SSG

---

## 2026-02-09 — Bug Fix Session (Bugs #1-4)

### Corrupted Dev Server Cache — FALSE REGRESSION

**What happened:** After editing `AudioProvider.tsx` (removing the window gesture listener useEffect), the Next.js dev server's hot-reload cache (`.next/` directory) became corrupted. The user saw:
- All CSS/Tailwind styles missing (white background, default fonts)
- Pages "out of ratio" (no responsive layout)
- Tone.js module not found error on song pages

**Root cause:** NOT a code bug. The `.next/server/` and `.next/static/` caches had stale webpack chunks. The `next build` output was always clean (41 pages, zero errors).

**Fix:** `rm -rf .next && next dev` — clearing the cache and restarting the dev server resolved everything.

**Why we didn't catch it:** No E2E regression tests existed for basic theme/layout integrity during navigation. Unit tests (`vitest`) and type checking (`tsc --noEmit`) don't cover CSS loading or hydration.

**Rule added:**
- After ANY changes to layout-level components (AudioProvider, layout.tsx, Header, Footer), ALWAYS clear `.next` cache and restart the dev server before testing
- ALWAYS run navigation regression E2E tests after changes to providers/layout
- Added `e2e/navigation-regression.spec.ts` with 5 tests covering theme persistence, layout integrity, console errors, circle click, and audio cleanup

---

### Bug #1: Circle Click Does Nothing on First Load

**Root cause:** Two issues:
1. `role="img"` on the SVG told browsers it was a non-interactive image, potentially blocking child element event handlers
2. The window-level `click` gesture listener in AudioProvider was redundant and could interfere with React's event handling

**Fix:**
- Changed `role="img"` to `role="application"` on the SVG
- Removed the window gesture listener from AudioProvider
- Made `init()` return the engine directly so `useAudio` can use it without waiting for a context re-render
- Updated `useAudio` with `engine ?? await init()` pattern to handle the first-play stale closure case

**Lesson:** `role="img"` should never be used on interactive SVG containers. Use `role="application"` or no role at all.

---

### Bug #2: Bridge Text Overlaps With Scores

**Root cause:** `SECTION_LABEL_OFFSET = -30` placed section labels too close to the previous section's stave. No vertical gap between sections.

**Fix:** Added `SECTION_GAP = 30` for inter-section spacing, changed `SECTION_LABEL_OFFSET` to `-10`, and accumulated gap in Y position calculations.

---

### Bug #3: Audio Keeps Playing on Navigation

**Root cause:** `usePlayback` had no cleanup on unmount. When navigating away from a page with active playback, the audio continued.

**Fix:** Added `useEffect` cleanup with a ref-based `stop()` call:
```tsx
const stopRef = useRef<() => void>(() => {});
stopRef.current = stop;
useEffect(() => () => stopRef.current(), []);
```

**Lesson:** Any hook that starts async processes (audio, timers, network) MUST have cleanup on unmount. Use refs to avoid stale closure issues in cleanup functions.

---

### Bug #4: Contact Page

Created `/contact` with form (mailto to lovco.contact@gmail.com). Lov Co. LLC is the legal entity; "Jazz Circle" remains the brand.

---

### Audio Provider Architecture — Stale Closure Insight

The `useAudio` hook captures `engine` from context. On the first play, `engine` is `null` in the closure because:
1. Engine is created in a `useEffect` → stored in a ref (no re-render)
2. Context still has `engine: null` until `setIsReady(true)` triggers re-render
3. But `setIsReady(true)` happens inside `init()`, which is async
4. By the time `init()` resolves, the calling function still holds the old closure

**Solution:** `init()` returns the engine directly, and `useAudio` uses `engine ?? await init()`. This bypasses the stale closure entirely.
