/**
 * Inline script to prevent flash of unstyled content (FOUC) on theme change.
 * This runs before React hydrates, reading the user's saved preference
 * or system preference and applying it to the <html> element.
 */
export const themeScript = `
(function() {
  try {
    var theme = localStorage.getItem('jazz-circle-theme');
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;
