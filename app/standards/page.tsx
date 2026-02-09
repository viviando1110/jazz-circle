import type { Metadata } from 'next';
import Link from 'next/link';
import { STANDARDS } from '@/lib/music/standards';

export const metadata: Metadata = {
  title: 'Jazz Songs — Chord Changes & Analysis',
  description:
    'Browse jazz songs with chord changes, harmonic analysis, scale guides, and interactive playback. Learn the harmony behind the most important jazz tunes.',
};

function difficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'beginner':
      return 'bg-[var(--green)]/20 text-[var(--green)]';
    case 'intermediate':
      return 'bg-[var(--gold)]/20 text-[var(--gold)]';
    case 'advanced':
      return 'bg-[var(--rose)]/20 text-[var(--rose)]';
    default:
      return 'bg-[var(--surface)] text-[var(--cream-dim)]';
  }
}

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

      <div className="grid gap-4 sm:grid-cols-2">
        {STANDARDS.map((standard) => (
          <Link
            key={standard.slug}
            href={`/standards/${standard.slug}`}
            className="block rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 hover:bg-[var(--card-hi)] transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h2 className="text-lg font-semibold text-[var(--cream)]">
                {standard.title}
              </h2>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded capitalize ${difficultyColor(standard.difficulty)}`}
              >
                {standard.difficulty}
              </span>
            </div>
            <p className="text-sm text-[var(--cream-dim)] mb-3">
              {standard.composer} ({standard.year}) &middot; {standard.form} &middot;{' '}
              {standard.totalBars} bars
            </p>
            <div className="flex flex-wrap gap-1.5">
              {standard.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded bg-[var(--surface)] text-[var(--cream-dim)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

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
