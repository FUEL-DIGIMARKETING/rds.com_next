'use client'

import React, { useState, useEffect } from "react"
import Link from 'next/link'

import { Search, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface Blog {
  _id: string
  title: string
  slug: string
  excerpt: string
  featuredImage?: string
  featuredImageAlt?: string
  category?: { name: string; slug: string; color: string }
  tags: string[]
  createdAt: string
  publishedAt?: string
  readTime: number
}

interface Category {
  _id: string
  name: string
  slug: string
  color: string
}

export default function   BlogsPageComponent() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalBlogs: 0,
    hasNext: false,
    hasPrev: false
  })

  useEffect(() => {
    fetchCategories()
    fetchBlogs()

    // Check for category parameter in URL
    const urlParams = new URLSearchParams(window.location.search)
    const categoryParam = urlParams.get('category')
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [])

  useEffect(() => {
    setCurrentPage(1)
    fetchBlogs(1, searchTerm, selectedCategory)
  }, [selectedCategory])

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      setCurrentPage(1)
      fetchBlogs(1, searchTerm)
    }, 300)
    return () => clearTimeout(delayedSearch)
  }, [searchTerm])

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories')
      if (response.ok) {
        const data = await response.json()
        setCategories(data)
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error)
    }
  }

  const fetchBlogs = async (page = currentPage, search = searchTerm, category = selectedCategory) => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10',
        ...(search && { search }),
        ...(category && { category })
      })

      const response = await fetch(`/api/blogs?${params}`)
      if (response.ok) {
        const data = await response.json()
        setBlogs(data.blogs)
        setPagination(data.pagination)
        setCurrentPage(page)
      }
    } catch (error) {
      console.error('Failed to fetch blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlePageChange = (page: number) => {
    fetchBlogs(page, searchTerm, selectedCategory)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCategoryClick = (categorySlug: string) => {
    setSelectedCategory(categorySlug === selectedCategory ? '' : categorySlug)
  }

  const recentPosts = blogs.slice(0, 3)

  return (
    <div className="min-h-screen pt-[200px] pb-16 bg-gradient-to-br from-[#F8F5F0] to-[#EAE0D5] text-[#3E3636]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-2">
          <div className="text-5xl md:text-6xl lg:text-7xl font-black text-[#8D7B68]/20 select-none mb-2">
            RIVER SALON AND DAY SPA
          </div>
        </div>
        <div className="text-center mb-4">
          <h1 className="text-3xl lg:text-5xl font-black text-[#8D7B68] mb-4">
            <span className="font-normal">Blogs</span>
          </h1>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
          {/* <Link href="/blog-index" className="text-sm text-gray-500 hover:text-green-600">
            View All Posts Index
          </Link> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Blog Grid */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-6">
                      <div className="h-4 bg-gray-200 rounded mb-3"></div>
                      <div className="h-3 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogs.map((blog) => (
                    <div key={blog._id} className="bg-white rounded-4xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                      <div className="w-full h-60 overflow-hidden">
                        <img
                          src={blog.featuredImage || '/images/blog_banner.png'}
                          alt={blog.featuredImageAlt || blog.title}
                          className="w-full h-full object-contain md:object-cover object-center block group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        {blog.category && (
                          <span
                            className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full mb-3"
                            style={{ backgroundColor: blog.category.color }}
                          >
                            {blog.category.name}
                          </span>
                        )}
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString()}
                        </div>
                        <p className="text-xl font-bold text-[#8D7B68] mb-3 line-clamp-2">
                          {blog.title}
                        </p>
                        <p className="text-[#3E3636]/80 mb-4 line-clamp-3">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <Link
                            href={`/blog/${blog.slug}`}
                            className="inline-flex items-center text-green-600 font-semibold hover:text-green-500 transition-colors"
                          >
                            Step Inside →
                          </Link>
                          <span className="text-sm text-gray-500">{blog.readTime} min read</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {pagination.totalPages > 1 && (
                  <div className="flex justify-center items-center mt-12 space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={!pagination.hasPrev}
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${!pagination.hasPrev
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-[#8D7B68] hover:bg-[#8D7B68] hover:text-white shadow-md hover:shadow-lg'
                        }`}
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Previous
                    </button>

                    <div className="flex space-x-1">
                      {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => {
                        const showPage =
                          page === 1 ||
                          page === pagination.totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)

                        if (!showPage) {
                          if (page === currentPage - 2 || page === currentPage + 2) {
                            return (
                              <span key={page} className="px-3 py-2 text-gray-400">
                                ...
                              </span>
                            )
                          }
                          return null
                        }

                        return (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${currentPage === page
                              ? 'bg-[#8D7B68] text-white shadow-lg'
                              : 'bg-white text-[#8D7B68] hover:bg-[#8D7B68] hover:text-white shadow-md hover:shadow-lg'
                              }`}
                          >
                            {page}
                          </button>
                        )
                      })}
                    </div>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={!pagination.hasNext}
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${!pagination.hasNext
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-[#8D7B68] hover:bg-[#8D7B68] hover:text-white shadow-md hover:shadow-lg'
                        }`}
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                )}

                {pagination.totalBlogs > 0 && (
                  <div className="text-center mt-6 text-sm text-gray-600">
                    Showing {((currentPage - 1) * 10) + 1}-{Math.min(currentPage * 10, pagination.totalBlogs)} of {pagination.totalBlogs} articles
                  </div>
                )}
              </>
            )}

            {blogs.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No blog posts found.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30">
              <p className="text-xl font-bold text-[#8D7B68] mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                CATEGORIES
              </p>
              <ul className="space-y-2">
                <li>
                  <span
                    onClick={() => handleCategoryClick('')}
                    className={`transition-colors block py-1 text-sm cursor-pointer ${selectedCategory === ''
                      ? 'text-green-600 font-semibold'
                      : 'text-[#3E3636]/80 hover:text-green-600'
                      }`}
                  >
                    All Categories
                  </span>
                </li>
                {categories.map((category) => (
                  <li key={category._id}>
                    <span
                      onClick={() => handleCategoryClick(category.slug)}
                      className={`transition-colors block py-1 text-sm cursor-pointer ${selectedCategory === category.slug
                        ? 'text-green-600 font-semibold'
                        : 'text-[#3E3636]/80 hover:text-green-600'
                        }`}
                    >
                      {category.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Posts */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30">
              <p className="text-xl font-bold text-[#8D7B68] mb-4">
                LATEST POSTS
              </p>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post._id} className="flex gap-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={post.featuredImage || '/images/blog_banner.png'}
                        alt={post.featuredImageAlt || post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <Link href={`/blog/${post.slug}`}>
                        <p className="text-sm font-semibold text-[#3E3636] hover:text-green-600 transition-colors line-clamp-2 mb-1">
                          {post.title}
                        </p>
                      </Link>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.publishedAt || post.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}