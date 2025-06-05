import Link from "next/link"
import { ArrowRight, BookOpen, MapPin, Phone } from "lucide-react"
import HeroSlider from "@/components/hero-slider"
import CourseCard from "@/components/course-card"
import GalleryPreview from "@/components/gallery-preview"
import MapLocation from "@/components/map-location"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <HeroSlider />
        <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/40 text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Mother Teresa College of Nursing</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">
            Shaping compassionate healthcare professionals for tomorrow
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/courses"
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-colors"
            >
              Explore Courses <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-rose-600 px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-colors"
            >
              Contact Us <Phone className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About Our Institution</h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to create skilled and compassionate nursing professionals, our college has been at
                the forefront of nursing education for over two decades. We provide a comprehensive learning environment
                with state-of-the-art facilities and experienced faculty.
              </p>
              <p className="text-gray-600 mb-6">
                Our programs are designed to equip students with both theoretical knowledge and practical skills needed
                to excel in the healthcare industry, with a focus on patient care, medical ethics, and professional
                development.
              </p>
              <Link
                href="/about"
                className="text-rose-600 font-medium flex items-center gap-2 hover:text-rose-700 transition-colors"
              >
                Learn more about us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="/home/lab.jpg?height=400&width=600"
                alt="Nursing students in a classroom"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Nursing Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive nursing programs designed to prepare students for successful careers in healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <CourseCard
              title="General Nursing and Midwifery (GNM)"
              duration="3 Years"
              eligibility="10+2 in any stream"
              description="A comprehensive program focusing on general nursing practices and midwifery skills, preparing students for various healthcare settings."
              icon={<BookOpen className="h-6 w-6" />}
            />

            <CourseCard
              title="Auxiliary Nursing and Midwifery (ANM)"
              duration="2 Years"
              eligibility="10+2 in any stream"
              description="A foundation program that trains students in basic nursing and midwifery skills to serve as auxiliary healthcare providers."
              icon={<BookOpen className="h-6 w-6" />}
            />
          </div>

          <div className="text-center mt-10">
            <Link
              href="/courses"
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-colors"
            >
              View All Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Campus Gallery</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Take a visual tour of our modern campus facilities and student activities
            </p>
          </div>

          <GalleryPreview />

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-colors"
            >
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Location</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Visit our campus to learn more about our programs and facilities
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <MapLocation />
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-rose-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">College Address</h3>
                <p className="text-gray-600">
                  Mother Teresa College Of Nursing,
                  <br />
                  Behind Bus Stand, Vyankatesh Colony,
                  <br />
                  Washim-444505
                  <br />
                  <Link href="tel:+919881211913" className="text-rose-600 hover:text-rose-700">
                    Phone: 9881211913
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
