#!/usr/bin/env node
/**
 * submit.js — Semi-automated Grokipedia edit submission
 *
 * Playwright fills all form fields; you review and click "Submit suggestion".
 * Browser profile is saved between runs — log in once, reuse forever.
 *
 * Setup (one time):
 *   npm install
 *   npx playwright install chromium
 *   node submit.js --login
 *
 * Usage (from marketing/grokipedia/):
 *   node submit.js <slug>              # Submit one song's edits
 *   node submit.js so-what autumn-leaves donna-lee  # Multiple songs
 *   node submit.js --all              # All unsubmitted edits
 *   node submit.js --login            # Re-authenticate
 *
 * Flow per edit:
 *   1. Opens article page
 *   2a. If highlight text is specific: Playwright auto-selects it
 *   2b. If generated template: prints search hint, you select text manually
 *   3. Clicks "Suggest Edit" button in floating tooltip
 *   4. Auto-fills reason + replacement text + source
 *   5. PAUSES — you review, adjust if needed, click "Submit suggestion"
 *   6. You confirm submission → .md file updated to [x] Submitted
 */

const { chromium } = require('playwright');
const { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } = require('fs');
const { join } = require('path');
const readline = require('readline');

const EDITS_DIR = join(__dirname, 'edits');
const PROFILE_DIR = join(__dirname, '.browser-profile');

// ────────────────────────────────────────────────────────────
// .md file parser
// ────────────────────────────────────────────────────────────

function parseEditFile(slug) {
  const filepath = join(EDITS_DIR, `${slug}.md`);
  if (!existsSync(filepath)) throw new Error(`No edit file found: edits/${slug}.md`);
  const content = readFileSync(filepath, 'utf-8');

  // Article URL
  const urlMatch = content.match(/\*\*Article URL:\*\*\s*(https?:\/\/\S+)/);
  const articleUrl = urlMatch ? urlMatch[1] : null;

  // Split into H2 edit sections
  const rawSections = content.split(/(?=^## Edit #\d+)/m).filter(s => s.startsWith('## Edit #'));

  const edits = rawSections.map((section, i) => {
    // Already submitted?
    const submitted = /\[x\] Submitted/.test(section);

    // Title from section header (e.g. "— Add Bar-by-Bar Chord Progression")
    const titleMatch = section.match(/^## Edit #\d+[^\n]*\n/);
    const title = titleMatch ? titleMatch[0].replace(/^## Edit #\d+\s*[—–-]?\s*/, '').trim() : `Edit #${i + 1}`;

    // Highlight text — first ``` block after "### Exact Text to Highlight"
    const hlMatch = section.match(/###\s*Exact Text to Highlight[\s\S]*?```\n([\s\S]*?)```/);
    const hlRaw = hlMatch ? hlMatch[1].trim() : null;
    // Detect generated template placeholder
    const isTemplate = !hlRaw || /\[Song\]|\[key\]|\[vague|^Find a sentence/m.test(hlRaw);

    // Search hint (for manual mode)
    const hintMatch = section.match(/search for:\s*([`\w\s'"\/|]+)/i);
    const searchHint = hintMatch ? hintMatch[1].replace(/`/g, '').trim() : null;

    // Replacement text — ``` block after "Replacement Text" OR "Content to Add..."
    const replMatch = section.match(/###\s*(?:Replacement Text|Content to Add[^\n]*)\s*\n```\n([\s\S]*?)```/);
    const replacement = replMatch ? replMatch[1].trim() : null;

    // Reason / submission notes
    const reasonMatch = section.match(/###\s*Reason for Submission Notes\s*\n```\n([\s\S]*?)```/);
    const reason = reasonMatch ? reasonMatch[1].trim() : null;

    // Source citation
    const sourceMatch = section.match(/###\s*Source Citation\s*\n```\n([\s\S]*?)```/);
    const source = sourceMatch ? sourceMatch[1].trim() : null;

    return {
      index: i,
      title,
      submitted,
      highlightText: isTemplate ? null : hlRaw,
      needsManualHighlight: isTemplate,
      searchHint,
      replacement,
      reason,
      source,
    };
  });

  return { articleUrl, edits, filepath };
}

// Mark the next [ ] Submitted → [x] Submitted in the file
function markSubmitted(filepath) {
  const content = readFileSync(filepath, 'utf-8');
  const updated = content.replace('[ ] Submitted', '[x] Submitted');
  writeFileSync(filepath, updated, 'utf-8');
}

// ────────────────────────────────────────────────────────────
// Readline helper
// ────────────────────────────────────────────────────────────

function prompt(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => rl.question(question, ans => { rl.close(); resolve(ans.trim()); }));
}

// ────────────────────────────────────────────────────────────
// Programmatic text selection
// Returns true if text was found and selected, false otherwise
// ────────────────────────────────────────────────────────────

async function selectText(page, text) {
  return page.evaluate((targetText) => {
    // Walk all text nodes in document.body looking for the target
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
      const idx = node.textContent.indexOf(targetText);
      if (idx === -1) continue;

      const range = document.createRange();
      range.setStart(node, idx);
      range.setEnd(node, idx + targetText.length);

      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);

      // Dispatch mouseup on the containing element to trigger the tooltip
      const el = node.parentElement;
      el.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));

      return true;
    }
    return false;
  }, text);
}

// ────────────────────────────────────────────────────────────
// Wait for the "Suggest Edit" tooltip button to appear
// ────────────────────────────────────────────────────────────

async function waitForSuggestButton(page, timeoutMs = 3000) {
  try {
    await page.waitForFunction(() => {
      const buttons = Array.from(document.querySelectorAll('button, [role="button"]'));
      return buttons.some(b => /suggest.*(edit|an edit)/i.test(b.textContent));
    }, { timeout: timeoutMs });
    return true;
  } catch {
    return false;
  }
}

// ────────────────────────────────────────────────────────────
// Fill the suggest-edit modal form
// ────────────────────────────────────────────────────────────

async function fillForm(page, edit) {
  // Primary reason / summary textarea (first visible textarea)
  if (edit.reason) {
    try {
      const textareas = page.locator('textarea');
      const count = await textareas.count();
      if (count > 0) {
        await textareas.first().fill(edit.reason);
        console.log('   ✅ Filled: reason/summary field');
      }
    } catch {
      console.log('   ⚠️  Could not auto-fill reason — please type it manually');
    }
  }

  // Expand "Edit content (optional)" collapsible and fill replacement text
  if (edit.replacement) {
    try {
      // Try to find and click the expand button
      const expandBtn = page.locator('button, [role="button"], summary').filter({ hasText: /edit content|optional/i }).first();
      if (await expandBtn.isVisible({ timeout: 1500 })) {
        await expandBtn.click();
        await page.waitForTimeout(400);
        console.log('   ✅ Expanded: "Edit content (optional)" field');
      }

      // Fill the second textarea (the replacement content area)
      const textareas = page.locator('textarea');
      const count = await textareas.count();
      if (count >= 2) {
        await textareas.nth(1).fill(edit.replacement);
        console.log('   ✅ Filled: replacement content field');
      } else {
        console.log('   ⚠️  Replacement content field not found — paste it manually');
        console.log('   Content:\n' + edit.replacement.substring(0, 200) + '...');
      }
    } catch {
      console.log('   ⚠️  Could not fill replacement content — paste it manually');
    }
  }

  // Source citation field (last text/url input, or labeled "source")
  if (edit.source) {
    try {
      const sourceInput = page.locator('input[type="text"], input[type="url"], input[placeholder*="source" i]').last();
      if (await sourceInput.isVisible({ timeout: 1500 })) {
        await sourceInput.fill(edit.source);
        console.log('   ✅ Filled: source field');
      }
    } catch {
      console.log(`   ⚠️  Source field not found — enter manually: ${edit.source}`);
    }
  }
}

// ────────────────────────────────────────────────────────────
// Main flow for one edit
// ────────────────────────────────────────────────────────────

async function processEdit(page, edit, articleUrl) {
  console.log(`\n   📝 ${edit.title}`);

  // Navigate if needed
  if (!page.url().startsWith(articleUrl.replace(/\/$/, ''))) {
    await page.goto(articleUrl, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
  }

  let formIsOpen = false;

  if (edit.highlightText) {
    // AUTO MODE: programmatically select the exact text
    console.log('   🔍 Auto-selecting text...');
    const found = await selectText(page, edit.highlightText);

    if (found) {
      console.log('   ✅ Text selected — waiting for "Suggest Edit" tooltip...');
      await page.waitForTimeout(800);

      const tooltipVisible = await waitForSuggestButton(page, 3000);
      if (tooltipVisible) {
        // Click the tooltip button
        await page.locator('button, [role="button"]').filter({ hasText: /suggest.*(edit|an edit)/i }).first().click();
        await page.waitForTimeout(1000);
        formIsOpen = true;
      } else {
        console.log('   ⚠️  Tooltip did not appear after auto-selection. Switching to manual mode.');
      }
    } else {
      console.log('   ⚠️  Exact text not found on page (may have changed). Switching to manual mode.');
    }
  }

  if (!formIsOpen) {
    // MANUAL MODE: guide user to select text and trigger tooltip
    console.log('   📋 Manual selection needed:');
    if (edit.searchHint) {
      console.log(`      Ctrl+F / Cmd+F → search for: ${edit.searchHint}`);
    }
    console.log('      Highlight the target text → click "Suggest Edit" in the floating tooltip');
    await prompt('      Press Enter when the suggest-edit form is open... ');
  }

  // Fill the form
  await fillForm(page, edit);

  // Pause for human review
  console.log('\n   ✋ SUBMIT STEP:');
  console.log('      Review all fields in the form, make any corrections needed.');
  console.log('      Then click "Submit suggestion" in the browser.');
  const answer = await prompt('      After clicking Submit, press Enter to confirm (or "skip" to skip): ');

  return answer.toLowerCase() !== 'skip';
}

// ────────────────────────────────────────────────────────────
// Entry point
// ────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--help') {
    console.log([
      'Usage: node submit.js <slug> [<slug2>...] | --all | --login',
      '',
      'Examples:',
      '  node submit.js --login            # First-time auth setup',
      '  node submit.js so-what            # Submit So What edits',
      '  node submit.js so-what autumn-leaves  # Multiple songs',
      '  node submit.js --all              # All unsubmitted edits',
    ].join('\n'));
    process.exit(0);
  }

  // Collect slugs
  let slugs;
  if (args[0] === '--all') {
    slugs = readdirSync(EDITS_DIR)
      .filter(f => f.endsWith('.md'))
      .map(f => f.replace('.md', ''))
      .sort();
  } else if (args[0] === '--login') {
    slugs = [];
  } else {
    slugs = args;
  }

  // Launch persistent browser (session saved between runs)
  mkdirSync(PROFILE_DIR, { recursive: true });
  console.log('🚀 Launching browser...');
  const browser = await chromium.launchPersistentContext(PROFILE_DIR, {
    headless: false,
    viewport: { width: 1280, height: 900 },
    slowMo: 30,
  });
  const page = await browser.newPage();

  // Check login status
  await page.goto('https://grokipedia.com', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const isLoggedIn = await page.evaluate(() => {
    // Look for any sign of a logged-in user (avatar, account menu, user name)
    const text = document.body.innerText;
    const loggedInIndicators = ['Sign out', 'Log out', 'Your edits', 'Edits History'];
    return loggedInIndicators.some(s => text.includes(s));
  });

  if (!isLoggedIn || args[0] === '--login') {
    console.log('\n🔐 Please log in to Grokipedia:');
    console.log('   Click "Sign in" in the browser → use your X (Twitter) account');
    await prompt('   Press Enter when you are fully logged in... ');
    console.log('✅ Session saved to .browser-profile/ — future runs will be automatic.');
  }

  if (args[0] === '--login') {
    await browser.close();
    return;
  }

  // Process each slug
  let totalSubmitted = 0;
  let totalSkipped = 0;

  for (const slug of slugs) {
    let parsed;
    try {
      parsed = parseEditFile(slug);
    } catch (e) {
      console.error(`\n❌ ${slug}: ${e.message}`);
      continue;
    }

    const { articleUrl, edits, filepath } = parsed;

    if (!articleUrl) {
      console.error(`\n❌ ${slug}: No article URL in .md file`);
      continue;
    }

    const pending = edits.filter(e => !e.submitted);
    if (pending.length === 0) {
      console.log(`\n⏭️  ${slug}: all edits already submitted`);
      continue;
    }

    console.log(`\n${'─'.repeat(60)}`);
    console.log(`📄 ${slug}`);
    console.log(`   URL: ${articleUrl}`);
    console.log(`   ${pending.length} pending edit(s) of ${edits.length} total`);

    // Navigate to article once
    await page.goto(articleUrl, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);

    for (const edit of edits) {
      if (edit.submitted) {
        console.log(`\n   ⏭️  Edit #${edit.index + 1}: already submitted`);
        continue;
      }

      const wasSubmitted = await processEdit(page, edit, articleUrl);

      if (wasSubmitted) {
        markSubmitted(filepath);
        totalSubmitted++;
        console.log(`   ✅ Edit #${edit.index + 1} marked as [x] Submitted`);
      } else {
        totalSkipped++;
        console.log(`   ⏭️  Edit #${edit.index + 1} skipped`);
      }

      // Brief pause between edits on the same article
      if (edits.indexOf(edit) < edits.length - 1) {
        await page.waitForTimeout(1000);
      }
    }
  }

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`Done: ${totalSubmitted} submitted, ${totalSkipped} skipped`);
  await prompt('\nPress Enter to close the browser... ');
  await browser.close();
}

main().catch(err => {
  console.error('\nFatal error:', err.message);
  process.exit(1);
});
