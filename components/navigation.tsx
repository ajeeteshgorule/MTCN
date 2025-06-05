"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Gallery", href: "/gallery" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const getAcademicYear = () => {
    const now = new Date()
    const year = now.getFullYear()
    const startYear = now.getMonth() >= 3 ? year : year - 1
    return `${startYear}–${startYear + 1}`
  }

  return (
    <>
      {/* Sliding Banner */}
      <div className="w-full bg-rose-600 text-white overflow-hidden">
        <div className="whitespace-nowrap animate-marquee py-2 text-md font-medium">
          Admission is open for academic year {getAcademicYear()}
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <div className="w-22 h-22 sm:w-25 sm:h-25 md:w-20 md:h-20 rounded-full flex items-center justify-center">
                <img src="/home/logo.png?height=400&width=600" alt="logo" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-800">
                  Mother Teresa College of Nursing, Washim
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-rose-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href ? "text-rose-600 bg-rose-50" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-rose-600 focus:outline-none focus:text-rose-600 p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      pathname === item.href
                        ? "text-rose-600 bg-rose-50"
                        : "text-gray-700 hover:text-rose-600 hover:bg-gray-50"
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Marquee animation style */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          min-width: 100%;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  )
}
