import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://agustincastañol.com';

// Define all routes in the application
const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    path: '/about',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/experience',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/portfolio',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/contact',
    priority: '0.7',
    changefreq: 'monthly',
  },
];

const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];

  const sitemapEntries = routes
    .map(
      (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);
  console.log(`Sitemap generated at ${outputPath}`);
};

generateSitemap();
