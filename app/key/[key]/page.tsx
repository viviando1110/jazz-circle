import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_KEYS, getKeyBySlug } from '@/lib/music/keys';
import { generateKeyPageMeta } from '@/lib/seo';
import KeyPageClient from '@/components/key/KeyPageClient';

interface PageProps {
  params: { key: string };
}

export function generateStaticParams() {
  return ALL_KEYS.map((k) => ({ key: k.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const musicalKey = getKeyBySlug(params.key);
  if (!musicalKey) return {};
  return generateKeyPageMeta(musicalKey);
}

export default function KeyPage({ params }: PageProps) {
  const musicalKey = getKeyBySlug(params.key);
  if (!musicalKey) notFound();

  const accidentalLabel =
    musicalKey.accidentals === 0
      ? 'no sharps or flats'
      : musicalKey.accidentals > 0
        ? `${musicalKey.accidentals} sharp${musicalKey.accidentals > 1 ? 's' : ''}`
        : `${Math.abs(musicalKey.accidentals)} flat${Math.abs(musicalKey.accidentals) > 1 ? 's' : ''}`;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-[var(--gold)] sm:text-4xl mb-2">
          Jazz Chords in {musicalKey.displayName}
        </h1>
        <p className="text-sm text-[var(--cream-dim)]">
          {musicalKey.displayName} has {accidentalLabel}. Explore the diatonic 7th chords,
          scale suggestions, and common jazz progressions below.
        </p>
      </header>

      <KeyPageClient musicalKey={musicalKey} />

      {/* SEO content */}
      <section className="mt-16 space-y-3 text-sm text-[var(--cream-dim)] max-w-2xl">
        <h2 className="text-lg font-semibold text-[var(--cream)]">
          About {musicalKey.displayName}
        </h2>
        <p>
          The key of {musicalKey.displayName} contains seven diatonic 7th chords built
          on each scale degree. In jazz, these chords form the foundation for improvisation,
          comping, and composition.{' '}
          {musicalKey.quality === 'major'
            ? 'The most important progression is ii-V-I, which uses the second, fifth, and first degree chords.'
            : 'Minor key jazz often features the ii-V-i progression, where the V chord is frequently altered for extra tension.'}
        </p>
      </section>
    </div>
  );
}
