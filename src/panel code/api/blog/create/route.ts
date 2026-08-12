import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Blog from '@/models/Blog'
import { getAuthUser } from '@/lib/auth'

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser()
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    await dbConnect()

    const data = await request.json()
    let { title, content, excerpt, status = 'draft', categories = [], tags = [], metaTitle, metaDescription, metaKeywords = [], featuredImage, publishedAt } = data

    // Clean any backend URLs from content
    if (content) {
      content = content.replace(/https?:\/\/0\.0\.0\.0:2000/g, '')
      content = content.replace(/https?:\/\/api\.riverdayspa\.com/g, '')
    }

    // Clean featured image URL
    if (featuredImage) {
      featuredImage = featuredImage.replace(/https?:\/\/0\.0\.0\.0:2000/g, '')
      featuredImage = featuredImage.replace(/https?:\/\/api\.riverdayspa\.com/g, '')
    }

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    }

    let slug = generateSlug(title)

    // Ensure unique slug
    let counter = 1
    let originalSlug = slug
    while (await Blog.findOne({ slug })) {
      slug = `${originalSlug}-${counter}`
      counter++
    }

    const blog = new Blog({
      title,
      slug,
      content,
      excerpt,
      status,
      authorId: user.userId,
      categories,
      tags,
      metaTitle: metaTitle || title,
      metaDescription: metaDescription || excerpt,
      metaKeywords,
      featuredImage,
      publishedAt: status === 'published' ? (publishedAt ? new Date(publishedAt) : new Date()) : null
    })

    await blog.save()

    return NextResponse.json(
      { message: 'Blog created successfully', blog },
      { status: 201 }
    )
  } catch (error) {
    console.error('Create blog error:', error)
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    )
  }
}