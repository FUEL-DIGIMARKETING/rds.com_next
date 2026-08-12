'use client'

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import CustomImage from "../CustomImage"
import { Phone, Mail } from "lucide-react";
import { usePathname } from "next/navigation"
import { Instagram, ChevronDown, ChevronRight, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [showReservationsBar, setShowReservationsBar] = useState(true)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null)
  const [currentCityIndex, setCurrentCityIndex] = useState(0)
  const lastScrollY = useRef(0)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  const cities = [
    { name: "Chennai", href: "/body-massage-in-chennai-egmore/" },
    { name: "Coimbatore", href: "/spa-massage-coimbatore/" },
    { name: "Bangalore", href: "/spa-in-bangalore/" },
    { name: "Trichy", href: "/massage-spa-in-trichy/" },
    { name: "Tiruppur", href: "/massage-spa-in-tirupur/" },
    { name: "Vellore", href: "/best-body-massage-spa-in-bypass-vellore/" },
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsSidebarOpen(false)
    setMobileOpenDropdown(null)
  }

  const closeMobileMenu = () => {
    setIsSidebarOpen(false)
    setMobileOpenDropdown(null)
  }

  const toggleMobileDropdown = (dropdown: string) => {
    if (mobileOpenDropdown === dropdown) {
      setMobileOpenDropdown(null)
    } else {
      setMobileOpenDropdown(dropdown)
    }
  }

  const isNestedDropdownOpen = (parent: string, child: string) => {
    return mobileOpenDropdown === `${parent}-${child}`
  }

  const toggleNestedDropdown = (parent: string, child: string) => {
    const nestedKey = `${parent}-${child}`
    if (mobileOpenDropdown === nestedKey) {
      setMobileOpenDropdown(parent)
    } else {
      setMobileOpenDropdown(nestedKey)
    }
  }

  const isParentOpen = (parent: string) => {
    return mobileOpenDropdown === parent || mobileOpenDropdown?.startsWith(`${parent}-`)
  }

  return (
    <>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.2s ease-out;
        }
        body.modal-open nav {
          display: none !important;
        }
        body.modal-open .spa-reservations-bar {
          display: none !important;
        }
      `}</style>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full z-[65] bg-green-700 text-white px-3 py-1.5 flex items-center justify-between text-xs">
        <a href="tel:+919500029234" className="flex items-center gap-1 font-medium hover:text-green-200 transition-colors">
          <Phone size={11} />
          +91 95000 29234
        </a>
        <a href="mailto:riverdayspa@gmail.com" className="flex items-center gap-1 font-medium hover:text-green-200 transition-colors">
          <Mail size={11} />
          riverdayspa@gmail.com
        </a>
      </div>

      <nav
        className={`fixed top-4 md:top-0 left-0 w-full z-[60] transition-all duration-300 bg-white backdrop-blur-md shadow-xl ${!isVisible ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center">
          <Link href="/" onClick={scrollToTop}>
            <CustomImage
              src="/images/river-salon-and-day-spa.avif"
              width={384}
              height={152}
              alt="river-salon-and-day-spa"
              className="h-16 w-auto"
              priority
              quality={75}
              sizes="283px"
            />
          </Link>

          <div className="md:hidden flex items-center ml-auto">
            <button
              className="text-green-600 hover:text-green-700 text-2xl transition"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle Menu"
            >
              {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
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

            {/* Services & Packages Multi-level Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current)
                }
                setIsDropdownOpen("services")
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setIsDropdownOpen(null)
                  setActiveSubmenu(null)
                }, 100)
              }}
            >
              <button className="text-gray-800 hover:text-green-600 font-semibold transition-colors flex items-center">
                Services & Packages
                <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
              </button>

              {isDropdownOpen === "services" && (
                <>
                  <div className="absolute top-full left-8 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white z-[51] drop-shadow-sm"></div>
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 min-w-[800px] animate-fadeIn">
                    <div className="flex min-h-[380px]">
                      {/* Main Services Menu */}
                      <div className="w-64 border-r border-gray-100">
                        <Link href="/best-body-massage-center">
                          <div
                            className={`px-4 py-4 hover:bg-green-50 transition-colors cursor-pointer flex items-center justify-between ${activeSubmenu === "massages" ? "bg-green-50 border-r-2 border-green-500" : ""}`}
                            onMouseEnter={() => setActiveSubmenu("massages")}
                          >
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-600 text-xs">💆</span>
                              </div>
                              <span className="font-semibold text-gray-800 text-base">Massage Services</span>
                            </div>
                            <ChevronRight className="w-3 h-3 text-gray-400" />
                          </div>
                        </Link>

                        <Link href="/best-body-scrub-massage-center">
                          <div
                            className={`px-4 py-4 hover:bg-green-50 transition-colors cursor-pointer flex items-center justify-between ${activeSubmenu === "body-scrubs" ? "bg-green-50 border-r-2 border-green-500" : ""}`}
                            onMouseEnter={() => setActiveSubmenu("body-scrubs")}
                          >
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 text-xs">🧴</span>
                              </div>
                              <span className="font-semibold text-gray-800 text-base">Body Scrubs</span>
                            </div>
                            <ChevronRight className="w-3 h-3 text-gray-400" />
                          </div>
                        </Link>

                        <Link href="/best-body-wrap-massage-spa">
                          <div
                            className={`px-4 py-4 hover:bg-green-50 transition-colors cursor-pointer flex items-center justify-between ${activeSubmenu === "body-wraps" ? "bg-green-50 border-r-2 border-green-500" : ""}`}
                            onMouseEnter={() => setActiveSubmenu("body-wraps")}
                          >
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                                <span className="text-purple-600 text-xs">🌿</span>
                              </div>
                              <span className="font-semibold text-gray-800 text-base">Body Wraps</span>
                            </div>
                            <ChevronRight className="w-3 h-3 text-gray-400" />
                          </div>
                        </Link>

                        <div
                          className={`px-4 py-4 hover:bg-green-50 transition-colors cursor-pointer flex items-center justify-between ${activeSubmenu === "packages" ? "bg-green-50 border-r-2 border-green-500" : ""}`}
                          onMouseEnter={() => setActiveSubmenu("packages")}
                        >
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                              <span className="text-orange-600 text-xs">🎁</span>
                            </div>
                            <span className="font-semibold text-gray-800 text-base">Packages</span>
                          </div>
                          <ChevronRight className="w-3 h-3 text-gray-400" />
                        </div>

                        <Link href="/best-hair-saloon-in-chennai">
                          <div
                            className={`px-4 py-4 hover:bg-green-50 transition-colors cursor-pointer flex items-center justify-between ${activeSubmenu === "salon" ? "bg-green-50 border-r-2 border-green-500" : ""}`}
                            onMouseEnter={() => setActiveSubmenu("salon")}
                          >
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                                <span className="text-pink-600 text-xs">✨</span>
                              </div>
                              <span className="font-semibold text-gray-800 text-base">Salon Services</span>
                            </div>
                            <ChevronRight className="w-3 h-3 text-gray-400" />
                          </div>
                        </Link>
                      </div>

                      {/* Submenu Content */}
                      <div className="flex-1 p-4">
                        {activeSubmenu === "massages" && (
                          <div className="animate-fadeIn">
                            <h4 className="font-bold text-green-600 text-base mb-4 border-b pb-2">Massage Services</h4>
                            <div className="grid grid-cols-3 gap-3">
                              <Link href="/best-moroccan-bath-massage-in-bangalore" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors text-[13px] border border-transparent hover:border-green-200">
                                Moroccan Bath
                              </Link>
                              <Link href="/swedish-massage-service-in-chennai" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors text-[13px] border border-transparent hover:border-green-200">
                                Swedish Massage
                              </Link>
                              <Link href="/best-balinese-massage-center" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors text-[13px] border border-transparent hover:border-green-200">
                                Balinese Massage
                              </Link>
                              <Link href="/best-foot-reflexology-massage" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors text-[13px] border border-transparent hover:border-green-200">
                                Foot Reflexology
                              </Link>
                              <Link href="/best-thai-body-massage-center" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors text-[13px] border border-transparent hover:border-green-200">
                                Thai Body Massage
                              </Link>
                              <Link href="/best-synchronized-massage-spa" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors text-[12px] border border-transparent hover:border-green-200">
                                Synchronized Massage
                              </Link>
                              <Link href="/sports-massage-spa-in-chennai" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors text-[13px] border border-transparent hover:border-green-200">
                                Sports Massage
                              </Link>
                              <Link href="/best-detoxifying-massage-center" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors text-[13px] border border-transparent hover:border-green-200">
                                Detoxifying Massage
                              </Link>
                              <Link href="/best-deep-tissue-massage-center" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors text-[12px] border border-transparent hover:border-green-200">
                                Deep Tissue Massage
                              </Link>
                              <Link href="/best-head-to-toe-aroma-massage-spa" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors text-[13px] border border-transparent hover:border-green-200">
                                Head To Toe Aroma
                              </Link>
                              <Link href="/best-sense-of-siam-massage-center" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors text-[13px] border border-transparent hover:border-green-200">
                                Sense of Siam
                              </Link>
                              <Link href="/best-abhyanga-massage-center" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors text-[13px] border border-transparent hover:border-green-200">
                                Abhyanga Massage
                              </Link>
                              <Link href="/best-ayurvedic-massage-spa" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors text-[13px] border border-transparent hover:border-green-200">
                                Ayurvedic Massage
                              </Link>
                              <Link href="/best-couple-massage-center" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors text-[13px] border border-transparent hover:border-green-200">
                                Couple Massage
                              </Link>
                              <Link href="/best-partial-massage-spa" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors text-[13px] border border-transparent hover:border-green-200">
                                Partial Massage
                              </Link>
                            </div>
                          </div>
                        )}

                        {activeSubmenu === "body-scrubs" && (
                          <div className="animate-fadeIn">
                            <h4 className="font-bold text-blue-600 text-base mb-4 border-b pb-2">Body Scrubs</h4>
                            <div className="space-y-2">
                              <Link href="/best-chocolate-body-scrub-massage-center" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors text-[13px] border border-transparent hover:border-blue-200">
                                Chocolate Scrub
                              </Link>
                              <Link href="/coffee-scrub-massage-spa" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors text-[13px] border border-transparent hover:border-blue-200">
                                Coffee Scrub
                              </Link>
                              <Link href="/fruit-body-scrub-in-chennai" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors text-[13px] border border-transparent hover:border-blue-200">
                                Fruit Scrub
                              </Link>
                              <Link href="/best-lemongrass-scrub-massage-center" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors text-[13px] border border-transparent hover:border-blue-200">
                                Lemongrass Scrub
                              </Link>
                              <Link href="/best-sea-salt-scrub-massage" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors text-[13px] border border-transparent hover:border-blue-200">
                                Sea Salt Scrub
                              </Link>
                            </div>
                          </div>
                        )}

                        {activeSubmenu === "body-wraps" && (
                          <div className="animate-fadeIn">
                            <h4 className="font-bold text-purple-600 text-base mb-4 border-b pb-2">Body Wraps</h4>
                            <div className="space-y-2">
                              <Link href="/best-chocolate-body-wrap-massage-center" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors text-[13px] border border-transparent hover:border-purple-200">
                                Chocolate Wrap
                              </Link>
                              <Link href="/best-coffee-wrap-massage-spa" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors text-[13px] border border-transparent hover:border-purple-200">
                                Coffee Wrap
                              </Link>
                              <Link href="/best-mango-wrap-massage-center" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors text-[13px] border border-transparent hover:border-purple-200">
                                Mango Wrap
                              </Link>
                              <Link href="/best-papaya-wrap-massage-spa" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors text-[13px] border border-transparent hover:border-purple-200">
                                Papaya Wrap
                              </Link>
                              <Link href="/raspberry-wrap-massage-center" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors text-[13px] border border-transparent hover:border-purple-200">
                                Raspberry Wrap
                              </Link>
                            </div>
                          </div>
                        )}

                        {activeSubmenu === "packages" && (
                          <div className="animate-fadeIn">
                            <h4 className="font-bold text-orange-600 text-base mb-4 border-b pb-2">Packages</h4>
                            <div className="space-y-2">
                              <Link href="/best-couples-spa-packages" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded transition-colors text-[13px] border border-transparent hover:border-orange-200">
                                Couple Packages
                              </Link>
                              <Link href="/best-spa-packages" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded transition-colors text-[13px] border border-transparent hover:border-orange-200">
                                Single Packages
                              </Link>
                            </div>
                          </div>
                        )}

                        {activeSubmenu === "salon" && (
                          <div className="animate-fadeIn">
                            <h4 className="font-bold text-pink-600 text-base mb-4 border-b pb-2">Salon Services</h4>
                            <div className="space-y-2">
                              <Link href="/beauty-salon-packages" className="block px-3 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded transition-colors text-[13px] border border-transparent hover:border-pink-200">
                                Packages
                              </Link>
                              <Link href="/beauty-salon-menu-card" className="block px-3 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded transition-colors text-[13px] border border-transparent hover:border-pink-200">
                                Price Catalogue
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* Locations Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current)
                }
                setIsDropdownOpen("locations")
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setIsDropdownOpen(null)
                  setActiveSubmenu(null)
                }, 100)
              }}
            >
              <button className="text-gray-800 hover:text-green-600 font-semibold transition-colors flex items-center">
                Locations
                <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
              </button>

              {isDropdownOpen === "locations" && (
                <>
                  <div className="absolute top-full left-8 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white z-[51] drop-shadow-sm"></div>
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 min-w-[700px] animate-fadeIn">
                    <div className="flex min-h-[380px]">
                      {/* Main Locations Menu */}
                      <div className="w-56 border-r border-gray-100">
                        <div
                          className={`px-4 py-4 hover:bg-green-50 transition-colors cursor-pointer flex items-center justify-between ${activeSubmenu === "spa-locations" ? "bg-green-50 border-r-2 border-green-500" : ""}`}
                          onMouseEnter={() => setActiveSubmenu("spa-locations")}
                        >
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-green-600 text-xs">🏢</span>
                            </div>
                            <span className="font-semibold text-gray-800 text-base">Spa Locations</span>
                          </div>
                          <ChevronRight className="w-3 h-3 text-gray-400" />
                        </div>

                        <div
                          className={`px-4 py-4 hover:bg-green-50 transition-colors cursor-pointer flex items-center justify-between ${activeSubmenu === "salon-locations" ? "bg-green-50 border-r-2 border-green-500" : ""}`}
                          onMouseEnter={() => setActiveSubmenu("salon-locations")}
                        >
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                              <span className="text-pink-600 text-xs">✂️</span>
                            </div>
                            <span className="font-semibold text-gray-800 text-base">Salon Locations</span>
                          </div>
                          <ChevronRight className="w-3 h-3 text-gray-400" />
                        </div>
                      </div>

                      {/* Submenu Content */}
                      <div className="flex-1 p-4 overflow-y-auto">
                        {activeSubmenu === "spa-locations" && (
                          <div className="animate-fadeIn">
                            <h4 className="font-bold text-green-600 text-base mb-4 border-b pb-2">Spa Locations</h4>
                            <div className="grid grid-cols-2 gap-4">
                              <Link href="/body-massage-in-chennai-egmore" className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                                <h5 className="font-semibold text-gray-800 text-sm mb-1">Chennai - Egmore</h5>
                                <p className="text-xs text-gray-600 mb-1">New No.7A, Old No. 2/4, 1st Floor, Tamil Salai, Egmore, Chennai 600008</p>
                                <p className="text-xs text-green-600 font-medium">📞 +91 9840898462</p>
                              </Link>

                              <Link href="/spa-massage-coimbatore" className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                                <h5 className="font-semibold text-gray-800 text-sm mb-1">RS Puram</h5>
                                <p className="text-xs text-gray-600 mb-1">Veera Towers, 2nd Floor, Dr Krishnasamy Mudaliyar Road, R.S. Puram, Coimbatore 641001</p>
                                <p className="text-xs text-green-600 font-medium">📞 +91 9962877703</p>
                              </Link>

                              <Link href="/spa-massage-coimbatore" className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                                <h5 className="font-semibold text-gray-800 text-sm mb-1">RS Puram(Elite)</h5>
                                <p className="text-xs text-gray-600 mb-1">No 166, Old No. 9/24, 1st Floor, Vagtune Building, Ramachandra Rd, R.S. Puram, Coimbatore 641002</p>
                                <p className="text-xs text-green-600 font-medium">📞 +91 7305033023</p>
                              </Link>

                              <Link href="/best-body-massage-spa-in-bypass-vellore" className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                                <h5 className="font-semibold text-gray-800 text-sm mb-1">Vellore Bypass</h5>
                                <p className="text-xs text-gray-600 mb-1">3, Bangalore Highway, next to Chennai Silks, Kagithapatarai, Vellore 632012</p>
                                <p className="text-xs text-green-600 font-medium">📞 +91 8056252525</p>
                              </Link>

                              <Link href="/best-body-massage-spa-katpadi-vellore" className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                                <h5 className="font-semibold text-gray-800 text-sm mb-1">Vellore Katpadi</h5>
                                <p className="text-xs text-gray-600 mb-1">Plot. No 109 Selvam Nagar, Thiruvallam road, near VIT College, Katpadi, Vellore 632007</p>
                                <p className="text-xs text-green-600 font-medium">📞 +91 9840898481</p>
                              </Link>

                              <Link href="/massage-spa-in-vellore" className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                                <h5 className="font-semibold text-gray-800 text-sm mb-1">Vellore Tollgate</h5>
                                <p className="text-xs text-gray-600 mb-1">10/2, Valasa Street, Infantry Road, Vasanthapuram, Kosapet, Vellore 632001</p>
                                <p className="text-xs text-green-600 font-medium">📞 +91 8754477123</p>
                              </Link>


                              <Link href="/massage-spa-in-tirupur" className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                                <h5 className="font-semibold text-gray-800 text-sm mb-1">Tiruppur</h5>
                                <p className="text-xs text-gray-600 mb-1">16/16A Lakshmi Nagar, 50 Feet Road, PN Rd, near Miller Stop, Tiruppur 641601</p>
                                <p className="text-xs text-green-600 font-medium">📞 +91 9500136424</p>
                              </Link>

                              <Link href="/massage-spa-in-trichy" className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                                <h5 className="font-semibold text-gray-800 text-sm mb-1">Trichy</h5>
                                <p className="text-xs text-gray-600 mb-1">No.75/E, Hotel Sona's First Floor, Salai Rd, Thillai Nagar, Tiruchirappalli 620018</p>
                                <p className="text-xs text-green-600 font-medium">📞 +91 9500197780</p>
                              </Link>

                              <Link href="/spa-in-bangalore" className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                                <h5 className="font-semibold text-gray-800 text-sm mb-1">Bangalore</h5>
                                <p className="text-xs text-gray-600 mb-1">Door No. 477, 15th Cross St, Double Rd, Indiranagar, Bengaluru 560038</p>
                                <p className="text-xs text-green-600 font-medium">📞 +91 8904586507</p>
                              </Link>
                            </div>
                          </div>
                        )}

                        {activeSubmenu === "salon-locations" && (
                          <div className="animate-fadeIn">
                            <h4 className="font-bold text-pink-600 text-base mb-4 border-b pb-2">Salon Locations</h4>
                            <div className="grid grid-cols-2 gap-4">
                              <Link href="/best-beauty-salon-in-chennai" className="block p-3 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer">
                                <h5 className="font-semibold text-gray-800 text-sm mb-1">Chennai - Egmore</h5>
                                <p className="text-xs text-gray-600 mb-1">New No.7A, Old No. 2/4, 1st Floor, Tamil Salai, Egmore, Chennai 600008</p>
                                <p className="text-xs text-pink-600 font-medium">📞 +91 9840898462</p>
                              </Link>

                              <Link href="/salon-in-rspuram-coimbatore" className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                                <h5 className="font-semibold text-gray-800 text-sm mb-1">RS Puram</h5>
                                <p className="text-xs text-gray-600 mb-1">Veera Towers, 2nd Floor, Dr Krishnasamy Mudaliyar Road, R.S. Puram, Coimbatore 641001</p>
                                <p className="text-xs text-pink-600 font-medium">📞 +91 9962877703</p>
                              </Link>

                              <Link href="/salon-in-rspuram-coimbatore" className="block p-3 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer">
                                <h5 className="font-semibold text-gray-800 text-sm mb-1">RS Puram(Elite)</h5>
                                <p className="text-xs text-gray-600 mb-1">No 166, Old No. 9/24, 1st Floor, Vagtune Building, Ramachandra Rd, R.S. Puram, Coimbatore 641002</p>
                                <p className="text-xs text-pink-600 font-medium">📞 +91 7305033023</p>
                              </Link>

                              <Link href="/beauty-parlour-in-tirupur-our-premium-services-as-you-need" className="block p-3 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer">
                                <h5 className="font-semibold text-gray-800 text-sm mb-1">Tiruppur - Rayapuram</h5>
                                <p className="text-xs text-gray-600 mb-1">No 16 &17, Ranganathapuram, Rayapuram, Thottipalayam village, Tiruppur 641601</p>
                                <p className="text-xs text-pink-600 font-medium">📞 +91 8925012309</p>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Cards Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current)
                }
                setIsDropdownOpen("cards")
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setIsDropdownOpen(null)
                  setActiveSubmenu(null)
                }, 100)
              }}
            >
              <button className="text-gray-800 hover:text-green-600 font-semibold transition-colors flex items-center">
                Cards
                <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
              </button>

              {isDropdownOpen === "cards" && (
                <>
                  <div className="absolute top-full left-8 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white z-[51] drop-shadow-sm"></div>
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-visible z-50 min-w-[220px] animate-fadeIn">
                    <div className="bg-gradient-to-b from-gray-50 to-white">
                      <Link href="/membership-policy-and-discounts" className="block">
                        <div className="px-4 py-3 hover:bg-green-50 transition-colors cursor-pointer border-b border-gray-100 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-purple-600 text-xs">👑</span>
                            </div>
                            <span className="font-semibold text-gray-800 text-sm">Membership</span>
                          </div>
                        </div>
                      </Link>

                      <Link href="/spa-giftcard-details" className="block">
                        <div className="px-4 py-3 hover:bg-green-50 transition-colors cursor-pointer flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                              <span className="text-orange-600 text-xs">🎁</span>
                            </div>
                            <span className="font-semibold text-gray-800 text-sm">Spa Gift Cards</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>


            <Link
              href="/gallery-best-massage-centre"
              className="text-gray-800 hover:text-green-600 font-semibold transition-colors"
              onClick={scrollToTop}
            >
              Gallery
            </Link>

            <Link
              href="/blogs"
              className="text-gray-800 hover:text-green-600 font-semibold transition-colors"
              onClick={scrollToTop}
            >
              Blog
            </Link>
            <Link
              href="/spa-career"
              className="text-gray-800 hover:text-green-600 font-semibold transition-colors"
              onClick={scrollToTop}
            >
              Careers
            </Link>
          </div>

          <div className="hidden md:flex items-center ml-auto">
            <Link
              href="/book-spa-service-appointment/"
              className="px-5 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 font-bold shadow-md transition-all transform hover:scale-105"
              onClick={scrollToTop}
            >
              Pre Booking
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[70] md:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsSidebarOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" onClick={scrollToTop}>
                  <CustomImage
                    src="/images/river-salon-and-day-spa.avif"
                    width={384}
                    height={152}
                    alt="River Day Spa"
                    className="h-10 w-auto"
                    quality={75}
                    sizes="283px"
                  />
                </Link>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-2">
                <Link
                  href="/"
                  className="block py-2 px-3 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded font-medium transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>

                <Link
                  href="/best-massage-spa-in-chennai"
                  className="block py-2 px-3 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded font-medium transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>

                {/* Mobile Services Dropdown */}
                <div className="border rounded">
                  <button
                    onClick={() => toggleMobileDropdown('services')}
                    className="w-full flex items-center justify-between py-2 px-3 text-gray-800 hover:bg-green-50 rounded font-medium transition-colors text-sm"
                  >
                    <span>Services & Packages</span>
                    <ChevronDown className={`w-3 h-3 transition-transform ${mobileOpenDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </button>

                  {isParentOpen('services') && (
                    <div className="px-3 pb-2 space-y-2 border-t">
                      {/* Massage Services */}
                      <div>
                        <div className="w-full flex items-center justify-between py-2">
                          <Link href="/best-body-massage-center" className="flex-1 text-gray-700 hover:text-green-600 font-medium text-sm" onClick={closeMobileMenu}>
                            Massage Services
                          </Link>
                          <button
                            onClick={() => toggleNestedDropdown('services', 'massages')}
                            className="p-1 text-gray-700 hover:text-green-600"
                          >
                            <ChevronDown className={`w-3 h-3 transition-transform ${isNestedDropdownOpen('services', 'massages') ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        {isNestedDropdownOpen('services', 'massages') && (
                          <div className="ml-3 mt-1 space-y-1 border-l-2 border-green-200 pl-3">
                            <Link href="/best-moroccan-bath-massage-in-bangalore" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Moroccan Bath</Link>
                            <Link href="/swedish-massage-service-in-chennai" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Swedish Massage</Link>
                            <Link href="/best-balinese-massage-center" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Balinese Massage</Link>
                            <Link href="/best-foot-reflexology-massage" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Foot Reflexology</Link>
                            <Link href="/best-thai-body-massage-center" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Thai Body Massage</Link>
                            <Link href="/best-synchronized-massage-spa" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Synchronized Massage</Link>
                            <Link href="/sports-massage-spa-in-chennai" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Sports Massage</Link>
                            <Link href="/best-detoxifying-massage-center" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Detoxifying Massage</Link>
                            <Link href="/best-deep-tissue-massage-center" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Deep Tissue Massage</Link>
                            <Link href="/best-head-to-toe-aroma-massage-spa" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Head To Toe Aroma</Link>
                            <Link href="/best-sense-of-siam-massage-center" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Sense of Siam</Link>
                            <Link href="/best-abhyanga-massage-center" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Abhyanga Massage</Link>
                            <Link href="/best-ayurvedic-massage-spa" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Ayurvedic Massage</Link>
                            <Link href="/best-couple-massage-center" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Couple Massage</Link>
                            <Link href="/best-partial-massage-spa" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Partial Massage</Link>
                          </div>
                        )}
                      </div>

                      {/* Body Scrubs */}
                      <div>
                        <div className="w-full flex items-center justify-between py-2">
                          <Link href="/best-body-scrub-massage-center" className="flex-1 text-gray-700 hover:text-green-600 font-medium text-sm" onClick={closeMobileMenu}>
                            Body Scrubs
                          </Link>
                          <button
                            onClick={() => toggleNestedDropdown('services', 'body-scrubs')}
                            className="p-1 text-gray-700 hover:text-green-600"
                          >
                            <ChevronDown className={`w-3 h-3 transition-transform ${isNestedDropdownOpen('services', 'body-scrubs') ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        {isNestedDropdownOpen('services', 'body-scrubs') && (
                          <div className="ml-3 mt-1 space-y-1 border-l-2 border-blue-200 pl-3">
                            <Link href="/best-chocolate-body-scrub-massage-center" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Chocolate Scrub</Link>
                            <Link href="/coffee-scrub-massage-spa" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Coffee Scrub</Link>
                            <Link href="/fruit-body-scrub-in-chennai" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Fruit Scrub</Link>
                            <Link href="/best-lemongrass-scrub-massage-center" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Lemongrass Scrub</Link>
                            <Link href="/best-sea-salt-scrub-massage" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Sea Salt Scrub</Link>
                          </div>
                        )}
                      </div>

                      {/* Body Wraps */}
                      <div>
                        <div className="w-full flex items-center justify-between py-2">
                          <Link href="/best-body-wrap-massage-spa" className="flex-1 text-gray-700 hover:text-green-600 font-medium text-sm" onClick={closeMobileMenu}>
                            Body Wraps
                          </Link>
                          <button
                            onClick={() => toggleNestedDropdown('services', 'body-wraps')}
                            className="p-1 text-gray-700 hover:text-green-600"
                          >
                            <ChevronDown className={`w-3 h-3 transition-transform ${isNestedDropdownOpen('services', 'body-wraps') ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        {isNestedDropdownOpen('services', 'body-wraps') && (
                          <div className="ml-3 mt-1 space-y-1 border-l-2 border-purple-200 pl-3">
                            <Link href="/best-chocolate-body-wrap-massage-center" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Chocolate Wrap</Link>
                            <Link href="/best-coffee-wrap-massage-spa" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Coffee Wrap</Link>
                            <Link href="/best-mango-wrap-massage-center" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Mango Wrap</Link>
                            <Link href="/best-papaya-wrap-massage-spa" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Papaya Wrap</Link>
                            <Link href="/raspberry-wrap-massage-center" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Raspberry Wrap</Link>
                          </div>
                        )}
                      </div>

                      {/* Packages */}
                      <div>
                        <div className="w-full flex items-center justify-between py-2">
                          <Link href="/best-spa-packages" className="flex-1 text-gray-700 hover:text-green-600 font-medium text-sm" onClick={closeMobileMenu}>
                            Packages
                          </Link>
                          <button
                            onClick={() => toggleNestedDropdown('services', 'packages')}
                            className="p-1 text-gray-700 hover:text-green-600"
                          >
                            <ChevronDown className={`w-3 h-3 transition-transform ${isNestedDropdownOpen('services', 'packages') ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        {isNestedDropdownOpen('services', 'packages') && (
                          <div className="ml-3 mt-1 space-y-1 border-l-2 border-orange-200 pl-3">
                            <Link href="/best-couples-spa-packages" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Couple Packages</Link>
                            <Link href="/best-spa-packages" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Single Packages</Link>
                          </div>
                        )}
                      </div>

                      {/* Salon Services */}
                      <div>
                        <div className="w-full flex items-center justify-between py-2">
                          <Link href="/best-hair-saloon-in-chennai" className="flex-1 text-gray-700 hover:text-green-600 font-medium text-sm" onClick={closeMobileMenu}>
                            Salon Services
                          </Link>
                          <button
                            onClick={() => toggleNestedDropdown('services', 'salon')}
                            className="p-1 text-gray-700 hover:text-green-600"
                          >
                            <ChevronDown className={`w-3 h-3 transition-transform ${isNestedDropdownOpen('services', 'salon') ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        {isNestedDropdownOpen('services', 'salon') && (
                          <div className="ml-3 mt-1 space-y-1 border-l-2 border-pink-200 pl-3">
                            <Link href="/beauty-salon-packages" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Packages</Link>
                            <Link href="/beauty-salon-menu-card" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Price Catalogue</Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Cards Dropdown */}
                <div className="border rounded">
                  <button
                    onClick={() => toggleMobileDropdown('cards')}
                    className="w-full flex items-center justify-between py-2 px-3 text-gray-800 hover:bg-green-50 rounded font-medium transition-colors text-sm"
                  >
                    <span>Cards</span>
                    <ChevronDown className={`w-3 h-3 transition-transform ${mobileOpenDropdown === 'cards' ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileOpenDropdown === 'cards' && (
                    <div className="px-3 pb-2 space-y-2 border-t">
                      <Link href="/membership-policy-and-discounts" className="block py-2 text-gray-700 hover:text-green-600 text-sm" onClick={closeMobileMenu}>Membership</Link>
                      <Link href="/spa-giftcard-details" className="block py-2 text-gray-700 hover:text-green-600 text-sm" onClick={closeMobileMenu}>Spa Gift Cards</Link>
                    </div>
                  )}
                </div>

                {/* Mobile Locations Dropdown */}
                <div className="border rounded">
                  <button
                    onClick={() => toggleMobileDropdown('locations')}
                    className="w-full flex items-center justify-between py-2 px-3 text-gray-800 hover:bg-green-50 rounded font-medium transition-colors text-sm"
                  >
                    <span>Locations</span>
                    <ChevronDown className={`w-3 h-3 transition-transform ${mobileOpenDropdown === 'locations' ? 'rotate-180' : ''}`} />
                  </button>

                  {isParentOpen('locations') && (
                    <div className="px-3 pb-2 space-y-2 border-t">
                      <div>
                        <div className="w-full flex items-center justify-between py-2">
                          <Link href="/body-massage-in-chennai-egmore" className="flex-1 text-gray-700 hover:text-green-600 font-medium text-sm" onClick={closeMobileMenu}>
                            Spa Locations
                          </Link>
                          <button
                            onClick={() => toggleNestedDropdown('locations', 'spa-locations')}
                            className="p-1 text-gray-700 hover:text-green-600"
                          >
                            <ChevronDown className={`w-3 h-3 transition-transform ${isNestedDropdownOpen('locations', 'spa-locations') ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        {isNestedDropdownOpen('locations', 'spa-locations') && (
                          <div className="ml-3 mt-1 space-y-2 border-l-2 border-green-200 pl-3">
                            <Link href="/body-massage-in-chennai-egmore" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Chennai - Egmore</Link>
                            <Link href="/spa-massage-coimbatore" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Coimbatore</Link>
                            <Link href="/best-body-massage-spa-in-bypass-vellore" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Vellore Bypass</Link>

                            <Link href="/best-body-massage-spa-katpadi-vellore" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Vellore Katpadi</Link>
                            <Link href="/massage-spa-in-vellore" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Vellore Tollgate</Link>

                            <Link href="/massage-spa-in-tirupur" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Tiruppur</Link>
                            <Link href="/massage-spa-in-trichy" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Trichy</Link>
                            <Link href="/spa-in-bangalore" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Bangalore</Link>
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="w-full flex items-center justify-between py-2">
                          <Link href="/best-beauty-salon-in-chennai" className="flex-1 text-gray-700 hover:text-green-600 font-medium text-sm" onClick={closeMobileMenu}>
                            Salon Locations
                          </Link>
                          <button
                            onClick={() => toggleNestedDropdown('locations', 'salon-locations')}
                            className="p-1 text-gray-700 hover:text-green-600"
                          >
                            <ChevronDown className={`w-3 h-3 transition-transform ${isNestedDropdownOpen('locations', 'salon-locations') ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        {isNestedDropdownOpen('locations', 'salon-locations') && (
                          <div className="ml-3 mt-1 space-y-1 border-l-2 border-pink-200 pl-3">
                            <Link href="/best-beauty-salon-in-chennai" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Chennai - Egmore</Link>
                            <Link href="/salon-in-rspuram-coimbatore" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Coimbatore - RS Puram</Link>
                            <Link href="/beauty-parlour-in-tirupur-our-premium-services-as-you-need" className="block py-1 text-[13px] text-gray-600 hover:text-green-600" onClick={closeMobileMenu}>Tiruppur - Rayapuram</Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/gallery-best-massage-centre"
                  className="block py-2 px-3 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded font-medium transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  Gallery
                </Link>

                <Link
                  href="/blogs"
                  className="block py-2 px-3 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded font-medium transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>

                <Link
                  href="/spa-career"
                  className="block py-2 px-3 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded font-medium transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  Careers
                </Link>

                <div className="pt-4 border-t">
                  <Link
                    href="/book-spa-service-appointment/"
                    className="block w-full text-center py-2 px-3 rounded text-white bg-green-600 hover:bg-green-700 font-bold shadow-md transition-colors text-sm"
                    onClick={closeMobileMenu}
                  >
                    Pre Booking
                  </Link>
                </div>

                {/* Mobile Contact & Social */}
                <div className="pt-6 border-t">
                  <div className="space-y-3">
                    <div className="flex flex-col space-y-2 text-center">
                      {/* <a
                        href="tel:+918287811111"
                        className="flex items-center justify-center text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors"
                      >
                        <Phone className="w-4 h-4 text-green-500 mr-2" />
                        +91 82878 11111
                      </a> */}
                      <a
                        href="tel:+919500029234"
                        className="flex items-center justify-center text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors"
                      >
                        <Phone className="w-4 h-4 text-green-500 mr-2" />
                        +91 95000 29234
                      </a>
                    </div>

                    <div className="flex justify-center space-x-4 pt-2">
                      <a
                        href="https://www.facebook.com/riverdayspachennai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                        aria-label="Facebook"
                      >
                        <svg className="w-6 h-6 text-green-400 fill-current" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </a>
                      <a
                        href="https://twitter.com/day_spa26918"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                        aria-label="X (formerly Twitter)"
                      >
                        <svg className="w-6 h-6 text-green-400 fill-current" viewBox="0 0 24 24">
                          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UC3wVeYQk7uoA85Myg-p63vw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                        aria-label="YouTube"
                      >
                        <svg className="w-6 h-6 text-green-400 fill-current" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                      </a>
                      <a
                        href="https://pin.it/2fG6nyJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                        aria-label="Pinterest"
                      >
                        <svg className="w-6 h-6 text-green-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                        </svg>
                      </a>
                      <a
                        href="https://instagram.com/river_salon_day_spa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5 text-green-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showReservationsBar && (
        <div className={`spa-reservations-bar fixed top-24 left-0 w-full z-[50] bg-white/95 backdrop-blur-sm shadow-lg py-6 px-4 md:px-6 transition-opacity duration-200 ${isDropdownOpen ? 'opacity-20' : 'opacity-100'}`}>
          <div className="container mx-auto">
            {/* Desktop View */}
            <div className="hidden md:flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <span className="text-gray-700 font-semibold text-sm mt-1">Spa Reservations:</span>
                <nav className="flex space-x-6">
                  {cities.map((city) => (
                    <Link
                      key={city.name}
                      href={city.href}
                      className="text-green-600 hover:text-gray-800 text-sm font-medium transition-colors duration-200 px-2 py-1 rounded hover:bg-green-50"
                      aria-label={`${city.name} spa location`}
                      onClick={scrollToTop}
                    >
                      {city.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4">
                  {/* <a
                    href="tel:+918287811111"
                    className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors flex items-center px-2 py-1 rounded hover:bg-green-50"
                  >
                    <Phone className="w-4 h-4 text-green-500 mr-2" /> +91 82878 11111
                  </a> */}
                  <a
                    href="tel:+919500029234"
                    className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors flex items-center px-2 py-1 rounded hover:bg-green-50"
                  >
                    <Phone className="w-4 h-4 text-green-500 mr-2" /> +91 95000 29234
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://www.facebook.com/riverdayspachennai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-5 text-green-400 fill-current" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/day_spa26918"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                    aria-label="X (formerly Twitter)"
                  >
                    <svg className="w-6 h-5 text-green-400 fill-current" viewBox="0 0 24 24">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC3wVeYQk7uoA85Myg-p63vw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                    aria-label="YouTube"
                  >
                    <svg className="w-6 h-5 text-green-400 fill-current" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                  <a
                    href="https://pin.it/2fG6nyJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                    aria-label="Pinterest"
                  >
                    <svg className="w-6 h-5 text-green-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/river_salon_day_spa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-5 text-green-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-gray-700 font-semibold text-sm mr-2 mt-1">Spa Reservation:</span>
                  <Link
                    href={cities[currentCityIndex].href}
                    className="text-green-600 hover:text-gray-800 text-sm font-medium transition-all duration-500 px-3 py-1 rounded-full bg-green-50 hover:bg-green-100"
                    onClick={scrollToTop}
                  >
                    {cities[currentCityIndex].name}
                  </Link>
                </div>
                {/* <a
                  href="tel:+918287811111"
                  className="text-xs font-semibold text-gray-700 hover:text-green-600 transition-colors flex items-center px-2 py-1 rounded hover:bg-green-50"
                >
                  <Phone className="w-3 h-3 text-green-500 mr-1" /> +91 82878 11111
                </a> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar