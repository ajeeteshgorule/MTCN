import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources & Downloads - Mother Teresa College of Nursing, Washim | Brochures & Forms",
  description: "Download resources from Mother Teresa College of Nursing, Washim. Access college brochure, admission forms, syllabus, academic calendar, fee structure, and other important documents for nursing courses.",
  keywords: "MTCN Washim brochure, nursing college admission form, GNM syllabus download, ANM course brochure, nursing college prospectus, MTCN downloads, admission form Washim nursing",
  openGraph: {
    title: "Resources & Downloads - MTCN Washim",
    description: "Download college brochure, admission forms, syllabus and other important documents.",
    url: "https://mtcnwashim.com/resources",
    siteName: "Mother Teresa College of Nursing",
    type: "website",
  },
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

