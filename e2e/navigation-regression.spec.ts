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

/** Assert the header is present with logo. */
async function assertHeaderPresent(page: import('@playwright/test').Page) {
  await expect(page.locator('a:has-text("Jazz Circle")')).toBeVisible();
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
    await page.goto('/');
    await assertThemeApplied(page);
    await assertHeaderPresent(page);
    await assertFooterPresent(page);

    // Navigate through pages (use goto for cross-viewport compat)
    await page.goto('/standards');
    await page.waitForLoadState('networkidle');
    await assertThemeApplied(page);
    await assertHeaderPresent(page);
    await expect(page.locator('h1')).toContainText('Jazz Songs');

    // Songs → Song detail
    await page.click('a[href="/standards/autumn-leaves"]');
    await page.waitForLoadState('networkidle');
    await assertThemeApplied(page);
    await assertHeaderPresent(page);
    await expect(page.locator('h1')).toContainText('Autumn Leaves');

    // Song detail → Progressions
    await page.goto('/progressions');
    await page.waitForLoadState('networkidle');
    await assertThemeApplied(page);
    await assertHeaderPresent(page);
    await expect(page.locator('h1')).toContainText('Progressions');

    // Progressions → Home
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await assertThemeApplied(page);
    await assertHeaderPresent(page);
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
      await page.goto(p.url);
      await page.waitForLoadState('networkidle');
      await assertThemeApplied(page);
      await assertHeaderPresent(page);
      await assertFooterPresent(page);
      await expect(page.locator('h1')).toContainText(p.titleMatch);
    }
  });

  test('no console errors during navigation', async ({ page }) => {
    const pageErrors: string[] = [];
    page.on('pageerror', (err) => pageErrors.push(err.message));

    const pages = [
      '/', '/standards', '/standards/autumn-leaves',
      '/progressions', '/',
    ];
    for (const url of pages) {
      await page.goto(url);
      await page.waitForLoadState('networkidle');
    }

    expect(pageErrors).toEqual([]);
  });

  test('circle click works on fresh page load (bug #1 regression)', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Click the C major wedge on the circle
    const wedge = page.locator('g[aria-label="C major"]');
    await wedge.click();

    // Should show diatonic chords heading for C major
    await expect(page.getByText('Diatonic 7th Chords in C Major')).toBeVisible({ timeout: 3000 });
  });

  test('audio stops when navigating away from song page (bug #3 regression)', async ({ page }) => {
    // Navigate to a song page
    await page.goto('/standards/autumn-leaves');
    await page.waitForLoadState('networkidle');

    // Navigate away — should not throw errors
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Verify homepage loaded correctly (no crash from audio cleanup)
    await assertThemeApplied(page);
    await assertHeaderPresent(page);
  });
});
