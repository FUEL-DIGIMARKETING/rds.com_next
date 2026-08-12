'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { giftCardImageData } from '@/data/giftCardImageData'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.riverdayspa.com'

const giftCards = giftCardImageData

// Extract numeric price from plan string e.g. '2x60 Minutes Package + Steam - ₹4999' → 4999
const extractPrice = (plan: string): number => {
  const match = plan.match(/₹(\d+)/)
  return match ? parseInt(match[1], 10) : 0
}

const giftCardPlans: Record<number, string[]> = {
  1: [
    // Birthday Gift Card - matches DB exactly
    'Any 60 Minutes Package + Steam - ₹2499',
    '2x60 Minutes Package + Steam - ₹4499',
    '2x90 Minutes Package + Steam - ₹7499',
    '3x90 Minutes Package + Steam - ₹9999',
    '5x90 Minutes Package + Steam - ₹14999',
  ],
  2: [
    // Congratulations Gift Card - matches DB exactly
    'Any 60 Minutes Package+Steam - ₹2499',
    '2x60 Minutes Package+Steam - ₹4999',
    '2x90 Minutes Package+Steam - ₹7499',
    '3x90 Minutes Package+Steam - ₹9999',
    '5x90 Minutes Package+Steam - ₹14999',
  ],
  3: [
    // Anniversary Gift Card - matches DB exactly
    '1x60mins package for couple +Steam & Jacuzzi - ₹4000',
    '1x90mins package for couple +Steam & Jacuzzi - ₹8000',
    '2x90mins package for couple +Steam & Jacuzzi - ₹14000',
    '3x90mins package for couple +Steam & Jacuzzi - ₹18000',
  ],
  4: [
    // Festival Gift Card - matches DB exactly
    'Any 60 Minutes Package+Steam - ₹2499',
    '2x60 Minutes Package+Steam - ₹4999',
    '2x90 Minutes Package+Steam - ₹7499',
    '3x90 Minutes Package+Steam - ₹9999',
    '5x90 Minutes Package+Steam - ₹14999',
  ],
  5: [
    // Surprise Gift Card - matches DB exactly
    'Any 60 Minutes Package+Steam - ₹2499',
    '2x60 Minutes Package+Steam - ₹4999',
    '2x90 Minutes Package+Steam - ₹7499',
    '3x90 Minutes Package+Steam - ₹9999',
    '5x90 Minutes Package+Steam - ₹14999',
  ],
}

export default function SpaGiftCardPage() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientEmail: '',
    recipientMobile: '',
    senderName: '',
    senderEmail: '',
    senderMobile: '',
    redemptionLocation: '',
    plan: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' })
  const [paymentConfirmed, setPaymentConfirmed] = useState(false)
  const [confirmedPaymentId, setConfirmedPaymentId] = useState<string | null>(null)

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors }

    switch (name) {
      case 'recipientName':
      case 'senderName':
        if (!value.trim()) {
          newErrors[name] = 'Name is required'
        } else if (value.trim().length < 2) {
          newErrors[name] = 'Name must be at least 2 characters'
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          newErrors[name] = 'Name can only contain letters and spaces'
        } else {
          delete newErrors[name]
        }
        break
      case 'recipientEmail':
      case 'senderEmail':
        if (!value.trim()) {
          newErrors[name] = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[name] = 'Please enter a valid email address'
        } else {
          delete newErrors[name]
        }
        break
      case 'recipientMobile':
      case 'senderMobile':
        if (!value.trim()) {
          newErrors[name] = 'Mobile number is required'
        } else if (!/^[0-9]{10}$/.test(value.replace(/\D/g, ''))) {
          newErrors[name] = 'Mobile number must be exactly 10 digits'
        } else {
          delete newErrors[name]
        }
        break
    }

    setErrors(newErrors)
  }

  const handleInputChange = (name: string, value: string) => {
    // Restrict mobile numbers to 10 digits
    if (name === 'recipientMobile' || name === 'senderMobile') {
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

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: false, message: '' })

    // Validate all fields
    const newErrors: Record<string, string> = {}
    if (!formData.recipientName.trim()) newErrors.recipientName = 'Recipient name is required'
    if (!formData.recipientEmail.trim()) newErrors.recipientEmail = 'Recipient email is required'
    if (!formData.recipientMobile.trim()) newErrors.recipientMobile = 'Recipient mobile is required'
    if (!formData.senderName.trim()) newErrors.senderName = 'Sender name is required'
    if (!formData.senderEmail.trim()) newErrors.senderEmail = 'Sender email is required'
    if (!formData.senderMobile.trim()) newErrors.senderMobile = 'Sender mobile is required'
    if (!formData.redemptionLocation) newErrors.redemptionLocation = 'Location is required'
    if (!selectedCard) newErrors.selectedCard = 'Please select a gift card design'
    if (!formData.plan) newErrors.plan = 'Please select a plan'
    if (!/^[0-9]{10}$/.test(formData.recipientMobile)) newErrors.recipientMobile = 'Recipient mobile must be 10 digits'
    if (!/^[0-9]{10}$/.test(formData.senderMobile)) newErrors.senderMobile = 'Sender mobile must be 10 digits'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.recipientEmail)) newErrors.recipientEmail = 'Invalid recipient email'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.senderEmail)) newErrors.senderEmail = 'Invalid sender email'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSubmitStatus({ success: false, message: 'Please fix the errors above.' })
      setIsSubmitting(false)
      return
    }

    const amount = extractPrice(formData.plan)
    if (amount <= 0) {
      setSubmitStatus({ success: false, message: 'Could not determine plan price. Please reselect a plan.' })
      setIsSubmitting(false)
      return
    }

    try {
      // Step 1: Send email notification
      const emailRes = await fetch(`${API_BASE}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipient: { name: formData.recipientName, email: formData.recipientEmail, mobile: formData.recipientMobile },
          sender: { name: formData.senderName, email: formData.senderEmail, mobile: formData.senderMobile },
          location: formData.redemptionLocation,
          cardId: selectedCard,
          plan: formData.plan
        })
      })
      if (!emailRes.ok) {
        setSubmitStatus({ success: false, message: 'Failed to send gift card email. Please try again.' })
        setIsSubmitting(false)
        return
      }

      // Step 2: Create booking record
      const bookingRes = await fetch(`${API_BASE}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: {
            fullName: formData.senderName,
            mobile: formData.senderMobile,
            email: formData.senderEmail,
          },
          services: [{ name: `Gift Card - ${giftCards.find(c => c.id === selectedCard)?.name}`, price: amount, quantity: 1 }],
          amount,
          giftCard: {
            cardId: selectedCard,
            plan: formData.plan,
            recipientName: formData.recipientName,
            recipientEmail: formData.recipientEmail,
            recipientMobile: formData.recipientMobile,
            location: formData.redemptionLocation
          },
          status: 'pending'
        })
      })
      const bookingData = await bookingRes.json()
      if (!bookingData.success) {
        setSubmitStatus({ success: false, message: 'Failed to create booking. Please try again.' })
        setIsSubmitting(false)
        return
      }

      // Step 3: Create Razorpay order
      const paymentRes = await fetch(`${API_BASE}/api/payments/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          purpose: `Gift Card - ${formData.plan}`,
          buyer_name: formData.senderName,
          email: formData.senderEmail,
          phone: formData.senderMobile,
          booking_id: bookingData.bookingId
        })
      })
      const paymentData = await paymentRes.json()
      if (!paymentData.success) {
        setSubmitStatus({ success: false, message: `Payment initiation failed: ${paymentData.message || 'Unknown error'}` })
        setIsSubmitting(false)
        return
      }

      // Step 4: Open Razorpay popup
      const options = {
        key: paymentData.key_id,
        amount: paymentData.amount,
        currency: paymentData.currency,
        name: 'River Salon And Day Spa',
        description: `Gift Card - ${formData.plan}`,
        order_id: paymentData.order_id,
        prefill: {
          name: formData.senderName,
          email: formData.senderEmail,
          contact: formData.senderMobile
        },
        theme: { color: '#8D7B68' },
        handler: async (response: any) => {
          try {
            // Step 5: Verify payment
            const verifyRes = await fetch(`${API_BASE}/api/payments/verify`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
            })
            const verifyData = await verifyRes.json()
            if (verifyData.success) {
              setConfirmedPaymentId(response.razorpay_payment_id)
              setPaymentConfirmed(true)
              setIsSubmitting(false)
            } else {
              setSubmitStatus({ success: false, message: 'Payment verification failed. Please contact support.' })
              setIsSubmitting(false)
            }
          } catch (err) {
            setSubmitStatus({ success: false, message: 'Payment verification error. Please contact support.' })
            setIsSubmitting(false)
          }
        },
        modal: {
          ondismiss: () => setIsSubmitting(false)
        }
      }

      const rzp = new (window as any).Razorpay(options)
      rzp.open()

    } catch (error) {
      console.error('Gift card submit error:', error)
      setSubmitStatus({ success: false, message: 'Network error. Please check your connection and try again.' })
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Payment Confirmation Popup */}
      <AnimatePresence>
        {paymentConfirmed && (
          <motion.div
            key="gift-confirmation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <span className="text-4xl">🎁</span>
              </motion.div>
              <h2 className="text-2xl font-bold text-[#3E3636] mb-2">Gift Card Sent!</h2>
              <p className="text-gray-500 text-sm mb-6">Payment successful and gift card email has been sent.</p>
              <div className="bg-green-50 rounded-xl p-4 text-left space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Gift Card</span>
                  <span className="font-semibold text-[#3E3636]">{giftCards.find(c => c.id === selectedCard)?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Plan</span>
                  <span className="font-semibold text-[#3E3636] text-xs">{formData.plan}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Recipient</span>
                  <span className="font-semibold text-[#3E3636]">{formData.recipientName}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Amount Paid</span>
                  <span className="font-semibold text-green-600">₹{extractPrice(formData.plan)}</span>
                </div>
                {confirmedPaymentId && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Payment ID</span>
                    <span className="font-semibold text-[#3E3636] text-xs">{confirmedPaymentId}</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-400 mb-6">Confirmation sent to {formData.recipientEmail} and {formData.senderEmail}</p>
              <Link
                href="/"
                onClick={() => {
                  setPaymentConfirmed(false)
                  setFormData({ recipientName: '', recipientEmail: '', recipientMobile: '', senderName: '', senderEmail: '', senderMobile: '', redemptionLocation: '', plan: '' })
                  setSelectedCard(null)
                  setErrors({})
                }}
                className="block w-full bg-gradient-to-r from-[#8D7B68] to-[#6B5B4F] text-white py-3 rounded-xl font-semibold hover:from-[#6B5B4F] hover:to-[#8D7B68] transition-all text-center"
              >
                Done
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full overflow-x-hidden min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('/images/spa-gift-cards.webp')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Rejuvenate and Energise
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At the Most Exclusive Massage Centre in Town!
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#8D7B68] mb-6">
            Best Massage Gift Cards
          </h1>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          /> <p className="text-[#3E3636]/80 text-lg leading-relaxed max-w-4xl mx-auto">
            Select From A Range Of Gift Cards & Packages At River Salon and Day Spa
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed">
              If you looking for that ideal gift for your loved ones but do not want to settle for something ordinary, then a River Day Spa gift card would be the perfect luxury gift. Choose from beautifully designed gift vouchers that depict various occasions like Anniversary gift card, Birthday Gift Card, Festival Gift Card, Congratulations Gift Card or a Surprise Gift Card to celebrate those special moments in life.
            </p>
            <div className="flex justify-start">
              <a
                href="tel:+919941562962"
                className="bg-[#8D7B68] text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-[#6B5B4F] transition duration-200"
              >
                Contact Now
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-[#8D7B68] rounded-3xl transform rotate-3"></div>
            <img
              src="/images/best-massage-spa-gift-cards.jpg"
              alt="Best Spa in Coimbatore"
              width={600}
              height={400}
              className="relative z-10 rounded-3xl shadow-xl w-full h-auto lg:h-[400px] object-cover transform -rotate-3 transition-transform duration-300 hover:rotate-0"
            />
          </motion.div>
        </div>

        {/* Special Gift Cards Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4">
              Make Your Loved One Feel Special With Our Spa's Gift Cards
            </h2>
            <motion.div
              className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            /> <p className="text-[#3E3636]/90 text-lg leading-relaxed max-w-4xl mx-auto">
              River Day Spa Gift Cards Are The Truly Special Gifts That You Can Pamper Your Loved One With. Gift A Voucher To A Newlywed Couple, A Bride To Be Or A Special Friend, Your Mom, Sister Or Other Loved Ones And Pamper Them With Remarkable Experience That They Will Cherish Forever. Relax The Mind, Body And Soul With Our Indulgent Spa Treatments. Our Gift Cards Are Available In Different Denominations Depending On Your Budget. Our Vouchers Are Redeemable For Any Treatment At Any Of Our Branches.
            </p>
          </div>
        </motion.section>

        {/* Guidelines Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4">
              Guidelines About Our Spa Gift Cards
            </h3>
            <motion.div
              className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            /> </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Our gift cards can be redeemed for any treatment at our spa in Chennai, Bangalore, Trichy, Vellore, and Coimbatore.",
              "The treatment chosen should be equal to the amount specified on the card. If the value of the treatment exceeds the amount the rest has to be borne by the client.",
              "Cash shall not be given in exchange for the card.",
              "The gift card entitles you to free usage of the steam room after your treatment.",
              "The card shall be redeemed by only one person. Transfer of the card is not allowed.",
              "The card cannot be redeemed after the date of expiration mentioned on the card."
            ].map((guideline, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className="p-6 rounded-2xl text-center space-y-4 transition-all duration-300 h-full"
                  style={{
                    background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                    boxShadow: '5px 5px 15px rgba(0,0,0,0.3), -5px -5px 15px rgba(255,255,255,0.05)'
                  }}
                >
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {guideline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Gift Card Form */}
        <motion.section
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Animated Background Circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute w-96 h-96 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-3xl"
              animate={{
                x: ['-10%', '10%', '-10%'],
                y: ['-10%', '20%', '-10%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{ top: '10%', left: '10%' }}
            />
            <motion.div
              className="absolute w-80 h-80 bg-gradient-to-r from-green-300/30 to-teal-300/30 rounded-full blur-3xl"
              animate={{
                x: ['10%', '-10%', '10%'],
                y: ['20%', '-10%', '20%'],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{ top: '60%', right: '10%' }}
            />
            <motion.div
              className="absolute w-72 h-72 bg-gradient-to-r from-pink-300/30 to-orange-300/30 rounded-full blur-3xl"
              animate={{
                x: ['-5%', '15%', '-5%'],
                y: ['10%', '30%', '10%'],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{ top: '20%', left: '60%' }}
            />
          </div>

          <div className="text-center mb-12 relative z-10">
            <h4 className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4">
              Personalize Your Gift Card
            </h4>
            <motion.div
              className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            /> </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 space-y-8 border border-white/40 relative z-10">
            {/* Status Messages */}
            {submitStatus.message && (
              <div className={`p-4 rounded-lg text-center font-medium ${submitStatus.success
                ? 'bg-green-100 text-green-800 border border-green-200'
                : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                {submitStatus.message}
              </div>
            )}

            {errors.selectedCard && (
              <div className="p-4 rounded-lg text-center font-medium bg-red-100 text-red-800 border border-red-200">
                {errors.selectedCard}
              </div>
            )}
            {/* Recipient Details */}
            <div className="space-y-6">
              <p className="text-2xl font-semibold text-[#8D7B68]">Recipient Details</p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label className="block text-sm font-medium text-[#3E3636] mb-2">Full Name *</label>
                  <input
                    name="recipientName"
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={formData.recipientName}
                    onChange={(e) => handleInputChange('recipientName', e.target.value)}
                    className={`w-full bg-white/80 rounded-xl px-4 py-3 text-[#3E3636] placeholder-gray-400 focus:ring-2 focus:outline-none transition-all border disabled:opacity-50 ${errors.recipientName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-[#8D7B68]'
                      }`}
                    placeholder="Enter full name"
                  />
                  {errors.recipientName && <p className="text-red-500 text-xs mt-1">{errors.recipientName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3E3636] mb-2">Email *</label>
                  <input
                    name="recipientEmail"
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={formData.recipientEmail}
                    onChange={(e) => handleInputChange('recipientEmail', e.target.value)}
                    className={`w-full bg-white/80 rounded-xl px-4 py-3 text-[#3E3636] placeholder-gray-400 focus:ring-2 focus:outline-none transition-all border disabled:opacity-50 ${errors.recipientEmail ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-[#8D7B68]'
                      }`}
                    placeholder="Enter valid email address"
                  />
                  {errors.recipientEmail && <p className="text-red-500 text-xs mt-1">{errors.recipientEmail}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3E3636] mb-2">Mobile Number * (10 digits)</label>
                  <input
                    name="recipientMobile"
                    type="tel"
                    required
                    disabled={isSubmitting}
                    maxLength={10}
                    value={formData.recipientMobile}
                    onChange={(e) => handleInputChange('recipientMobile', e.target.value)}
                    className={`w-full bg-white/80 rounded-xl px-4 py-3 text-[#3E3636] placeholder-gray-400 focus:ring-2 focus:outline-none transition-all border disabled:opacity-50 ${errors.recipientMobile ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-[#8D7B68]'
                      }`}
                    placeholder="Enter 10-digit mobile number"
                  />
                  {errors.recipientMobile && <p className="text-red-500 text-xs mt-1">{errors.recipientMobile}</p>}
                </div>
              </div>
            </div>

            {/* Sender Details */}
            <div className="space-y-6">
              <p className="text-2xl font-semibold text-[#8D7B68]">Sender Details</p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label className="block text-sm font-medium text-[#3E3636] mb-2">Full Name *</label>
                  <input
                    name="senderName"
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={formData.senderName}
                    onChange={(e) => handleInputChange('senderName', e.target.value)}
                    className={`w-full bg-white/80 rounded-xl px-4 py-3 text-[#3E3636] placeholder-gray-400 focus:ring-2 focus:outline-none transition-all border disabled:opacity-50 ${errors.senderName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-[#8D7B68]'
                      }`}
                    placeholder="Enter full name"
                  />
                  {errors.senderName && <p className="text-red-500 text-xs mt-1">{errors.senderName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3E3636] mb-2">Email *</label>
                  <input
                    name="senderEmail"
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={formData.senderEmail}
                    onChange={(e) => handleInputChange('senderEmail', e.target.value)}
                    className={`w-full bg-white/80 rounded-xl px-4 py-3 text-[#3E3636] placeholder-gray-400 focus:ring-2 focus:outline-none transition-all border disabled:opacity-50 ${errors.senderEmail ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-[#8D7B68]'
                      }`}
                    placeholder="Enter valid email address"
                  />
                  {errors.senderEmail && <p className="text-red-500 text-xs mt-1">{errors.senderEmail}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3E3636] mb-2">Mobile Number * (10 digits)</label>
                  <input
                    name="senderMobile"
                    type="tel"
                    required
                    disabled={isSubmitting}
                    maxLength={10}
                    value={formData.senderMobile}
                    onChange={(e) => handleInputChange('senderMobile', e.target.value)}
                    className={`w-full bg-white/80 rounded-xl px-4 py-3 text-[#3E3636] placeholder-gray-400 focus:ring-2 focus:outline-none transition-all border disabled:opacity-50 ${errors.senderMobile ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-[#8D7B68]'
                      }`}
                    placeholder="Enter 10-digit mobile number"
                  />
                  {errors.senderMobile && <p className="text-red-500 text-xs mt-1">{errors.senderMobile}</p>}
                </div>
              </div>
            </div>

            {/* Redemption Location */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-[#3E3636] mb-2">Redemption Location *</label>
              <select
                name="redemptionLocation"
                required
                disabled={isSubmitting}
                value={formData.redemptionLocation}
                onChange={(e) => {
                  setFormData({ ...formData, redemptionLocation: e.target.value })
                  if (errors.redemptionLocation) {
                    const newErrors = { ...errors }
                    delete newErrors.redemptionLocation
                    setErrors(newErrors)
                  }
                }}
                className={`w-full bg-white/80 rounded-xl px-4 py-3 text-[#3E3636] focus:ring-2 focus:outline-none transition-all border disabled:opacity-50 ${errors.redemptionLocation ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-[#8D7B68]'
                  }`}
              >
                <option value="">Select Location</option>
                <option value="chennai">Chennai</option>
                <option value="coimbatore">Coimbatore</option>
                <option value="trichy">Trichy</option>
                <option value="vellore">Vellore</option>
                <option value="bangalore">Bangalore</option>
                <option value="tirupur">Tirupur</option>
              </select>
              {errors.redemptionLocation && <p className="text-red-500 text-xs mt-1">{errors.redemptionLocation}</p>}
            </div>

            {/* Gift Card Selection */}
            <div className="space-y-6">
              <p className="text-2xl font-semibold text-[#8D7B68]">Select Gift Card Design</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {giftCards.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => setSelectedCard(card.id)}
                    className={`cursor-pointer border-2 rounded-xl p-2 transition-all ${selectedCard === card.id
                      ? "border-[#8D7B68] scale-105"
                      : "border-transparent hover:border-gray-300"
                      }`}
                  >
                    <img
                      src={card.image}
                      alt={card.alt || card.name}
                      className="rounded-lg w-full h-32 object-cover"
                      loading="lazy"
                    />
                    <p className="text-center text-[#3E3636] mt-2 text-sm">
                      {card.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {selectedCard && (
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-[#8D7B68]">
                  {giftCards.find(card => card.id === selectedCard)?.name} Plan *
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCard && giftCardPlans[selectedCard]?.map((plan, index) => (
                    <label
                      key={index}
                      className="flex items-center space-x-3 cursor-pointer bg-white/50 p-4 rounded-xl hover:bg-white/70 transition-colors border border-gray-200"
                    >
                      <input
                        type="radio"
                        name="plan"
                        value={plan}
                        required
                        onChange={(e) => {
                          setFormData({ ...formData, plan: e.target.value })
                          if (errors.plan) {
                            const newErrors = { ...errors }
                            delete newErrors.plan
                            setErrors(newErrors)
                          }
                        }}
                        disabled={isSubmitting}
                        className="form-radio h-5 w-5 text-[#8D7B68] border-gray-300 focus:ring-2 focus:ring-[#8D7B68]"
                      />
                      <span className="text-[#3E3636]">{plan}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Submit Button */}
            {errors.plan && <p className="text-red-500 text-sm text-center">{errors.plan}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-semibold py-4 rounded-xl transition-all transform ${isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#8D7B68] to-[#6B5B4F] hover:from-[#6B5B4F] hover:to-[#8D7B68] text-white hover:scale-105 active:scale-95'
                }`}
            >
              {isSubmitting ? 'Processing...' : `Pay & Send Gift Card ${formData.plan ? extractPrice(formData.plan) : ''}`}
            </button>
          </form>
        </motion.section>
      </div>
    </div>
    </>
  )
}