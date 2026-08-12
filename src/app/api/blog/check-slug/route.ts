import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Blog from '@/models/Blog'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')
    
    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
    }

    await dbConnect()
    
    const existingBlog = await Blog.findOne({ slug })
    
    return NextResponse.json({
      exists: !!existingBlog,
      blogId: existingBlog?._id || null
    })
    
  } catch (error) {
    console.error('Check slug error:', error)
    return NextResponse.json({ error: 'Failed to check slug' }, { status: 500 })
  }
}