'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Category {
  _id: string
  name: string
  slug: string
  color: string
}

export default function CategoriesSidebar() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/blog-categories')
      if (response.ok) {
        const data = await response.json()
        setCategories(data)
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error)
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <p className="text-lg font-bold text-[#8D7B68] mb-3">
        CATEGORIES
      </p>
      <ul className="space-y-2">
        <li className="flex justify-between items-center text-sm">
          <Link href="/blogs" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
            All Categories
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category._id} className="flex justify-between items-center text-sm">
            <Link 
              href={`/blogs?category=${category.slug}`} 
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}