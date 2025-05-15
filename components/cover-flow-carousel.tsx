"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

const albums = [
  {
    id: 1,
    title: "Good Vibes Only",
    artist: "Kwame Dabie",
    cover: "https://i.ibb.co/JkL8Y6L/kwame1.jpg",
    year: "2025",
  },
  {
    id: 2,
    title: "African Rhythm",
    artist: "Kwame Dabie",
    cover: "https://i.ibb.co/0jZ8Y6L/kwame2.jpg",
    year: "2024",
  },
  {
    id: 3,
    title: "Elevation",
    artist: "Kwame Dabie",
    cover: "https://i.ibb.co/0M8L6Yt/kwame3.jpg",
    year: "2023",
  },
  {
    id: 4,
    title: "Sunset Dreams",
    artist: "Kwame Dabie",
    cover: "https://i.ibb.co/JkL8Y6L/kwame1.jpg",
    year: "2024",
  },
  {
    id: 5,
    title: "Midnight Groove",
    artist: "Kwame Dabie",
    cover: "https://i.ibb.co/0jZ8Y6L/kwame2.jpg",
    year: "2023",
  },
  {
    id: 6,
    title: "Dawn of Light",
    artist: "Kwame Dabie",
    cover: "https://i.ibb.co/0M8L6Yt/kwame3.jpg",
    year: "2024",
  },
]

export default function CoverFlowCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      next()
    }
    if (isRightSwipe) {
      prev()
    }
  }

  const next = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % albums.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + albums.length) % albums.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + albums.length) % albums.length
    const isCenter = diff === 0
    const isLeft = diff === albums.length - 1 || diff === 1
    const isFarLeft = diff === albums.length - 2 || diff === 2

    if (isCenter) {
      return "scale-100 translate-x-0 translate-y-0 rotate-0 z-30 opacity-100 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
    } else if (isLeft) {
      return diff === 1
        ? "scale-50 translate-x-[120%] translate-y-[-2%] rotate-0 z-20 opacity-90 blur-[2px]"
        : "scale-50 -translate-x-[120%] translate-y-[-2%] rotate-0 z-20 opacity-90 blur-[2px]"
    } else if (isFarLeft) {
      return diff === 2
        ? "scale-50 translate-x-[240%] translate-y-[-4%] rotate-0 z-10 opacity-80 blur-[3px]"
        : "scale-50 -translate-x-[240%] translate-y-[-4%] rotate-0 z-10 opacity-80 blur-[3px]"
    } else {
      return "hidden"
    }
  }

  return (
    <div
      ref={carouselRef}
      className="relative w-full h-[600px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 flex items-center justify-center perspective-[2000px]">
        {albums.map((album, index) => (
          <div
            key={album.id}
            className={`absolute transition-all duration-700 ease-in-out ${getCardStyle(index)}`}
            onClick={() => {
              if (index !== currentIndex) {
                setCurrentIndex(index)
              }
            }}
          >
            <div className="relative w-[320px] h-[400px] group cursor-pointer transform-gpu">
              <div className="absolute inset-0 bg-black/50 rounded-xl overflow-hidden border border-green-900/30 hover:border-gold-500/50 transition-all duration-300 shadow-lg">
                <Image
                  src={album.cover}
                  alt={album.title}
                  width={320}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-gold-500 text-black rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-gold-400">
                    <Play className="w-8 h-8" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{album.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">{album.artist} • {album.year}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
        {albums.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return
              setIsAnimating(true)
              setCurrentIndex(index)
              setTimeout(() => setIsAnimating(false), 700)
            }}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-gold-500 scale-125" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
} 