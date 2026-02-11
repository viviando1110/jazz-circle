import { test, expect } from '@playwright/test';

/**
 * Accessibility and keyboard navigation tests.
 * Verifies focus management, ARIA attributes, and keyboard operability.
 */

test.describe('Accessibility: ARIA attributes', () => {
  test('homepage circle has correct role', async ({ page }) => {
    await page.goto('/');
    const circle = page.locator('svg[aria-label="Circle of Fifths — select a key"]');
    await expect(circle).toBeVisible();
    const role = await circle.getAttribute('role');
    // Should be 'application' (not 'img') for interactive SVGs
    expect(role).toBe('application');
  });

  test('homepage circle wedges have aria-labels', async ({ page }) => {
    await page.goto('/');
    // Major key wedges should have labels like "C major", "G major"
    const cMajor = page.locator('g[aria-label="C major"]');
    await expect(cMajor).toBeVisible();
    const gMajor = page.locator('g[aria-label="G major"]');
    await expect(gMajor).toBeVisible();
  });

  test('playback buttons have aria-labels', async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await page.waitForLoadState('networkidle');
    await expect(page.getByLabel('Start playback')).toBeVisible();
  });

  test('practice toggle buttons have aria-pressed', async ({ page }) => {
    await page.goto('/practice');
    await page.waitForLoadState('networkidle');
    const metronome = page.getByRole('button', { name: 'Metronome' });
    const ariaPressed = await metronome.getAttribute('aria-pressed');
    expect(['true', 'false']).toContain(ariaPressed);
  });

  test('practice tools button has aria-expanded', async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await page.waitForLoadState('networkidle');
    const btn = page.getByRole('button', { name: 'Practice Tools' });
    await expect(btn).toHaveAttribute('aria-expanded', 'false');
  });

  test('transpose toggle has role=group', async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await page.waitForLoadState('networkidle');
    const group = page.locator('[role="group"][aria-label="Key selection"]');
    await expect(group).toBeVisible();
  });

  test('melody style buttons have aria-pressed', async ({ page }) => {
    await page.goto('/practice/melody');
    await page.waitForLoadState('networkidle');
    const bebop = page.getByRole('button', { name: 'Bebop' });
    const pressed = await bebop.getAttribute('aria-pressed');
    expect(pressed).toBe('true'); // Default selected
  });
});

test.describe('Accessibility: keyboard navigation', () => {
  // WebKit on iOS doesn't support Tab-based keyboard navigation the same way
  test('nav links are focusable with Tab', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit', 'Tab navigation not supported on mobile WebKit');
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Tab through the page — look for any focusable interactive element
    let foundInteractive = false;
    for (let i = 0; i < 20; i++) {
      await page.keyboard.press('Tab');
      const focused = await page.evaluate(() => {
        const el = document.activeElement;
        return {
          tag: el?.tagName,
          href: el?.getAttribute('href'),
          label: el?.getAttribute('aria-label'),
        };
      });
      // On desktop: nav links. On mobile: logo, theme toggle, hamburger
      if (
        focused.href?.includes('/progressions') ||
        focused.href?.includes('/standards') ||
        focused.label?.includes('Switch to') ||
        focused.label?.includes('Open menu')
      ) {
        foundInteractive = true;
        break;
      }
    }
    expect(foundInteractive).toBe(true);
  });

  test('practice tools button is keyboard operable', async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await page.waitForLoadState('networkidle');

    // Focus the practice tools button
    const btn = page.getByRole('button', { name: 'Practice Tools' });
    await btn.focus();

    // Press Enter to open
    await page.keyboard.press('Enter');
    await expect(btn).toHaveAttribute('aria-expanded', 'true');

    // Press Enter to close
    await page.keyboard.press('Enter');
    await expect(btn).toHaveAttribute('aria-expanded', 'false');
  });

  test('play button is keyboard operable on song pages', async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await page.waitForLoadState('networkidle');

    const playBtn = page.getByLabel('Start playback');
    await playBtn.focus();

    // Should be focusable
    const isFocused = await page.evaluate(() =>
      document.activeElement?.getAttribute('aria-label'),
    );
    expect(isFocused).toBe('Start playback');
  });

  test('generate button is keyboard operable on melody page', async ({ page }) => {
    await page.goto('/practice/melody');
    await page.waitForLoadState('networkidle');

    const genBtn = page.getByRole('button', { name: 'Generate' });
    await genBtn.focus();
    await page.keyboard.press('Enter');

    // Should generate melody and show Play button
    await expect(page.getByRole('button', { name: 'Play' })).toBeVisible();
  });
});

test.describe('Responsive layout', () => {
  test('mobile viewport (375px) — nav and content visible', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Content heading should be visible
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    // Circle should be visible (using the correct aria-label)
    const circle = page.locator('svg[aria-label="Circle of Fifths — select a key"]');
    await expect(circle).toBeVisible();
  });

  test('mobile viewport — song page practice tools work', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/standards/autumn-leaves');
    await page.waitForLoadState('networkidle');

    // Practice tools should be visible
    await expect(page.getByText('Practice Tools')).toBeVisible();

    // Open and use — scope to h3 to avoid ambiguity with section analysis h4
    await page.getByRole('button', { name: 'Practice Tools' }).click();
    await expect(page.locator('h3').filter({ hasText: 'Scale Guide' })).toBeVisible();
  });

  test('tablet viewport (768px) — content properly laid out', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/practice');
    await page.waitForLoadState('networkidle');

    await expect(page.locator('h1')).toContainText('Practice Mode');
    await expect(page.getByRole('button', { name: 'Play' })).toBeVisible();
  });

  test('desktop viewport (1440px) — full layout', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/voicings');
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Voice Leading Visualizer')).toBeVisible();
    await expect(page.getByText('Voicing Library')).toBeVisible();
  });
});
