# Supabase Setup Guide for Jazz Circle iOS App

## Overview

This directory contains the Supabase backend configuration for iOS in-app purchase receipt validation and subscription management.

## Prerequisites

1. Supabase account (https://supabase.com)
2. Apple Developer account (for App Store Connect shared secret)

## Setup Steps

### 1. Create Supabase Project

1. Go to https://supabase.com/dashboard
2. Click "New Project"
3. Choose a name: "jazz-circle" or similar
4. Choose a region close to your users (US East for North America)
5. Set a strong database password (save it securely)
6. Wait for project to be created (~2 minutes)

### 2. Get Supabase Credentials

From your project dashboard (https://supabase.com/dashboard/project/[project-id]/settings/api):

- **Project URL**: `https://[project-id].supabase.co`
- **Anon/Public Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (visible client-side, safe to use in app)
- **Service Role Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (SECRET, only for Edge Functions)

### 3. Configure Environment Variables

Create `.env.local` in the project root:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
APPLE_SHARED_SECRET=your_apple_shared_secret_here
```

**IMPORTANT:** Never commit `.env.local` to git (already in .gitignore)

### 4. Run Database Migration

In Supabase Dashboard → SQL Editor:

1. Click "New Query"
2. Copy the entire contents of `migrations/001_create_subscriptions.sql`
3. Paste into the SQL editor
4. Click "Run" (bottom right)
5. Verify success: you should see "Success. No rows returned"

Alternatively, use Supabase CLI:

```bash
npx supabase db push
```

### 5. Deploy Edge Function

Install Supabase CLI:

```bash
npm install -g supabase
```

Login to Supabase:

```bash
supabase login
```

Link your project:

```bash
supabase link --project-ref [your-project-id]
```

Deploy the Edge Function:

```bash
supabase functions deploy validate-receipt
```

Set the Apple shared secret as a function secret:

```bash
supabase secrets set APPLE_SHARED_SECRET=your_apple_shared_secret_here
```

### 6. Get Apple Shared Secret

1. Go to App Store Connect (https://appstoreconnect.apple.com)
2. Navigate to: My Apps → [Your App] → Subscriptions
3. Under "Shared Secret", click "Generate" (or "View" if already exists)
4. Copy the secret and add it to `.env.local` and Supabase secrets

## Testing

### Test Receipt Validation (Sandbox)

Use Apple's Sandbox environment for testing:

```bash
curl -X POST https://[project-id].supabase.co/functions/v1/validate-receipt \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer [your-anon-key]" \
  -d '{
    "receipt": "base64_encoded_receipt_here",
    "userId": "test-user-123"
  }'
```

Expected response:

```json
{
  "valid": true,
  "status": "active",
  "expiresAt": 1739654400000,
  "productId": "com.jazzcircle.app.monthly"
}
```

## Database Schema

The `subscriptions` table tracks all iOS in-app purchases:

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `user_id` | TEXT | iOS device identifier (IDFV) |
| `product_id` | TEXT | `com.jazzcircle.app.monthly` or `.annual` |
| `status` | TEXT | `trial`, `active`, `expired`, or `cancelled` |
| `trial_started_at` | TIMESTAMPTZ | When trial started (if applicable) |
| `expires_at` | TIMESTAMPTZ | Subscription expiry date |
| `receipt_data` | TEXT | Encrypted Apple receipt for re-verification |
| `last_verified_at` | TIMESTAMPTZ | Last time receipt was verified |

## Security

- **Row Level Security (RLS)** is enabled on the `subscriptions` table
- Users can only read their own subscription data
- Edge Functions use the service role key for full access
- Apple receipts are validated server-side to prevent fraud

## Cost Estimate

Supabase Free Tier:
- 500 MB database storage
- 2 GB bandwidth
- 2 million Edge Function invocations/month

For 1,000 active users checking subscriptions 3x/day:
- ~90,000 invocations/month
- Well within free tier limits

Upgrade to Pro ($25/mo) when you exceed these limits.

## Troubleshooting

### "APPLE_SHARED_SECRET not configured"
- Run: `supabase secrets set APPLE_SHARED_SECRET=your_secret`

### "Failed to store subscription"
- Check RLS policies in Supabase Dashboard → Authentication → Policies
- Ensure Edge Function is using service role key

### Receipt validation returns status 21007
- This means you sent a sandbox receipt to production
- The Edge Function automatically retries with sandbox URL

## Next Steps

1. Complete Phase 5: StoreKit integration (requires Apple Developer account)
2. Test full purchase flow in iOS Simulator
3. Submit to App Store for review
