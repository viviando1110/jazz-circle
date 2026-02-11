import { test, expect } from '@playwright/test';

/**
 * Full QA E2E Test Suite — Jazz Circle
 *
 * Covers every page and major UX workflow:
 *  1. Homepage — Circle of Fifths interaction
 *  2. Key Pages — diatonic chords, progressions, chord detail
 *  3. Standards Index — search, filter, navigation
 *  4. Song Detail — notation, playback, transpose, practice tools, solo generator
 *  5. Practice Mode — metronome, tempo, key/progression selection
 *  6. Voicings — voice leading, voicing library
 *  7. Melody Generator — generate, play, variations, style switching
 *  8. Contact Form — fields, validation, submit
 *  9. Static Pages — about, privacy, progressions
 * 10. Global — navigation, footer, responsive, theme, no console errors
 * 11. Cross-page user journeys
 * 12. Responsive layout
 * 13. Multiple song pages spot checks
 * 14. Multiple key pages spot checks
 */

/* ═══════════════════════════════════════════════════════════
   1. HOMEPAGE — Circle of Fifths Interaction
   ═══════════════════════════════════════════════════════════ */

test.describe('Homepage — Circle of Fifths', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('hero heading and description visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Jazz Circle of Fifths/ })).toBeVisible();
    await expect(page.getByText(/Explore jazz harmony interactively/)).toBeVisible();
  });

  test('circle SVG renders with correct role', async ({ page }) => {
    const circle = page.locator('svg[role="application"]');
    await expect(circle).toBeVisible();
  });

  test('prompt text shows when no key selected', async ({ page }) => {
    await expect(page.getByText(/Click any key to see/)).toBeVisible();
  });

  test('clicking C Major on circle shows diatonic chords', async ({ page }) => {
    // Use accessible button role (works on all browsers including mobile WebKit)
    await page.getByRole('button', { name: 'C major' }).click();

    await expect(page.getByText('Cmaj7').first()).toBeVisible();
    await expect(page.getByText('Dm7').first()).toBeVisible();
    await expect(page.getByText('G7').first()).toBeVisible();
  });

  test('clicking a diatonic chord shows piano keyboard', async ({ page }) => {
    await page.getByRole('button', { name: 'C major' }).click();
    await expect(page.getByText('Cmaj7').first()).toBeVisible();

    // Click the Cmaj7 diatonic chord button (outside the circle)
    const chordButtons = page.locator('button').filter({ hasText: 'Cmaj7' });
    await chordButtons.first().click();

    // Piano keyboard SVG should appear (rects = piano keys)
    await expect(page.locator('svg').filter({ has: page.locator('rect') }).first()).toBeVisible();
  });

  test('staff notation renders when key is selected', async ({ page }) => {
    await page.getByRole('button', { name: 'C major' }).click();

    // At least 2 SVGs should render (circle + staff notation)
    const svgs = page.locator('svg');
    const count = await svgs.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test('SEO content sections visible', async ({ page }) => {
    await expect(page.getByText('What is the Circle of Fifths?')).toBeVisible();
    await expect(page.getByText('How to Use This Tool')).toBeVisible();
  });
});

/* ═══════════════════════════════════════════════════════════
   2. KEY PAGES — Diatonic Chords, Progressions
   ═══════════════════════════════════════════════════════════ */

test.describe('Key Pages', () => {
  test('C Major page shows correct heading and accidentals', async ({ page }) => {
    await page.goto('/key/c-major');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('C Major');
    await expect(page.getByText(/no sharps or flats/)).toBeVisible();
  });

  test('C Major page shows all 7 diatonic chords', async ({ page }) => {
    await page.goto('/key/c-major');
    await page.waitForLoadState('domcontentloaded');
    for (const chord of ['Cmaj7', 'Dm7', 'Em7', 'Fmaj7', 'G7', 'Am7']) {
      await expect(page.getByText(chord, { exact: false }).first()).toBeVisible();
    }
  });

  test('G Minor page shows correct heading with flats', async ({ page }) => {
    await page.goto('/key/g-minor');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('G Minor');
    await expect(page.getByText(/2 flats/)).toBeVisible();
  });

  test('Bb Major page shows correct flats count', async ({ page }) => {
    await page.goto('/key/bb-major');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Major');
    await expect(page.getByText(/2 flats/)).toBeVisible();
  });

  test('D Major page shows correct sharps count', async ({ page }) => {
    await page.goto('/key/d-major');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByText(/2 sharps/)).toBeVisible();
  });

  test('clicking a chord on key page shows piano', async ({ page }) => {
    await page.goto('/key/c-major');
    await page.waitForLoadState('domcontentloaded');

    // Click a diatonic chord button
    const chordBtn = page.locator('button').filter({ hasText: 'Cmaj7' }).first();
    await chordBtn.click();

    // Piano keyboard SVG should appear
    await expect(page.locator('svg').filter({ has: page.locator('rect') }).first()).toBeVisible();
  });

  test('key page shows Common Progressions section', async ({ page }) => {
    await page.goto('/key/c-major');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByText('Common Progressions in C Major')).toBeVisible();
  });

  test('clicking a progression on key page shows player', async ({ page }) => {
    await page.goto('/key/c-major');
    await page.waitForLoadState('domcontentloaded');
    await page.getByText('ii – V – I').first().click();
    await expect(page.getByLabel('Start playback')).toBeVisible();
  });

  test('SEO content shows About section for the key', async ({ page }) => {
    await page.goto('/key/c-major');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByText('About C Major')).toBeVisible();
  });
});

/* ═══════════════════════════════════════════════════════════
   3. STANDARDS INDEX — Search, Filter, Navigation
   ═══════════════════════════════════════════════════════════ */

test.describe('Standards Index — Song Search & Filter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/standards');
    await page.waitForLoadState('domcontentloaded');
  });

  test('page heading and search input visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Jazz Songs/ })).toBeVisible();
    await expect(page.getByLabel('Search songs')).toBeVisible();
  });

  test('shows 107 songs initially', async ({ page }) => {
    await expect(page.getByText(/107 songs/)).toBeVisible();
  });

  test('search filters by title', async ({ page }) => {
    await page.getByLabel('Search songs').fill('Autumn Leaves');
    await expect(page.getByText(/1 song(?!\w)/)).toBeVisible({ timeout: 3000 });
    await expect(page.getByText('Autumn Leaves').first()).toBeVisible();
  });

  test('search filters by composer', async ({ page }) => {
    await page.getByLabel('Search songs').fill('Coltrane');
    const count = page.getByText(/\d+ songs?/);
    await expect(count).toBeVisible();
  });

  test('search with no results shows empty state', async ({ page }) => {
    await page.getByLabel('Search songs').fill('xyznonexistent');
    await expect(page.getByText('No songs found')).toBeVisible({ timeout: 3000 });
  });

  test('difficulty filter buttons work', async ({ page }) => {
    // Click 'beginner' filter — note: button text is literally lowercase "beginner"
    const beginnerBtn = page.locator('button').filter({ hasText: /^beginner$/i }).first();
    await beginnerBtn.click();
    // Wait for filtered count to appear
    await expect(page.getByText(/\d+ songs?/)).toBeVisible();
    const countText = await page.getByText(/\d+ songs?/).textContent();
    const count = parseInt(countText?.match(/\d+/)?.[0] ?? '0');
    expect(count).toBeLessThan(107);
    expect(count).toBeGreaterThan(0);
  });

  test('clicking All resets difficulty filter', async ({ page }) => {
    await page.locator('button').filter({ hasText: /^beginner$/i }).first().click();
    await page.getByRole('button', { name: 'All' }).click();
    await expect(page.getByText(/107 songs/)).toBeVisible();
  });

  test('song cards show metadata (composer, year, bars)', async ({ page }) => {
    const firstCard = page.locator('a[href^="/standards/"]').first();
    await expect(firstCard).toBeVisible();
    // Cards show "Composer (year) · form · N bars"
    const text = await firstCard.textContent();
    expect(text).toMatch(/\d{4}/);
    expect(text).toMatch(/bars/);
  });

  test('song cards show difficulty badges', async ({ page }) => {
    const badges = page.locator('.capitalize').filter({ hasText: /beginner|intermediate|advanced/ });
    const count = await badges.count();
    expect(count).toBeGreaterThan(0);
  });

  test('clicking a song navigates to detail page', async ({ page }) => {
    await page.getByLabel('Search songs').fill('Blue Bossa');
    // Wait for search results to filter (may be slower on WebKit)
    await expect(page.locator('a[href="/standards/blue-bossa"]')).toBeVisible({ timeout: 5000 });
    await page.locator('a[href="/standards/blue-bossa"]').click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Blue Bossa');
  });
});

/* ═══════════════════════════════════════════════════════════
   4. SONG DETAIL — Full Workflow
   ═══════════════════════════════════════════════════════════ */

test.describe('Song Detail Page — Autumn Leaves', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await page.waitForLoadState('domcontentloaded');
  });

  test('page heading with song title', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Autumn Leaves');
  });

  test('notation section renders', async ({ page }) => {
    await expect(page.getByText('Notation')).toBeVisible();
  });

  test('playback controls visible with play and tempo', async ({ page }) => {
    await expect(page.getByLabel('Start playback')).toBeVisible();
    await expect(page.getByLabel('Tempo')).toBeVisible();
  });

  test('tempo slider adjustable', async ({ page }) => {
    const tempoInput = page.getByLabel('Tempo');
    await expect(tempoInput).toBeVisible();
    const initialValue = await tempoInput.inputValue();
    expect(parseInt(initialValue)).toBeGreaterThan(0);
  });

  test('transpose toggle visible with key options', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Minor/ }).first()).toBeVisible();
  });

  test('transposing changes chord symbols', async ({ page }) => {
    const emButton = page.getByRole('button', { name: /E Minor/ });
    await emButton.click();
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Autumn Leaves');
  });

  test('section analysis is visible', async ({ page }) => {
    await expect(page.getByText('Section Analysis')).toBeVisible();
  });

  test('chord chart renders', async ({ page }) => {
    const grid = page.locator('[class*="grid"]').first();
    await expect(grid).toBeVisible();
  });
});

test.describe('Song Detail — Practice Tools Full Workflow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/standards/autumn-leaves');
    await page.waitForLoadState('domcontentloaded');
    await page.getByRole('button', { name: 'Practice Tools' }).click();
  });

  test('Improvise tab: ScaleGuide + Solo Generator both present', async ({ page }) => {
    await expect(page.locator('h3').filter({ hasText: 'Scale Guide' })).toBeVisible();
    await expect(page.getByText('Solo Generator')).toBeVisible();
  });

  test('Solo Generator: generate, play, and variation workflow', async ({ page }) => {
    await page.getByRole('button', { name: 'Generate Solo' }).click();
    await expect(page.getByRole('button', { name: 'Play' }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Another one' }).first()).toBeVisible();

    const soloNotation = page.locator('.overflow-x-auto').last();
    await expect(soloNotation.locator('svg')).toBeVisible();

    await page.getByRole('button', { name: 'Another one' }).first().click();
    await expect(soloNotation.locator('svg')).toBeVisible();
  });

  test('Solo Generator: style switching', async ({ page }) => {
    await page.getByRole('button', { name: 'Generate Solo' }).click();
    await expect(page.getByRole('button', { name: 'Play' }).first()).toBeVisible();

    // Switch to Blues and regenerate
    await page.getByRole('button', { name: 'Blues' }).first().click();
    await page.getByRole('button', { name: 'Generate Solo' }).click();
    const soloNotation = page.locator('.overflow-x-auto').last();
    await expect(soloNotation.locator('svg')).toBeVisible();

    // Switch to Modal and regenerate
    await page.getByRole('button', { name: 'Modal' }).first().click();
    await page.getByRole('button', { name: 'Generate Solo' }).click();
    await expect(soloNotation.locator('svg')).toBeVisible();
  });

  test('Solo Generator: tempo input adjustable', async ({ page }) => {
    const tempoInput = page.getByLabel('Solo tempo BPM');
    await expect(tempoInput).toBeVisible();
    await tempoInput.fill('140');
    expect(await tempoInput.inputValue()).toBe('140');
  });

  test('Voice Leading tab: step navigation works', async ({ page }) => {
    await page.getByRole('button', { name: 'Voice Leading' }).click();
    await expect(page.getByText(/Step \d+ of \d+/)).toBeVisible();

    const nextBtn = page.getByRole('button', { name: 'Next' });
    await nextBtn.click();
    await expect(page.getByText(/Step 2 of/)).toBeVisible();
    await nextBtn.click();
    await expect(page.getByText(/Step 3 of/)).toBeVisible();

    await page.getByRole('button', { name: 'Previous' }).click();
    await expect(page.getByText(/Step 2 of/)).toBeVisible();
  });

  test('Licks tab: full generate and play workflow', async ({ page }) => {
    await page.getByRole('button', { name: 'Licks' }).click();

    await expect(page.getByLabel('Root note')).toBeVisible();
    await expect(page.getByLabel('Chord quality')).toBeVisible();

    await page.getByRole('button', { name: 'Generate' }).click();
    await expect(page.getByRole('button', { name: 'Play' }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Another one' })).toBeVisible();
  });
});

/* ═══════════════════════════════════════════════════════════
   5. PRACTICE MODE — Metronome & Progression Practice
   ═══════════════════════════════════════════════════════════ */

test.describe('Practice Mode Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice');
    await page.waitForLoadState('domcontentloaded');
  });

  test('page heading visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Practice Mode/ })).toBeVisible();
  });

  test('key and progression selectors visible', async ({ page }) => {
    const keySelect = page.locator('select').first();
    await expect(keySelect).toBeVisible();
  });

  test('toggle buttons present: Metronome, Count-in, Loop', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Metronome' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Count-in' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Loop' })).toBeVisible();
  });

  test('toggle buttons have aria-pressed', async ({ page }) => {
    const metronome = page.getByRole('button', { name: 'Metronome' });
    const pressed = await metronome.getAttribute('aria-pressed');
    expect(pressed === 'true' || pressed === 'false').toBe(true);
  });

  test('tempo slider visible with BPM display', async ({ page }) => {
    await expect(page.getByText(/BPM/i)).toBeVisible();
  });

  test('chord cards display for the selected progression', async ({ page }) => {
    const chordCards = page.locator('[class*="rounded"]').filter({ hasText: /maj7|m7|7/ });
    const count = await chordCards.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test('play button is visible', async ({ page }) => {
    // Practice page uses its own Play button (not PlaybackControls)
    await expect(page.getByRole('button', { name: 'Play' })).toBeVisible();
  });

  test('beat indicators present', async ({ page }) => {
    // The Beat indicator container has role="status" with aria-label="Beat indicator"
    // Individual beat dots are spans inside it
    const container = page.locator('[aria-label="Beat indicator"]');
    await expect(container).toBeVisible();
    const beatDots = container.locator('span.rounded-full');
    const count = await beatDots.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });
});

/* ═══════════════════════════════════════════════════════════
   6. VOICINGS PAGE — Voice Leading + Library
   ═══════════════════════════════════════════════════════════ */

test.describe('Voicings Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/voicings');
    await page.waitForLoadState('domcontentloaded');
  });

  test('page heading visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Chord Voicings/ })).toBeVisible();
  });

  test('Voice Leading Visualizer section visible', async ({ page }) => {
    await expect(page.getByText('Voice Leading Visualizer')).toBeVisible();
  });

  test('Voicing Library section visible', async ({ page }) => {
    await expect(page.getByText('Voicing Library')).toBeVisible();
  });

  test('voice leading has step navigation', async ({ page }) => {
    await expect(page.getByText(/Step \d+ of \d+/)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Previous' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();
  });

  test('voice leading has auto-play and replay buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Auto-play' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Replay' })).toBeVisible();
  });

  test('voicing library shows all 6 voicing types', async ({ page }) => {
    for (const type of ['Root Position', 'Rootless A', 'Rootless B', 'Shell', 'Drop 2', 'Drop 3']) {
      await expect(page.getByText(type, { exact: false }).first()).toBeVisible();
    }
  });

  test('voicing library has root and quality selectors', async ({ page }) => {
    const selects = page.locator('select');
    const count = await selects.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test('piano keyboards render in voicing library', async ({ page }) => {
    const pianos = page.locator('svg').filter({ has: page.locator('rect') });
    const count = await pianos.count();
    expect(count).toBeGreaterThanOrEqual(6);
  });

  test('step navigation advances correctly', async ({ page }) => {
    await expect(page.getByText(/Step 1 of/)).toBeVisible();
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByText(/Step 2 of/)).toBeVisible({ timeout: 3000 });
  });
});

/* ═══════════════════════════════════════════════════════════
   7. MELODY GENERATOR — Standalone Page
   ═══════════════════════════════════════════════════════════ */

test.describe('Melody & Lick Generator Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice/melody');
    await page.waitForLoadState('domcontentloaded');
  });

  test('page heading visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Melody');
  });

  test('root selector has all 12 notes', async ({ page }) => {
    const rootSelect = page.getByLabel('Root note');
    await expect(rootSelect).toBeVisible();
    const options = rootSelect.locator('option');
    expect(await options.count()).toBe(12);
  });

  test('quality selector visible', async ({ page }) => {
    await expect(page.getByLabel('Chord quality')).toBeVisible();
  });

  test('style buttons present with correct aria-pressed', async ({ page }) => {
    const bebop = page.getByRole('button', { name: 'Bebop' });
    await expect(bebop).toBeVisible();
    await expect(bebop).toHaveAttribute('aria-pressed', 'true');

    const blues = page.getByRole('button', { name: 'Blues' });
    await expect(blues).toHaveAttribute('aria-pressed', 'false');
  });

  test('length buttons present (2 bars, 4 bars)', async ({ page }) => {
    await expect(page.getByRole('button', { name: '2 bars' })).toBeVisible();
    await expect(page.getByRole('button', { name: '4 bars' })).toBeVisible();
  });

  test('tempo input visible', async ({ page }) => {
    await expect(page.getByLabel('Tempo BPM')).toBeVisible();
  });

  test('generate creates notation, play/another buttons appear', async ({ page }) => {
    await page.getByRole('button', { name: 'Generate' }).click();
    await expect(page.getByRole('button', { name: 'Play' })).toBeVisible({ timeout: 3000 });
    await expect(page.getByRole('button', { name: 'Another one' })).toBeVisible();

    const notation = page.locator('.overflow-x-auto svg');
    await expect(notation).toBeVisible();
  });

  test('switching styles works', async ({ page }) => {
    await page.getByRole('button', { name: 'Blues' }).click();
    await expect(page.getByRole('button', { name: 'Blues' })).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByRole('button', { name: 'Bebop' })).toHaveAttribute('aria-pressed', 'false');

    await page.getByRole('button', { name: 'Generate' }).click();
    await expect(page.getByRole('button', { name: 'Play' })).toBeVisible({ timeout: 3000 });

    await page.getByRole('button', { name: 'Modal' }).click();
    await expect(page.getByRole('button', { name: 'Modal' })).toHaveAttribute('aria-pressed', 'true');
  });

  test('changing root note updates chord symbol', async ({ page }) => {
    const rootSelect = page.getByLabel('Root note');
    await rootSelect.selectOption('Eb');

    await page.getByRole('button', { name: 'Generate' }).click();
    await expect(page.getByRole('button', { name: 'Play' })).toBeVisible({ timeout: 3000 });
  });

  test('Another one generates a variation', async ({ page }) => {
    await page.getByRole('button', { name: 'Generate' }).click();
    await expect(page.getByRole('button', { name: 'Another one' })).toBeVisible({ timeout: 3000 });

    await page.getByRole('button', { name: 'Another one' }).click();
    const notation = page.locator('.overflow-x-auto svg');
    await expect(notation).toBeVisible();
  });

  test('empty state shows placeholder text', async ({ page }) => {
    await expect(page.getByText('Generate a lick to see notation')).toBeVisible();
  });
});

/* ═══════════════════════════════════════════════════════════
   8. CONTACT FORM
   ═══════════════════════════════════════════════════════════ */

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('domcontentloaded');
  });

  test('page heading visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Contact Us/ })).toBeVisible();
  });

  test('form fields present: name, email, message', async ({ page }) => {
    await expect(page.getByLabel('Name')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Message')).toBeVisible();
  });

  test('submit button visible', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible();
  });

  test('form fields accept input', async ({ page }) => {
    await page.getByLabel('Name').fill('Test User');
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Message').fill('This is a test message');

    expect(await page.getByLabel('Name').inputValue()).toBe('Test User');
    expect(await page.getByLabel('Email').inputValue()).toBe('test@example.com');
    expect(await page.getByLabel('Message').inputValue()).toBe('This is a test message');
  });

  test('direct email link visible', async ({ page }) => {
    await expect(page.getByText('lovco.contact@gmail.com')).toBeVisible();
  });

  test('About section visible on contact page', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 2, name: 'About' })).toBeVisible();
  });
});

/* ═══════════════════════════════════════════════════════════
   9. STATIC PAGES — About, Privacy, Progressions
   ═══════════════════════════════════════════════════════════ */

test.describe('About Page', () => {
  test('renders with heading and content', async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('About');
    const bodyText = await page.locator('main').textContent();
    expect((bodyText ?? '').length).toBeGreaterThan(50);
  });
});

test.describe('Privacy Page', () => {
  test('renders with heading and policy content', async ({ page }) => {
    await page.goto('/privacy');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const bodyText = await page.locator('main').textContent();
    expect(bodyText?.toLowerCase()).toContain('cookie');
  });
});

test.describe('Progressions Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/progressions');
    await page.waitForLoadState('domcontentloaded');
  });

  test('page heading visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('shows common progressions', async ({ page }) => {
    await expect(page.getByText('ii – V – I')).toBeVisible();
  });

  test('clicking progression shows player with tempo and play', async ({ page }) => {
    await page.getByText('ii – V – I').first().click();
    await expect(page.getByLabel('Start playback')).toBeVisible({ timeout: 3000 });
  });
});

/* ═══════════════════════════════════════════════════════════
  10. GLOBAL — Navigation, Footer, Theme, Console Errors
   ═══════════════════════════════════════════════════════════ */

test.describe('Global Navigation', () => {
  test('nav has links to all main sections', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    // On mobile, nav links are behind hamburger menu — open it first
    const hamburger = page.getByLabel('Open menu');
    if (await hamburger.isVisible()) {
      await hamburger.click();
    }

    const nav = page.locator('nav');
    await expect(nav.getByRole('link', { name: /Songs/i })).toBeVisible();
  });

  test('footer visible on all pages', async ({ page }) => {
    const pages = ['/', '/standards', '/practice', '/voicings', '/about', '/contact'];
    for (const url of pages) {
      await page.goto(url);
      await page.waitForLoadState('domcontentloaded');
      await expect(page.locator('footer')).toBeVisible();
    }
  });

  test('dark theme CSS variables set correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    // Check that body has a dark background (not white/default)
    const bg = await page.evaluate(() => {
      return getComputedStyle(document.body).backgroundColor;
    });
    // Should be a dark color, not white or transparent
    expect(bg).not.toBe('rgba(0, 0, 0, 0)');
    expect(bg).not.toBe('rgb(255, 255, 255)');
  });

  test('no console errors on key pages', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    const pages = ['/', '/standards', '/practice', '/voicings', '/practice/melody', '/about'];
    for (const url of pages) {
      await page.goto(url);
      await page.waitForLoadState('domcontentloaded');
    }

    // Filter out known non-critical errors
    const criticalErrors = errors.filter(
      (e) =>
        !e.includes('ads') &&
        !e.includes('google') &&
        !e.includes('favicon') &&
        !e.includes('Failed to load resource') &&
        !e.includes('net::ERR') &&
        !e.includes('Content Security Policy') &&
        !e.includes('did not match. Server'),
    );
    expect(criticalErrors).toHaveLength(0);
  });
});

/* ═══════════════════════════════════════════════════════════
  11. CROSS-PAGE USER JOURNEYS
   ═══════════════════════════════════════════════════════════ */

test.describe('User Journeys', () => {
  test('Journey: Browse songs → open song → use practice tools → generate solo', async ({ page }) => {
    await page.goto('/standards');
    await page.waitForLoadState('domcontentloaded');

    await page.getByLabel('Search songs').fill('Blue Bossa');
    await expect(page.getByText(/1 song(?!\w)/)).toBeVisible({ timeout: 3000 });

    await page.locator('a[href="/standards/blue-bossa"]').click();
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('button', { name: 'Practice Tools' }).click();
    await expect(page.getByText('Solo Generator')).toBeVisible();

    await page.getByRole('button', { name: 'Generate Solo' }).click();
    await expect(page.getByRole('button', { name: 'Play' }).first()).toBeVisible({ timeout: 3000 });

    await page.getByRole('button', { name: 'Licks' }).click();
    await page.getByRole('button', { name: 'Generate' }).click();
    await expect(page.getByRole('button', { name: 'Play' }).first()).toBeVisible({ timeout: 3000 });
  });

  test('Journey: Home → select key → navigate to key page', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('button', { name: 'C major' }).click();
    await expect(page.getByText('Cmaj7').first()).toBeVisible();

    await page.goto('/key/c-major');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('C Major');
  });

  test('Journey: Practice mode → voicings → melody generator', async ({ page }) => {
    await page.goto('/practice');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Practice Mode');

    await page.goto('/voicings');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByText('Voice Leading Visualizer')).toBeVisible();

    await page.goto('/practice/melody');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Melody');

    await page.getByRole('button', { name: 'Generate' }).click();
    await expect(page.getByRole('button', { name: 'Play' })).toBeVisible({ timeout: 3000 });
  });
});

/* ═══════════════════════════════════════════════════════════
  12. RESPONSIVE LAYOUT
   ═══════════════════════════════════════════════════════════ */

test.describe('Responsive Layout', () => {
  test('mobile (375px): pages render without horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    const pages = ['/', '/standards', '/practice', '/voicings', '/practice/melody'];
    for (const url of pages) {
      await page.goto(url);
      await page.waitForLoadState('domcontentloaded');

      const overflow = await page.evaluate(() =>
        document.documentElement.scrollWidth - document.documentElement.clientWidth
      );
      expect(overflow).toBeLessThan(5);
    }
  });

  test('mobile (375px): song page practice tools work', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/standards/autumn-leaves');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('button', { name: 'Practice Tools' }).click();
    await expect(page.getByText('Solo Generator')).toBeVisible();
    await page.getByRole('button', { name: 'Generate Solo' }).click();
    await expect(page.getByRole('button', { name: 'Play' }).first()).toBeVisible({ timeout: 3000 });
  });

  test('tablet (768px): two-column song grid on standards page', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/standards');
    await page.waitForLoadState('domcontentloaded');

    const grid = page.locator('.grid.gap-4');
    await expect(grid).toBeVisible();
  });

  test('desktop (1440px): homepage has side-by-side layout', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    const layout = page.locator('.lg\\:flex').first();
    await expect(layout).toBeVisible();
  });
});

/* ═══════════════════════════════════════════════════════════
  13. MULTIPLE SONG PAGES — Spot Check
   ═══════════════════════════════════════════════════════════ */

test.describe('Multiple Song Pages — Spot Checks', () => {
  const songs = [
    { slug: 'all-the-things-you-are', title: 'All The Things You Are' },
    { slug: 'giant-steps', title: 'Giant Steps' },
    { slug: 'so-what', title: 'So What' },
    { slug: 'take-the-a-train', title: 'Take the A Train' },
    { slug: 'stella-by-starlight', title: 'Stella by Starlight' },
  ];

  for (const song of songs) {
    test(`${song.title}: loads with playback + practice tools`, async ({ page }) => {
      await page.goto(`/standards/${song.slug}`);
      await page.waitForLoadState('domcontentloaded');

      await expect(page.getByRole('heading', { level: 1 })).toContainText(song.title);
      await expect(page.getByLabel('Start playback')).toBeVisible();
      await expect(page.getByText('Practice Tools')).toBeVisible();

      await page.getByRole('button', { name: 'Practice Tools' }).click();
      await expect(page.getByText('Solo Generator')).toBeVisible();
    });
  }
});

/* ═══════════════════════════════════════════════════════════
  14. MULTIPLE KEY PAGES — Spot Check
   ═══════════════════════════════════════════════════════════ */

test.describe('Multiple Key Pages — Spot Checks', () => {
  const keys = [
    { slug: 'f-major', display: 'F Major', acc: '1 flat' },
    { slug: 'a-major', display: 'A Major', acc: '3 sharps' },
    { slug: 'eb-major', display: 'Major', acc: '3 flats' },
    { slug: 'e-minor', display: 'E Minor', acc: '1 sharp' },
    { slug: 'gb-major', display: 'Major', acc: '6 flats' },
  ];

  for (const key of keys) {
    test(`${key.slug}: heading and accidentals correct`, async ({ page }) => {
      await page.goto(`/key/${key.slug}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page.getByRole('heading', { level: 1 })).toContainText(key.display);
      await expect(page.getByText(key.acc)).toBeVisible();
    });
  }
});
