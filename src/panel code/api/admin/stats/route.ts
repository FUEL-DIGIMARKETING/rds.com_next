import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Blog from '@/models/Blog'

export async function GET() {
  try {
    await dbConnect()
    
    const [totalPosts, publishedPosts, draftPosts, lastPost] = await Promise.all([
      Blog.countDocuments(),
      Blog.countDocuments({ status: 'published' }),
      Blog.countDocuments({ status: 'draft' }),
      Blog.findOne().sort({ createdAt: -1 }).select('createdAt')
    ])

    return NextResponse.json({
      totalPosts,
      publishedPosts,
      draftPosts,
      lastPostDate: lastPost?.createdAt || null
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}