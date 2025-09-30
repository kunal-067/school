"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, Camera, Users, Award, BookOpen, Palette, Music } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Photos", icon: <Camera className="w-4 h-4" /> },
    { id: "classrooms", name: "Classrooms", icon: <BookOpen className="w-4 h-4" /> },
    { id: "events", name: "Events", icon: <Users className="w-4 h-4" /> },
    { id: "activities", name: "Activities", icon: <Palette className="w-4 h-4" /> },
    { id: "sports", name: "Sports", icon: <Award className="w-4 h-4" /> },
    { id: "cultural", name: "Cultural", icon: <Music className="w-4 h-4" /> },
  ]

  const galleryImages = [
    {
      id: 1,
      src: "/modern-school-classroom-with-students-studying.jpg",
      alt: "Modern Classroom",
      category: "classrooms",
      title: "Smart Classroom",
      description: "Our modern classrooms equipped with smart boards and digital learning tools",
    },
    {
      id: 2,
      src: "/school-science-lab.png",
      alt: "Science Laboratory",
      category: "classrooms",
      title: "Science Laboratory",
      description: "Well-equipped science lab for hands-on learning and experiments",
    },
    {
      id: 3,
      src: "/school-annual-day-celebration-with-students-perfor.jpg",
      alt: "Annual Day Celebration",
      category: "events",
      title: "Annual Day 2024",
      description: "Students showcasing their talents during our annual day celebration",
    },
    {
      id: 4,
      src: "/school-sports-day-with-students-running-race.jpg",
      alt: "Sports Day",
      category: "sports",
      title: "Sports Day",
      description: "Athletic competitions and sports activities for physical development",
    },
    {
      id: 5,
      src: "/school-library-with-students-reading-books.jpg",
      alt: "School Library",
      category: "classrooms",
      title: "Library",
      description: "Extensive library with thousands of books and digital resources",
    },
    {
      id: 6,
      src: "/school-art-and-craft-activity-with-students-painti.jpg",
      alt: "Art & Craft Activity",
      category: "activities",
      title: "Art & Craft",
      description: "Creative activities to develop artistic skills and imagination",
    },
    {
      id: 7,
      src: "/school-music-class-with-students-playing-instrumen.jpg",
      alt: "Music Class",
      category: "cultural",
      title: "Music Class",
      description: "Learning musical instruments and vocal training",
    },
    {
      id: 8,
      src: "/school-computer-lab-with-students-using-computers.jpg",
      alt: "Computer Lab",
      category: "classrooms",
      title: "Computer Lab",
      description: "Modern computer lab with high-speed internet and latest software",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Independence Day",
      category: "events",
      title: "Independence Day",
      description: "Patriotic celebration with flag hoisting and cultural programs",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Playground",
      category: "sports",
      title: "Playground",
      description: "Spacious playground for various outdoor sports and activities",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Cultural Dance",
      category: "cultural",
      title: "Cultural Dance",
      description: "Traditional dance performances showcasing our cultural heritage",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Science Fair",
      category: "activities",
      title: "Science Fair",
      description: "Students presenting innovative science projects and experiments",
    },
  ]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            School Gallery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Glimpses of School Life</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore our vibrant school environment through these images showcasing our classrooms, events, activities,
            and student achievements.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center space-x-2"
            >
              {category.icon}
              <span>{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-foreground mb-1">{image.title}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <h3 className="text-lg font-semibold mb-1">{filteredImages[selectedImage].title}</h3>
                <p className="text-sm opacity-90">{filteredImages[selectedImage].description}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            {filteredImages.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute top-4 left-4 text-white bg-black/50 px-3 py-1 rounded">
              {selectedImage + 1} / {filteredImages.length}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-muted rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Want to See More?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Visit our school to experience the vibrant learning environment firsthand. Schedule a tour to see our
            facilities and meet our faculty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Schedule a Visit</Button>
            <Button size="lg" variant="outline" className="bg-transparent">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
