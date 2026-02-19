# Grokipedia — Strategy & Submission Guide

## What Is Grokipedia

- Launched October 27, 2025 by xAI (Elon Musk's AI company)
- ~6 million AI-generated articles powered by Grok
- Wikipedia-like layout: hierarchical headings, Knowledge Panels (sidebar),
  internal hyperlinks
- **Key difference from Wikipedia:** No direct user editing.
  Users submit "change requests" — Grok AI reviews and approves/denies.
  No public talk pages, no diff tools, no rollback wars.

## Why It Matters for Jazz Circle

1. Grokipedia articles for jazz standards contain factual errors
   (documented in edits/ folder). Correcting them with jazz-circle.com
   as the cited source gets us referenced in the article.
2. Grokipedia is indexed by Bing and Google — those article pages rank.
3. As xAI's Grok model uses Grokipedia as training/grounding data,
   being cited there improves our AEO (Answer Engine Optimization) posture
   with Grok/Copilot specifically.

## How to Submit an Edit

1. Go to the article URL (listed in each edit file)
2. **Highlight the exact text** you want to change (click and drag)
3. A "Suggest Edit" button or tooltip appears near the highlighted text
   (alternatively, use the "Edit" or "Suggest a change" button in the top-right)
4. A modal opens — paste in the replacement text
5. Add a source URL in the citation field: `https://jazz-circle.com/standards/[slug]`
6. Submit

Each file in edits/ gives you:
- The article URL
- The exact text to highlight (copy this, then find and highlight it on the page)
- The replacement text (paste this into the modal)
- The reason (your justification in the submission notes)
- Our source link

## Submission Priority

File edits in this order — clearest errors first, highest approval chance:

| Priority | File | Error Type |
|----------|------|-----------|
| 🔴 1 | 01-anthropology.md | Bridge chord structure is factually wrong |
| 🔴 2 | 02-my-funny-valentine.md | Wrong key stated (Eb vs Ab) |
| 🔴 3 | 03-round-midnight.md | AI hallucination (fake Winehouse recording) |
| 🔴 4 | 04-blue-bossa.md | Form label contradicts chord listing in same article |
| 🟡 5 | 05-autumn-leaves.md | Key ambiguity misleads learners |
| 🟡 6 | 06-misty.md | Geographically impossible claim |
| 🟢 7 | 07-so-what.md | Tempo imprecision |
| 🟢 8 | 08-giant-steps.md | Personnel description too broad |
| 🟢 9 | 09-all-the-things-you-are.md | Bridge description misleading |
| 🟢 10 | 10-donna-lee.md | B section description vague |

## Tracking

Update the Status checkbox in each edit file after submission.
Note the date and whether Grok approved/denied.

## Chrome Extension (Future)

A Claude-powered Chrome extension could automate this workflow:
1. Read the edit file for the current Grokipedia page
2. Find and highlight the target text automatically
3. Pre-fill the suggestion modal with the replacement text
4. One-click submit

See: https://github.com/anthropics/claude-code for building Claude tools.
This would be a Claude Computer Use integration rather than a standard
Chrome extension — worth building once we have 50+ edits queued.
