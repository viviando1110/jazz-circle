import type { Metadata } from 'next';
import { generateProgressionsPageMeta } from '@/lib/seo';
import ProgressionsPageClient from '@/components/progressions/ProgressionsPageClient';

export const metadata: Metadata = generateProgressionsPageMeta();

export default function ProgressionsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-[var(--gold)] sm:text-4xl mb-2">
          Common Jazz Progressions
        </h1>
        <p className="text-sm text-[var(--cream-dim)]">
          Learn the essential chord progressions every jazz musician should know.
          Select a key to transpose all progressions, then click to play them back.
        </p>
      </header>

      <ProgressionsPageClient />

      {/* SEO content */}
      <section className="mt-16 space-y-4 text-sm text-[var(--cream-dim)] max-w-2xl">
        <h2 className="text-lg font-semibold text-[var(--cream)]">
          About Jazz Progressions
        </h2>
        <p>
          Jazz harmony revolves around a handful of fundamental chord progressions.
          The ii-V-I is the most important: it appears in virtually every jazz standard
          and forms the basis of jazz improvisation. Turnarounds like I-vi-ii-V create
          smooth cyclical harmony, while the jazz blues adds sophistication to the
          classic 12-bar form.
        </p>
        <p>
          Practice these progressions in all 12 keys to build fluency across the entire
          keyboard. Start with ii-V-I, then add turnarounds and blues forms as you
          become comfortable.
        </p>
      </section>
    </div>
  );
}
