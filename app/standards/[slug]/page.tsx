import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { STANDARDS, getStandardBySlug } from '@/lib/music/standards';
import { generateStandardPageMeta } from '@/lib/seo';
import { StandardPageClient } from '@/components/standards/StandardPageClient';
import type { Standard } from '@/lib/music/types';

const SITE_URL = 'https://jazz-circle.com';

function buildJsonLd(standard: Standard) {
  const pageUrl = `${SITE_URL}/standards/${standard.slug}`;

  const musicComposition = {
    '@context': 'https://schema.org',
    '@type': 'MusicComposition',
    name: standard.title,
    composer: { '@type': 'Person', name: standard.composer },
    musicalKey: standard.defaultKey,
    datePublished: String(standard.year),
    genre: standard.style ?? 'Jazz Standard',
    description: standard.metaDescription ?? standard.description,
    url: pageUrl,
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Standards', item: `${SITE_URL}/standards` },
      { '@type': 'ListItem', position: 3, name: standard.title, item: pageUrl },
    ],
  };

  const faqItems = [
    {
      '@type': 'Question',
      name: `What are the chord changes to ${standard.title}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: standard.harmonicSummary ?? standard.description,
      },
    },
    {
      '@type': 'Question',
      name: `What key is ${standard.title} in?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${standard.title} is in ${standard.defaultKey}. The ${standard.form} form spans ${standard.totalBars} bars.`,
      },
    },
    {
      '@type': 'Question',
      name: `Who composed ${standard.title}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${standard.title} was composed by ${standard.composer} in ${standard.year}.`,
      },
    },
    ...(standard.style ? [{
      '@type': 'Question',
      name: `What style is ${standard.title}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${standard.title} is a ${standard.style} composition, typically played at ${standard.tempo.slow}–${standard.tempo.fast} BPM.`,
      },
    }] : []),
  ];

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems,
  };

  return { musicComposition, breadcrumb, faqPage };
}

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

  const { musicComposition, breadcrumb, faqPage } = buildJsonLd(standard);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(musicComposition) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="mb-3 text-3xl font-bold text-neutral-100 sm:text-4xl">
          {standard.title} — Chord Changes &amp; Harmonic Analysis
        </h1>

        {/* Fact card */}
        <dl className="mb-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <div className="flex gap-1">
            <dt className="font-semibold text-neutral-400">Composer:</dt>
            <dd className="text-neutral-200">{standard.composer}</dd>
          </div>
          <div className="flex gap-1">
            <dt className="font-semibold text-neutral-400">Year:</dt>
            <dd className="text-neutral-200">{standard.year}</dd>
          </div>
          <div className="flex gap-1">
            <dt className="font-semibold text-neutral-400">Key:</dt>
            <dd className="text-neutral-200">{standard.defaultKey}</dd>
          </div>
          <div className="flex gap-1">
            <dt className="font-semibold text-neutral-400">Form:</dt>
            <dd className="text-neutral-200">{standard.form} ({standard.totalBars} bars)</dd>
          </div>
          {standard.style && (
            <div className="flex gap-1">
              <dt className="font-semibold text-neutral-400">Style:</dt>
              <dd className="text-neutral-200">{standard.style}</dd>
            </div>
          )}
          <div className="flex gap-1">
            <dt className="font-semibold text-neutral-400">Tempo:</dt>
            <dd className="text-neutral-200">
              {standard.tempo.slow}–{standard.tempo.fast} BPM
            </dd>
          </div>
        </dl>

        <p className="text-sm text-neutral-300">{standard.description}</p>
      </header>

      {/* About This Standard */}
      {(standard.historicalContext || (standard.notableRecordings && standard.notableRecordings.length > 0)) && (
        <section className="mb-8" aria-labelledby="about-heading">
          <h2 id="about-heading" className="mb-3 text-xl font-semibold text-neutral-100">
            About This Standard
          </h2>
          {standard.historicalContext && (
            <p className="mb-3 text-sm text-neutral-300">{standard.historicalContext}</p>
          )}
          {standard.notableRecordings && standard.notableRecordings.length > 0 && (
            <div>
              <p className="mb-1 text-sm font-medium text-neutral-400">Notable recordings:</p>
              <ul className="list-disc list-inside space-y-0.5 text-sm text-neutral-300">
                {standard.notableRecordings.map((rec) => (
                  <li key={rec}>{rec}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Chord Changes */}
      <section aria-labelledby="changes-heading">
        <h2 id="changes-heading" className="mb-4 text-xl font-semibold text-neutral-100">
          Chord Changes
        </h2>
        <StandardPageClient standard={standard} />
      </section>

      {/* Harmonic Analysis */}
      {standard.harmonicSummary && (
        <section className="mt-8" aria-labelledby="analysis-heading">
          <h2 id="analysis-heading" className="mb-3 text-xl font-semibold text-neutral-100">
            Harmonic Analysis
          </h2>
          <p className="text-sm text-neutral-300">{standard.harmonicSummary}</p>
        </section>
      )}
    </main>
    </>
  );
}
