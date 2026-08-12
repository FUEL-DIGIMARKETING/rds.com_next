import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Blog from '@/models/Blog'

export async function GET(request: Request) {
  try {
    await dbConnect()
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''
    const category = searchParams.get('category') || ''
    
    const skip = (page - 1) * limit
    
    // First check all blogs regardless of status
    const allBlogs = await Blog.find({})
    // console.log('All blogs in DB:', allBlogs.length)
    // console.log('Published blogs:', allBlogs.filter(b => b.status === 'published').length)
    
    let filter: any = { status: 'published' }
    
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ]
    }
    
    if (category) {
      // Find category by slug and filter blogs by category ID
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
    
    // If no published blogs found, try to get any blogs (including drafts)
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
    
    // Try to populate categories for blogs that have them
    for (let blog of blogs) {
      if (blog.category) {
        try {
          await Blog.populate(blog, { path: 'category', select: 'name slug color' })
        } catch (error) {
          // Category population failed, continue without it
        }
      }
    }
    
    // console.log('Filtered blogs found:', blogs.length)
    // console.log('Sample blog:', blogs[0])
    
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