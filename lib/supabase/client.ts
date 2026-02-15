// Supabase client for Jazz Circle iOS app

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Subscription {
  id: string;
  user_id: string;
  product_id: string;
  status: 'trial' | 'active' | 'expired' | 'cancelled';
  trial_started_at?: string;
  expires_at: string;
  last_verified_at: string;
  created_at: string;
  updated_at: string;
}

/**
 * Validate an Apple receipt and store subscription in Supabase
 */
export async function validateReceipt(receipt: string, userId: string): Promise<{
  valid: boolean;
  status?: 'trial' | 'active' | 'expired';
  expiresAt?: number;
  productId?: string;
  error?: string;
}> {
  try {
    const response = await supabase.functions.invoke('validate-receipt', {
      body: { receipt, userId },
    });

    if (response.error) {
      console.error('Supabase function error:', response.error);
      return { valid: false, error: response.error.message };
    }

    return response.data;
  } catch (error) {
    console.error('Receipt validation error:', error);
    return { valid: false, error: 'Network error' };
  }
}

/**
 * Get user's current subscription status from Supabase
 */
export async function getSubscription(userId: string): Promise<Subscription | null> {
  const { data, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error('Failed to fetch subscription:', error);
    return null;
  }

  return data;
}

/**
 * Check if user has an active subscription
 */
export async function hasActiveSubscription(userId: string): Promise<boolean> {
  const subscription = await getSubscription(userId);

  if (!subscription) return false;

  const now = new Date();
  const expiresAt = new Date(subscription.expires_at);

  return (
    (subscription.status === 'active' || subscription.status === 'trial') &&
    expiresAt > now
  );
}
