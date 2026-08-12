'use client'

import Link from 'next/link'
import Image from 'next/image'
import CustomImage from '../CustomImage'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative text-white py-16 overflow-hidden  rounded-t-[2rem]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <CustomImage
          src="/images/female-to-male-massage-spa.webp"
          alt="Spa Background"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8D7B68]/90 via-gray-900/85 to-black/90"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="bg-[#A0896C]/20 backdrop-blur-sm rounded-t-[4rem] rounded-b-[4rem] p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" onClick={scrollToTop}>
                <CustomImage
                  src="/images/river-salon-and-day-spa.avif"
                  alt="river-salon-and-day-spa"
                  width={150}
                  height={50}
                  className="h-12 w-auto hover:opacity-80 transition-opacity cursor-pointer"
                />
              </Link>

              <p className="text-white/90 text-sm leading-relaxed">
                Awaken your senses and discover professional massage treatments at River Salon and Day Spa. Enjoy luxury and relaxation like never before!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <span className="text-lg font-semibold text-white">Contact Info</span>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:+919500029234" className="text-white/90 text-sm hover:text-green-400 transition-colors">
                    +91 - 9500029234
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:riverdayspa@gmail.com" className="text-white/90 text-sm hover:text-green-400 transition-colors">
                    riverdayspa@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Our Locations */}
            <div className="space-y-4">
              <span className="text-lg font-semibold text-white">Our Locations</span>
              <div className="text-sm text-white/80 space-y-3">
                <div>
                  <p className="font-medium text-green-400 mb-2">Tamil Nadu</p>
                  <div className="space-y-1 ml-2">


                    <Link href="/body-massage-in-chennai-egmore" className="block hover:text-green-400 transition-colors" onClick={scrollToTop}>Chennai</Link>
                    <Link href="/spa-massage-coimbatore" className="block hover:text-green-400 transition-colors" onClick={scrollToTop}>Coimbatore</Link>
                    <Link href="/salon-in-rspuram-coimbatore" className="block hover:text-green-400 transition-colors" onClick={scrollToTop}>Coimbatore Rs Puram</Link>

                    <Link href="/massage-spa-in-tirupur" className="block hover:text-green-400 transition-colors" onClick={scrollToTop}>Tiruppur</Link>
                    <Link href="/beauty-parlour-in-tirupur-our-premium-services-as-you-need" className="block hover:text-green-400 transition-colors" onClick={scrollToTop}>Tiruppur Rayapuram</Link>

                    <Link href="/massage-spa-in-trichy" className="block hover:text-green-400 transition-colors" onClick={scrollToTop}>Trichy</Link>


                    <Link href="/best-body-massage-spa-in-bypass-vellore" className="block hover:text-green-400 transition-colors" onClick={scrollToTop}>Vellore Bypass</Link>
                    <Link href="/best-body-massage-spa-katpadi-vellore" className="block hover:text-green-400 transition-colors" onClick={scrollToTop}>Vellore Katpadi</Link>
                    <Link href="/massage-spa-in-vellore" className="block hover:text-green-400 transition-colors" onClick={scrollToTop}>Vellore Toll Gate</Link>

                  </div>
                </div>
                <div>
                  <p className="font-medium text-green-400 mb-2">Karnataka</p>
                  <div className="ml-2">
                    <Link href="/spa-in-bangalore" className="block hover:text-green-400 transition-colors" onClick={scrollToTop}>Bangalore</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <span className="text-lg font-semibold text-white">Services</span>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/best-body-massage-center" className="text-white/80 hover:text-green-400 transition-colors block py-1" onClick={scrollToTop}>
                    Massage
                  </Link>
                </li>
                <li>
                  <Link href="/best-hair-saloon-in-chennai" className="text-white/80 hover:text-green-400 transition-colors block py-1" onClick={scrollToTop}>
                    Salon
                  </Link>
                </li>
                <li>
                  <Link href="/best-body-scrub-massage-center" className="text-white/80 hover:text-green-400 transition-colors block py-1" onClick={scrollToTop}>
                    Body Scrubs
                  </Link>
                </li>
                <li>
                  <Link href="/best-body-wrap-massage-spa" className="text-white/80 hover:text-green-400 transition-colors block py-1" onClick={scrollToTop}>
                    Body Wraps
                  </Link>
                </li>
              </ul>
            </div>

            {/* Specials */}
            <div className="space-y-4">
              <span className="text-lg font-semibold text-white">Specials</span>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/membership-policy-and-discounts" className="text-white/80 hover:text-green-400 transition-colors block py-1" onClick={scrollToTop}>
                    Membership Benefits
                  </Link>
                </li>
                <li>
                  <Link href="/spa-giftcard-details" className="text-white/80 hover:text-green-400 transition-colors block py-1" onClick={scrollToTop}>
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link href="/best-couples-spa-packages" className="text-white/80 hover:text-green-400 transition-colors block py-1" onClick={scrollToTop}>
                    Couple Packages
                  </Link>
                </li>
                <li>
                  <Link href="/best-spa-packages" className="text-white/80 hover:text-green-400 transition-colors block py-1" onClick={scrollToTop}>
                    Single Package
                  </Link>
                </li>

              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex justify-between items-center">
              <div className="text-white/70 text-sm">
                Copyright © 2026 River Salon and Day Spa - All rights reserved by <span className="text-green-400"><a href='https://www.fueldigi.com/'>FuelDigi Marketing Pvt Ltd</a></span>
              </div>
              <Link href="/privacy-policy" className="flex items-center gap-2 text-white/80 hover:text-green-400 transition-colors text-sm group" onClick={scrollToTop}>
                <span>Privacy Policy</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Large Brand Text */}
        <div className="text-center pt-8">
          <div className="text-5xl md:text-7xl lg:text-8xl font-black text-white/10 select-none">
            RIVER SALON AND DAY SPA
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer