import { describe, it, expect } from 'vitest';
import { KEY_TIPS, getStandardsInKey } from '@/lib/music/key-tips';
import { ALL_KEYS } from '@/lib/music/keys';

describe('KEY_TIPS', () => {
  const allSlugs = ALL_KEYS.map((k) => k.slug);

  it('has entries for all 24 key slugs', () => {
    expect(allSlugs).toHaveLength(24);
    for (const slug of allSlugs) {
      expect(KEY_TIPS[slug]).toBeDefined();
    }
  });

  it('every tip has a non-empty headline and non-empty tip', () => {
    for (const slug of allSlugs) {
      const entry = KEY_TIPS[slug];
      expect(entry.headline.length).toBeGreaterThan(0);
      expect(entry.tip.length).toBeGreaterThan(0);
    }
  });

  it('all 24 key slugs from ALL_KEYS have a corresponding entry in KEY_TIPS', () => {
    const tipSlugs = Object.keys(KEY_TIPS);
    for (const slug of allSlugs) {
      expect(tipSlugs).toContain(slug);
    }
  });
});

describe('getStandardsInKey', () => {
  it('returns standards for C major', () => {
    const results = getStandardsInKey('C major');
    expect(results.length).toBeGreaterThanOrEqual(15);
  });

  it('results all have title and slug', () => {
    const results = getStandardsInKey('C major');
    for (const s of results) {
      expect(s.title).toBeTruthy();
      expect(s.slug).toBeTruthy();
    }
  });

  it('returns empty array for a key with no standards', () => {
    const results = getStandardsInKey('A major');
    expect(results).toEqual([]);
  });
});
