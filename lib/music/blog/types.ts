// lib/music/blog/types.ts
// Blog post data types — all posts are pure TypeScript data, zero dependencies.

export type BlogCategory =
  | 'theory'
  | 'improv'
  | 'ensemble'
  | 'bass'
  | 'drums'
  | 'guitar'
  | 'practice';

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  theory: 'Music Theory',
  improv: 'Improvisation',
  ensemble: 'Ensemble & Jamming',
  bass: 'Bass',
  drums: 'Drums',
  guitar: 'Guitar',
  practice: 'Practice Tips',
};

/**
 * A single content block inside a blog post.
 * Discriminated union — each renderer handles the `type` field.
 */
export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'pullquote'; text: string; attribution?: string }
  | { type: 'standard-ref'; slug: string; label: string; note: string }
  | { type: 'tip'; label?: string; text: string }
  | { type: 'list'; items: string[] };

export interface FurtherReadingLink {
  title: string;
  url: string;
  description?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  publishedAt: string; // 'YYYY-MM-DD'
  readingTime: number; // minutes
  category: BlogCategory;
  tags: string[];
  /** 2–3 sentences shown on the listing card */
  excerpt: string;
  content: BlogBlock[];
  /** Slugs from lib/music/standards/ */
  relatedStandards: string[];
  furtherReading: FurtherReadingLink[];
}
