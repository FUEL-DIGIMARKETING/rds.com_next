import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Blog from '@/models/Blog'
import { getAuthUser } from '@/lib/auth'

export async function GET(request: NextRequest) {
  // console.log('📚 GET blogs request received')
  
  try {
    await dbConnect()
    // console.log('📊 Database connected')
    
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    // console.log('🔍 Query params:', { status, page, limit })

    let query = {}
    if (status && status !== 'all') {
      query = { status }
    }

    // console.log('🔎 Database query:', query)
    
    const blogs = await Blog.find(query)
      .populate('authorId', 'username')
      .sort({ publishedAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)

    const total = await Blog.countDocuments(query)
    
    // console.log('✅ Found blogs:', blogs.length, 'Total:', total)

    return NextResponse.json({
      blogs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('❌ Get blogs error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to fetch blogs',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      },
      { status: 500 }
    )
  }
}