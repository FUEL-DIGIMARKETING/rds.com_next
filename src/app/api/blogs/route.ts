import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Blog from '@/models/Blog'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    await dbConnect()

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''
    const category = searchParams.get('category') || ''

    const skip = (page - 1) * limit

    let filter: any = { status: 'published' }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ]
    }

    if (category) {
      const Category = (await import('@/models/Category')).default
      const categoryDoc = await Category.findOne({ slug: category })
      if (categoryDoc) {
        filter.category = categoryDoc._id
      }
    }

    let [blogs, total] = await Promise.all([
      Blog.find(filter)
        .sort({ publishedAt: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .select('title slug excerpt featuredImage category tags createdAt publishedAt readTime'),
      Blog.countDocuments(filter)
    ])

    if (blogs.length === 0 && !search) {
      const anyFilter = {}
      const [anyBlogs, anyTotal] = await Promise.all([
        Blog.find(anyFilter)
          .sort({ publishedAt: -1, createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .select('title slug excerpt featuredImage category tags createdAt publishedAt readTime status'),
        Blog.countDocuments(anyFilter)
      ])
      blogs = anyBlogs
      total = anyTotal
    }

    for (let blog of blogs) {
      if (blog.category) {
        try {
          await Blog.populate(blog, { path: 'category', select: 'name slug color' })
        } catch {
          // Category population failed, continue without it
        }
      }
    }

    return NextResponse.json({
      blogs,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalBlogs: total,
        hasNext: page < Math.ceil(total / limit),
        hasPrev: page > 1
      }
    })
  } catch (error) {
    console.error('Blog fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 })
  }
}
