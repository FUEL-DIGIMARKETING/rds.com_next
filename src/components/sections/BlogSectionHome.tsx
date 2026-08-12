'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface BlogPost {
  _id: string
  title: string
  content: string
  slug: string
  image: string | null
  createdAt: string
  metaDescription?: string
}

const BlogSectionHome = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  // Get blogs data - same as BlogSection
  const getBlogsData = () => {
    return [
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
        content: 'In the fast life that we lead today, it\'s not a luxury to spend a bit of time relaxing and recharging; it\'s more a necessity. A growing number of men are seeking professional massage therapy to restore their physical and emotional health despite Chennai\'s busy lifestyle.',
        image: '/images/blog/female-to-male-massages-for-healing-and-calm.avif',
        createdAt: '2025-09-10T00:00:00.000Z',
        metaDescription: 'Discover the benefits of therapeutic female-to-male massages in Chennai. Explore safe, professional services at River Salon and Day Spa.'
      },
      {
        _id: '12',
        title: 'The Role of Massage in PTSD and Trauma Recovery - Bangalore Massage Centre',
        slug: 'ptsd-and-trauma-recovery-in-banglore-massage-centre',
        content: 'The Post-Traumatic Stress Disorder (PTSD) and trauma healing require detailed, multifaceted approaches. While counselling and medication are at the core of healing, complementary therapies such as massage therapy have strong healing benefits.',
        image: '/images/blog/massage-ptsd-trauma-recovery-in-banglore.webp',
        createdAt: '2025-09-08T00:00:00.000Z',
        metaDescription: 'Experience healing touch in Bangalore. Explore massage therapy and couple spas that support trauma and PTSD recovery.'
      },
      {
        _id: '11',
        title: 'Improve Blood Circulation with Authentic Thai Massage in Coimbatore',
        slug: 'improve-blood-circulation-with-authentic-thai-massage-in-coimbatore',
        content: 'In today\'s world, our bodies take the impact of our lives—be it from hours at the computer, leaning over a keyboard or mouse, or the tension associated with stress. One holistic method for fighting these contemporary afflictions is through genuine Thai massage.',
        image: '/images/blog/thai-massage-in-coimbatore.webp',
        createdAt: '2025-07-30T00:00:00.000Z',
        metaDescription: 'Enhance Blood Circulation with Authentic Thai Massage in Coimbatore at River Salon and Day Spa. Experience deep relaxation and holistic wellness benefits.'
      },
      {
        _id: '10',
        title: 'The Benefits of Foot Reflexology for the Elderly',
        slug: 'the-benefits-of-food-reflexology-for-the-elderly',
        content: 'Foot reflexology is an old healing method with roots in Traditional Chinese Medicine, based on the belief that there are areas of the feet that relate to organs and systems of the body.',
        image: '/images/blog/the-benefits-of-food-reflexology-for-the-elderly.jpeg',
        createdAt: '2025-06-21T00:00:00.000Z',
        metaDescription: 'Discover the benefits of Foot Reflexology for the elderly at River Salon and Day Spa.'
      },
      {
        _id: '9',
        title: 'The Benefits of Spa Massage for Seniors: A Gentle Method to Pain Relief',
        slug: 'the-benefits-of-spa-massage-for-seniors-a-gentle-method-to-pain-relief',
        content: 'Massages are one of the best ways to heal the body from physical and mental tension. There are many reasons why people get massages.',
        image: '/images/blog/how-spa-massages-relieve-pain.jpeg',
        createdAt: '2025-04-23T00:00:00.000Z',
        metaDescription: 'Discover the benefits of spa massage for seniors. Learn about gentle massage techniques for pain relief, improved mobility, and wellness.'
      },
      {
        _id: '8',
        title: 'Are Spa Centres in Chennai Safe for Women?',
        slug: 'are-spa-centres-in-chennai-safe-for-women',
        content: 'The past two years have witnessed Spa Centers in India, especially Chennai, becoming very popular. From a relaxing Massage, a facial to revitalize your complexion, to an Ayurvedic body treatment.',
        image: '/images/blog/what-is-a-spa-or-massage-center.jpeg',
        createdAt: '2025-04-18T00:00:00.000Z',
        metaDescription: 'Discover the safety measures and protocols at spa centres in Chennai for women.'
      },
      {
        _id: '7',
        title: 'Best Massage Spas in Chennai for Stress Relief',
        slug: 'best-massage-spa-in-chennai-for-stress-relief',
        content: 'With the stressful life of the present day, stress is also a part of our life now. Relaxing and rejuvenating oneself can be done in the best possible way by pampering oneself with a soothing massage.',
        image: '/images/blog/best-massage-spas-in-chennai.webp',
        createdAt: '2025-03-12T00:00:00.000Z',
        metaDescription: 'Discover the best massage spas in Chennai for stress relief.'
      },
      {
        _id: '6',
        title: 'The Best Salon in Tirupur: Where Beauty Meets Perfection',
        slug: 'best-salon-in-tirupur-beauty-meets-perfection',
        content: 'Tirupur, the lively city of fashion and textiles, is also the hub of beauty and wellness. In the midst of scurrying for life, beauty colliding with perfection serves as an important self-care and rejuvenation haven.',
        image: '/images/blog/salon-in-tirupur-where-beauty-meets-perfection.webp',
        createdAt: '2025-02-08T00:00:00.000Z',
        metaDescription: 'The Best Salon in Tirupur: Where Beauty Meets Perfection.'
      },
      {
        _id: '5',
        title: 'Best Spa in Bangalore: A Luxurious Escape That Helps with Weight Loss',
        slug: 'best-spa-in-bangalore-for-weight-loss-treatments',
        content: 'The pace of life is overwhelming in Bangalore, but this is the city where the importance of self-care and wellness assumes a relevance it has never had earlier.',
        image: '/images/blog/best-spa-in-bangalore-to-help-in-weight-loss.webp',
        createdAt: '2025-01-22T00:00:00.000Z',
        metaDescription: 'Discover the best spa in Bangalore offering luxurious therapies, weight loss programs, and holistic wellness.'
      },
      {
        _id: '4',
        title: 'Why Choosing the Best Beauty Parlour in Tirupur Can Transform Your Look',
        slug: 'why-choosing-the-best-beauty-parlour-in-tirupur-can-transform-your-look',
        content: 'Self-care and personal grooming are the most essential aspects in a city like Tirupur, which is always on the move with activity, has vibrant textile industries, and dynamically leads a lifestyle.',
        image: '/images/blog/why-choosing-the-best-beauty-parlour-in-tirupur-river-day-spa.webp',
        createdAt: '2025-01-08T00:00:00.000Z',
        metaDescription: 'Discover how the best beauty parlour in Tirupur enhances your style, boosts confidence, and redefines your grooming.'
      },
      {
        _id: '3',
        title: 'Countdown from Christmas to New Year: Quick Beauty Fixes at the Best Luxury Spa for Last-Minute Glam',
        slug: 'count-down-from-christmas-to-new-year-at-best-luxury-spa',
        content: 'The spark, twinkling lights sparkle and ornament our surroundings, as there comes laughter and happiness while in company gatherings, and countless celebrative events that warm the hearts with full heat.',
        image: '/images/blog/countdown-from-christmas-to-new-year-best-luxury-spa.webp',
        createdAt: '2024-12-24T00:00:00.000Z',
        metaDescription: 'Discover quick beauty fixes at the best luxury spa to shine this festive season.'
      },
      {
        _id: '2',
        title: 'Foot Massage in Chennai: A Natural Relief for Labour Pain',
        slug: 'foot-massage-in-chennai-natural-pain-relief-for-labour-pain',
        content: 'Labour pain is one of the most uncomfortable aspects of natural childbirth both emotionally and physically. Now modern medicine allows for epidurals and pain medication, but many have turned towards the more wholesome approaches.',
        image: '/images/blog/foot-massage-in-chennai-a-natural-pain-relief-for-labour-pain.webp',
        createdAt: '2024-12-11T00:00:00.000Z',
        metaDescription: 'Discover how foot massage in Chennai provides natural pain relief during labour.'
      },
      {
        _id: '1',
        title: 'Best Thai Massage in Bangalore for Chronic Pain Relief',
        slug: 'thai-massage-bangalore-chronic-pain',
        content: 'Not to be left behind are Bangalore and its upscale lifestyle, which boasts some of the best wellness centers in the country. Between deadlines and traffic, many have been plagued with chronic pain issues.',
        image: '/images/blog/6-Benefits-of-Body-Wraps-River-Salon-Day-Spa.webp',
        createdAt: '2024-12-03T00:00:00.000Z',
        metaDescription: 'Experience ultimate relief from chronic pain with the best Thai massage in Bangalore.'
      }
    ]
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const allBlogs = getBlogsData()
        // Sort by date (latest first) and take first 3
        const sortedBlogs = allBlogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        setBlogPosts(sortedBlogs.slice(0, 3))
        setLoading(false)
      } catch (error) {
        console.error('Error fetching blogs:', error)
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
          {blogPosts.map((post, index) => (
            <motion.div
              key={post._id}
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
                    src={post.image || '/images/best-spa-in-chennai-river-day-spa.webp'}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                      Blog
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#3E3636] mb-3 group-hover:text-[#8D7B68] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#3E3636]/80 mb-4 text-sm line-clamp-3">{post.content.replace(/<[^>]*>/g, '').substring(0, 120)}...</p>
                  <div className="flex items-center justify-between">
                    <div className="text-[#8D7B68] text-sm font-medium">
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
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

export default BlogSectionHome