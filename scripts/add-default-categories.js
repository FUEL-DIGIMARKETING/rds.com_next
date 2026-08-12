const { MongoClient } = require('mongodb')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/riverdayspa'

const defaultCategories = [
  { name: 'Treatments', slug: 'treatments', description: 'Various spa treatments and therapies', color: '#8B5CF6' },
  { name: 'Spa', slug: 'spa', description: 'Spa services and experiences', color: '#06B6D4' },
  { name: 'Salon', slug: 'salon', description: 'Hair and beauty salon services', color: '#F59E0B' },
  { name: 'Scrubs & Wraps', slug: 'scrubs-wraps', description: 'Body scrubs and wraps treatments', color: '#10B981' },
  { name: 'Massages', slug: 'massages', description: 'Various massage therapies', color: '#EF4444' }
]

async function addDefaultCategories() {
  const client = new MongoClient(MONGODB_URI)
  
  try {
    await client.connect()
    console.log('Connected to MongoDB')
    
    const db = client.db()
    const categoriesCollection = db.collection('categories')
    
    for (const category of defaultCategories) {
      const existing = await categoriesCollection.findOne({ slug: category.slug })
      
      if (!existing) {
        await categoriesCollection.insertOne({
          ...category,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        console.log(`Added category: ${category.name}`)
      } else {
        console.log(`Category already exists: ${category.name}`)
      }
    }
    
    console.log('Default categories setup complete!')
    
  } catch (error) {
    console.error('Error adding default categories:', error)
  } finally {
    await client.close()
  }
}

addDefaultCategories()