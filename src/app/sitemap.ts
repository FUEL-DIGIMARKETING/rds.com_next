import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.riverdayspa.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },

    {
      url: 'https://www.riverdayspa.com/best-body-massage-center',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.riverdayspa.com/gallery',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.riverdayspa.com/book-spa-service-appointment',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.riverdayspa.com/best-moroccan-bath-massage-in-bangalore',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.riverdayspa.com/blogs',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: 'https://www.riverdayspa.com/sitemap-blogs.xml',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]
}