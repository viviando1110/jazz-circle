'use client';

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import {
  getSubscriptionState,
  setSubscriptionState,
  canAccessSong,
  type SubscriptionState,
} from '@/lib/paywall/access';

interface SubscriptionContextValue {
  state: SubscriptionState;
  canAccessSong: (slug: string) => boolean;
  startTrial: () => void;
  activateSubscription: (expiresAt: number) => void;
  restorePurchases: () => Promise<void>;
}

const SubscriptionCtx = createContext<SubscriptionContextValue | null>(null);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  // Initialize with default 'free' state to avoid hydration mismatch
  const [state, setState] = useState<SubscriptionState>({
    status: 'free',
    unlockedSongs: [],
  });

  useEffect(() => {
    // Load from localStorage after mount (hydration safety pattern from useTheme)
    setState(getSubscriptionState());
  }, []);

  const canAccess = useCallback(
    (slug: string) => {
      return canAccessSong(slug, state);
    },
    [state]
  );

  const startTrial = useCallback(() => {
    const now = Date.now();
    const sevenDaysLater = now + 7 * 24 * 60 * 60 * 1000; // 7 days in ms
    const newState: SubscriptionState = {
      status: 'trial',
      trialStartedAt: now,
      expiresAt: sevenDaysLater,
      unlockedSongs: [],
    };
    setState(newState);
    setSubscriptionState(newState);
  }, []);

  const activateSubscription = useCallback((expiresAt: number) => {
    const newState: SubscriptionState = {
      status: 'active',
      expiresAt,
      unlockedSongs: [],
    };
    setState(newState);
    setSubscriptionState(newState);
  }, []);

  const restorePurchases = useCallback(async () => {
    // TODO: Call StoreKit restore API when user has Apple Developer account
    // For now, this is a stub
    console.log('[Subscription] Restore purchases not yet implemented');
  }, []);

  return (
    <SubscriptionCtx.Provider
      value={{ state, canAccessSong: canAccess, startTrial, activateSubscription, restorePurchases }}
    >
      {children}
    </SubscriptionCtx.Provider>
  );
}

export function useSubscription(): SubscriptionContextValue {
  const ctx = useContext(SubscriptionCtx);
  if (!ctx) {
    throw new Error('useSubscription must be used within SubscriptionProvider');
  }
  return ctx;
}
