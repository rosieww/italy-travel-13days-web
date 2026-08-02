/**
 * Resolve a path under public/ against Vite's configured base.
 *
 * Static hosts like GitHub Pages serve the site from a sub-path
 * (e.g. /italy-travel-13days-web/), and Vite only rewrites asset URLs it
 * parses itself — plain strings such as "/image/foo.webp" would 404 there.
 */
export const assetUrl = (p: string): string =>
  encodeURI(`${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`);
