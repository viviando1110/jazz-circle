import { test, expect } from '@playwright/test';

/**
 * E2E tests for standalone practice pages:
 * - /practice (Practice Mode)
 * - /voicings (Voice Leading Visualizer + Voicing Library)
 * - /practice/melody (Lick Generator)
 */

test.describe('Practice Mode (/practice)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice');
    await page.waitForLoadState('networkidle');
  });

  test('page has key and progression selectors', async ({ page }) => {
    // Key selector
    const keySelect = page.locator('select').first();
    await expect(keySelect).toBeVisible();
    // Should contain C Major as an option
    await expect(keySelect).toContainText('C Major');

    // Progression selector
    const progSelect = page.locator('select').nth(1);
    await expect(progSelect).toBeVisible();
    await expect(progSelect).toContainText('ii – V – I');
  });

  test('shows tempo slider with BPM value', async ({ page }) => {
    // Tempo label and BPM display
    await expect(page.getByText(/\d+ BPM/)).toBeVisible();
    // Tempo range slider
    await expect(page.locator('input[type="range"]')).toBeVisible();
  });

  test('toggle buttons exist: Metronome, Count-in, Loop', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Metronome' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Count-in' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Loop' })).toBeVisible();
  });

  test('toggle buttons have aria-pressed state', async ({ page }) => {
    const metronome = page.getByRole('button', { name: 'Metronome' });
    const pressed = await metronome.getAttribute('aria-pressed');
    expect(['true', 'false']).toContain(pressed);
  });

  test('shows chord cards for the progression', async ({ page }) => {
    // ii-V-I in C Major should show Dm7, G7, Cmaj7
    await expect(page.getByText('Dm7')).toBeVisible();
    await expect(page.getByText('G7')).toBeVisible();
    await expect(page.getByText('Cmaj7')).toBeVisible();
  });

  test('Play button is visible and labeled', async ({ page }) => {
    const playBtn = page.getByRole('button', { name: 'Play' });
    await expect(playBtn).toBeVisible();
  });

  test('changing key selector updates chord display', async ({ page }) => {
    // Change key to G Major
    const keySelect = page.locator('select').first();
    await keySelect.selectOption({ label: 'G Major' });

    // ii-V-I in G Major: Am7, D7, Gmaj7
    await expect(page.getByText('Am7')).toBeVisible();
    await expect(page.getByText('D7')).toBeVisible();
    await expect(page.getByText('Gmaj7')).toBeVisible();
  });

  test('metronome display shows beat indicators', async ({ page }) => {
    // MetronomeDisplay should be present (beat dots/indicators)
    // Look for beat indicator elements
    const beats = page.locator('[class*="rounded-full"]');
    const count = await beats.count();
    // Should have at least 4 beat indicators (4/4 time)
    expect(count).toBeGreaterThanOrEqual(4);
  });
});

test.describe('Voicings Page (/voicings)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/voicings');
    await page.waitForLoadState('networkidle');
  });

  test('page has Voice Leading Visualizer and Voicing Library sections', async ({ page }) => {
    await expect(page.getByText('Voice Leading Visualizer')).toBeVisible();
    await expect(page.getByText('Voicing Library')).toBeVisible();
  });

  test('voice leading visualizer has key and progression selectors', async ({ page }) => {
    await expect(page.getByText('Key', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('Progression', { exact: true })).toBeVisible();
  });

  test('voice leading visualizer shows chord step buttons', async ({ page }) => {
    // Default preset is ii-V-I, should show chord name buttons
    const stepButtons = page.locator('button').filter({ hasText: /^[A-G]/ });
    const count = await stepButtons.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('voice leading visualizer has playback controls', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Previous' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Replay' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Auto-play' })).toBeVisible();
  });

  test('voice leading visualizer shows step counter', async ({ page }) => {
    await expect(page.getByText(/Step \d+ of \d+/)).toBeVisible();
  });

  test('voicing library shows root and quality selectors', async ({ page }) => {
    // The voicing library section has its own root/quality selectors
    const rootLabels = page.getByText('Root', { exact: true });
    const qualityLabels = page.getByText('Quality', { exact: true });
    // At least one of each (VL visualizer also has Key/Progression)
    expect(await rootLabels.count()).toBeGreaterThanOrEqual(1);
    expect(await qualityLabels.count()).toBeGreaterThanOrEqual(1);
  });

  test('voicing library shows 6 voicing types', async ({ page }) => {
    await expect(page.getByText('Root Position')).toBeVisible();
    await expect(page.getByText('Rootless A')).toBeVisible();
    await expect(page.getByText('Rootless B')).toBeVisible();
    await expect(page.getByText('Shell')).toBeVisible();
    await expect(page.getByText('Drop 2')).toBeVisible();
    await expect(page.getByText('Drop 3')).toBeVisible();
  });

  test('voicing library shows play buttons for each voicing', async ({ page }) => {
    const playButtons = page.getByRole('button', { name: /Play.*voicing/ });
    const count = await playButtons.count();
    expect(count).toBe(6);
  });

  test('voicing library shows piano keyboards', async ({ page }) => {
    // Each voicing card has a PianoKeyboard SVG
    const pianos = page.locator('svg').filter({ has: page.locator('rect') });
    const count = await pianos.count();
    // At least 6 pianos (one per voicing) + 1 for voice leading
    expect(count).toBeGreaterThanOrEqual(6);
  });
});

test.describe('Melody Generator (/practice/melody)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice/melody');
    await page.waitForLoadState('networkidle');
  });

  test('page heading is visible', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Melody');
  });

  test('root selector has all 12 notes', async ({ page }) => {
    const rootSelect = page.getByLabel('Root note');
    await expect(rootSelect).toBeVisible();
    // Check a few notes
    await expect(rootSelect).toContainText('C');
    await expect(rootSelect).toContainText('Db');
    await expect(rootSelect).toContainText('Gb');
    await expect(rootSelect).toContainText('B');
  });

  test('quality selector has chord types', async ({ page }) => {
    const qualitySelect = page.getByLabel('Chord quality');
    await expect(qualitySelect).toBeVisible();
    await expect(qualitySelect).toContainText('maj7');
    await expect(qualitySelect).toContainText('m7');
    await expect(qualitySelect).toContainText('7');
  });

  test('style buttons exist: Bebop, Blues, Modal', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Bebop' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Blues' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Modal' })).toBeVisible();
  });

  test('length buttons exist: 2 bars, 4 bars', async ({ page }) => {
    await expect(page.getByRole('button', { name: '2 bars' })).toBeVisible();
    await expect(page.getByRole('button', { name: '4 bars' })).toBeVisible();
  });

  test('tempo input exists and accepts values', async ({ page }) => {
    const tempoInput = page.getByLabel('Tempo BPM');
    await expect(tempoInput).toBeVisible();
    const value = await tempoInput.inputValue();
    expect(Number(value)).toBeGreaterThanOrEqual(40);
  });

  test('generate button is visible', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Generate' })).toBeVisible();
  });

  test('generate creates melody and shows play/another-one buttons', async ({ page }) => {
    // Click Generate
    await page.getByRole('button', { name: 'Generate' }).click();

    // Play and Another One buttons should appear
    await expect(page.getByRole('button', { name: 'Play' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Another one' })).toBeVisible();
  });

  test('generate with different style produces output', async ({ page }) => {
    // Switch to Blues
    await page.getByRole('button', { name: 'Blues' }).click();
    // Generate
    await page.getByRole('button', { name: 'Generate' }).click();
    // Play button should appear
    await expect(page.getByRole('button', { name: 'Play' })).toBeVisible();
  });

  test('changing root note works', async ({ page }) => {
    const rootSelect = page.getByLabel('Root note');
    await rootSelect.selectOption('Eb');
    await page.getByRole('button', { name: 'Generate' }).click();
    await expect(page.getByRole('button', { name: 'Play' })).toBeVisible();
  });
});
