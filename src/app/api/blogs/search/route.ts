import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Blog from '@/models/Blog'

export async function GET(request: Request) {
  try {
    await dbConnect()
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q') || ''
    const category = searchParams.get('category') || ''
    const limit = parseInt(searchParams.get('limit') || '10')
    
    let filter: any = { status: 'published' }
    
    if (query) {
      filter.$or = [
        { title: { $regex: query, $options: 'i' } },
        { excerpt: { $regex: query, $options: 'i' } },
        { tags: { $in: [new RegExp(query, 'i')] } }
      ]
    }
    
    if (category) {
      filter.category = category
    }
    
    const blogs = await Blog.find(filter)
      .populate('category', 'name slug color')
      .sort({ createdAt: -1 })
      .limit(limit)
      .select('title slug excerpt featuredImage category tags createdAt readTime')
    
    return NextResponse.json(blogs)
  } catch (error) {
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}