const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
    { url: '/', changefreq: 'daily', priority: 0.7 },
    { url: '/about', changefreq: 'weekly', priority: 0.7 },
    { url: '/gallery', changefreq: 'weekly', priority: 0.7 },
    { url: '/clients', changefreq: 'weekly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    // Add any other routes you have here
  ];

const sitemap = new SitemapStream({ hostname: 'https://spiritstone-gemworks.com' });
const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(sitemap.pipe(writeStream)).then(() => {
  console.log('Sitemap generated!');
});

links.forEach(link => sitemap.write(link));
sitemap.end();
