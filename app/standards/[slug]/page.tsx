import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { STANDARDS, getStandardBySlug } from '@/lib/music/standards';
import { generateStandardPageMeta } from '@/lib/seo';
import { StandardPageClient } from '@/components/standards/StandardPageClient';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return STANDARDS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const standard = getStandardBySlug(params.slug);
  if (!standard) return {};
  return generateStandardPageMeta(standard);
}

export default function StandardPage({ params }: PageProps) {
  const standard = getStandardBySlug(params.slug);
  if (!standard) notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-neutral-100 sm:text-4xl">
          {standard.title}
        </h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-400">
          <span>Composed by {standard.composer} ({standard.year})</span>
          <span>Form: {standard.form}</span>
          <span>{standard.totalBars} bars</span>
          <span>{standard.timeSignature}</span>
          <span className="capitalize">{standard.difficulty}</span>
        </div>
        <p className="mt-3 text-sm text-neutral-300">{standard.description}</p>
      </header>

      {/* Interactive client content */}
      <StandardPageClient standard={standard} />
    </main>
  );
}
