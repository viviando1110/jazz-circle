import type { Metadata } from 'next';
import type { MusicalKey, Standard } from '@/lib/music/types';

const SITE_URL = 'https://jazz-circle.com';
const SITE_NAME = 'Jazz Circle';

function ogDefaults() {
  return {
    siteName: SITE_NAME,
    locale: 'en_US',
  } as const;
}

function twitterCard(title: string, description: string) {
  return {
    card: 'summary_large_image' as const,
    title,
    description,
  };
}

export function generateHomeMeta(): Metadata {
  const title = 'Circle of Fifths for Jazz — Chords, Voicings & Standards | Jazz Circle';
  const description =
    'Learn jazz harmony with an interactive Circle of Fifths. Explore diatonic chords, jazz progressions, 100+ song chord charts with notation and audio playback.';

  return {
    title,
    description,
    openGraph: {
      ...ogDefaults(),
      title,
      description,
      url: SITE_URL,
      type: 'website',
    },
    twitter: twitterCard(title, description),
  };
}

export function generateKeyPageMeta(key: MusicalKey): Metadata {
  const title = `Jazz Chords in ${key.displayName} — Diatonic 7th Chords & Scales`;
  const description = `Learn the diatonic 7th chords in ${key.displayName}: chord voicings, scale suggestions, and common jazz progressions. Interactive piano keyboard and Circle of Fifths visualization.`;

  return {
    title,
    description,
    openGraph: {
      ...ogDefaults(),
      title,
      description,
      url: `${SITE_URL}/key/${key.slug}`,
      type: 'article',
    },
    twitter: twitterCard(title, description),
  };
}

export function generateStandardPageMeta(standard: Standard): Metadata {
  const title = `${standard.title} Chord Changes — Jazz Circle`;
  const description = `Learn the chord changes, harmonic analysis, and practice tips for ${standard.title} by ${standard.composer}. Includes scale guides, notation, and playback.`;

  return {
    title: `${standard.title} — Jazz Chord Changes & Analysis`,
    description,
    openGraph: {
      ...ogDefaults(),
      title,
      description,
      url: `${SITE_URL}/standards/${standard.slug}`,
      type: 'article',
    },
    twitter: twitterCard(title, description),
  };
}

export function generateProgressionsPageMeta(): Metadata {
  const title = 'Common Jazz Progressions — ii-V-I, Turnarounds, Blues & More';
  const description =
    'Learn essential jazz chord progressions: ii-V-I, I-vi-ii-V turnarounds, jazz blues, and modal vamps. Transpose to any key with interactive playback.';

  return {
    title,
    description,
    openGraph: {
      ...ogDefaults(),
      title,
      description,
      url: `${SITE_URL}/progressions`,
      type: 'website',
    },
    twitter: twitterCard(title, description),
  };
}
