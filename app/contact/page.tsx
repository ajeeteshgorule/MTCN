import { Mail, MapPin, Phone } from "lucide-react"
import MapLocation from "@/components/map-location"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Contact Us - Mother Teresa College of Nursing, Washim | Admission Enquiry",
  description: "Contact Mother Teresa College of Nursing, Washim for admissions inquiries, campus visits, and general information. Call +919881211913 or email mtcn.washim@gmail.com. Visit us at Behind Bus Stand, Vyankatesh Colony, Washim-444505.",
  keywords: "Contact MTCN Washim, nursing college admission Washim, MTCN contact number, nursing college Washim address, admission enquiry nursing, MTCN email, Mother Teresa College contact, nursing admission helpline",
  openGraph: {
    title: "Contact Mother Teresa College of Nursing, Washim",
    description: "Get in touch for admissions inquiries and campus visits. Call +919881211913 or visit us in Washim, Maharashtra.",
    url: "https://mtcnwashim.com/contact",
    siteName: "Mother Teresa College of Nursing",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* ContactPage Schema */}
      <Script id="contact-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Mother Teresa College of Nursing",
          "description": "Get in touch with Mother Teresa College of Nursing for admissions inquiries, campus visits, or general information",
          "url": "https://mtcnwashim.com/contact",
          "mainEntity": {
            "@type": "CollegeOrUniversity",
            "name": "Mother Teresa College of Nursing",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Behind Bus Stand, Vyankatesh Colony",
              "addressLocality": "Washim",
              "addressRegion": "Maharashtra",
              "postalCode": "444505",
              "addressCountry": "India"
            },
            "telephone": "+919881211913",
            "email": "mtcn.washim@gmail.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919881211913",
              "contactType": "Admissions",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi", "Marathi"]
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "13:00"
              }
            ]
          }
        })}
      </Script>
      
      <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-rose-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Get in touch with us for admissions inquiries, campus visits, or general information
          </p>
        </div>
      </div>

      {/* Contact Information and Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      Mother Teresa College Of Nursing,
                      <br />
                      Behind Bus Stand, Vyankatesh Colony,
                      <br />
                      Washim-444505
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Main Office: <a href="tel:+919881211913">9881211913</a>

                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:mtcn.washim@gmail.com">
                        mtcn.washim@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <table className="w-full text-gray-600">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Monday - Friday</td>
                      <td className="py-2">9:00 AM - 5:00 PM</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Saturday</td>
                      <td className="py-2">9:00 AM - 1:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Sunday</td>
                      <td className="py-2">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Map */}
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Location</h2>
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                <MapLocation />
              </div>
            </div>
          </div>
        </div>
      </section>



    </main>
    </>
  )
}
