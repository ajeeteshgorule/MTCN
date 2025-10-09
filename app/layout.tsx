import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mother Teresa College of Nursing, Washim",
  description:
    "Mother Teresa College of Nursing, Washim, affiliated with the Maharashtra State Board of Nursing and Paramedical Education (MSBNPE), offers excellent GNM and ANM programs. Discover our courses, understand the admission process, and find out why we're considered one of the best nursing colleges in Washim. Start your fulfilling nursing career with us!",
  keywords:
    "Mother Teresa College of Nursing, Washim, MTCN Washim, Mother Teresa College of Nursing washim, RSCN, Nursing College, Nursing Education, Healthcare, ANM, GNM, B.Sc. Nursing, Post Basic B.Sc. Nursing, M.Sc. Nursing, nursing washim, ANM Washim, GNM Washim, Nursing College in Washim, top nursing college in washim, best nursing college in washim, best nursing college in maharashtra, best nursing college in india, nursing college in Washim, best nursing colleges Maharashtra, GNM diploma Washim, ANM nursing course Maharashtra, INC approved nursing college Washim, Maharashtra nursing council college, paramedical courses Washim, nursing admission 2025 Maharashtra, nursing institute near Washim, private nursing college Washim, Maa Ganga College of Nursing Washim, Savitribai Phule GNM Nursing College Washim",
  icons: {
    icon: "/favicon.ico",
    shortcut: ["/favicon-16x16.png", "/favicon-32x32.png"],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
      {
        rel: "icon",
        url: "/icon.png",
      },
    ],
  },
  openGraph: {
    title: "Mother Teresa College of Nursing, Washim",
    description:
      "Mother Teresa College of Nursing, Washim, affiliated with the Maharashtra State Board of Nursing and Paramedical Education (MSBNPE), offers excellent GNM and ANM programs. Discover our courses, understand the admission process, and find out why we're considered one of the best nursing colleges in Washim. Start your fulfilling nursing career with us!",
    url: "https://mtcnwashim.com/",
    siteName: "Mother Teresa College of Nursing",
    images: [
      {
        url: "https://mtcnwashim.com/icon.png", // Replace with your actual Open Graph image
        width: 1200,
        height: 630,
        alt: "Mother Teresa College of Nursing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mother Teresa College of Nursing, Washim",
    description:
      "Mother Teresa College of Nursing, Washim, affiliated with the Maharashtra State Board of Nursing and Paramedical Education (MSBNPE), offers excellent GNM and ANM programs. Discover our courses, understand the admission process, and find out why we're considered one of the best nursing colleges in Washim. Start your fulfilling nursing career with us!",
    images: ["https://mtcnwashim.com/icon.png"], // Replace with your actual Twitter card image
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="google-site-verification" content="jsNZe0CQUet6l5NcHBtX9kbpujicPOjGU8OpPxBnPpY" />
        <meta name="author" content="Mother Teresa College of Nursing, Washim" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <link rel="canonical" href="https://mtcnwashim.com/" />
        
        {/* Schema.org Structured Data for Educational Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Mother Teresa College of Nursing, Washim",
              "alternateName": ["MTCN Washim", "Mother Teresa College of Nursing washim", "RSCN"],
              "description": "INC and Maharashtra Nursing Council approved nursing college in Washim offering GNM, ANM, and B.Sc. Nursing programs with excellent infrastructure and experienced faculty.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Behind Bus Stand, Vyankatesh Colony",
                "addressLocality": "Washim",
                "addressRegion": "Maharashtra",
                "postalCode": "444505",
                "addressCountry": "IN"
              },
              "telephone": "+919881211913",
              "url": "https://mtcnwashim.com/",
              "email": "contact@mtcnwashim.com",
              "areaServed": {
                "@type": "State",
                "name": "Maharashtra"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Nursing Courses",
                "itemListElement": [
                  {
                    "@type": "Course",
                    "name": "General Nursing and Midwifery (GNM)",
                    "description": "3.5 years diploma course in nursing",
                    "provider": {
                      "@type": "EducationalOrganization",
                      "name": "Mother Teresa College of Nursing, Washim"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "Auxiliary Nurse Midwife (ANM)",
                    "description": "2 years diploma course in nursing",
                    "provider": {
                      "@type": "EducationalOrganization",
                      "name": "Mother Teresa College of Nursing, Washim"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "B.Sc. Nursing",
                    "description": "4 years bachelor degree in nursing",
                    "provider": {
                      "@type": "EducationalOrganization",
                      "name": "Mother Teresa College of Nursing, Washim"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "150"
              }
            })
          }}
        />
        
        {/* LocalBusiness Schema for better local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollegeOrUniversity",
              "name": "Mother Teresa College of Nursing, Washim",
              "image": "https://mtcnwashim.com/icon.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Behind Bus Stand, Vyankatesh Colony",
                "addressLocality": "Washim",
                "addressRegion": "MH",
                "postalCode": "444505",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "20.1167",
                "longitude": "77.1333"
              },
              "telephone": "+919881211913",
              "url": "https://mtcnwashim.com/",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ]
            })
          }}
        />
        
        {/* AboutPage Schema for About Section */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Mother Teresa College of Nursing",
              "description": "Learn about Mother Teresa College of Nursing, established in Washim, Maharashtra. Our vision, mission, leadership team, and commitment to quality nursing education.",
              "url": "https://mtcnwashim.com/about",
              "mainEntity": {
                "@type": "CollegeOrUniversity",
                "name": "Mother Teresa College of Nursing",
                "alternateName": ["MTCN Washim", "Mother Teresa College of Nursing washim"],
                "foundingDate": "2011",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Behind Bus Stand, Vyankatesh Colony",
                  "addressLocality": "Washim",
                  "addressRegion": "Maharashtra",
                  "postalCode": "444505",
                  "addressCountry": "India"
                },
                "founder": {
                  "@type": "Organization",
                  "name": "Mother Teresa Educational Trust"
                },
                "description": "INC and Maharashtra Nursing Council approved nursing college offering GNM, ANM, and B.Sc. Nursing programs",
                "telephone": "+919881211913",
                "email": "contact@mtcnwashim.com",
                "url": "https://mtcnwashim.com/",
                "sameAs": [
                  "https://www.facebook.com/mtcnwashim",
                  "https://www.instagram.com/mtcnwashim"
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-E40HER3RH5" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-E40HER3RH5');
          `}
        </Script>

        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
