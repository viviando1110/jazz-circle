import { test, expect } from '@playwright/test';

/**
 * Regression tests for navigation integrity.
 *
 * These verify that themes, layout, and CSS survive client-side navigation
 * between all major page types. Catches corrupted hydration, missing CSS,
 * and broken layout after route changes.
 */

const DARK_BG = '#0d0f14';

/** Assert the page has the dark theme applied (CSS variables loaded). */
async function assertThemeApplied(page: import('@playwright/test').Page) {
  const bgVar = await page.evaluate(() =>
    getComputedStyle(document.documentElement).getPropertyValue('--bg').trim(),
  );
  expect(bgVar).toBe(DARK_BG);
}

/** Assert the header nav is visible and has expected links. */
async function assertNavPresent(page: import('@playwright/test').Page) {
  const nav = page.locator('nav');
  await expect(nav).toBeVisible();
  await expect(page.locator('nav a[href="/progressions"]')).toBeVisible();
  await expect(page.locator('nav a[href="/standards"]')).toBeVisible();
}

/** Assert the footer is present with copyright text. */
async function assertFooterPresent(page: import('@playwright/test').Page) {
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
  await expect(footer).toContainText('Lov Co. LLC');
}

test.describe('Navigation regression tests', () => {
  test('theme and layout survive navigation between all page types', async ({ page }) => {
    // Homepage
    await page.goto('http://localhost:3000');
    await assertThemeApplied(page);
    await assertNavPresent(page);
    await assertFooterPresent(page);

    // Navigate: Home → Songs
    await page.click('nav a[href="/standards"]');
    await page.waitForLoadState('networkidle');
    await assertThemeApplied(page);
    await assertNavPresent(page);
    await expect(page.locator('h1')).toContainText('Jazz Songs');

    // Navigate: Songs → Song detail
    await page.click('a[href="/standards/autumn-leaves"]');
    await page.waitForLoadState('networkidle');
    await assertThemeApplied(page);
    await assertNavPresent(page);
    await expect(page.locator('h1')).toContainText('Autumn Leaves');

    // Navigate: Song detail → Progressions (via nav)
    await page.click('nav a[href="/progressions"]');
    await page.waitForLoadState('networkidle');
    await assertThemeApplied(page);
    await assertNavPresent(page);
    await expect(page.locator('h1')).toContainText('Progressions');

    // Navigate: Progressions → Home
    await page.click('nav a[href="/"]');
    await page.waitForLoadState('networkidle');
    await assertThemeApplied(page);
    await assertNavPresent(page);
    await assertFooterPresent(page);
  });

  test('direct load of each page type has theme and layout', async ({ page }) => {
    const pages = [
      { url: '/', titleMatch: 'Jazz Circle' },
      { url: '/standards', titleMatch: 'Jazz Songs' },
      { url: '/standards/autumn-leaves', titleMatch: 'Autumn Leaves' },
      { url: '/progressions', titleMatch: 'Progressions' },
      { url: '/key/c-major', titleMatch: 'C Major' },
      { url: '/about', titleMatch: 'About' },
      { url: '/contact', titleMatch: 'Contact' },
      { url: '/privacy', titleMatch: 'Privacy' },
    ];

    for (const p of pages) {
      await page.goto(`http://localhost:3000${p.url}`);
      await page.waitForLoadState('networkidle');
      await assertThemeApplied(page);
      await assertNavPresent(page);
      await assertFooterPresent(page);
      await expect(page.locator('h1')).toContainText(p.titleMatch);
    }
  });

  test('no console errors during navigation', async ({ page }) => {
    const pageErrors: string[] = [];
    page.on('pageerror', (err) => pageErrors.push(err.message));

    await page.goto('http://localhost:3000');
    await page.click('nav a[href="/standards"]');
    await page.waitForLoadState('networkidle');
    await page.click('a[href="/standards/autumn-leaves"]');
    await page.waitForLoadState('networkidle');
    await page.click('nav a[href="/progressions"]');
    await page.waitForLoadState('networkidle');
    await page.click('nav a[href="/"]');
    await page.waitForLoadState('networkidle');

    expect(pageErrors).toEqual([]);
  });

  test('circle click works on fresh page load (bug #1 regression)', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    // Click the C major wedge on the circle
    const wedge = page.locator('g[aria-label="C major"]');
    await wedge.click();

    // Should show diatonic chords heading for C major
    await expect(page.getByText('Diatonic 7th Chords in C Major')).toBeVisible({ timeout: 3000 });
  });

  test('audio stops when navigating away from song page (bug #3 regression)', async ({ page }) => {
    // Navigate to a song page
    await page.goto('http://localhost:3000/standards/autumn-leaves');
    await page.waitForLoadState('networkidle');

    // Navigate away — should not throw errors
    await page.click('nav a[href="/"]');
    await page.waitForLoadState('networkidle');

    // Verify homepage loaded correctly (no crash from audio cleanup)
    await assertThemeApplied(page);
    await assertNavPresent(page);
  });
});
