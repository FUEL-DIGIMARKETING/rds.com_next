'use client'

import React, { useState, useEffect } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { Search, Calendar, User, Tag, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import CustomImage from '../CustomImage'
import { cleanBlogImageUrl, getBlogImageUrl } from '@/utils/blogImageUtils'

interface Blog {
  _id: string
  title: string
  slug: string
  content: string
  image: string | null
  createdAt: string
  metaDescription?: string
}

const BlogSection = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [categories] = useState(['Spa Treatments', 'Wellness', 'Beauty Tips', 'Health'])
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 10

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      // Static blog data from frontend
      const staticBlogs = [
        {
          _id: '14',
          title: 'Best Massage Spa in Bangalore Provide Massage for Rheumatoid Arthritis',
          slug: 'best-massage-spa-in-bangalore-for-rheumatoid-arthritis',
          content: 'Rheumatoid arthritis (RA) is a chronic autoimmune condition that affects millions of people worldwide, causing inflammation, pain, and stiffness in the joints. While medical treatment is essential for managing RA, complementary therapies like massage can provide significant relief and improve quality of life.',
          image: '/images/blog/best-massage-spa-in-bangalore-provide-massage-for-rheumatoid-arthritis.webp',
          createdAt: '2025-10-17T00:00:00.000Z',
          metaDescription: 'Discover specialized massage therapy for rheumatoid arthritis at the best spa in Bangalore. Expert treatments to reduce pain and improve mobility.'
        },
        {
          _id: '13',
          title: 'Chennai\'s Best Female-to-Male Massages for Healing & Calm',
          slug: 'chennai-best-female-to-male-massages-for-healing-and-Calm',
          content: 'In the fast life that we lead today, it\'s not a luxury to spend a bit of time relaxing and recharging; it\'s more a necessity. A growing number of men are seeking professional massage therapy to restore their physical and emotional health despite Chennai\'s busy lifestyle. Among the city\'s growing array of services is the female-to-male massage, a treatment that unites the healing touch of licensed female practitioners with a range of relaxation and therapeutic advantages.',
          image: '/images/blog/female-to-male-massages-for-healing-and-calm.avif',
          createdAt: '2025-09-10T00:00:00.000Z',
          metaDescription: 'Discover the benefits of therapeutic female-to-male massages in Chennai. Explore safe, professional services at River Salon and Day Spa.'
        },
        {
          _id: '12',
          title: 'The Role of Massage in PTSD and Trauma Recovery - Bangalore Massage Centre',
          slug: 'ptsd-and-trauma-recovery-in-banglore-massage-centre',
          content: 'The Post-Traumatic Stress Disorder (PTSD) and trauma healing require detailed, multifaceted approaches. While counselling and medication are at the core of healing, complementary therapies such as massage therapy have strong healing benefits. Understanding trauma recovery through massage therapy provides additional pathways to recovery and healing for people dealing with PTSD.',
          image: '/images/blog/massage-ptsd-trauma-recovery-in-banglore.webp',
          createdAt: '2025-09-08T00:00:00.000Z',
          metaDescription: 'Experience healing touch in Bangalore. Explore massage therapy and couple spas that support trauma and PTSD recovery.'
        },
        {
          _id: '11',
          title: 'Improve Blood Circulation with Authentic Thai Massage in Coimbatore',
          slug: 'improve-blood-circulation-with-authentic-thai-massage-in-coimbatore',
          content: 'In today\'s world, our bodies take the impact of our lives—be it from hours at the computer, leaning over a keyboard or mouse, or the tension associated with stress. One holistic method for fighting these contemporary afflictions is through genuine Thai massage, an old-fashioned therapy that not only relieves tension but also greatly improves Blood circulation.',
          image: '/images/blog/thai-massage-in-coimbatore.webp',
          createdAt: '2025-07-30T00:00:00.000Z',
          metaDescription: 'Enhance Blood Circulation with Authentic Thai Massage in Coimbatore at River Salon and Day Spa. Experience deep relaxation and holistic wellness benefits.'
        },
        {
          _id: '10',
          title: 'The Benefits of Foot Reflexology for the Elderly',
          slug: 'the-benefits-of-food-reflexology-for-the-elderly',
          content: 'Foot reflexology is an old healing method with roots in Traditional Chinese Medicine, based on the belief that there are areas of the feet that relate to organs and systems of the body. Reflex points are massaged in an attempt to revitalize balance, ease tension, and foster well-being.',
          image: '/images/blog/the-benefits-of-food-reflexology-for-the-elderly.jpeg',
          createdAt: '2025-06-21T00:00:00.000Z',
          metaDescription: 'Discover the benefits of Foot Reflexology for the elderly at River Salon and Day Spa. Experience expert Foot Reflexology in Bangalore to enhance wellness and mobility.'
        },
        {
          _id: '9',
          title: 'The Benefits of Spa Massage for Seniors: A Gentle Method to Pain Relief',
          slug: 'the-benefits-of-spa-massage-for-seniors-a-gentle-method-to-pain-relief',
          content: 'Massages are one of the best ways to heal the body from physical and mental tension. There are many reasons why people get massages. For instance, an athlete wants to recover from a sports injury or an office goer wants to relax after a hectic day – since the needs are different in both these cases, the techniques to be used by the therapists will also differ.',
          image: '/images/blog/how-spa-massages-relieve-pain.jpeg',
          createdAt: '2025-04-23T00:00:00.000Z',
          metaDescription: 'Discover the benefits of spa massage for seniors. Learn about gentle massage techniques for pain relief, improved mobility, and wellness.'
        },
        {
          _id: '8',
          title: "Are Spa Centres in Chennai Safe for Women? Here's What You Should Know Before Your Next Massage",
          slug: 'are-spa-centres-in-chennai-safe-for-women',
          content: 'The past two years have witnessed Spa Centers in India, especially Chennai, becoming very popular. From a relaxing Massage, a facial to revitalize your complexion, to an Ayurvedic body treatment, individuals step out to go to Massage Centers to chill and unwind. River Salon and Day Spa is one of the most popular names that have become the buzzword among wellness enthusiasts.',
          image: '/images/blog/what-is-a-spa-or-massage-center.jpeg',
          createdAt: '2025-04-18T00:00:00.000Z',
          metaDescription: 'Discover the safety measures and protocols at spa centres in Chennai for women. Learn about secure environments, professional standards, and trusted spa services.'
        }
        ,
        {
          _id: '7',
          title: 'Best Massage Spas in Chennai for Stress Relief',
          slug: 'best-massage-spa-in-chennai-for-stress-relief',
          content: 'With the stressful life of the present day, stress is also a part of our life now. Relaxing and rejuvenating oneself can be done in the best possible way by pampering oneself with a soothing massage in one of the finest Massage Spas. Chennai, the busy city, has River Salon & Day Spa, one of the Best Massage Spas in Chennai, within its limits.',
          image: '/images/blog/best-massage-spas-in-chennai.webp',
          createdAt: '2025-03-12T00:00:00.000Z',
          metaDescription: 'Discover the best massage spas in Chennai for stress relief. Indulge in soothing therapies, expert treatments, and relaxing ambiance to unwind and rejuvenate.'
        },
        {
          _id: '6',
          title: 'The Best Salon in Tirupur: Where Beauty Meets Perfection',
          slug: 'best-salon-in-tirupur-beauty-meets-perfection',
          content: 'Tirupur, the lively city of fashion and textiles, is also the hub of beauty and wellness. In the midst of scurrying for life, beauty colliding with perfection serves as an important self-care and rejuvenation haven. So, if you\'re seeking a salon that epitomizes experience, luxury, and excellent service, then River Salon and Day Spa in Tirupur has it.',
          image: '/images/blog/salon-in-tirupur-where-beauty-meets-perfection.webp',
          createdAt: '2025-02-08T00:00:00.000Z',
          metaDescription: 'The Best Salon in Tirupur: Where Beauty Meets Perfection. Experience expert styling, premium services, and luxurious treatments.'
        },
        {
          _id: '5',
          title: 'Best Spa in Bangalore: A Luxurious Escape That Helps with Weight Loss',
          slug: 'best-spa-in-bangalore-for-weight-loss-treatments',
          content: 'The pace of life is overwhelming in Bangalore, but this is the city where the importance of self-care and wellness assumes a relevance it has never had earlier. Responding to the demands, this is a place where luxury retreats that amount to more than merely relaxing abound in spa culture.',
          image: '/images/blog/best-spa-in-bangalore-to-help-in-weight-loss.webp',
          createdAt: '2025-01-22T00:00:00.000Z',
          metaDescription: 'Discover the best spa in Bangalore offering luxurious therapies, weight loss programs, and holistic wellness for ultimate relaxation.'
        },
        {
          _id: '4',
          title: 'Why Choosing the Best Beauty Parlour in Tirupur Can Transform Your Look',
          slug: 'why-choosing-the-best-beauty-parlour-in-tirupur-can-transform-your-look',
          content: 'Self-care and personal grooming are the most essential aspects in a city like Tirupur, which is always on the move with activity, has vibrant textile industries, and dynamically leads a lifestyle. In that case, the parlour you select will be the one that forms your look and adds to it.',
          image: '/images/blog/why-choosing-the-best-beauty-parlour-in-tirupur-river-day-spa.webp',
          createdAt: '2025-01-08T00:00:00.000Z',
          metaDescription: 'Discover how the best beauty parlour in Tirupur enhances your style, boosts confidence, and redefines your grooming.'
        },
        {
          _id: '3',
          title: 'Countdown from Christmas to New Year: Quick Beauty Fixes at the Best Luxury Spa for Last-Minute Glam',
          slug: 'count-down-from-christmas-to-new-year-at-best-luxury-spa',
          content: 'The spark, twinkling lights sparkle and ornament our surroundings, as there comes laughter and happiness while in company gatherings, and countless celebrative events that warm the hearts with full heat. Before the exciting countdown as the New Year approaches, it starts with a supper on Christmas Eve where families are invited to a crowd.',
          image: '/images/blog/countdown-from-christmas-to-new-year-best-luxury-spa.webp',
          createdAt: '2024-12-24T00:00:00.000Z',
          metaDescription: 'Discover quick beauty fixes at the best luxury spa to shine this festive season and the countdown starts from Christmas to New Year.'
        },
        {
          _id: '2',
          title: 'Foot Massage in Chennai: A Natural Relief for Labour Pain',
          slug: 'foot-massage-in-chennai-natural-pain-relief-for-labour-pain',
          content: 'Labour pain is one of the most uncomfortable aspects of natural childbirth both emotionally and physically. Now modern medicine allows for epidurals and pain medication, but many have turned towards the more wholesome approaches to relieving labour pain, and the simplest one, which has gained popularity lately, is a foot massage.',
          image: '/images/blog/foot-massage-in-chennai-a-natural-pain-relief-for-labour-pain.webp',
          createdAt: '2024-12-11T00:00:00.000Z',
          metaDescription: 'Discover how foot massage in Chennai provides natural pain relief during labour, promoting comfort and relaxation.'
        },
        {
          _id: '1',
          title: 'Best Thai Massage in Bangalore for Chronic Pain Relief',
          slug: 'thai-massage-bangalore-chronic-pain',
          content: 'Not to be left behind are Bangalore and its upscale lifestyle, which boasts some of the best wellness centers in the country. Between deadlines and traffic, many have been plagued with chronic pain issues. Stress-related tension, such as lower back pain due to sitting long hours at work, will dent the overall well-being of a person.',
          image: '/images/blog/6-Benefits-of-Body-Wraps-River-Salon-Day-Spa.webp',
          createdAt: '2024-12-03T00:00:00.000Z',
          metaDescription: 'Experience ultimate relief from chronic pain with the best Thai massage in Bangalore. Book your relaxing session today!'
        }
      ]
      // Sort blogs by date (latest first)
      const sortedBlogs = staticBlogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      setBlogs(sortedBlogs)
    } catch (error) {
      console.error('Error loading blogs:', error)
      setBlogs([])
    } finally {
      setLoading(false)
    }
  }

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)
  const startIndex = (currentPage - 1) * blogsPerPage
  const endIndex = startIndex + blogsPerPage
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex)

  const recentPosts = blogs.slice(0, 3)

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="pt-[200px] pb-16 bg-gradient-to-br from-[#F8F5F0] to-[#EAE0D5] text-[#3E3636]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Stylish RIVERDAYSPA Text */}
        <div className="text-center mb-2">
          <div className="text-5xl md:text-6xl lg:text-7xl font-black text-[#8D7B68]/20 select-none mb-2">
            RIVER SALON AND DAY SPA
          </div>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-3xl lg:text-5xl font-black text-[#8D7B68] mb-4">
            <span className="font-normal">Blogs</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
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
                  {currentBlogs.map((blog) => (
                    <div key={blog._id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                      <div className="relative h-60 overflow-hidden">
                        {blog.image ? (
                          <img
                            src={getBlogImageUrl(blog.image)}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#8D7B68] to-[#A9907E] flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">RDS</span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </div>
                        <h3 className="text-xl font-bold text-[#8D7B68] mb-3 line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-[#3E3636]/80 mb-4 line-clamp-3">
                          {blog.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
                        </p>
                        <Link
                          href={`/${blog.slug}`}
                          className="inline-flex items-center text-green-600 font-semibold hover:text-green-500 transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center mt-12 space-x-2">
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-[#8D7B68] hover:bg-[#8D7B68] hover:text-white shadow-md hover:shadow-lg'
                        }`}
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Previous
                    </button>

                    {/* Page Numbers */}
                    <div className="flex space-x-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                        // Show first page, last page, current page, and pages around current
                        const showPage =
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)

                        if (!showPage) {
                          // Show ellipsis
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

                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-[#8D7B68] hover:bg-[#8D7B68] hover:text-white shadow-md hover:shadow-lg'
                        }`}
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                )}

                {/* Page Info */}
                {filteredBlogs.length > 0 && (
                  <div className="text-center mt-6 text-sm text-gray-600">
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredBlogs.length)} of {filteredBlogs.length} articles
                  </div>
                )}
              </>
            )}

            {filteredBlogs.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No blog posts found.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* All Categories */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30">
              <h3 className="text-xl font-bold text-[#8D7B68] mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                ALL CATEGORIES
              </h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`#`}
                      className="text-[#3E3636]/80 hover:text-green-600 transition-colors block py-1 text-sm"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Posts */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30">
              <h3 className="text-xl font-bold text-[#8D7B68] mb-4">
                LATEST POSTS
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post._id} className="flex gap-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      {post.image ? (
                        <img
                          src={getBlogImageUrl(post.image)}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#8D7B68] to-[#A9907E] flex items-center justify-center">
                          <span className="text-white text-xs font-bold">RDS</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <Link href={`/${post.slug}`}>
                        <h4 className="text-sm font-semibold text-[#3E3636] hover:text-green-600 transition-colors line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                      </Link>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>


      </div>
    </section>
  )
}

export default BlogSection