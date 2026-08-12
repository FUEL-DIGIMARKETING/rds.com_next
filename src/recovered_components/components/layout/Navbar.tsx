'use client'

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Instagram } from "lucide-react"

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null)
  const [nestedDropdown, setNestedDropdown] = useState<string | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [showReservationsBar, setShowReservationsBar] = useState(true)
  const lastScrollY = useRef(0)
  const pathname = usePathname()

  const cities = [
    { name: "Chennai", href: "/body-massage-in-chennai-egmore/" },
    { name: "Coimbatore", href: "/spa-massage-coimbatore/" },
    { name: "Bangalore", href: "/spa-in-bangalore/" },
    { name: "Trichy", href: "/massage-spa-in-trichy/" },
    { name: "Tirupur", href: "/massage-spa-in-tirupur/" },
    { name: "Vellore", href: "/best-body-massage-spa-katpadi-vellore/" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsSticky(currentScrollY > 50)
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false)
        setShowReservationsBar(false)
      } else {
        setIsVisible(true)
        setShowReservationsBar(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (menu: string) => {
    setIsDropdownOpen((prev) => (prev === menu ? null : menu))
    setNestedDropdown(null)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white backdrop-blur-md shadow-xl ${!isVisible ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center">
          {/* Logo */}
          <Link href="/" onClick={scrollToTop}>
            <Image
              src="/images/river-salon-and-day-spa.avif"
              width={192}
              height={64}
              alt="River Day Spa"
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              className="text-green-400 hover:text-green-300 text-2xl transition"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className="hover:text-green-600 text-gray-800 font-semibold transition-colors"
              onClick={scrollToTop}
            >
              Home
            </Link>

            <Link
              href="/best-massage-spa-in-chennai"
              className="hover:text-green-600 text-gray-800 font-semibold transition-colors"
              onClick={scrollToTop}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setTimeout(() => setIsDropdownOpen("services"), 100)}
              onMouseLeave={() => setTimeout(() => setIsDropdownOpen(null), 300)}
            >
              <button className="text-gray-800 hover:text-green-600 font-semibold transition-colors flex items-center">
                Services & Packages
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {/* Dropdown content remains the same */}
            </div>

            <Link
              href="/gallery"
              className="text-gray-800 hover:text-green-600 font-semibold transition-colors"
              onClick={scrollToTop}
            >
              Gallery
            </Link>

            <Link
              href="/book-spa-service-appointment"
              className="text-gray-800 hover:text-green-600 font-semibold transition-colors"
              onClick={scrollToTop}
            >
              Contact
            </Link>
          </div>

          {/* Right Section - Book Appointment */}
          <div className="hidden md:flex items-center ml-auto">
            <Link
              href="/book-spa-service-appointment/"
              className="px-5 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 font-bold shadow-md transition-all transform hover:scale-105"
              onClick={scrollToTop}
            >
              Pre Booking - 15% OFF
            </Link>
          </div>
        </div>
      </nav>

      {/* Spa Reservations Bar */}
      {showReservationsBar && (
        <div className={`fixed top-20 left-0 w-full z-40 bg-white/90 backdrop-blur-sm shadow-md py-4 px-6 mt-1 transition-opacity duration-200 ${isDropdownOpen ? 'opacity-20' : 'opacity-100'}`}>
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <span className="text-gray-700 font-medium text-sm">Spa Reservations:</span>
              <nav className="flex space-x-8">
                {cities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="text-green-600 hover:text-gray-800 text-sm font-medium transition-colors duration-200"
                    aria-label={`${city.name} spa location`}
                  >
                    {city.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <a
                  href="tel:+919500029234 "
                  className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors"
                >
                  📞 +91 82878 11111
                </a>
                <a
                  href="tel:+919500029234"
                  className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
                >
                  📞 +91 95000 29234
                </a>
              </div>
              <a
                href="https://www.facebook.com/riverdayspachennai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/river_salon_day_spa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar