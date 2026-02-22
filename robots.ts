import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/panel', '/panel/'],
      },
    ],
    sitemap: 'https://brunoiseai.com/sitemap.xml',
  };
}
