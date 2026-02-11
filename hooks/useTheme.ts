'use client';

import { useState, useEffect, useCallback } from 'react';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'jazz-circle-theme';

function getTheme(): Theme {
  if (typeof document === 'undefined') return 'dark';
  return (document.documentElement.getAttribute('data-theme') as Theme) ?? 'dark';
}

/**
 * Hook to read and toggle the current theme.
 * Re-renders when `data-theme` attribute changes on <html>.
 */
export function useTheme(): { theme: Theme; toggle: () => void } {
  // Always start with 'dark' to match server render and avoid hydration mismatch.
  // The useEffect below syncs to the real theme immediately on mount.
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Sync state on mount (script may have set it before React hydrated)
    setTheme(getTheme());

    // Watch for external changes to data-theme
    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = getTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable (private browsing, etc.)
    }
  }, []);

  return { theme, toggle };
}
