import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight, Clock, GraduationCap } from "lucide-react"

interface CourseCardProps {
  title: string
  duration: string
  eligibility: string
  description: string
  icon: ReactNode
}

export default function CourseCard({ title, duration, eligibility, description, icon }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Clock className="h-4 w-4" />
          <span>Duration: {duration}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <GraduationCap className="h-4 w-4" />
          <span>Eligibility: {eligibility}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={`/courses`}
          className="text-rose-600 font-medium flex items-center gap-1 hover:text-rose-700 transition-colors"
        >
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
