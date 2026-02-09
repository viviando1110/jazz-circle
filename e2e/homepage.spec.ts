import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads with circle of fifths visible', async ({ page }) => {
    const circle = page.locator('svg[aria-label="Circle of Fifths"]');
    await expect(circle).toBeVisible();
  });

  test('shows prompt text when no key selected', async ({ page }) => {
    await expect(
      page.getByText('Select a key from the Circle of Fifths'),
    ).toBeVisible();
  });

  test('click key on circle shows diatonic chords', async ({ page }) => {
    // Click the C major wedge (text "C" in the outer ring)
    const cWedge = page.locator('text >> "C"').first();
    await cWedge.click();

    // Verify diatonic chords appear
    await expect(page.getByText('Cmaj7')).toBeVisible();
    await expect(page.getByText('Dm7')).toBeVisible();
  });

  test('click key shows staff notation', async ({ page }) => {
    // Click a key wedge
    const gWedge = page.locator('text >> "G"').first();
    await gWedge.click();

    // Staff notation should render (VexFlow renders SVG inside the container)
    await expect(
      page.getByText('Diatonic 7th Chords in G Major'),
    ).toBeVisible();
  });

  test('navigation shows Songs link', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Songs' })).toBeVisible();
  });
});
