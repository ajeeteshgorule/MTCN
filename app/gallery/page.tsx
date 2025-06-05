"use client"

import { useState } from "react"
import { X } from "lucide-react"

const temporaryImages = [
  /*
    id: 1,
    url: "/gallery/1.jpeg",
    title: "Modern Hospital Facilities",
    category: "facilities"
  */
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
  } ,
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
  } ,
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
  } ,
  {
    id: 23,
    url: "/gallery/23.jpeg",
    title: "",
    category: ""
  } 
]

const categories = [
  { value: "all", label: "All Photos" },
  /*{ value: "campus", label: "Campus" },
  { value: "facilities", label: "Facilities" },
  { value: "academics", label: "Academics" },
  { value: "events", label: "Events" }*/
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = temporaryImages.filter(
    (img) => selectedCategory === "all" || img.category === selectedCategory
  )

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Gallery</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.value
                  ? "bg-rose-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-white p-4">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm capitalize">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={temporaryImages.find((img) => img.id === selectedImage)?.url}
              alt={temporaryImages.find((img) => img.id === selectedImage)?.title}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  )
}
