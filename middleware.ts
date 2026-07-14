import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of known malicious or unwanted bot User-Agents
const BLOCKED_USER_AGENTS = [
  'HeadlessChrome',
  'Puppeteer',
  'Selenium',
  'Playwright',
  'AhrefsBot',
  'SemrushBot',
  'MJ12bot',
  'DotBot',
  'BLEXBot',
  'GPTBot',
  'ClaudeBot',
  'Bytespider',
  'python-requests',
  'urllib',
];

// List of allowed search engines to ensure SEO is not broken
const ALLOWED_BOTS = [
  'Googlebot',
  'Bingbot',
  'DuckDuckBot',
  'YandexBot',
  'Slurp',
  'Baiduspider',
];

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Allow whitelisted SEO bots immediately
  const isAllowedBot = ALLOWED_BOTS.some(bot => userAgent.includes(bot));
  if (isAllowedBot) {
    return NextResponse.next();
  }

  // 2. Block known scrapers and headless browsers
  const isBlockedBot = BLOCKED_USER_AGENTS.some(bot => userAgent.includes(bot));
  
  // 3. Require a User-Agent (Cheap scripts often leave this blank)
  const isMissingUserAgent = userAgent.trim() === '';

  if (isBlockedBot || isMissingUserAgent) {
    // Return a 403 Forbidden response to block the request
    return new NextResponse('Access Denied: Automated scraping is not permitted.', { status: 403 });
  }

  // 4. Security Headers (Optional but recommended for robustness)
  const response = NextResponse.next();
  
  // Prevent clickjacking attacks (someone embedding your site in an iframe)
  response.headers.set('X-Frame-Options', 'DENY');
  
  // Prevent browsers from guessing the content type and executing malicious files
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  // Enforce HTTPS
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

  return response;
}

// Configure which paths the middleware should run on
export const config = {
  // Apply to all routes except API, static files, and images
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
