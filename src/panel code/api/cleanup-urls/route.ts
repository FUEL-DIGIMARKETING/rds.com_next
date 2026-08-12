import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Blog from '@/models/Blog'
import { getAuthUser } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await dbConnect()

    // Find all blogs with corrupted URLs
    const blogs = await Blog.find({
      $or: [
        { featuredImage: { $regex: '/home/riverdayspanext/htdocs/www.riverdayspa.com/public' } },
        { content: { $regex: '/home/riverdayspanext/htdocs/www.riverdayspa.com/public' } }
      ]
    })

    let updatedCount = 0

    for (const blog of blogs) {
      let updated = false

      // Fix featured image URL
      if (blog.featuredImage && blog.featuredImage.includes('/home/riverdayspanext/htdocs/www.riverdayspa.com/public')) {
        const match = blog.featuredImage.match(/\/uploads\/blogs\/(\d{4})\/(\d{2})\/(.+)$/)
        if (match) {
          const [, year, month, filename] = match
          blog.featuredImage = `/uploads/blogs/${year}/${month}/${filename}`
          updated = true
        }
      }

      // Fix content URLs
      if (blog.content && blog.content.includes('/home/riverdayspanext/htdocs/www.riverdayspa.com/public')) {
        blog.content = blog.content.replace(
          /\/home\/riverdayspanext\/htdocs\/www\.riverdayspa\.com\/public(\/uploads\/blogs\/[^"'\s]+)/g,
          '$1'
        )
        updated = true
      }

      if (updated) {
        await blog.save()
        updatedCount++
      }
    }

    return NextResponse.json({
      message: `Cleaned up ${updatedCount} blogs`,
      totalFound: blogs.length,
      updated: updatedCount
    })
  } catch (error) {
    console.error('Cleanup error:', error)
    return NextResponse.json({ error: 'Cleanup failed' }, { status: 500 })
  }
}