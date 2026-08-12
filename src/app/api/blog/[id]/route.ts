import { NextRequest, NextResponse } from 'next/server'
import mongoose from 'mongoose'
import dbConnect from '@/lib/mongodb'
import Blog from '@/models/Blog'
import { getAuthUser } from '@/lib/auth'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // console.log('📖 GET request received for blog ID:', params.id)
  
  try {
    await dbConnect()
    // console.log('📊 Database connected')
    
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      // console.log('❌ Invalid blog ID format:', params.id)
      return NextResponse.json({ error: 'Invalid blog ID' }, { status: 400 })
    }
    
    // console.log('🔍 Searching for blog with ID:', params.id)
    const blog = await Blog.findById(params.id).populate('authorId', 'username')
    
    if (!blog) {
      // console.log('❌ Blog not found with ID:', params.id)
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    // console.log('✅ Blog found:', blog.title)
    return NextResponse.json({ blog })
  } catch (error) {
    console.error('❌ Fetch error:', error)
    return NextResponse.json({ 
      error: 'Failed to fetch blog',
      details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
    }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log('✏️ PUT request received for blog ID:', params.id)
  
  try {
    const user = await getAuthUser()
    console.log('🔐 Auth user:', user ? 'Authenticated' : 'Not authenticated')
    
    if (!user) {
      console.log('❌ Unauthorized access attempt')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await dbConnect()
    console.log('📊 Database connected')
    
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      console.log('❌ Invalid blog ID format:', params.id)
      return NextResponse.json({ error: 'Invalid blog ID' }, { status: 400 })
    }
    
    const data = await request.json()
    console.log('📝 Update data received:', Object.keys(data))
    console.log('📝 Blog title:', data.title)
    console.log('📝 Blog slug:', data.slug)
    
    const blog = await Blog.findById(params.id)
    
    if (!blog) {
      console.log('❌ Blog not found with ID:', params.id)
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    console.log('📝 Found existing blog:', blog.title, 'ID:', blog._id)
    
    Object.keys(data).forEach(key => {
      if (data[key] !== undefined) {
        blog[key] = data[key]
      }
    })

    if (data.status === 'published' && blog.status !== 'published') {
      blog.publishedAt = data.publishedAt ? new Date(data.publishedAt) : new Date()
    } else if (data.publishedAt) {
      blog.publishedAt = new Date(data.publishedAt)
    }

    await blog.save()
    console.log('✅ Blog updated successfully, ID:', blog._id)
    
    return NextResponse.json({ message: 'Blog updated successfully', blog })
  } catch (error) {
    console.error('❌ Update error:', error)
    return NextResponse.json({ 
      error: 'Failed to update blog',
      details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
    }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // console.log('🗑️ DELETE request received for blog ID:', params.id)
  
  try {
    const user = await getAuthUser()
    // console.log('🔐 Auth user:', user ? 'Authenticated' : 'Not authenticated')
    
    if (!user) {
      // console.log('❌ Unauthorized access attempt')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await dbConnect()
    // console.log('📊 Database connected')
    
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      // console.log('❌ Invalid blog ID format:', params.id)
      return NextResponse.json({ error: 'Invalid blog ID' }, { status: 400 })
    }
    
    // console.log('🔍 Searching for blog with ID:', params.id)
    const blog = await Blog.findById(params.id)
    
    if (!blog) {
      // console.log('❌ Blog not found with ID:', params.id)
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }
    
    // console.log('📝 Found blog:', blog.title)
    await Blog.findByIdAndDelete(params.id)
    // console.log('✅ Blog deleted successfully')

    return NextResponse.json({ message: 'Blog deleted successfully' })
  } catch (error) {
    console.error('❌ Delete error:', error)
    return NextResponse.json({ 
      error: 'Failed to delete blog',
      details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
    }, { status: 500 })
  }
}