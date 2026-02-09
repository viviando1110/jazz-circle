// lib/music/standards/index.ts
// Registry of all jazz standards.

import type { Standard } from '@/lib/music/types';
import { AUTUMN_LEAVES } from '@/lib/music/standards/autumn-leaves';
import { BLUE_BOSSA } from '@/lib/music/standards/blue-bossa';
import { SO_WHAT } from '@/lib/music/standards/so-what';
import { ALL_THE_THINGS_YOU_ARE } from '@/lib/music/standards/all-the-things-you-are';
import { FLY_ME_TO_THE_MOON } from '@/lib/music/standards/fly-me-to-the-moon';
import { TAKE_THE_A_TRAIN } from '@/lib/music/standards/take-the-a-train';
import { STELLA_BY_STARLIGHT } from '@/lib/music/standards/stella-by-starlight';

/** All available jazz standards */
export const STANDARDS: Standard[] = [
  AUTUMN_LEAVES,
  BLUE_BOSSA,
  FLY_ME_TO_THE_MOON,
  SO_WHAT,
  TAKE_THE_A_TRAIN,
  ALL_THE_THINGS_YOU_ARE,
  STELLA_BY_STARLIGHT,
];

/**
 * Look up a standard by its URL slug.
 */
export function getStandardBySlug(slug: string): Standard | undefined {
  return STANDARDS.find((s) => s.slug === slug);
}
