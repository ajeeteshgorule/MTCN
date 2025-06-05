"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const temporaryImages = [
  {
    id: 1,
    url: "/gallery/1.jpeg",
    title: "",
    category: ""
  },
  {
    id: 2,
    url: "/gallery/2.jpeg",
    title: "",
    category: ""
  },
  {
    id: 3,
    url: "/gallery/3.jpeg",
    title: "",
    category: ""
  },
  {
    id: 4,
    url: "/gallery/4.jpeg",
    title: "",
    category: ""
  },
  {
    id: 5,
    url: "/gallery/5.jpeg",
    title: "",
    category: ""
  },
  {
    id: 6,
    url: "/gallery/6.jpeg",
    title: "",
    category: ""
  },
  {
    id: 7,
    url: "/gallery/7.jpeg",
    title: "",
    category: ""
  },
  {
    id: 8,
    url: "/gallery/8.jpeg",
    title: "",
    category: ""
  },
  {
    id: 9,
    url: "/gallery/9.jpeg",
    title: "",
    category: ""
  },
  {
    id: 10,
    url: "/gallery/10.jpeg",
    title: "",
    category: ""
  },
  {
    id: 11,
    url: "/gallery/11.jpeg",
    title: "",
    category: ""
  },
  {
    id: 12,
    url: "/gallery/12.jpeg",
    title: "",
    category: ""
  },
  {
    id: 13,
    url: "/gallery/13.jpeg",
    title: "",
    category: ""
  },
  {
    id: 14,
    url: "/gallery/14.jpeg",
    title: "",
    category: ""
  },
  {
    id: 15,
    url: "/gallery/15.jpeg",
    title: "",
    category: ""
  },
  {
    id: 16,
    url: "/gallery/16.jpeg",
    title: "",
    category: ""
  },
  {
    id: 17,
    url: "/gallery/17.jpeg",
    title: "",
    category: ""
  },
  {
    id: 18,
    url: "/gallery/18.jpeg",
    title: "",
    category: ""
  },
  {
    id: 19,
    url: "/gallery/19.jpeg",
    title: "",
    category: ""
  },
  {
    id: 20,
    url: "/gallery/20.jpeg",
    title: "",
    category: ""
  },
  {
    id: 21,
    url: "/gallery/21.jpeg",
    title: "",
    category: ""
  },
  {
    id: 22,
    url: "/gallery/22.jpeg",
    title: "",
    category: ""
  },
  {
    id: 23,
    url: "/gallery/23.jpeg",
    title: "",
    category: ""
  }
]

export default function GalleryPreview() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === temporaryImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-8">
      {/* Featured Image Slider */}
      <div className="relative h-[400px] overflow-hidden rounded-xl">
        {temporaryImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h3 className="text-white text-xl font-semibold">{image.title}</h3>
              <p className="text-white/80 capitalize">{image.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
