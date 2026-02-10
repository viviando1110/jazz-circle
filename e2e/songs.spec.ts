import { test, expect } from '@playwright/test';

test.describe('Songs (Standards) pages', () => {
  test('index page shows Jazz Songs heading', async ({ page }) => {
    await page.goto('/standards');
    await expect(
      page.getByRole('heading', { name: 'Jazz Songs' }),
    ).toBeVisible();
  });

  test('index page links to song detail pages', async ({ page }) => {
    await page.goto('/standards');
    // Should have at least one song listed
    const songLinks = page.locator('a[href^="/standards/"]');
    const count = await songLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Autumn Leaves detail page loads', async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await expect(
      page.getByRole('heading', { name: 'Autumn Leaves' }),
    ).toBeVisible();
  });

  test('song page shows notation section', async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await expect(
      page.getByRole('heading', { name: 'Notation' }),
    ).toBeVisible();
  });

  test('song page shows playback controls', async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await expect(page.getByLabel('Tempo')).toBeVisible();
  });

  test('song page shows transpose toggle', async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    // TransposeToggle has role="group" with aria-label="Key selection"
    const toggle = page.locator('[role="group"][aria-label="Key selection"]');
    await expect(toggle).toBeVisible();
    await expect(toggle.getByText('G Minor (Real Book)')).toBeVisible();
  });
});
