// lib/music/standards/index.ts
// Registry of all jazz standards.

import type { Standard } from '@/lib/music/types';
import { AUTUMN_LEAVES } from '@/lib/music/standards/autumn-leaves';

/** All available jazz standards */
export const STANDARDS: Standard[] = [AUTUMN_LEAVES];

/**
 * Look up a standard by its URL slug.
 */
export function getStandardBySlug(slug: string): Standard | undefined {
  return STANDARDS.find((s) => s.slug === slug);
}
