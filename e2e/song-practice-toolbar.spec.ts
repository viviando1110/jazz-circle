import { test, expect } from '@playwright/test';

/**
 * E2E tests for the SongPracticeToolbar — the new feature that embeds
 * practice tools (Improvise, Voice Leading, Licks) directly on song pages.
 */

test.describe('Song Practice Toolbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await page.waitForLoadState('networkidle');
  });

  test('Practice Tools button is visible on song page', async ({ page }) => {
    await expect(page.getByText('Practice Tools')).toBeVisible();
  });

  test('Practice Tools button has aria-expanded attribute', async ({ page }) => {
    const btn = page.getByRole('button', { name: 'Practice Tools' });
    await expect(btn).toHaveAttribute('aria-expanded', 'false');
  });

  test('clicking Practice Tools opens the panel', async ({ page }) => {
    await page.getByRole('button', { name: 'Practice Tools' }).click();

    // Tab buttons should appear
    await expect(page.getByRole('button', { name: 'Improvise' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Voice Leading' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Licks' })).toBeVisible();
  });

  test('aria-expanded toggles when opening/closing', async ({ page }) => {
    const btn = page.getByRole('button', { name: 'Practice Tools' });

    // Open
    await btn.click();
    await expect(btn).toHaveAttribute('aria-expanded', 'true');

    // Close
    await btn.click();
    await expect(btn).toHaveAttribute('aria-expanded', 'false');
  });

  test('Improvise tab shows ScaleGuide by default', async ({ page }) => {
    await page.getByRole('button', { name: 'Practice Tools' }).click();

    // ScaleGuide renders an h3 "Scale Guide" inside the practice panel
    const panel = page.locator('[aria-expanded="true"] + div, [aria-expanded="true"] ~ div').first();
    // Look for the ScaleGuide h3 specifically (not the section analysis h4)
    await expect(page.locator('h3').filter({ hasText: 'Scale Guide' })).toBeVisible();
  });

  test('Improvise tab shows piano keyboard with scale', async ({ page }) => {
    await page.getByRole('button', { name: 'Practice Tools' }).click();

    // Piano keyboard SVG should be present
    // The ScaleGuide renders a PianoKeyboard which contains SVG rects
    const pianos = page.locator('svg').filter({ has: page.locator('rect') });
    const count = await pianos.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('Improvise tab shows scale degree badges', async ({ page }) => {
    await page.getByRole('button', { name: 'Practice Tools' }).click();

    // ScaleGuide renders note badges in a flex-wrap container
    const badges = page.locator('.flex.gap-1.flex-wrap span');
    const count = await badges.count();
    // A scale has 7+ notes → 7+ badge elements
    expect(count).toBeGreaterThanOrEqual(7);
  });

  test('Voice Leading tab shows song chords (not presets)', async ({ page }) => {
    await page.getByRole('button', { name: 'Practice Tools' }).click();
    await page.getByRole('button', { name: 'Voice Leading' }).click();

    // In song mode, the key/progression selectors should be hidden
    // The Progression label only appears in standalone mode
    // Check that the step counter is visible
    await expect(page.getByText(/Step \d+ of \d+/)).toBeVisible();

    // Should show navigation controls
    await expect(page.getByRole('button', { name: 'Previous' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();
  });

  test('Voice Leading tab has auto-play control', async ({ page }) => {
    await page.getByRole('button', { name: 'Practice Tools' }).click();
    await page.getByRole('button', { name: 'Voice Leading' }).click();

    await expect(page.getByRole('button', { name: 'Auto-play' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Replay' })).toBeVisible();
  });

  test('Licks tab shows generator controls', async ({ page }) => {
    await page.getByRole('button', { name: 'Practice Tools' }).click();
    await page.getByRole('button', { name: 'Licks' }).click();

    // Should have root selector, quality selector, generate button
    await expect(page.getByLabel('Root note')).toBeVisible();
    await expect(page.getByLabel('Chord quality')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Generate' })).toBeVisible();
  });

  test('Licks tab generates a lick', async ({ page }) => {
    await page.getByRole('button', { name: 'Practice Tools' }).click();
    await page.getByRole('button', { name: 'Licks' }).click();

    // Generate a lick
    await page.getByRole('button', { name: 'Generate' }).click();

    // Play button should appear (use the one next to Generate, not the main playback)
    // The lick generator shows Play and "Another one" after generating
    await expect(page.getByRole('button', { name: 'Play' }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Another one' })).toBeVisible();
  });

  test('switching tabs preserves panel open state', async ({ page }) => {
    await page.getByRole('button', { name: 'Practice Tools' }).click();

    // Improvise → Voice Leading → Licks → Improvise
    await page.getByRole('button', { name: 'Voice Leading' }).click();
    await expect(page.getByText(/Step \d+ of \d+/)).toBeVisible();

    await page.getByRole('button', { name: 'Licks' }).click();
    await expect(page.getByRole('button', { name: 'Generate' })).toBeVisible();

    await page.getByRole('button', { name: 'Improvise' }).click();
    await expect(page.locator('h3').filter({ hasText: 'Scale Guide' })).toBeVisible();
  });
});

test.describe('Song Practice Toolbar on multiple songs', () => {
  test('Practice Tools available on Blue Bossa', async ({ page }) => {
    await page.goto('/standards/blue-bossa');
    await page.waitForLoadState('networkidle');
    await expect(page.getByText('Practice Tools')).toBeVisible();

    await page.getByRole('button', { name: 'Practice Tools' }).click();
    await expect(page.locator('h3').filter({ hasText: 'Scale Guide' })).toBeVisible();
  });

  test('Practice Tools available on All of Me', async ({ page }) => {
    await page.goto('/standards/all-of-me');
    await page.waitForLoadState('networkidle');
    await expect(page.getByText('Practice Tools')).toBeVisible();

    await page.getByRole('button', { name: 'Practice Tools' }).click();
    await expect(page.locator('h3').filter({ hasText: 'Scale Guide' })).toBeVisible();
  });

  test('Practice Tools available on A Night In Tunisia', async ({ page }) => {
    await page.goto('/standards/a-night-in-tunisia');
    await page.waitForLoadState('networkidle');
    await expect(page.getByText('Practice Tools')).toBeVisible();
  });
});

test.describe('Song page playback + practice toolbar coexistence', () => {
  test('playback controls and practice toolbar both present', async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await page.waitForLoadState('networkidle');

    // Playback controls
    await expect(page.getByLabel('Start playback')).toBeVisible();
    await expect(page.getByLabel('Tempo')).toBeVisible();

    // Practice toolbar
    await expect(page.getByText('Practice Tools')).toBeVisible();
  });

  test('practice toolbar is inside sticky area', async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await page.waitForLoadState('networkidle');

    // The practice tools button should be within the sticky container
    const stickyArea = page.locator('.sticky');
    await expect(stickyArea.getByText('Practice Tools')).toBeVisible();
  });

  test('transpose toggle still works alongside practice toolbar', async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await page.waitForLoadState('networkidle');

    // Transpose to Em
    const emButton = page.getByRole('button', { name: /E Minor/ });
    await emButton.click();

    // Practice tools should still work
    await page.getByRole('button', { name: 'Practice Tools' }).click();
    await expect(page.locator('h3').filter({ hasText: 'Scale Guide' })).toBeVisible();
  });
});
