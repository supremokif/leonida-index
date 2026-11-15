/**
 * Helper to ensure proper URL resolution across subpath deployments (e.g. GitHub Pages)
 * and root deployments (Vercel, custom domain).
 */
export function resolvePath(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:')) {
    return path;
  }
  
  const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  
  if (path.startsWith('#')) {
    return `${base}/${path}`;
  }
  
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}` || '/';
}
