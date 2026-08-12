// Script to clean existing blog image URLs in database
const { MongoClient } = require('mongodb')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/riverdayspa'

async function cleanBlogImages() {
  const client = new MongoClient(MONGODB_URI)
  
  try {
    await client.connect()
    const db = client.db()
    const blogsCollection = db.collection('blogs')
    
    // Find all blogs
    const blogs = await blogsCollection.find({}).toArray()
    
    console.log(`Found ${blogs.length} blogs to process`)
    
    for (const blog of blogs) {
      let updated = false
      const updates = {}
      
      // Clean featured image URL
      if (blog.featuredImage && blog.featuredImage.includes('-') && /\/uploads\/blogs\/.*-\d+\.\w+$/.test(blog.featuredImage)) {
        updates.featuredImage = blog.featuredImage.replace(/-\d+(\.\w+)$/, '$1')
        updated = true
        console.log(`Cleaning featured image: ${blog.featuredImage} -> ${updates.featuredImage}`)
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
          console.log(`Cleaning content images for blog: ${blog.title}`)
        }
      }
      
      // Update blog if changes were made
      if (updated) {
        await blogsCollection.updateOne(
          { _id: blog._id },
          { $set: updates }
        )
        console.log(`Updated blog: ${blog.title}`)
      }
    }
    
    console.log('Blog image cleanup completed')
    
  } catch (error) {
    console.error('Error cleaning blog images:', error)
  } finally {
    await client.close()
  }
}

// Run the script
cleanBlogImages()