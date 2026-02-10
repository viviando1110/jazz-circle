import type { Metadata } from 'next';
import LickGenerator from '@/components/practice/LickGenerator';

export const metadata: Metadata = {
  title: 'Jazz Melody & Lick Generator — Jazz Circle',
  description:
    'Generate practice melodies and jazz licks over any chord. Bebop, blues, and modal styles with notation and audio playback.',
};

export default function MelodyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <header className="mb-8 space-y-3">
        <h1 className="font-serif text-3xl md:text-4xl text-[var(--cream)]">
          Melody &amp; Lick Generator
        </h1>
        <p className="font-sans text-[var(--cream-dim)] leading-relaxed max-w-2xl">
          Generate jazz licks over any chord quality. Choose a root, chord type,
          and style, then listen and read the notation. Use &ldquo;Another
          one&rdquo; for variations on the same chord.
        </p>
      </header>

      <LickGenerator />
    </main>
  );
}
