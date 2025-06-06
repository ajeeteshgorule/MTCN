import { Clock, GraduationCap, Users, Award, Stethoscope } from "lucide-react"

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-rose-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-4">Our Nursing Programs</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive nursing education programs designed to prepare compassionate and skilled healthcare
            professionals
          </p>
        </div>
      </div>

      {/* GNM Course */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="/courses/gnm.jpg?height=400&width=600"
                  alt="GNM Program"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">General Nursing and Midwifery (GNM)</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">3 Years</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Eligibility</p>
                      <p className="font-medium">10+2 with Science,Arts,Commerce,MCVC</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Seats</p>
                      <p className="font-medium">70 per batch</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Recognition</p>
                      <p className="font-medium">
                        ‣ Indian Nursing Council
                        <br />
                        ‣ Maharastra State Board Of Nursing & Para Medical Education
                        <br />
                        ‣ State Government Of Maharashtra
                        <br />
                        ‣ Maharashtra Nursing Council
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  The General Nursing and Midwifery (GNM) program is a comprehensive three-year diploma course that
                  prepares students for a career in nursing. The curriculum includes theoretical knowledge and practical
                  training in various aspects of nursing care, medical-surgical nursing, community health nursing,
                  pediatric nursing, obstetric and gynecological nursing, and mental health nursing.
                </p>

                <h3 className="text-xl font-semibold mb-3">Key Subjects</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-rose-600" />
                    <span>Fundamentals of Nursing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-rose-600" />
                    <span>Medical-Surgical Nursing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-rose-600" />
                    <span>Community Health Nursing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-rose-600" />
                    <span>Pediatric Nursing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-rose-600" />
                    <span>Midwifery & Gynecological Nursing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-rose-600" />
                    <span>Mental Health Nursing</span>
                  </li>
                </ul>

                <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  <a href="/contact">Apply Now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANM Course */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/3">
                <img
                  src="/courses/anm.jpg?height=400&width=600"
                  alt="ANM Program"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Auxiliary Nursing and Midwifery (ANM)</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">2 Years</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Eligibility</p>
                      <p className="font-medium">10+2 in any stream</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Seats</p>
                      <p className="font-medium">40 per batch</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Recognition</p>
                      <p className="font-medium">Indian Nursing Council</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  The Auxiliary Nursing and Midwifery (ANM) program is a two-year diploma course that prepares students
                  to work as auxiliary healthcare providers. The curriculum focuses on basic nursing skills, maternal
                  and child health care, community health, and preventive medicine. ANM nurses play a crucial role in
                  rural healthcare settings and primary health centers.
                </p>

                <h3 className="text-xl font-semibold mb-3">Key Subjects</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-rose-600" />
                    <span>Basic Nursing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-rose-600" />
                    <span>Primary Healthcare</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-rose-600" />
                    <span>Health Education & Communication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-rose-600" />
                    <span>Maternal & Child Health</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-rose-600" />
                    <span>Family Welfare</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-rose-600" />
                    <span>Community Health</span>
                  </li>
                </ul>

                <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  <a href="/contact">Apply Now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
