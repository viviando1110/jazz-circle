// Access control logic for paywall

import { FREE_SONG_SLUGS } from './config';

export function isSongFree(slug: string): boolean {
  return (FREE_SONG_SLUGS as readonly string[]).includes(slug);
}

export interface SubscriptionState {
  status: 'free' | 'trial' | 'active' | 'expired';
  trialStartedAt?: number;  // timestamp
  expiresAt?: number;       // timestamp
  unlockedSongs: string[];  // song slugs (unused for now, future feature)
}

const STORAGE_KEY = 'jazz-circle-subscription';

export function getSubscriptionState(): SubscriptionState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // localStorage unavailable (private browsing, server render, etc.)
  }
  return { status: 'free', unlockedSongs: [] };
}

export function setSubscriptionState(state: SubscriptionState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable
  }
}

export function canAccessSong(slug: string, state: SubscriptionState): boolean {
  // Always allow free songs
  if (isSongFree(slug)) return true;

  // Check if subscription is active or trial is valid
  if (state.status === 'trial' || state.status === 'active') {
    // Check expiry
    if (state.expiresAt && Date.now() < state.expiresAt) {
      return true;
    }
  }

  return false;
}
