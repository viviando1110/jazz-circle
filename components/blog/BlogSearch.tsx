'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { BlogPost, BlogCategory } from '@/lib/music/blog/types';
import { CATEGORY_LABELS } from '@/lib/music/blog/types';

interface BlogSearchProps {
  posts: BlogPost[];
}

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  theory: 'bg-[var(--purple)]/20 text-[var(--purple)]',
  improv: 'bg-[var(--gold)]/20 text-[var(--gold)]',
  ensemble: 'bg-[var(--green)]/20 text-[var(--green)]',
  bass: 'bg-[var(--blue)]/20 text-[var(--blue)]',
  drums: 'bg-[var(--rose)]/20 text-[var(--rose)]',
  guitar: 'bg-[var(--amber)]/20 text-[var(--amber)]',
  practice: 'bg-[var(--cream-dim)]/20 text-[var(--cream-dim)]',
};

const ALL_CATEGORIES: BlogCategory[] = [
  'theory',
  'improv',
  'ensemble',
  'bass',
  'drums',
  'guitar',
  'practice',
];

export default function BlogSearch({ posts }: BlogSearchProps) {
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | BlogCategory>(
    'all',
  );

  const filtered = useMemo(() => {
    let result = posts;

    if (categoryFilter !== 'all') {
      result = result.filter((p) => p.category === categoryFilter);
    }

    const q = query.trim().toLowerCase();
    if (q) {
      result = result.filter((p) => {
        const haystack = [
          p.title,
          p.subtitle,
          p.excerpt,
          ...p.tags,
        ]
          .join(' ')
          .toLowerCase();
        return haystack.includes(q);
      });
    }

    return result;
  }, [posts, query, categoryFilter]);

  return (
    <>
      {/* Search + filters */}
      <div className="mb-8 space-y-4">
        {/* Search input */}
        <div className="relative">
          {/* Magnifying glass icon */}
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--cream-dim)]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts..."
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 pl-10 text-sm text-[var(--cream)] placeholder:text-[var(--cream-dim)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
          />
        </div>

        {/* Category filter buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              categoryFilter === 'all'
                ? 'border-[var(--gold)]/40 bg-[var(--gold)]/20 text-[var(--gold)]'
                : 'border-[var(--border)] bg-[var(--surface)] text-[var(--cream-dim)] hover:text-[var(--cream)]'
            }`}
          >
            All
          </button>
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setCategoryFilter(categoryFilter === cat ? 'all' : cat)
              }
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                categoryFilter === cat
                  ? `${CATEGORY_COLORS[cat]} border-current/40`
                  : 'border-[var(--border)] bg-[var(--surface)] text-[var(--cream-dim)] hover:text-[var(--cream)]'
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-[var(--cream-dim)]">
          {filtered.length} {filtered.length === 1 ? 'post' : 'posts'}
          {query.trim() && (
            <span>
              {' '}
              matching &ldquo;{query.trim()}&rdquo;
            </span>
          )}
        </p>
      </div>

      {/* Post grid */}
      {filtered.length === 0 ? (
        <p className="text-[var(--cream-dim)]">
          No posts found. Try a different search or category.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((post) => (
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
                Read more &rarr;
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
