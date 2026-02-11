import { test, expect, type Page } from '@playwright/test';

/**
 * Phase 2 E2E tests: Light theme + MIDI features.
 * Tests theme toggling, FOUC prevention, localStorage persistence,
 * prefers-color-scheme, component rendering in both themes, and
 * MIDI export button presence across practice tools.
 *
 * ThemeToggle renders twice in Header (desktop + mobile).
 * getByRole only matches visible/accessible elements, so it resolves
 * to the correct one at any viewport width.
 */

const DARK_BG = '#0d0f14';
const LIGHT_BG = '#faf6f0';

/** Get the visible theme toggle button (works across desktop/mobile). */
function themeToggle(page: Page, label?: string) {
  return page.getByRole('button', { name: label ?? /Switch to/ });
}

// ─── Theme Toggle ─────────────────────────────────────────

test.describe('Theme toggle', () => {
  test('toggle button is visible in header', async ({ page }) => {
    await page.goto('/');
    await expect(themeToggle(page)).toBeVisible();
  });

  test('clicking toggle switches from dark to light', async ({ page }) => {
    await page.goto('/');

    // Should start dark (default)
    const bgBefore = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue('--bg').trim(),
    );
    expect(bgBefore).toBe(DARK_BG);

    // Click toggle
    await themeToggle(page, 'Switch to light mode').click();

    // Should now be light
    const bgAfter = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue('--bg').trim(),
    );
    expect(bgAfter).toBe(LIGHT_BG);

    // data-theme attribute should be "light"
    const theme = await page.evaluate(() =>
      document.documentElement.getAttribute('data-theme'),
    );
    expect(theme).toBe('light');
  });

  test('clicking toggle twice returns to dark', async ({ page }) => {
    await page.goto('/');

    await themeToggle(page).click(); // → light
    await themeToggle(page).click(); // → dark

    const bg = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue('--bg').trim(),
    );
    expect(bg).toBe(DARK_BG);
  });

  test('theme persists across page navigation', async ({ page }) => {
    await page.goto('/');

    // Switch to light
    await themeToggle(page, 'Switch to light mode').click();

    // Navigate to another page (use goto for cross-viewport compat)
    await page.goto('/standards');
    await page.waitForLoadState('networkidle');

    // Should still be light
    const bg = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue('--bg').trim(),
    );
    expect(bg).toBe(LIGHT_BG);
  });

  test('theme persists across full page reload (localStorage)', async ({ page }) => {
    await page.goto('/');

    // Switch to light
    await themeToggle(page, 'Switch to light mode').click();

    // Verify localStorage was set
    const stored = await page.evaluate(() =>
      localStorage.getItem('jazz-circle-theme'),
    );
    expect(stored).toBe('light');

    // Full reload
    await page.reload();
    await page.waitForLoadState('networkidle');

    // Should still be light after reload
    const bg = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue('--bg').trim(),
    );
    expect(bg).toBe(LIGHT_BG);
  });

  test('FOUC prevention: data-theme is set before first paint', async ({ page }) => {
    // Set light theme in localStorage before navigating
    await page.goto('/');
    await page.evaluate(() => localStorage.setItem('jazz-circle-theme', 'light'));
    await page.reload();

    // The inline script should have set data-theme="light" before hydration
    const theme = await page.evaluate(() =>
      document.documentElement.getAttribute('data-theme'),
    );
    expect(theme).toBe('light');
  });
});

// ─── Theme visual consistency ─────────────────────────────

test.describe('Theme visual consistency', () => {
  test('header renders correctly in light theme', async ({ page }) => {
    await page.goto('/');
    await themeToggle(page, 'Switch to light mode').click();

    // Logo should be visible
    await expect(page.locator('a:has-text("Jazz Circle")')).toBeVisible();

    // Theme toggle should still be visible after switching
    await expect(themeToggle(page, 'Switch to dark mode')).toBeVisible();
  });

  test('circle of fifths renders in light theme', async ({ page }) => {
    await page.goto('/');
    await themeToggle(page, 'Switch to light mode').click();

    // Circle SVG should be present
    const circle = page.locator('svg[aria-label="Circle of Fifths — select a key"]');
    await expect(circle).toBeVisible();

    // Click a wedge — should still work
    const wedge = page.locator('g[aria-label="C major"]');
    await wedge.click();
    await expect(page.getByText('Diatonic 7th Chords in C Major')).toBeVisible({ timeout: 3000 });
  });

  test('piano keyboard renders in light theme', async ({ page }) => {
    await page.goto('/');

    // Select a key to show diatonic chords
    const wedge = page.locator('g[aria-label="C major"]');
    await wedge.click();
    await expect(page.getByText('Diatonic 7th Chords in C Major')).toBeVisible({ timeout: 3000 });

    // Click a diatonic chord to show piano
    await page.locator('button:has-text("Cmaj7")').first().click();

    // Switch to light
    await themeToggle(page, 'Switch to light mode').click();

    // Piano should be visible
    const piano = page.locator('svg[aria-label="Piano keyboard"]');
    await expect(piano).toBeVisible();
  });

  test('song page renders in light theme', async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await themeToggle(page, 'Switch to light mode').click();

    await expect(page.locator('h1')).toContainText('Autumn Leaves');
    // Footer visible
    await expect(page.locator('footer')).toBeVisible();
  });

  test('practice page renders in light theme', async ({ page }) => {
    await page.goto('/practice');
    await themeToggle(page, 'Switch to light mode').click();

    await expect(page.locator('h1')).toContainText('Practice');
  });

  test('voicings page renders in light theme', async ({ page }) => {
    await page.goto('/voicings');
    await themeToggle(page, 'Switch to light mode').click();

    await expect(page.locator('h1')).toContainText('Voicing');
  });
});

// ─── Dark theme regression (everything still works) ───────

test.describe('Dark theme regression', () => {
  test('all pages load with correct dark CSS vars', async ({ page }) => {
    const pages = ['/', '/standards', '/progressions', '/practice', '/voicings', '/about'];

    for (const url of pages) {
      await page.goto(url);
      await page.waitForLoadState('networkidle');
      const bg = await page.evaluate(() =>
        getComputedStyle(document.documentElement).getPropertyValue('--bg').trim(),
      );
      expect(bg).toBe(DARK_BG);
    }
  });

  test('circle click still works in dark theme (bug #1 regression)', async ({ page }) => {
    await page.goto('/');
    const wedge = page.locator('g[aria-label="G major"]');
    await wedge.click();
    await expect(page.getByText('Diatonic 7th Chords in G Major')).toBeVisible({ timeout: 3000 });
  });

  test('no console errors navigating across all page types', async ({ page }) => {
    const pageErrors: string[] = [];
    page.on('pageerror', (err) => pageErrors.push(err.message));

    // Use goto for cross-viewport compat (nav links hidden on mobile)
    const pages = [
      '/', '/standards', '/standards/all-blues',
      '/practice', '/voicings', '/progressions', '/',
    ];
    for (const url of pages) {
      await page.goto(url);
      await page.waitForLoadState('networkidle');
    }

    expect(pageErrors).toEqual([]);
  });
});

// ─── MIDI Export button presence ──────────────────────────

test.describe('MIDI export buttons', () => {
  test('Export MIDI button appears on song practice toolbar', async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await page.waitForLoadState('networkidle');

    // The ExportMIDIButton should be in the practice toolbar area
    const midiBtn = page.locator('button[aria-label="Export as MIDI file"]');
    await expect(midiBtn).toBeVisible();
  });

  test('Export MIDI button appears after generating a lick', async ({ page }) => {
    await page.goto('/practice/melody');
    await page.waitForLoadState('networkidle');

    // Click Generate
    const generateBtn = page.locator('button:has-text("Generate")').first();
    await generateBtn.click();

    // MIDI export button should appear
    const midiBtn = page.locator('button[aria-label="Export as MIDI file"]');
    await expect(midiBtn.first()).toBeVisible({ timeout: 3000 });
  });
});

// ─── Mobile-specific tests ────────────────────────────────

test.describe('Mobile layout', () => {
  test('theme toggle is visible on mobile', async ({ page }) => {
    await page.goto('/');
    await expect(themeToggle(page)).toBeVisible();
  });

  test('mobile hamburger menu still works after theme changes', async ({ page }) => {
    await page.goto('/');

    // Toggle theme first
    await themeToggle(page).click();

    // Open hamburger (only on mobile projects, but safe to check)
    const hamburger = page.locator('button[aria-label="Open menu"]');
    if (await hamburger.isVisible()) {
      await hamburger.click();
      // Mobile nav should appear
      const mobileNavLink = page.locator('#mobile-nav a[href="/standards"]');
      await expect(mobileNavLink).toBeVisible({ timeout: 2000 });
    }
  });

  test('song page is usable on mobile with practice tools', async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await page.waitForLoadState('networkidle');

    // h1 should be visible
    await expect(page.locator('h1')).toContainText('Autumn Leaves');

    // Practice tools toggle should be visible
    const practiceToggle = page.locator('button:has-text("Practice Tools")');
    await expect(practiceToggle).toBeVisible();

    // MIDI export button should be visible
    const midiBtn = page.locator('button[aria-label="Export as MIDI file"]');
    await expect(midiBtn).toBeVisible();
  });

  test('key page works on mobile', async ({ page }) => {
    await page.goto('/key/c-major');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1')).toContainText('C Major');

    // Key page should have diatonic chords and progressions
    await expect(page.getByText('Common Progressions')).toBeVisible();
  });
});
