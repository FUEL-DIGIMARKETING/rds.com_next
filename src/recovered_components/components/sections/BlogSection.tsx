'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Text animation variants
const textVariants = {
  hidden: { opacity: 0, filter: 'blur(10px)', x: -50 },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)', 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  slug: string
  image: string
  date: string
  category: string
}

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  // Sample blog data - replace with actual API call
  const sampleBlogs: BlogPost[] = [
    {
      id: 1,
      title: "Understanding the Importance of Different Types of Body Massage",
      excerpt: "Discover the various types of body massages and their unique benefits for your health and wellness journey.",
      slug: "understanding-the-importance-of-different-types-of-body-massage",
      image: "https://www.riverdayspa.com/asset/best-massage-in-chennai.webp",
      date: "2024-01-15",
      category: "Massage Therapy"
    },
    {
      id: 2,
      title: "Indulge in Aromatherapy: Rejuvenate, Relax, Refresh Yourself",
      excerpt: "Learn how aromatherapy can transform your spa experience and provide deep relaxation for mind and body.",
      slug: "indulge-in-aromatherapy-rejuvenate-relax-refresh-yourself",
      image: "https://www.riverdayspa.com/asset/best-ayurvedic-abhyanga-full-body-massage-spa-center-chennai-river-day-spa.webp",
      date: "2024-01-10",
      category: "Aromatherapy"
    },
    {
      id: 3,
      title: "Benefits of Ayurvedic Massage for Modern Lifestyle",
      excerpt: "Explore how ancient Ayurvedic massage techniques can help combat modern stress and lifestyle challenges.",
      slug: "benefits-of-getting-an-ayurvedic-massage",
      image: "https://www.riverdayspa.com/asset/best-ayurvedic-thai-full-body-massage-spa-center-chennai-river-day-spa.webp",
      date: "2024-01-05",
      category: "Ayurveda"
    }
  ]

  useEffect(() => {
    // Simulate API call
    const fetchBlogs = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch('/api/blogs')
        // const data = await response.json()
        
        // For now, use sample data
        setTimeout(() => {
          setBlogPosts(sampleBlogs)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error('Error fetching blogs:', error)
        setBlogPosts(sampleBlogs)
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-[#FEFEFE] to-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8D7B68] mb-4">Latest from Our Blog</h2>
            <div className="flex justify-center">
              <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-[#FEFEFE] to-[#F5F5F5] text-[#3E3636] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#8D7B68] mb-6">
            Latest Blog Posts
          </h2>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(-3).map((post, index) => (
            <motion.div
              key={post.id}
              className="relative bg-white/90 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden group hover:shadow-xl border border-[#8D7B68]/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Link href={`/${post.slug}`} onClick={scrollToTop}>
                <div className="overflow-hidden h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#3E3636] mb-3 group-hover:text-[#8D7B68] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#3E3636]/80 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-[#8D7B68] text-sm font-medium">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="text-green-600 text-sm font-medium group-hover:text-green-500 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection