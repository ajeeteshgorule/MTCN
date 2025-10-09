import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Photo Gallery - Mother Teresa College of Nursing, Washim | Campus Photos",
  description: "Explore photos of Mother Teresa College of Nursing, Washim. View our modern facilities, campus infrastructure, laboratories, classrooms, hostel, library, and student activities. See what makes MTCN Washim one of the best nursing colleges in Maharashtra.",
  keywords: "MTCN Washim gallery, nursing college photos Washim, MTCN campus images, nursing college facilities Washim, MTCN infrastructure, Mother Teresa College photos, nursing college laboratory photos",
  openGraph: {
    title: "Photo Gallery - Mother Teresa College of Nursing, Washim",
    description: "Explore our modern campus facilities, laboratories, and student life at MTCN Washim.",
    url: "https://mtcnwashim.com/gallery",
    siteName: "Mother Teresa College of Nursing",
    type: "website",
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

