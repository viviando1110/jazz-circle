# Jazz Circle — Marketing Strategy

Last updated: 2026-02-19

## Goal

Drive organic traffic to jazz-circle.com through multi-channel discovery:
search engines, AI answer engines, community platforms, and eventually
video (post iOS app launch).

## Current Status

| Channel | Status | Owner |
|---------|--------|-------|
| Google SEO | ✅ Active — 107 pages enriched, schema markup deployed | Done |
| Bing / Yahoo / DuckDuckGo | ✅ Sitemap submitted, site scan queued | Done |
| AEO (JSON-LD schema) | ✅ MusicComposition + FAQPage + BreadcrumbList on all song pages | Done |
| llms.txt | ✅ Deployed at jazz-circle.com/llms.txt | Done |
| Grokipedia | 🔄 6 factual errors found, edit submissions ready to file | See grokipedia/ |
| Reddit | 📋 Templates ready, needs manual monitoring | See channels/reddit.md |
| YouTube / TikTok | ⏳ Planned post iOS app launch | See channels/youtube-tiktok.md |
| Wikipedia | ⏳ Future — needs organic backlink strategy | See channels/wikipedia.md |

## Channels Overview

### Search Engines
- **Google**: Primary. 107 enriched song pages, sitemaps submitted,
  H2 headings match search queries ("chord changes", "harmonic analysis").
- **Bing**: Sitemap submitted via Bing Webmaster Tools. Covers Bing, Yahoo,
  DuckDuckGo, and Microsoft Copilot in one submission.
  robots.txt confirmed Allowed (0 errors, 0 warnings in Bing tester).

### AI Answer Engines (AEO)
- **JSON-LD schema** on every song page tells Perplexity, ChatGPT, Gemini
  exactly what each page is about without needing to "read" it.
- **llms.txt** at site root lists all 107 standards for LLM crawlers.
- **Grokipedia edits** get jazz-circle.com cited as a source in xAI's encyclopedia.

### Community
- **Reddit**: Answer jazz harmony questions in r/jazz, r/musictheory,
  r/jazzguitar, r/piano. Templates in channels/reddit.md.
- **Grokipedia**: Submit factual corrections with jazz-circle.com as source.
  Detailed per-song edit files in grokipedia/edits/.

### Video (Post iOS App)
- YouTube Shorts + TikTok planned for after iOS app ships.
- Content strategy in channels/youtube-tiktok.md.

## Key Insight from the Revenue Attribution Chart

Bing (40%) + Yahoo (20%) can outperform Google in some niches.
All three plus DuckDuckGo and Copilot are covered by a single
Bing Webmaster Tools submission. Never optimize for Google only.

## Files in This Folder

```
marketing/
  README.md                    ← This file
  channels/
    bing.md                    ← Bing setup + status
    reddit.md                  ← Reddit strategy + answer templates
    youtube-tiktok.md          ← Video strategy (post iOS)
    wikipedia.md               ← Wikipedia backlink strategy
  grokipedia/
    README.md                  ← Platform overview + submission process
    edits/
      01-anthropology.md       ← Edit submission (bridge chord error)
      02-my-funny-valentine.md ← Edit submission (Eb vs Ab major error)
      03-round-midnight.md     ← Edit submission (Amy Winehouse hallucination)
      04-blue-bossa.md         ← Edit submission (form label error)
      05-autumn-leaves.md      ← Edit submission (key confusion E minor vs G minor)
      06-misty.md              ← Edit submission (geography error)
      07-so-what.md            ← Edit submission (tempo imprecision)
      08-giant-steps.md        ← Edit submission (personnel description)
      09-all-the-things-you-are.md ← Edit submission (bridge description)
      10-donna-lee.md          ← Edit submission (B section vagueness)
```
