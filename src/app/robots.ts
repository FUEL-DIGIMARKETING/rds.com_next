import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/feed'],
        disallow: [
          '/admin-login/',
          '/admin-dashboard/',
          '/app-admin/',
          '/api/',
          '/sitemap-blogs.xml',
        ],
      },
    ],
    sitemap: 'https://www.riverdayspa.com/sitemap.xml',
  }
}
