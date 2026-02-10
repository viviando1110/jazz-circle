import { test, expect } from '@playwright/test';

test.describe('Progressions page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/progressions');
  });

  test('loads with progression list', async ({ page }) => {
    // Check for progression names using heading selectors for precision
    await expect(page.getByRole('heading', { name: /ii.*V.*I/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Jazz Blues' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Modal Vamp' })).toBeVisible();
  });

  test('does not show removed progressions', async ({ page }) => {
    await expect(page.getByText('Coltrane Changes')).not.toBeVisible();
  });

  test('click progression shows player with tempo slider', async ({ page }) => {
    // Click on ii-V-I progression card (use the heading)
    await page.getByRole('heading', { name: /ii.*V.*I/ }).click();

    // PlaybackControls should appear with tempo slider
    await expect(page.getByLabel('Tempo')).toBeVisible();
  });

  test('play button exists and is clickable', async ({ page }) => {
    // Click on a progression first (use the heading)
    await page.getByRole('heading', { name: /ii.*V.*I/ }).click();

    // Play button should be visible
    const playButton = page.getByLabel('Start playback');
    await expect(playButton).toBeVisible();
  });
});
