import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ALL_BLOG_POSTS, getBlogPost } from '@/lib/music/blog';
import { CATEGORY_LABELS } from '@/lib/music/blog/types';
import type { BlogBlock, BlogCategory } from '@/lib/music/blog/types';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return ALL_BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Jazz Circle Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
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

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function renderBlock(block: BlogBlock, idx: number): React.ReactNode {
  switch (block.type) {
    case 'p':
      return (
        <p key={idx} className="text-[var(--cream-dim)] leading-relaxed text-base">
          {block.text}
        </p>
      );

    case 'h2':
      return (
        <h2 key={idx} className="text-xl sm:text-2xl font-serif font-bold text-[var(--cream)] mt-2">
          {block.text}
        </h2>
      );

    case 'h3':
      return (
        <h3 key={idx} className="text-lg font-semibold text-[var(--cream)] mt-1">
          {block.text}
        </h3>
      );

    case 'pullquote':
      return (
        <blockquote
          key={idx}
          className="border-l-4 border-[var(--gold)] pl-5 py-1 my-2 bg-[var(--card)] rounded-r-lg"
        >
          <p className="text-[var(--cream)] italic text-lg leading-relaxed">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.attribution && (
            <cite className="block mt-2 text-sm text-[var(--cream-muted)] not-italic">
              — {block.attribution}
            </cite>
          )}
        </blockquote>
      );

    case 'standard-ref':
      return (
        <Link
          key={idx}
          href={`/standards/${block.slug}`}
          className="group flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 hover:border-[var(--gold)]/50 hover:bg-[var(--card-hi)] transition-colors"
        >
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--gold)]/15 flex items-center justify-center">
            <span className="text-[var(--gold)] text-sm">♩</span>
          </div>
          <div>
            <div className="text-[var(--gold)] font-semibold text-sm group-hover:underline">
              {block.label}
            </div>
            <div className="text-[var(--cream-dim)] text-xs mt-0.5 leading-relaxed">
              {block.note}
            </div>
          </div>
          <div className="ml-auto text-[var(--cream-muted)] text-xs self-center">
            View →
          </div>
        </Link>
      );

    case 'tip':
      return (
        <div
          key={idx}
          className="rounded-xl bg-[var(--green)]/10 border border-[var(--green)]/30 px-5 py-4"
        >
          {block.label && (
            <div className="text-[var(--green)] text-xs font-semibold uppercase tracking-wide mb-1">
              {block.label}
            </div>
          )}
          <p className="text-[var(--cream-dim)] text-sm leading-relaxed">{block.text}</p>
        </div>
      );

    case 'list':
      return (
        <ul key={idx} className="space-y-1.5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[var(--cream-dim)] text-base leading-relaxed">
              <span className="text-[var(--gold)] mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-[var(--cream-dim)] hover:text-[var(--cream)] mb-8 transition-colors"
      >
        ← Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${CATEGORY_COLORS[post.category]}`}
          >
            {CATEGORY_LABELS[post.category]}
          </span>
          <span className="text-xs text-[var(--cream-muted)]">{post.readingTime} min read</span>
          <span className="text-xs text-[var(--cream-muted)]">{formatDate(post.publishedAt)}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--cream)] leading-tight mb-3">
          {post.title}
        </h1>
        <p className="text-lg text-[var(--cream-dim)] italic mb-5">{post.subtitle}</p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded bg-[var(--border)] text-[var(--cream-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <hr className="border-[var(--border)] mb-10" />

      {/* Content */}
      <article className="space-y-6">
        {post.content.map((block, idx) => renderBlock(block, idx))}
      </article>

      {/* Related standards */}
      {post.relatedStandards.length > 0 && (
        <section className="mt-14">
          <h2 className="text-lg font-serif font-bold text-[var(--cream)] mb-4">
            Practice These Tunes
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {post.relatedStandards.map((slug) => (
              <Link
                key={slug}
                href={`/standards/${slug}`}
                className="group flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 hover:border-[var(--gold)]/50 hover:bg-[var(--card-hi)] transition-colors"
              >
                <span className="text-[var(--gold)] text-sm">♩</span>
                <span className="text-sm text-[var(--cream)] group-hover:text-[var(--gold)] transition-colors capitalize">
                  {slug.replace(/-/g, ' ')}
                </span>
                <span className="ml-auto text-[var(--cream-muted)] text-xs">View →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Further reading */}
      {post.furtherReading.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-serif font-bold text-[var(--cream)] mb-4">
            Further Reading
          </h2>
          <div className="space-y-3">
            {post.furtherReading.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 hover:border-[var(--blue)]/50 hover:bg-[var(--card-hi)] transition-colors"
              >
                <div className="text-sm text-[var(--blue-lt)] group-hover:underline font-medium">
                  {link.title} ↗
                </div>
                {link.description && (
                  <div className="text-xs text-[var(--cream-muted)] mt-0.5">
                    {link.description}
                  </div>
                )}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Back to blog */}
      <div className="mt-14 pt-8 border-t border-[var(--border)]">
        <Link
          href="/blog"
          className="text-sm text-[var(--cream-dim)] hover:text-[var(--gold)] transition-colors"
        >
          ← Back to all posts
        </Link>
      </div>
    </div>
  );
}
