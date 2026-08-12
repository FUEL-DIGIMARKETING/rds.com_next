import { notFound } from 'next/navigation'
import { Metadata } from 'next/types'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Tag, MapPin, Search } from 'lucide-react'
import dbConnect from '@/lib/mongodb'
import Blog from '@/models/Blog'
import AnimatedBackground from '@/components/AnimatedBackground'
import CategoriesSidebar from '@/components/CategoriesSidebar'
import LatestPosts from '@/components/LatestPosts'
import { cleanBlogImageUrl, cleanBlogContent, getBlogImageUrl } from '@/utils/blogImageUtils'

interface BlogPageProps {
  params: { slug: string }
}

async function getBlog(slug: string) {
  await dbConnect()
  let blog = await Blog.findOne({ slug, status: 'published' })
    .lean()

  // If no published blog found, try to find any blog with this slug
  if (!blog) {
    blog = await Blog.findOne({ slug })
      .lean()
  }

  if (!blog) return null

  return JSON.parse(JSON.stringify(blog))
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = await getBlog(params.slug)

  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    keywords: blog.metaKeywords?.join(', '),
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      type: 'article',
      publishedTime: blog.publishedAt,
      modifiedTime: blog.updatedAt,
      authors: ['River Day Spa'],
      images: blog.featuredImage ? [{ url: blog.featuredImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: blog.featuredImage ? [blog.featuredImage] : [],
    },
    alternates: {
      canonical: `/blog/${blog.slug}`
    }
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getBlog(params.slug)

  if (!blog) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "image": blog.featuredImage,
    "author": {
      "@type": "Person",
      "name": "River Day Spa"
    },
    "publisher": {
      "@type": "Organization",
      "name": "River Salon and Day Spa",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/river-salon-and-day-spa.avif"
      }
    },
    "datePublished": blog.publishedAt,
    "dateModified": blog.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `/blog/${blog.slug}`
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-[#8D7B68]/10 to-[#A9907E]/5 pt-32 pb-16 relative overflow-hidden">
        <AnimatedBackground />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Back to Blog Button */}
          <div className="mb-2 py-10">
            <Link href="/blogs" className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors w-fit">
              <ArrowLeft className="w-5 h-5 text-[#8D7B68]" />
              <span className="text-[#8D7B68] font-medium">Back</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Header with Brown Background */}
                <div className="bg-gradient-to-r from-[#8D7B68] to-[#A9907E] px-8 py-12">
                  <p className="text-4xl font-bold text-white mb-6 leading-tight">
                    {blog.title}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-6 text-white/90 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blog.publishedAt || blog.createdAt).toLocaleDateString()}</span>
                    </div>
                    {blog.category && (
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        <span>{blog.category.name}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>by River Day Spa</span>
                    </div>
                  </div>

                  {/* Locations */}
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-white/90" />
                    <p className="text-sm text-white/90 font-medium">Locations: Chennai | Coimbatore | Bangalore | Trichy | Tirupur | Vellore</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {blog.featuredImage && (
                    <div className="mb-8 w-full overflow-hidden rounded-lg shadow-lg bg-white">
                      <div className="relative w-full max-h-[420px] sm:max-h-[520px] overflow-hidden">
                        <img
                          src={getBlogImageUrl(blog.featuredImage)}
                          alt={blog.featuredImageAlt || blog.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  )}

                  <div className="max-w-none text-gray-800 leading-relaxed blog-content">
                    <div
                      dangerouslySetInnerHTML={{ __html: cleanBlogContent(blog.content) }}
                    />

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="mt-12 pt-8 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                          {blog.tags.map((tag: string) => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="text-center mt-12">
                      <Link
                        href="/book-spa-service-appointment"
                        className="inline-block bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold transform transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:from-green-500 hover:to-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 active:scale-95 no-underline"
                      >
                        Book Your Appointment Now
                      </Link>
                    </div>

                  </div>
                </div>
              </article>
            </div>

            {/* Compact Right Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Search Bar */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search the blog..."
                    className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                  <Search className="absolute right-2 top-2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <CategoriesSidebar />

              {/* Latest Posts */}
              <LatestPosts />
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}