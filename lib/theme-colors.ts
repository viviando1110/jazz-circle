/**
 * Get the computed value of a CSS custom property.
 * Used by canvas-based components (VexFlow) that can't use var() directly.
 * Returns fallback if running on server or variable not found.
 */
export function getCSSVar(name: string, fallback: string): string {
  if (typeof window === 'undefined') return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}
