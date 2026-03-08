import type { Metadata } from 'next';
import { ALL_BLOG_POSTS } from '@/lib/music/blog';
import BlogSearch from '@/components/blog/BlogSearch';

export const metadata: Metadata = {
  title: 'Jazz Blog — Theory, Improv & More | Jazz Circle',
  description:
    'Practical, playful writing on jazz theory, improvisation, jam sessions, walking bass, swing drumming, and everything in between.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
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

      <BlogSearch posts={ALL_BLOG_POSTS} />
    </div>
  );
}
