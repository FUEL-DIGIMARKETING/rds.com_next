import { NextRequest, NextResponse } from 'next/server'
import { getAuthUser } from '@/lib/auth'
import dbConnect from '@/lib/mongodb'
import Blog from '@/models/Blog'
import Category from '@/models/Category'

interface SitemapUrl {
  url: string
  lastmod: string
  changefreq: string
  priority: string
  type: string
}

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const baseUrl = 'https://www.riverdayspa.com'
    const urls: SitemapUrl[] = []

    // Static pages from your existing sitemap
    const staticPages = [
      { path: '', priority: '1.0', changefreq: 'weekly', type: 'Homepage' },
      { path: '/best-massage-spa-in-chennai', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/gallery-best-massage-centre', priority: '0.8', changefreq: 'weekly', type: 'Gallery Page' },
      { path: '/blogs', priority: '0.8', changefreq: 'weekly', type: 'Blogs Page' },
      { path: '/spa-career', priority: '0.8', changefreq: 'weekly', type: 'Career Page' },
      { path: '/book-spa-service-appointment', priority: '0.8', changefreq: 'weekly', type: 'Booking Page' },
      { path: '/body-massage-in-chennai-egmore', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/spa-massage-coimbatore', priority: '0.8', changefreq: 'weekly', type: 'Location Page' },
      { path: '/spa-in-bangalore', priority: '0.8', changefreq: 'weekly', type: 'Location Page' },
      { path: '/massage-spa-in-trichy', priority: '0.8', changefreq: 'weekly', type: 'Location Page' },
      { path: '/massage-spa-in-tirupur', priority: '0.8', changefreq: 'weekly', type: 'Location Page' },
      { path: '/best-body-massage-spa-in-bypass-vellore', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-moroccan-bath-massage-in-bangalore', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-couple-massage-center', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-couples-spa-packages', priority: '0.8', changefreq: 'weekly', type: 'Package Page' },
      { path: '/best-deep-tissue-massage-center', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-thai-body-massage-center', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-foot-reflexology-massage', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-ayurvedic-massage-spa', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/salon-in-rspuram-coimbatore', priority: '0.8', changefreq: 'weekly', type: 'Location Page' },
      { path: '/beauty-parlour-in-tirupur-our-premium-services-as-you-need', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-body-massage-spa-katpadi-vellore', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/massage-spa-in-vellore', priority: '0.8', changefreq: 'weekly', type: 'Location Page' },
      { path: '/best-body-massage-center', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-hair-saloon-in-chennai', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-beauty-salon-in-chennai', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/beauty-salon-menu-card', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-body-scrub-massage-center', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-body-wrap-massage-spa', priority: '0.8', changefreq: 'weekly', type: 'Service Page' },
      { path: '/membership-policy-and-discounts', priority: '0.8', changefreq: 'weekly', type: 'Membership Page' },
      { path: '/spa-giftcard-details', priority: '0.8', changefreq: 'weekly', type: 'Gift Card Page' },
      { path: '/best-spa-packages', priority: '0.8', changefreq: 'weekly', type: 'Package Page' },
      { path: '/book-spa-service-appointment', priority: '0.64', changefreq: 'weekly', type: 'Booking Page' },
      { path: '/female-massage-therapist-jobs', priority: '0.64', changefreq: 'weekly', type: 'Job Page' },
      { path: '/floor-manager-jobs', priority: '0.64', changefreq: 'weekly', type: 'Job Page' },
      { path: '/receptionist-male-female-jobs', priority: '0.64', changefreq: 'weekly', type: 'Job Page' },
      { path: '/beautician-female-male-jobs', priority: '0.64', changefreq: 'weekly', type: 'Job Page' },
      { path: '/housekeeping-male-female-jobs', priority: '0.64', changefreq: 'weekly', type: 'Job Page' },
      { path: '/hair-dresser-male-jobs', priority: '0.64', changefreq: 'weekly', type: 'Job Page' },
      { path: '/swedish-massage-service-in-chennai', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-head-to-toe-aroma-massage-spa', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/beauty-salon-packages', priority: '0.64', changefreq: 'weekly', type: 'Package Page' },
      { path: '/best-balinese-massage-center', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-sense-of-siam-massage-center', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-detoxifying-massage-center', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/sports-massage-spa-in-chennai', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-abhyanga-massage-center', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-synchronized-massage-spa', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-chocolate-body-scrub-massage-center', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/coffee-scrub-massage-spa', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/fruit-body-scrub-in-chennai', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-lemongrass-scrub-massage-center', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-sea-salt-scrub-massage', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-chocolate-body-wrap-massage-center', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-coffee-wrap-massage-spa', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-mango-wrap-massage-center', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-papaya-wrap-massage-spa', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/raspberry-wrap-massage-center', priority: '0.64', changefreq: 'weekly', type: 'Service Page' },
      { path: '/best-partial-massage-spa', priority: '0.64', changefreq: 'weekly', type: 'Service Page' }
    ]

    staticPages.forEach(page => {
      urls.push({
        url: `${baseUrl}${page.path}`,
        lastmod: new Date().toISOString(),
        changefreq: page.changefreq,
        priority: page.priority,
        type: page.type
      })
    })

    // Fetch blog posts from database
    await dbConnect()

    try {
      // Get published blog posts using Mongoose model
      const posts = await Blog.find({ status: 'published' })
        .select('slug title publishedAt updatedAt createdAt')
        .sort({ publishedAt: -1 })
        .lean()

      console.log(`Found ${posts.length} published blog posts`)

      posts.forEach(post => {
        if (post.slug) {
          urls.push({
            url: `${baseUrl}/blog/${post.slug}`,
            lastmod: post.updatedAt ? new Date(post.updatedAt).toISOString() : new Date(post.publishedAt || post.createdAt).toISOString(),
            changefreq: 'weekly',
            priority: '0.6',
            type: 'Blog Post'
          })
        }
      })

      // Categories and blog search removed as requested

    } catch (dbError) {
      console.error('Database query error:', dbError)
      // Continue with static pages even if database fails
    }

    // Generate XML sitemap
    const xml = generateSitemapXML(urls)

    // Sort URLs by priority (highest first)
    urls.sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority))

    console.log(`Generated sitemap with ${urls.length} URLs`)
    console.log('URL breakdown:', {
      static: staticPages.length,
      blogPosts: urls.filter(u => u.type === 'Blog Post').length,
      categories: urls.filter(u => u.type === 'Category Page').length,
      other: urls.filter(u => !['Blog Post', 'Category Page'].includes(u.type) && !staticPages.find(sp => sp.path === u.url.replace(baseUrl, ''))).length
    })

    return NextResponse.json({
      urls,
      xml,
      totalUrls: urls.length,
      generatedAt: new Date().toISOString(),
      breakdown: {
        static: staticPages.length,
        blogPosts: urls.filter(u => u.type === 'Blog Post').length,
        categories: urls.filter(u => u.type === 'Category Page').length,
        other: urls.filter(u => !['Blog Post', 'Category Page'].includes(u.type) && !staticPages.find(sp => sp.path === u.url.replace(baseUrl, ''))).length
      }
    })
  } catch (error) {
    console.error('Sitemap generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate sitemap' },
      { status: 500 }
    )
  }
}

function generateSitemapXML(urls: SitemapUrl[]): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>'
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  const urlsetClose = '</urlset>'

  const urlEntries = urls.map(urlData => {
    return `  <url>
    <loc>${escapeXml(urlData.url)}</loc>
    <lastmod>${urlData.lastmod}</lastmod>
    <changefreq>${urlData.changefreq}</changefreq>
    <priority>${urlData.priority}</priority>
  </url>`
  }).join('\n')

  return `${xmlHeader}
${urlsetOpen}
${urlEntries}
${urlsetClose}`
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;'
      case '>': return '&gt;'
      case '&': return '&amp;'
      case '\'': return '&apos;'
      case '"': return '&quot;'
      default: return c
    }
  })
}