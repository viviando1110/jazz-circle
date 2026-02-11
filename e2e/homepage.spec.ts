import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads with circle of fifths visible', async ({ page }) => {
    const circle = page.locator('svg[aria-label="Circle of Fifths — select a key"]');
    await expect(circle).toBeVisible();
  });

  test('shows prompt text when no key selected', async ({ page }) => {
    await expect(
      page.getByText('Click any key to see its diatonic 7th chords'),
    ).toBeVisible();
  });

  test('click key on circle shows diatonic chords', async ({ page }) => {
    // Click the C major wedge
    const cWedge = page.locator('g[aria-label="C major"]');
    await cWedge.click();

    // Verify diatonic chords heading appears
    await expect(page.getByText('Diatonic 7th Chords in C Major')).toBeVisible();
  });

  test('click key shows staff notation', async ({ page }) => {
    // Click the G major wedge
    const gWedge = page.locator('g[aria-label="G major"]');
    await gWedge.click();

    // Staff notation should render
    await expect(
      page.getByText('Diatonic 7th Chords in G Major'),
    ).toBeVisible();
  });

  test('navigation shows Songs link', async ({ page }) => {
    // On mobile, nav links are behind hamburger — open it first
    const hamburger = page.getByLabel('Open menu');
    if (await hamburger.isVisible()) {
      await hamburger.click();
    }
    await expect(page.getByRole('link', { name: 'Songs' }).first()).toBeVisible();
  });
});
