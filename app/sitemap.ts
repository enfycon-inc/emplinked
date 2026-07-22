import { MetadataRoute } from 'next';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

// Custom SEO configurations for specific routes
const SEO_CONFIG: Record<string, { changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never', priority: number }> = {
  '/': { changeFrequency: 'weekly', priority: 1 },
  '/platform': { changeFrequency: 'weekly', priority: 0.9 },
  '/solutions': { changeFrequency: 'weekly', priority: 0.9 },
  '/about': { changeFrequency: 'monthly', priority: 0.8 },
  '/contact': { changeFrequency: 'monthly', priority: 0.7 },
  '/book-demo': { changeFrequency: 'monthly', priority: 0.7 },
  '/privacy': { changeFrequency: 'yearly', priority: 0.3 },
  '/terms': { changeFrequency: 'yearly', priority: 0.3 },
};

// Function to recursively read the app directory and find all page.tsx files
function getStaticRoutes(dir: string, basePath = ''): { route: string; lastModified: Date }[] {
  let routes: { route: string; lastModified: Date }[] = [];
  try {
    const entries = readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        // Skip api, hidden folders, and route groups
        if (entry.name === 'api' || entry.name.startsWith('_') || entry.name.startsWith('(') || entry.name.startsWith('[')) {
          continue; 
        }
        routes = routes.concat(getStaticRoutes(join(dir, entry.name), `${basePath}/${entry.name}`));
      } else if (entry.name === 'page.tsx' || entry.name === 'page.js') {
        // Read the actual last modified time of the file for better SEO
        const filePath = join(dir, entry.name);
        const stats = statSync(filePath);
        
        routes.push({
          route: basePath === '' ? '/' : basePath,
          lastModified: stats.mtime,
        });
      }
    }
  } catch (error) {
    console.error('Error reading directory for sitemap:', error);
  }
  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://emplinked.com';
  
  // 1. Get all static routes automatically from the app folder
  const appDir = join(process.cwd(), 'app');
  const staticPaths = getStaticRoutes(appDir);

  const staticRoutes = staticPaths.map(({ route, lastModified }) => {
    // Get custom config if exists, otherwise fallback to defaults
    const config = SEO_CONFIG[route] || { changeFrequency: 'monthly' as const, priority: 0.5 };

    return {
      url: `${baseUrl}${route === '/' ? '' : route}`,
      lastModified: lastModified, // Industry standard: exact time the page file was last edited
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    };
  });

  // 2. Fetch dynamic routes (e.g. Blogs) from your API or CMS
  // This is how enfycon.com fetches its /blogs/[slug] pages!
  /*
  const blogs = await fetch('https://your-api.com/blogs').then((res) => res.json());
  const blogRoutes = blogs.map((blog: any) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  */

  // Combine both static auto-generated routes and your dynamic blog routes
  return [...staticRoutes /*, ...blogRoutes */];
}
