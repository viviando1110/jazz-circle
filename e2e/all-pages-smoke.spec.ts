import { test, expect } from '@playwright/test';

/**
 * Smoke tests: every page type loads correctly with theme, layout, no JS errors.
 * Covers all 12 page types including dynamic SSG pages.
 */

const DARK_BG = '#0d0f14';

async function assertThemeApplied(page: import('@playwright/test').Page) {
  const bgVar = await page.evaluate(() =>
    getComputedStyle(document.documentElement).getPropertyValue('--bg').trim(),
  );
  expect(bgVar).toBe(DARK_BG);
}

async function assertNavPresent(page: import('@playwright/test').Page) {
  const nav = page.locator('nav');
  await expect(nav).toBeVisible();
}

async function assertFooterPresent(page: import('@playwright/test').Page) {
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
  await expect(footer).toContainText('Lov Co. LLC');
}

test.describe('Smoke test: every page loads correctly', () => {
  const ALL_PAGES = [
    { url: '/', titleMatch: 'Jazz Circle', desc: 'Homepage' },
    { url: '/standards', titleMatch: 'Jazz Songs', desc: 'Standards index' },
    { url: '/standards/autumn-leaves', titleMatch: 'Autumn Leaves', desc: 'Song detail' },
    { url: '/standards/all-of-me', titleMatch: 'All of Me', desc: 'Song detail (2nd)' },
    { url: '/standards/blue-bossa', titleMatch: 'Blue Bossa', desc: 'Song detail (3rd)' },
    { url: '/progressions', titleMatch: 'Progressions', desc: 'Progressions page' },
    { url: '/key/c-major', titleMatch: 'C Major', desc: 'Key page (C major)' },
    { url: '/key/g-minor', titleMatch: 'G Minor', desc: 'Key page (G minor)' },
    { url: '/key/bb-major', titleMatch: 'Bb Major', desc: 'Key page (Bb major)' },
    { url: '/practice', titleMatch: 'Practice Mode', desc: 'Practice page' },
    { url: '/voicings', titleMatch: 'Chord Voicings', desc: 'Voicings page' },
    { url: '/practice/melody', titleMatch: 'Melody', desc: 'Melody generator' },
    { url: '/about', titleMatch: 'About', desc: 'About page' },
    { url: '/contact', titleMatch: 'Contact', desc: 'Contact page' },
    { url: '/privacy', titleMatch: 'Privacy', desc: 'Privacy page' },
  ];

  for (const p of ALL_PAGES) {
    test(`${p.desc} (${p.url}) loads with theme + layout`, async ({ page }) => {
      await page.goto(p.url);
      await page.waitForLoadState('networkidle');

      // Theme CSS
      await assertThemeApplied(page);

      // Navigation
      await assertNavPresent(page);

      // Footer
      await assertFooterPresent(page);

      // Page title/heading visible
      await expect(page.locator('h1')).toContainText(p.titleMatch);
    });
  }

  test('no console errors across all core pages', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(`${page.url()}: ${err.message}`));

    const corePages = [
      '/', '/standards', '/standards/autumn-leaves',
      '/progressions', '/key/c-major',
      '/practice', '/voicings', '/practice/melody',
      '/about', '/contact', '/privacy',
    ];

    for (const url of corePages) {
      await page.goto(url);
      await page.waitForLoadState('networkidle');
    }

    expect(errors).toEqual([]);
  });

  test('404 page renders gracefully for non-existent route', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist');
    expect(response?.status()).toBe(404);
  });
});

test.describe('Standards index: song listing integrity', () => {
  test('lists a substantial number of songs (100+)', async ({ page }) => {
    await page.goto('/standards');
    await page.waitForLoadState('networkidle');
    const songLinks = page.locator('a[href^="/standards/"]');
    const count = await songLinks.count();
    expect(count).toBeGreaterThanOrEqual(100);
  });

  test('first song link navigates to a valid detail page', async ({ page }) => {
    await page.goto('/standards');
    await page.waitForLoadState('networkidle');

    const firstLink = page.locator('a[href^="/standards/"]').first();
    const href = await firstLink.getAttribute('href');
    expect(href).toBeTruthy();

    await page.goto(href!);
    await page.waitForLoadState('networkidle');

    // Song page should have an h1 and playback controls
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.getByLabel('Tempo')).toBeVisible();
  });
});
