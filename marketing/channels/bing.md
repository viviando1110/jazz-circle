# Bing Webmaster Tools — Setup & Status

## Status: ✅ Complete

## What Was Done

- Sitemap submitted: `https://jazz-circle.com/sitemap.xml`
- Page indexing request submitted manually
- Site scan initiated (status: Queued — normal, will complete within 24-48 hrs)
- robots.txt verified: 0 errors, 0 warnings, Bingbot = Allowed

## Why Bing Matters

One Bing submission covers four channels:
- **Bing** (direct)
- **Yahoo** (uses Bing index)
- **DuckDuckGo** (uses Bing for most results)
- **Microsoft Copilot** (AI chat, grounded in Bing index)

Reference: revenue attribution data shows Bing alone can drive 40% of
traffic in some niches, outperforming Google.

## robots.txt Confirmation

Current state (confirmed passing in Bing's robots.txt tester):

```
# Jazz Circle – robots.txt
User-agent: *
Allow: /
Allow: /_next/static/
Disallow: /_next/
Disallow: /api/
Sitemap: https://jazz-circle.com/sitemap.xml
```

**No changes needed.** The `Allow: /_next/static/` line ensures Bingbot
can access fonts, CSS, and JS (same fix applied for Google in commit 0b3a8e1).

## XML File Verification

The XML file verification in Bing Webmaster Tools is one of several
ownership verification methods (alongside meta tag and CNAME DNS).
Since the sitemap was accepted and site tools are accessible, the site
is considered verified. No XML file upload is required.

## Next Steps

None required. Check back in 1 week:
- Bing Webmaster Tools → URL Inspection → check indexed pages
- If pages are not indexed, use "Request Indexing" on individual URLs

## Bing-Specific SEO Notes

- Bing weights **exact-match keywords** more than Google →
  our H2 headings ("Chord Changes", "Harmonic Analysis") are effective
- Bing values **social signals** more than Google →
  Reddit/Quora links pointing to jazz-circle.com help Bing ranking
- **Schema markup** (MusicComposition JSON-LD, FAQPage) deployed Feb 19, 2026 →
  Bing crawls and interprets these directly
