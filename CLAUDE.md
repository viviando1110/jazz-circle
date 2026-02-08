# CLAUDE.md — Jazz Circle of Fifths

> This file is the project-specific agent guide. Read tasks/todo.md for the full plan.
> Read tasks/lessons.md and tasks/scratchpad.md before every session.

---

## Project Context

Building an interactive jazz theory web app centered on the Circle of Fifths.
- **Owner:** A developer who plays piano and is learning jazz
- **Goal:** Ship MVP by Monday Feb 10, 2026 — both a learning tool and a monetized product
- **Stack:** Next.js 14 (App Router), TypeScript, Tailwind, Tone.js, Vercel
- **Monetization:** Google AdSense via SEO traffic (24 key pages + standards pages)

---

## Critical Constraints

### Copyright — HARD RULE
- ✅ Chord progressions (changes) — SAFE, not copyrightable
- ✅ Song titles — SAFE, not copyrightable
- ✅ Harmonic analysis ("this tune uses ii-V-I in bars 1-4") — SAFE
- ✅ Generic jazz patterns, scales, practice tips — SAFE
- ❌ Melodies — COPYRIGHTED, never reproduce
- ❌ Lyrics — COPYRIGHTED, never reproduce
- ❌ Real Book page scans — COPYRIGHTED, never reproduce

### Music Theory Accuracy — MUST BE CORRECT
The user is a musician. Wrong chord qualities, incorrect scale suggestions, or bad theory will destroy credibility. Double-check:
- Diatonic 7th chord qualities (Imaj7, iim7, iiim7, IVmaj7, V7, vim7, viiø7)
- Minor key diatonic chords
- Scale-chord relationships (Dorian over m7, Mixolydian over 7, etc.)
- Interval calculations in the theory engine

### Audio — MUST RESPECT BROWSER AUTOPLAY POLICY
- Tone.js / Web Audio ONLY initializes on user gesture (click/tap)
- Never autoplay audio on page load
- Always `await Tone.start()` on first user interaction

---

## Architecture Principles

1. **Components < 200 lines.** If it's longer, split it.
2. **Music theory engine is pure TypeScript.** No React, no DOM, no side effects. 100% testable.
3. **Audio engine uses provider pattern.** Components call `useAudio()`, never import Tone.js directly.
4. **SVG for the circle.** No Canvas, no D3. Hand-crafted paths + text for accessibility and SEO.
5. **SSG everything.** All pages use `generateStaticParams`. No SSR, no client-fetching of static data.
6. **One source of truth for music data.** Transpose programmatically, don't duplicate.

---

## File Organization Rules

- `lib/music/` — Pure functions. No React. Fully tested.
- `components/` — React components. Grouped by feature, not type.
- `app/` — Pages only. Minimal logic. Compose components.
- `hooks/` — Custom hooks. Thin wrappers over lib functions + React state.
- `__tests__/` — Mirror the source structure.
- `tasks/` — Project management docs (todo, scratchpad, lessons, notes).

---

## Testing Requirements

- `lib/music/*.ts` — Every exported function must have tests
- Test at minimum: all 12 major keys produce correct diatonic chords
- Test: transposition works correctly (Gm → Em for Autumn Leaves)
- Test: chord interval calculations are correct
- Test framework: Vitest + React Testing Library

---

## Style Guide

- Use Tailwind utility classes, avoid arbitrary values where possible
- CSS variables for the color palette (defined in globals.css)
- Fonts loaded via `next/font/google` — Playfair Display, DM Sans, DM Mono
- Dark theme only for MVP (light theme is Phase 2)
- Respect `prefers-reduced-motion` — disable animations when set
- Mobile-first responsive: base styles for mobile, `md:` for tablet, `lg:` for desktop

---

## Definition of Done (for any task)

1. TypeScript compiles with zero errors (strict mode)
2. No console.log left in production code
3. Tests pass (if applicable)
4. Responsive at 375px, 768px, 1024px, 1440px
5. Keyboard accessible (interactive elements focusable + Enter/Space to activate)
6. Lighthouse score > 90 on Performance + Accessibility
