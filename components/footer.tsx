"use client"

import Link from "next/link"
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mother Teresa College of Nursing, Washim</h3>
            <p className="text-gray-300 mb-4">
              Shaping compassionate healthcare professionals for tomorrow with excellence in nursing education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
                  General Nursing & Midwifery (GNM)
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
                  Auxiliary Nursing & Midwifery (ANM)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p> Mother Teresa College Of Nursing,
                  Behind Bus Stand, Vyankatesh Colony,
                  Washim-444505</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-rose-400 flex-shrink-0" />
                <a href="tel:+919881211913" className="text-gray-300 hover:text-white transition-colors">
                9881211913
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-rose-400 flex-shrink-0" />
                <a href="mailto:mtcn.washim@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  mtcn.washim@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} Mother Teresa College of Nursing Washim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
