import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';
import axios from 'axios';

const hostname = 'https://www.example.com';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });

  const staticRoutes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    { url: '/map', changefreq: 'monthly', priority: 0.8 }
  ];

  staticRoutes.forEach(route => sitemap.write(route));

  const response = await axios.get('http://localhost:5500/api/admin/categories/get'); 
  const categories = await response.data.resultData;
  console.log(categories, 'cate')
  categories.forEach(cat => {
    const slug = cat.id.toLowerCase().replace(/\s+/g, '-'); 
    sitemap.write({
      url: `/categories/${slug}`,
      changefreq: 'weekly',
      priority: 0.9
    });
  });
  sitemap.end();

  const sm = await streamToPromise(sitemap);
  writeFileSync('./public/sitemap.xml', sm.toString());
  console.log('Dynamic sitemap generated at public/sitemap.xml');
}

generateSitemap();
