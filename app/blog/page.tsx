import type { Metadata } from 'next';
import Link from 'next/link';
import { ALL_BLOG_POSTS } from '@/lib/music/blog';
import { CATEGORY_LABELS } from '@/lib/music/blog/types';
import type { BlogCategory } from '@/lib/music/blog/types';

export const metadata: Metadata = {
  title: 'Jazz Blog — Theory, Improv & More | Jazz Circle',
  description:
    'Practical, playful writing on jazz theory, improvisation, jam sessions, walking bass, swing drumming, and everything in between.',
  alternates: { canonical: '/blog' },
};

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  theory: 'bg-[var(--purple)]/20 text-[var(--purple)]',
  improv: 'bg-[var(--gold)]/20 text-[var(--gold)]',
  ensemble: 'bg-[var(--green)]/20 text-[var(--green)]',
  bass: 'bg-[var(--blue)]/20 text-[var(--blue)]',
  drums: 'bg-[var(--rose)]/20 text-[var(--rose)]',
  guitar: 'bg-[var(--amber)]/20 text-[var(--amber)]',
  practice: 'bg-[var(--cream-dim)]/20 text-[var(--cream-dim)]',
};

export default function BlogPage() {
  const posts = ALL_BLOG_POSTS;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--gold)] mb-3">
          The Jazz Circle Blog
        </h1>
        <p className="text-[var(--cream-dim)] text-base sm:text-lg max-w-2xl">
          Jazz theory, improv, and what it means to play well with others. No textbook required.
        </p>
      </header>

      {/* Post grid */}
      {posts.length === 0 ? (
        <p className="text-[var(--cream-dim)]">Posts coming soon.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--gold)]/50 hover:bg-[var(--card-hi)] transition-colors"
            >
              {/* Category + reading time */}
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${CATEGORY_COLORS[post.category]}`}
                >
                  {CATEGORY_LABELS[post.category]}
                </span>
                <span className="text-xs text-[var(--cream-muted)]">
                  {post.readingTime} min read
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-serif font-bold text-[var(--cream)] group-hover:text-[var(--gold)] transition-colors mb-1 leading-snug">
                {post.title}
              </h2>

              {/* Subtitle */}
              <p className="text-xs text-[var(--cream-muted)] mb-3 italic">
                {post.subtitle}
              </p>

              {/* Excerpt */}
              <p className="text-sm text-[var(--cream-dim)] leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              {/* Read more */}
              <div className="mt-4 text-xs text-[var(--gold)] font-medium group-hover:underline">
                Read more →
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
