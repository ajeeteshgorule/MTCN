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
    "Mother Teresa College of Nursing, Washim, Nursing College, Nursing Education, Healthcare, ANM, GNM, B.Sc. Nursing, Post Basic B.Sc. Nursing, M.Sc. Nursing, nursing washim, ANM Washim, GNM Washim,Nursing College in Washim,top nursing college in washim, best nursing college in washim, best nursing college in maharashtra, best nursing college in india, best nursing college in maharashtra, best nursing college in india, best nursing college in maharashtra, best nursing college in india",
  icons: {
    icon: "/favicon.ico", // Path to your favicon
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
        <meta name="google-site-verification" content="jsNZe0CQUet6l5NcHBtX9kbpujicPOjGU8OpPxBnPpY" />
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

        {/* Usercentrics CMP */}
        <Script id="usercentrics-cmp" src="https://app.usercentrics.eu/browser-ui/latest/loader.js" data-settings-id="NpjHznyhvpr51T" async strategy="afterInteractive" />

        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
