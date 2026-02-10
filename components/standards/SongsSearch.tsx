'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { Standard } from '@/lib/music/types';

interface SongsSearchProps {
  standards: Standard[];
}

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

export function SongsSearch({ standards }: SongsSearchProps) {
  const [query, setQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return standards.filter((s) => {
      // Difficulty filter
      if (difficultyFilter !== 'all' && s.difficulty !== difficultyFilter) return false;
      // Text search
      if (!q) return true;
      return (
        s.title.toLowerCase().includes(q) ||
        s.composer.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q)) ||
        s.defaultKey.toLowerCase().includes(q)
      );
    });
  }, [standards, query, difficultyFilter]);

  return (
    <div>
      {/* Search + Filter controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, composer, key, or tag..."
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 pl-10 text-sm text-[var(--cream)] placeholder:text-[var(--cream-dim)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
            aria-label="Search songs"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--cream-dim)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="flex gap-2">
          {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setDifficultyFilter(level)}
              className={`rounded-lg px-3 py-2 text-xs font-medium capitalize transition-colors ${
                difficultyFilter === level
                  ? 'bg-[var(--gold)]/20 text-[var(--gold)] border border-[var(--gold)]/40'
                  : 'bg-[var(--surface)] text-[var(--cream-dim)] border border-[var(--border)] hover:text-[var(--cream)]'
              }`}
            >
              {level === 'all' ? 'All' : level}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-[var(--cream-dim)] mb-4">
        {filtered.length} {filtered.length === 1 ? 'song' : 'songs'}
        {query && ` matching "${query}"`}
      </p>

      {/* Song grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((standard) => (
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
                className={`text-xs font-medium px-2 py-0.5 rounded capitalize flex-shrink-0 ${difficultyColor(standard.difficulty)}`}
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

      {filtered.length === 0 && (
        <p className="text-center text-sm text-[var(--cream-dim)] py-12">
          No songs found. Try a different search term.
        </p>
      )}
    </div>
  );
}
