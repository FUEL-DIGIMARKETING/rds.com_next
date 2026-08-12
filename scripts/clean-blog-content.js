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

async function cleanBlogContent() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Get all blogs
    const blogs = await Blog.find({});
    console.log(`Found ${blogs.length} total blogs`);

    let updatedCount = 0;

    for (const blog of blogs) {
      let needsUpdate = false;
      let updatedContent = blog.content;
      let updatedFeaturedImage = blog.featuredImage;

      // Clean content - replace backend URLs with relative paths
      if (blog.content && blog.content.includes('0.0.0.0:2000')) {
        updatedContent = blog.content.replace(/https?:\/\/0\.0\.0\.0:2000/g, '');
        needsUpdate = true;
        console.log(`Cleaning content for blog: ${blog.title}`);
      }

      // Clean featured image URL
      if (blog.featuredImage && blog.featuredImage.includes('0.0.0.0:2000')) {
        updatedFeaturedImage = blog.featuredImage.replace(/https?:\/\/0\.0\.0\.0:2000/g, '');
        needsUpdate = true;
        console.log(`Cleaning featured image for blog: ${blog.title}`);
      }

      // Update if needed
      if (needsUpdate) {
        await Blog.findByIdAndUpdate(blog._id, {
          content: updatedContent,
          featuredImage: updatedFeaturedImage
        });
        updatedCount++;
      }
    }

    console.log(`Updated ${updatedCount} blogs`);
    console.log('Blog content cleanup completed!');
    process.exit(0);
  } catch (error) {
    console.error('Error cleaning blog content:', error);
    process.exit(1);
  }
}

cleanBlogContent();