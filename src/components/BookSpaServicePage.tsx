'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
import axios from 'axios'
import { getServiceImage } from '../utils/serviceImageMatcher'
import BookingPopupForm from './BookingPopupForm'

interface Product {
  id: string
  name: string
  price: number
  discountPrice?: number
  duration?: string
  image: string
  category: string
}

interface CartItem extends Product {
  quantity: number
  cartItemId: string
}

interface Category {
  id: string
  name: string
  products: Product[]
  subCategories?: { id: string; name: string; products: Product[] }[]
}

const BookSpaServicePage = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [activeTab, setActiveTab] = useState<string>('')
  const [activeSubTab, setActiveSubTab] = useState<string>('60 Minutes')
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [showPopupForm, setShowPopupForm] = useState(false)
  const [selectedProductForPopup, setSelectedProductForPopup] = useState<Product | null>(null)
  const [popupReappearTimer, setPopupReappearTimer] = useState<NodeJS.Timeout | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    date: '',
    location: '',
    message: ''
  })

  const carouselImages = [
    '/images/best-spa-chennai.webp',
    '/images/best-spa-coimbatore.png'
  ]

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' })

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Show popup form after 5 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopupForm(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  // Cleanup popup timer on unmount
  useEffect(() => {
    return () => {
      if (popupReappearTimer) {
        clearTimeout(popupReappearTimer)
      }
    }
  }, [popupReappearTimer])

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`)
        const transformedCategories = response.data.map((cat: any) => {
          let categoryName = cat.name
          if (cat.name.includes('Body massage - 60 Minutes') || cat.name.includes('Body massage - 90 Minutes')) {
            categoryName = 'Body massage'
          }
          return {
            id: cat.name,
            name: categoryName,
            originalName: cat.name,
            products: cat.products.map((p: any) => ({
              id: p.id,
              name: p.name,
              price: p.price,
              discountPrice: p.discountPrice,
              duration: cat.name.includes('Body massage - 60 Minutes') ? '60 mins' : cat.name.includes('Body massage - 90 Minutes') ? '90 mins' : undefined,
              image: p.image,
              category: cat.name
            }))
          }
        })

        // Group body massage categories
        const bodyMassageCategories = transformedCategories.filter((cat: any) => cat.name === 'Body massage')
        const otherCategories = transformedCategories.filter((cat: any) => cat.name !== 'Body massage')

        let finalCategories: Category[] = []

        if (bodyMassageCategories.length > 0) {
          const mergedBodyMassage = {
            id: 'Body massage',
            name: 'Body massage',
            originalName: 'Body massage',
            products: bodyMassageCategories.flatMap((cat: any) => cat.products),
            subCategories: bodyMassageCategories.map((cat: any) => ({
              id: cat.id,
              name: cat.originalName.includes('60 Minutes') ? '60 Minutes' : '90 Minutes',
              products: cat.products
            }))
          }
          finalCategories.push(mergedBodyMassage)
        }

        // Define the desired order
        const categoryOrder = [
          'Body massage',
          'Partial massage',
          'Body Scrub - 50 Minutes',
          'Body wrap - 50 Minutes'
        ]

        // Sort categories according to the desired order
        const sortedCategories: Category[] = []

        // Add categories in the specified order
        categoryOrder.forEach(categoryName => {
          const category = finalCategories.find((cat: Category) => cat.name === categoryName) ||
            otherCategories.find((cat: Category) => cat.name === categoryName)
          if (category) {
            sortedCategories.push(category)
          }
        })

        // Add remaining categories (packages and gift cards) at the end
        const remainingCategories = otherCategories.filter((cat: Category) =>
          !categoryOrder.includes(cat.name) && cat.name !== 'Body massage'
        )

        // Sort remaining categories to put packages before gift cards
        const packages = remainingCategories.filter((cat: Category) =>
          cat.name.toLowerCase().includes('package')
        )
        const giftCards = remainingCategories.filter((cat: Category) =>
          cat.name.toLowerCase().includes('gift')
        )
        const others = remainingCategories.filter((cat: Category) =>
          !cat.name.toLowerCase().includes('package') &&
          !cat.name.toLowerCase().includes('gift')
        )

        setCategories([...sortedCategories, ...others, ...packages, ...giftCards])

        if (transformedCategories.length > 0) {
          setActiveTab('Body massage')
        }
      } catch (error) {
        console.error('Error fetching categories:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [])

  const handlePopupClose = () => {
    if (popupReappearTimer) {
      clearTimeout(popupReappearTimer)
    }

    const timer = setTimeout(() => {
      setShowPopupForm(true)
    }, 30000)

    setPopupReappearTimer(timer)
    setShowPopupForm(false)
  }

  const handleBuyNow = (product: Product) => {
    setSelectedProductForPopup(product)
    if (popupReappearTimer) {
      clearTimeout(popupReappearTimer)
    }
    setShowPopupForm(true)
  }

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId))
  }

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCart(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const gst = subtotal * 0.18
    const total = subtotal + gst
    return { subtotal, discount: 0, priceAfterDiscount: subtotal, gst, total }
  }

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors }

    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required'
        } else if (value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters'
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          newErrors.name = 'Name can only contain letters and spaces'
        } else {
          delete newErrors.name
        }
        break
      case 'phone':
        if (!value.trim()) {
          newErrors.phone = 'Mobile number is required'
        } else if (!/^[0-9]{10}$/.test(value.replace(/\D/g, ''))) {
          newErrors.phone = 'Mobile number must be exactly 10 digits'
        } else {
          delete newErrors.phone
        }
        break
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email is required'
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          newErrors.email = 'Please enter a valid email address'
        } else {
          delete newErrors.email
        }
        break
      case 'address':
        if (!value.trim()) {
          newErrors.address = 'Address is required'
        } else if (value.trim().length < 10) {
          newErrors.address = 'Please enter a complete address'
        } else {
          delete newErrors.address
        }
        break
      case 'location':
        if (!value) {
          newErrors.location = 'Please select a location'
        } else {
          delete newErrors.location
        }
        break
    }

    setErrors(newErrors)
  }

  const handleInputChange = (name: string, value: string) => {
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '')
      if (numericValue.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: numericValue }))
        validateField(name, numericValue)
      }
      return
    }

    setFormData(prev => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const handlePopupFormSubmit = (popupData: any) => {
    setFormData(prev => ({
      ...prev,
      name: popupData.name,
      phone: popupData.phone,
      location: popupData.location,
      address: popupData.location
    }))
    
    setShowPopupForm(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: false, message: '' })

    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Mobile number is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.location) newErrors.location = 'Location is required'

    if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Mobile number must be 10 digits'
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email address'
    if (!/^[a-zA-Z\s]+$/.test(formData.name)) newErrors.name = 'Name can only contain letters and spaces'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSubmitStatus({ success: false, message: 'Please fix the errors above.' })
      setIsSubmitting(false)
      return
    }

    try {
      const bookingResponse = await axios.post('/api/bookings', {
        customer: {
          fullName: formData.name,
          mobile: formData.phone,
          email: formData.email,
          address: formData.address,
          location: formData.location,
          notes: formData.message
        },
        services: cart,
        amount: calculateTotal().total,
        status: 'pending'
      })

      if (bookingResponse.data.success) {
        const paymentResponse = await axios.post('/api/payments/create', {
          amount: calculateTotal().total.toFixed(2),
          purpose: `Spa Booking - ${cart.map(item => item.name).join(', ')}`,
          buyer_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          redirect_url: `${window.location.origin}/book-spa-service-appointment?booking_id=${bookingResponse.data.bookingId}`,
          booking_id: bookingResponse.data.bookingId
        })

        if (paymentResponse.data.success) {
          window.location.href = paymentResponse.data.payment_url
        } else {
          setSubmitStatus({ success: false, message: 'Payment initiation failed. Please try again.' })
        }
      }
    } catch (error) {
      console.error('Error processing payment:', error)
      setSubmitStatus({ success: false, message: 'Failed to process payment. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8F5F0] flex items-center justify-center">
        <div className="animate-pulse text-green-700 text-xl">Loading services...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* Booking Popup Form - Auto show and Buy Now */}
      {showPopupForm && (
        <BookingPopupForm
          onClose={handlePopupClose}
          onSubmit={handlePopupFormSubmit}
          categories={categories}
          services={categories.flatMap(cat => cat.products)}
          onReappear={() => setShowPopupForm(true)}
          preSelectedProduct={selectedProductForPopup}
        />
      )}
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('/images/book-spa-appointment.webp')` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Book Spa Appointment
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Cart Button */}
        {cart.length > 0 && (
          <motion.div
            className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button
              onClick={() => setShowCart(true)}
              className="bg-gradient-to-r from-green-600 to-green-500 text-white p-3 rounded-r-full shadow-lg hover:from-green-500 hover:to-green-600 transition-colors flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {cart.length}
              </span>
            </button>
          </motion.div>
        )}

        {/* Tab Section */}
        <div className="mb-12">
          <motion.p
            className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Choose Your Services
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />

          {/* Neumorphic Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#F8F5F0] p-2 rounded-3xl shadow-[inset_8px_8px_16px_#d1ccc4,inset_-8px_-8px_16px_#ffffff] max-w-6xl">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`px-4 py-3 rounded-2xl font-semibold transition-all duration-300 text-sm ${activeTab === category.id
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-[4px_4px_8px_#d1ccc4,-4px_-4px_8px_#ffffff]'
                      : 'text-green-700 hover:bg-white/50 shadow-[2px_2px_4px_#d1ccc4,-2px_-2px_4px_#ffffff]'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sub-tabs for Body massage */}
        {activeTab === 'Body massage' && (
          <div className="flex justify-center mb-8">
            <div className="bg-[#F8F5F0] p-1 rounded-2xl shadow-[inset_4px_4px_8px_#d1ccc4,inset_-4px_-4px_8px_#ffffff]">
              <div className="flex gap-1">
                {['60 Minutes', '90 Minutes'].map((subTab) => (
                  <motion.button
                    key={subTab}
                    onClick={() => setActiveSubTab(subTab)}
                    className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${activeSubTab === subTab
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-[2px_2px_4px_#d1ccc4,-2px_-2px_4px_#ffffff]'
                      : 'text-green-700 hover:bg-white/30'
                      }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {subTab}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <motion.div
          key={`${activeTab}-${activeSubTab}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {(() => {
            const category = categories.find(cat => cat.id === activeTab)
            if (activeTab === 'Body massage' && category?.subCategories) {
              return category.subCategories.find(sub => sub.name === activeSubTab)?.products || []
            }
            return category?.products || []
          })().map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-full"
              whileHover={{ y: -10 }}
            >
              <div
                className="relative h-full rounded-3xl p-6 transition-all duration-500 group-hover:shadow-2xl flex flex-col min-h-[400px]"
                style={{
                  background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                  boxShadow: '5px 5px 15px rgba(0,0,0,0.3), -5px -5px 15px rgba(255,255,255,0.05)'
                }}
              >
                <div className="relative h-48 overflow-hidden rounded-2xl mb-4">
                  <img
                    src={getServiceImage(product.name)}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.duration && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-green-700">{product.duration}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-grow">
                  <p className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {product.name}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-green-400">₹{product.price}</span>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => handleBuyNow(product)}
                    className="w-full mt-auto bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Buy Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default BookSpaServicePage
