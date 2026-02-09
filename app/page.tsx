import type { Metadata } from 'next';
import { generateHomeMeta } from '@/lib/seo';
import HomePageClient from '@/components/home/HomePageClient';

export const metadata: Metadata = generateHomeMeta();

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero */}
      <header className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--gold)] mb-3">
          Jazz Circle of Fifths
        </h1>
        <p className="text-base sm:text-lg text-[var(--cream-dim)] max-w-2xl mx-auto">
          Explore jazz harmony interactively. Select a key to see diatonic 7th chords,
          scale suggestions, voicings, and common progressions.
        </p>
      </header>

      {/* Interactive content */}
      <HomePageClient />

      {/* SEO content */}
      <section className="mt-16 space-y-4 text-sm text-[var(--cream-dim)] max-w-2xl mx-auto">
        <h2 className="text-lg font-semibold text-[var(--cream)]">
          What is the Circle of Fifths?
        </h2>
        <p>
          The Circle of Fifths is the foundational map of Western music harmony. It arranges
          all 12 major and minor keys by the interval of a perfect fifth, revealing the
          relationships between keys, chords, and scales that every jazz musician needs
          to internalize.
        </p>
        <p>
          In jazz, the Circle of Fifths is essential for understanding ii-V-I progressions,
          turnarounds, and key relationships. The most common chord movement in jazz — down
          a fifth — follows the circle counterclockwise: Dm7 to G7 to Cmaj7.
        </p>
        <h2 className="text-lg font-semibold text-[var(--cream)]">
          How to Use This Tool
        </h2>
        <p>
          Click any key on the circle to see its diatonic 7th chords. Then click a chord
          to view its chord tones, intervals, scale suggestions, and piano keyboard
          visualization. Use this to practice voicings, learn new keys, and understand
          jazz harmony from the ground up.
        </p>
      </section>
    </div>
  );
}
