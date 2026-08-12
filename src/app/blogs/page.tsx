import BlogsPageComponent from '@/components/BlogsPageComponent'
import { Metadata } from 'next'
const structuredData = {
   "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Blogs",
      "item": "https://www.riverdayspa.com/blogs"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Best Massage Centres in Chennai - Ultimate Relaxation',
  description: 'Explore our blog for wellness tips, massage benefits, skincare secrets & leisure techniques. Discover self-care at the best massage centres in Chennai!',
  keywords: 'Best Massage Spa Chennai',
  openGraph: {
    title: 'Best Massage Centres in Chennai - Ultimate Relaxation',
    description: 'Explore our blog for wellness tips, massage benefits, skincare secrets & leisure techniques. Discover self-care at the best massage centres in Chennai!',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/blogs'
  }
}

export default function BlogsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BlogsPageComponent />
    </>
  )
}