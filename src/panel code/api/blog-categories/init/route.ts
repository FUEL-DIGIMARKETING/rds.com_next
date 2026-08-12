import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Category from '@/models/Category'

const defaultCategories = [
  { name: 'Treatments', slug: 'treatments', description: 'Various spa treatments and therapies', color: '#8B5CF6' },
  { name: 'Spa', slug: 'spa', description: 'Spa services and experiences', color: '#06B6D4' },
  { name: 'Salon', slug: 'salon', description: 'Hair and beauty salon services', color: '#F59E0B' },
  { name: 'Scrubs & Wraps', slug: 'scrubs-wraps', description: 'Body scrubs and wraps treatments', color: '#10B981' },
  { name: 'Massages', slug: 'massages', description: 'Various massage therapies', color: '#EF4444' }
]

export async function POST() {
  try {
    await dbConnect()
    
    const results = []
    
    for (const categoryData of defaultCategories) {
      const existing = await Category.findOne({ slug: categoryData.slug })
      
      if (!existing) {
        const category = await Category.create(categoryData)
        results.push({ action: 'created', category: category.name })
      } else {
        results.push({ action: 'exists', category: categoryData.name })
      }
    }
    
    return NextResponse.json({ 
      message: 'Default categories initialized successfully',
      results 
    })
  } catch (error) {
    console.error('Error initializing categories:', error)
    return NextResponse.json({ error: 'Failed to initialize categories' }, { status: 500 })
  }
}