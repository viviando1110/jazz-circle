import type { Metadata } from 'next';
import { STANDARDS } from '@/lib/music/standards';
import { SongsSearch } from '@/components/standards/SongsSearch';
import AdSlot from '@/components/ads/AdSlot';

export const metadata: Metadata = {
  title: 'Jazz Songs — Chord Changes & Analysis',
  description:
    'Browse jazz songs with chord changes, harmonic analysis, scale guides, and interactive playback. Learn the harmony behind the most important jazz tunes.',
  openGraph: {
    title: 'Jazz Songs — Chord Changes & Analysis',
    description:
      'Browse jazz songs with chord changes, harmonic analysis, scale guides, and interactive playback.',
    url: 'https://jazz-circle.com/standards',
    siteName: 'Jazz Circle',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jazz Songs — Chord Changes & Analysis',
    description:
      'Browse jazz songs with chord changes, harmonic analysis, and interactive playback.',
  },
};

export default function StandardsIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-[var(--gold)] sm:text-4xl mb-2">
          Jazz Songs
        </h1>
        <p className="text-sm text-[var(--cream-dim)]">
          Explore chord changes, harmonic analysis, and practice guidance for essential
          jazz songs.
        </p>
      </header>

      <SongsSearch standards={STANDARDS} />

      <AdSlot slot="placeholder" format="horizontal" />

      {/* SEO content */}
      <section className="mt-12 text-sm text-[var(--cream-dim)] max-w-2xl">
        <p>
          Each song includes chord changes, section-by-section harmonic analysis,
          scale suggestions for improvisation, and interactive playback with tempo control.
          Transpose between common keys and practice at your own pace.
        </p>
      </section>
    </div>
  );
}
