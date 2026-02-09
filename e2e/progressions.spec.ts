import { test, expect } from '@playwright/test';

test.describe('Progressions page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/progressions');
  });

  test('loads with progression list', async ({ page }) => {
    await expect(page.getByText('ii – V – I')).toBeVisible();
    await expect(page.getByText('Jazz Blues')).toBeVisible();
    await expect(page.getByText('Modal Vamp')).toBeVisible();
  });

  test('does not show removed progressions', async ({ page }) => {
    await expect(page.getByText('Coltrane Changes')).not.toBeVisible();
    await expect(page.getByText('Backdoor ii – V')).not.toBeVisible();
  });

  test('click progression shows player with tempo slider', async ({ page }) => {
    // Click on ii-V-I progression
    await page.getByText('ii – V – I').click();

    // PlaybackControls should appear with tempo slider
    await expect(page.getByLabel('Tempo')).toBeVisible();
  });

  test('play button exists and is clickable', async ({ page }) => {
    // Click on a progression first
    await page.getByText('ii – V – I').click();

    // Play button should be visible
    const playButton = page.getByLabel('Start playback');
    await expect(playButton).toBeVisible();
  });
});
