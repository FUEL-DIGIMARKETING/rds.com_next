'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Blog {
  _id: string
  title: string
  slug: string
  createdAt: string
}

export default function LatestPosts() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const response = await fetch('/api/blogs?limit=4')
        if (response.ok) {
          const data = await response.json()
          setBlogs(data.blogs || [])
        }
      } catch (error) {
        console.error('Failed to fetch latest blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLatestBlogs()
  }, [])

  if (loading) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <p className="text-lg font-bold text-[#8D7B68] mb-3">LATEST POSTS</p>
        <div className="animate-pulse space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="pb-2 border-b border-gray-100">
              <div className="h-3 bg-gray-200 rounded mb-1"></div>
              <div className="h-2 bg-gray-200 rounded w-16"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <p className="text-lg font-bold text-[#8D7B68] mb-3">LATEST POSTS</p>
      <div className="space-y-3">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog._id} className="pb-2 border-b border-gray-100">
              <Link href={`/blog/${blog.slug}`}>
                <p className="text-xs font-semibold text-gray-700 hover:text-green-600 transition-colors line-clamp-2 mb-1">
                  {blog.title}
                </p>
              </Link>
              <div className="text-xs text-gray-500">
                {new Date(blog.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))
        ) : (
          <div className="pb-2 border-b border-gray-100">
            <Link href="/blogs">
              <p className="text-xs font-semibold text-gray-700 hover:text-green-600 transition-colors line-clamp-2 mb-1">
                View All Blog Posts
              </p>
            </Link>
            <div className="text-xs text-gray-500">Latest Updates</div>
          </div>
        )}
      </div>
    </div>
  )
}