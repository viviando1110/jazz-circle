// Supabase Edge Function to validate Apple in-app purchase receipts

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const APPLE_VERIFY_RECEIPT_URL = 'https://buy.itunes.apple.com/verifyReceipt';
const APPLE_SANDBOX_URL = 'https://sandbox.itunes.apple.com/verifyReceipt';

interface ValidateReceiptRequest {
  receipt: string; // Base64 encoded receipt from StoreKit
  userId: string; // iOS device identifier
}

interface AppleReceiptResponse {
  status: number;
  latest_receipt_info?: Array<{
    product_id: string;
    expires_date_ms: string;
    original_transaction_id: string;
  }>;
}

serve(async (req: Request) => {
  // CORS headers for client calls
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  try {
    // Parse request body
    const { receipt, userId }: ValidateReceiptRequest = await req.json();

    if (!receipt || !userId) {
      return new Response(
        JSON.stringify({ error: 'Missing receipt or userId' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get Apple shared secret from environment
    const appleSharedSecret = Deno.env.get('APPLE_SHARED_SECRET');
    if (!appleSharedSecret) {
      console.error('APPLE_SHARED_SECRET not configured');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500 }
      );
    }

    // Verify receipt with Apple
    const verifyResponse = await fetch(APPLE_VERIFY_RECEIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'receipt-data': receipt,
        'password': appleSharedSecret,
        'exclude-old-transactions': true,
      }),
    });

    const appleData: AppleReceiptResponse = await verifyResponse.json();

    // Status 21007 means sandbox receipt sent to production - retry with sandbox
    if (appleData.status === 21007) {
      const sandboxResponse = await fetch(APPLE_SANDBOX_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'receipt-data': receipt,
          'password': appleSharedSecret,
          'exclude-old-transactions': true,
        }),
      });
      const sandboxData = await sandboxResponse.json();
      return processReceiptData(sandboxData, userId, receipt);
    }

    // Status 0 = valid receipt
    if (appleData.status === 0) {
      return processReceiptData(appleData, userId, receipt);
    }

    // Invalid receipt
    return new Response(
      JSON.stringify({ valid: false, error: `Apple status ${appleData.status}` }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Receipt validation error:', error);
    return new Response(
      JSON.stringify({ error: 'Validation failed', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
});

async function processReceiptData(
  appleData: AppleReceiptResponse,
  userId: string,
  receipt: string
): Promise<Response> {
  const latestReceipt = appleData.latest_receipt_info?.[0];

  if (!latestReceipt) {
    return new Response(
      JSON.stringify({ valid: false, error: 'No subscription found' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const expiresAtMs = parseInt(latestReceipt.expires_date_ms);
  const expiresAt = new Date(expiresAtMs);
  const productId = latestReceipt.product_id;
  const now = new Date();

  // Determine subscription status
  const status = expiresAt > now ? 'active' : 'expired';

  // Initialize Supabase client with service role key (full access)
  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Upsert subscription to database
  const { error } = await supabase
    .from('subscriptions')
    .upsert({
      user_id: userId,
      product_id: productId,
      status,
      expires_at: expiresAt.toISOString(),
      receipt_data: receipt, // Store for future re-verification
      last_verified_at: now.toISOString(),
    }, {
      onConflict: 'user_id', // Update if user already has subscription
    });

  if (error) {
    console.error('Database error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to store subscription' }),
      { status: 500 }
    );
  }

  // Return validation result
  return new Response(
    JSON.stringify({
      valid: true,
      status,
      expiresAt: expiresAtMs,
      productId,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
}
