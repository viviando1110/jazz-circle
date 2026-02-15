// Paywall configuration for iOS app

export const FREE_SONG_SLUGS = [
  'autumn-leaves',  // Beginner, most popular standard
  'so-what',        // Beginner, modal jazz
  'blue-bossa',     // Beginner, bossa nova
  'all-blues',      // Beginner, blues form
  'all-of-me',      // Beginner, Tin Pan Alley classic
] as const;

export const SUBSCRIPTION_PRODUCTS = {
  monthly: 'com.jazzcircle.app.monthly',  // $4.99/month
  annual: 'com.jazzcircle.app.annual',    // $49.99/year
} as const;

export type FreeSongSlug = typeof FREE_SONG_SLUGS[number];
export type SubscriptionProduct = typeof SUBSCRIPTION_PRODUCTS[keyof typeof SUBSCRIPTION_PRODUCTS];
