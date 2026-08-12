import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Blog from '@/models/Blog'
import '@/models/Category' // must be imported to register schema before populate
import '@/models/User'     // must be imported to register schema before populate
import { siteConfig } from '@/config/siteConfig'

function escapeXml(str: string): string {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function cdata(str: string): string {
  return `<![CDATA[${(str || '').replace(/\]\]>/g, ']]]]><![CDATA[>')}]]>`
}

export async function GET() {
  try {
    await dbConnect()

    const blogs = await Blog.find({ status: 'published' })
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(10)
      .populate('category', 'name slug')
      .populate('authorId', 'username')
      .lean() as any[]

    const baseUrl = siteConfig.url
    const now = new Date().toUTCString()

    const items = blogs.map((blog) => {
      const pubDate = new Date(blog.publishedAt || blog.createdAt).toUTCString()
      const link = `${baseUrl}/blog/${blog.slug}`
      const creator = blog.authorId?.username || siteConfig.name
      const categoryName = blog.category?.name || ''
      const categorySlug = blog.category?.slug || ''

      return `\t\t<item>
\t\t\t<title>${cdata(blog.title)}</title>
\t\t\t<link>${link}</link>
\t\t\t<dc:creator>${cdata(creator)}</dc:creator>
\t\t\t<pubDate>${pubDate}</pubDate>
${categoryName ? `\t\t\t<category domain="${baseUrl}/blog/category/${categorySlug}/" nicename="${escapeXml(categorySlug)}">${cdata(categoryName)}</category>` : ''}
\t\t\t<guid isPermaLink="false">${link}</guid>
\t\t\t<description>${cdata(blog.excerpt || '')}</description>
\t\t\t<content:encoded>${cdata(blog.content || '')}</content:encoded>
\t\t\t<slash:comments>0</slash:comments>
\t\t</item>`
    }).join('\n')

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
\txmlns:content="http://purl.org/rss/1.0/modules/content/"
\txmlns:dc="http://purl.org/dc/elements/1.1/"
\txmlns:atom="http://www.w3.org/2005/Atom"
\txmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
\txmlns:slash="http://purl.org/rss/1.0/modules/slash/"
>
\t<channel>
\t\t<title>${escapeXml(siteConfig.name)}</title>
\t\t<atom:link href="${baseUrl}/feed" rel="self" type="application/rss+xml" />
\t\t<link>${baseUrl}</link>
\t\t<description>${escapeXml(siteConfig.description)}</description>
\t\t<lastBuildDate>${now}</lastBuildDate>
\t\t<language>en-US</language>
\t\t<sy:updatePeriod>hourly</sy:updatePeriod>
\t\t<sy:updateFrequency>1</sy:updateFrequency>
${items}
\t</channel>
</rss>`

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/rss+xml; charset=UTF-8',
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Feed generation error:', error)
    return new NextResponse('Failed to generate feed', { status: 500 })
  }
}
