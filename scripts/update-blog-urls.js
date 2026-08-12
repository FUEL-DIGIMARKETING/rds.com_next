const mongoose = require('mongoose');
require('dotenv').config();

// Blog schema (simplified)
const BlogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  content: String,
  excerpt: String,
  featuredImage: String,
  featuredImageAlt: String,
  status: String,
  authorId: mongoose.Schema.Types.ObjectId,
  category: mongoose.Schema.Types.ObjectId,
  categories: [String],
  tags: [String],
  metaTitle: String,
  metaDescription: String,
  metaKeywords: [String],
  publishedAt: Date,
  scheduledAt: Date,
  wordCount: Number,
  readTime: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

async function updateBlogUrls() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Get all blogs
    const blogs = await Blog.find({});
    console.log(`Found ${blogs.length} total blogs`);
    
    // Check what fields exist
    if (blogs.length > 0) {
      console.log('Sample blog fields:', Object.keys(blogs[0].toObject()));
    }

    // Get blogs with images (check featuredImage field)
    const blogsWithImages = blogs.filter(blog => 
      blog.featuredImage && blog.featuredImage.trim() !== ''
    );
    console.log(`Found ${blogsWithImages.length} blogs with images`);

    for (const blog of blogsWithImages) {
      const imageField = blog.featuredImage;
      
      // Check if it's already a clean URL or needs updating
      if (imageField && !imageField.startsWith('/uploads/blogs/') && !imageField.startsWith('http')) {
        // Convert old image filename to clean URL format
        const now = new Date(blog.createdAt);
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        
        // Remove timestamp from filename if present
        const cleanFilename = imageField.replace(/-\d{13,}/, '');
        
        const cleanUrl = `/uploads/blogs/${year}/${month}/${cleanFilename}`;
        
        // Update the blog
        await Blog.findByIdAndUpdate(blog._id, { featuredImage: cleanUrl });
        console.log(`Updated blog "${blog.title}": ${imageField} -> ${cleanUrl}`);
      } else if (imageField && imageField.includes('-') && /\d{13,}/.test(imageField)) {
        // Handle URLs that already have the path but still contain timestamps
        const cleanUrl = imageField.replace(/-\d{13,}/, '');
        await Blog.findByIdAndUpdate(blog._id, { featuredImage: cleanUrl });
        console.log(`Cleaned blog "${blog.title}": ${imageField} -> ${cleanUrl}`);
      }
    }

    console.log('Blog URL update completed!');
    process.exit(0);
  } catch (error) {
    console.error('Error updating blog URLs:', error);
    process.exit(1);
  }
}

updateBlogUrls();