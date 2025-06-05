"use client"

import { FileText, Download, X } from "lucide-react"
import { useState } from "react"

const temporaryPDFs = [
  {
    id: 1,
    title: "College Brochure 2025",
    description: "Comprehensive guide about our nursing programs and facilities",
    url: "/pdf/Brocher.pdf",
    category: "brochure"
  }] 
  {/*
    }
  {
    id: 2,
    title: "GNM Course Syllabus",
    description: "Detailed curriculum for General Nursing and Midwifery program",
    url: "https://www.africau.edu/images/default/sample.pdf",
    category: "syllabus"
  },
  {
    id: 3,
    title: "Admission Form 2024",
    description: "Application form for new admissions",
    url: "https://www.africau.edu/images/default/sample.pdf",
    category: "forms"
  },
  {
    id: 4,
    title: "Academic Calendar",
    description: "Schedule of academic activities for the current year",
    url: "https://www.africau.edu/images/default/sample.pdf",
    category: "notices"
  },
  {
    id: 5,
    title: "Hostel Guidelines",
    description: "Rules and regulations for hostel residents",
    url: "https://www.africau.edu/images/default/sample.pdf",
    category: "notices"
  },
  {
    id: 6,
    title: "Fee Structure",
    description: "Detailed fee structure for all courses",
    url: "https://www.africau.edu/images/default/sample.pdf",
    category: "forms"
  }*/}


export default function ResourcesPage() {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Resources</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {temporaryPDFs.map((pdf) => (
            <div
              key={pdf.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{pdf.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{pdf.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 capitalize">{pdf.category}</span>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setSelectedPDF(pdf.url)}
                      className="text-rose-600 hover:text-rose-700 text-sm font-medium"
                    >
                      View PDF
                    </button>
                    {/*<a
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-rose-600 hover:text-rose-700 text-sm font-medium"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PDF Viewer Modal */}
        {selectedPDF && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-lg">
            <button
                onClick={() => setSelectedPDF(null)}
                className="absolute top-4 right-4 text-white hover:bg-white hover:text-black rounded-full p-2 transition-colors duration-200 z-10"
              >
                <X className="h-6 w-6" />
              </button>
              <iframe
                src={selectedPDF}
                className="w-full h-full rounded-lg"
                title="PDF Viewer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
