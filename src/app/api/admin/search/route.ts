import { NextRequest, NextResponse } from 'next/server'
import { getAuthUser } from '@/lib/auth'
import dbConnect from '@/lib/mongodb'
import mongoose from 'mongoose'

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    if (!query || query.length < 2) {
      return NextResponse.json({ results: [] })
    }

    await dbConnect()
    const results: any[] = []

    if (!mongoose.connection.db) {
      throw new Error('Database connection not established')
    }

    // Search posts
    const posts = await mongoose.connection.db.collection('posts')
      .find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { content: { $regex: query, $options: 'i' } },
          { excerpt: { $regex: query, $options: 'i' } }
        ]
      })
      .limit(5)
      .toArray()

    posts.forEach(post => {
      results.push({
        id: post._id.toString(),
        title: post.title,
        type: 'post'
      })
    })

    // Search categories
    const categories = await mongoose.connection.db.collection('categories')
      .find({
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } }
        ]
      })
      .limit(3)
      .toArray()

    categories.forEach(category => {
      results.push({
        id: category._id.toString(),
        title: category.name,
        type: 'category'
      })
    })

    // Add media search (simulated)
    if (query.toLowerCase().includes('media') || query.toLowerCase().includes('image')) {
      results.push({
        id: 'media',
        title: 'Media Library',
        type: 'media'
      })
    }

    return NextResponse.json({ results })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}