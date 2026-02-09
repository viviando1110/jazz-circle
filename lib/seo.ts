import type { Metadata } from 'next';
import type { MusicalKey, Standard } from '@/lib/music/types';

const SITE_URL = 'https://jazzcircle.app';

export function generateHomeMeta(): Metadata {
  return {
    title: 'Jazz Circle of Fifths — Interactive Jazz Theory Tool',
    description:
      'Explore jazz harmony with our interactive Circle of Fifths. Learn diatonic chords, scale suggestions, chord voicings, and common jazz progressions in all 24 keys.',
    openGraph: {
      title: 'Jazz Circle of Fifths — Interactive Jazz Theory Tool',
      description:
        'Explore jazz harmony with our interactive Circle of Fifths. Diatonic chords, scales, voicings, and progressions in all 24 keys.',
      url: SITE_URL,
      siteName: 'Jazz Circle',
      type: 'website',
    },
  };
}

export function generateKeyPageMeta(key: MusicalKey): Metadata {
  const title = `Jazz Chords in ${key.displayName} — Diatonic 7th Chords & Scales`;
  const description = `Learn the diatonic 7th chords in ${key.displayName}: chord voicings, scale suggestions, and common jazz progressions. Interactive piano keyboard and Circle of Fifths visualization.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/key/${key.slug}`,
      siteName: 'Jazz Circle',
      type: 'article',
    },
  };
}

export function generateStandardPageMeta(standard: Standard): Metadata {
  const title = `${standard.title} — Jazz Chord Changes & Analysis`;
  const description = `Learn the chord changes, harmonic analysis, and practice tips for ${standard.title} by ${standard.composer}. Includes scale guides, notation, and playback.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/standards/${standard.slug}`,
      siteName: 'Jazz Circle',
      type: 'article',
    },
  };
}

export function generateProgressionsPageMeta(): Metadata {
  return {
    title: 'Common Jazz Progressions — ii-V-I, Turnarounds, Blues & More',
    description:
      'Learn essential jazz chord progressions: ii-V-I, I-vi-ii-V turnarounds, jazz blues, and modal vamps. Transpose to any key with interactive playback.',
    openGraph: {
      title: 'Common Jazz Progressions — ii-V-I, Turnarounds, Blues & More',
      description:
        'Essential jazz progressions with interactive playback. Transpose to any key.',
      url: `${SITE_URL}/progressions`,
      siteName: 'Jazz Circle',
      type: 'website',
    },
  };
}
