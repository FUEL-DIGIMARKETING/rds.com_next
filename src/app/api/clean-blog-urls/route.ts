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
    
    // Find all blogs
    const blogs = await Blog.find({})
    
    let updatedCount = 0
    
    for (const blog of blogs) {
      let updated = false
      const updates: any = {}
      
      // Clean featured image URL
      if (blog.featuredImage && blog.featuredImage.includes('-') && /\/uploads\/blogs\/.*-\d+\.\w+$/.test(blog.featuredImage)) {
        updates.featuredImage = blog.featuredImage.replace(/-\d+(\.\w+)$/, '$1')
        updated = true
      }
      
      // Clean content image URLs
      if (blog.content && blog.content.includes('/uploads/blogs/')) {
        const cleanContent = blog.content.replace(
          /\/uploads\/blogs\/([^"]*)-\d+(\.\w+)/g,
          '/uploads/blogs/$1$2'
        )
        if (cleanContent !== blog.content) {
          updates.content = cleanContent
          updated = true
        }
      }
      
      // Update blog if changes were made
      if (updated) {
        await Blog.updateOne({ _id: blog._id }, { $set: updates })
        updatedCount++
      }
    }
    
    return NextResponse.json({
      message: 'Blog URLs cleaned successfully',
      totalBlogs: blogs.length,
      updatedBlogs: updatedCount
    })
    
  } catch (error) {
    console.error('Error cleaning blog URLs:', error)
    return NextResponse.json(
      { error: 'Failed to clean blog URLs' },
      { status: 500 }
    )
  }
}