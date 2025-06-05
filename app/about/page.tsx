import { Award, Users, BookOpen, Heart, Target, Eye, CheckCircle, GraduationCap } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-rose-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-4">About Mother Teresa College of Nursing</h1>
          <p className="text-xl max-w-3xl">
            Dedicated to shaping compassionate healthcare professionals through excellence in nursing education since
            2011
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
              Mother Teresa College of Nursing was established in 2011 with a vision to create skilled, compassionate, and
                ethical nursing professionals who would serve humanity with dedication and excellence. Over the past two
                decades, we have grown from a small institution to one of the most respected nursing colleges in the
                region.
              </p>
              <p className="text-gray-600 mb-4">
                Our college is recognized by the State Government Of Maharashtra and affiliated with the Indian Nursing Council, Maharastra State Board Of Nursing & Para Medical Education,Maharashtra Nursing Council.
                We are committed to providing quality education that combines theoretical knowledge with practical
                skills, ensuring our graduates are well-prepared for the challenges of modern healthcare.
              </p>
              <p className="text-gray-600 mb-6">
                With state-of-the-art facilities, experienced faculty, and a student-centered approach to learning, we
                continue to set new standards in nursing education while maintaining our core values of compassion,
                integrity, and excellence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <div className="text-2xl font-bold text-rose-600 mb-1">1500+</div>
                  <div className="text-sm text-gray-600">Graduates</div>
                </div>
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <div className="text-2xl font-bold text-rose-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/about/student.jpeg?height=500&width=600"
                alt="College building and students"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">INC Recognized</div>
                    <div className="text-sm text-gray-600">Quality Assured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Foundation</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our mission, vision, and values guide everything we do and shape the future of nursing education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600">
                To provide comprehensive nursing education that develops competent, caring, and ethical healthcare
                professionals who will contribute to improving health outcomes in our communities and beyond.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-600">
                To be a leading institution in nursing education, recognized for excellence in teaching, research, and
                community service, producing graduates who are leaders in healthcare innovation and patient care.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Our Values</h3>
              <p className="text-gray-600">
                Compassion, Integrity, Excellence, Respect, Innovation, and Lifelong Learning form the cornerstone of
                our educational philosophy and institutional culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Mother Teresa College of Nursing?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for nursing education in the region
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Expert Faculty</h3>
                <p className="text-gray-600">
                  Learn from experienced nursing professionals and educators with advanced degrees and clinical
                  expertise.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Modern Curriculum</h3>
                <p className="text-gray-600">
                  Updated curriculum that meets current healthcare standards and prepares students for modern nursing
                  practice.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Clinical Partnerships</h3>
                <p className="text-gray-600">
                  Strong partnerships with leading hospitals and healthcare facilities for comprehensive clinical
                  training.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">High Success Rate</h3>
                <p className="text-gray-600">
                  Excellent track record with high pass rates in licensing examinations and job placement success.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Accredited Programs</h3>
                <p className="text-gray-600">
                  All programs are fully accredited and recognized by relevant nursing councils and healthcare boards.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Student Support</h3>
                <p className="text-gray-600">
                  Comprehensive student support services including counseling, career guidance, and academic assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who guide our institution towards excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/about/principal.png?height=200&width=200"
                alt="Principal"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg mb-1 text-gray-800">prof. Sachin Thorat</h3>
              <p className="text-rose-600 font-medium mb-2">Principal</p>
              <p className="text-gray-600 text-sm">
              M.Sc. in Community Health Nursing Education, 15+ years of experience in nursing education and administration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/about/vp.jpeg?height=200&width=200"
                alt="Vice Principal"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg mb-1 text-gray-800">Prof. Ashish Mude</h3>
              <p className="text-rose-600 font-medium mb-2">Vice Principal</p>
              <p className="text-gray-600 text-sm">
              M.Sc. Nursing, Specialist in Medical-Surgical Nursing with a strong background in clinical care and academic leadership.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/about/director.jpg?height=200&width=200"
                alt="Academic Director"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg mb-1 text-gray-800">Ms. Pooja Purnaye Gorule</h3>
              <p className="text-rose-600 font-medium mb-2">Director</p>
              <p className="text-gray-600 text-sm">
              An experienced and visionary leader dedicated to advancing patient care through innovation, compassion, and excellence in healthcare services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">World-Class Facilities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art facilities provide the perfect environment for learning and skill development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Modern Simulation Labs</h3>
                  <p className="text-gray-600">
                    High-fidelity simulation labs with advanced manikins and equipment for realistic clinical training.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Digital Library</h3>
                  <p className="text-gray-600">
                    Comprehensive digital library with access to latest nursing journals, e-books, and research
                    databases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Smart Classrooms</h3>
                  <p className="text-gray-600">
                    Technology-enabled classrooms with interactive whiteboards and multimedia learning systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Student Accommodation</h3>
                  <p className="text-gray-600">
                    Safe and comfortable hostel facilities with modern amenities for outstation students.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/about/lab.jpg?height=400&width=500"
                alt="College facilities"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-rose-600">Advance Lab</div>
                  <div className="text-xs text-gray-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Recognition */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Achievements & Recognition</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by various organizations and institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Best Nursing College</h3>
              <p className="text-gray-600 text-sm">State Education Board Award 2022</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">100% Placement</h3>
              <p className="text-gray-600 text-sm">Achieved for 5 consecutive years</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Research Excellence</h3>
              <p className="text-gray-600 text-sm">50+ published research papers</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">INC Accredited</h3>
              <p className="text-gray-600 text-sm">Grade A+ accreditation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-rose-600 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Nursing Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us at Mother Teresa College of Nursing and become part of a community dedicated to healthcare excellence
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/courses"
              className="bg-white text-rose-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Explore Our Programs
            </a>
            <a
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-rose-600 transition-colors"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
