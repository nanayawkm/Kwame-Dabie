'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function EPAnnouncementCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0) // Single slide
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const slides = [
    {
      id: 'cover',
      type: 'cover',
      title: 'New Single',
      subtitle: 'TƐ!',
      image: '/images/upcoming/dabie_t3_cover.jpg',
      alt: 'TƐ! Single Cover Art by Kwame Dabie'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    resetAutoPlay()
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    resetAutoPlay()
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    resetAutoPlay()
  }

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    // Single slide - no auto-play needed
  }

  const pauseAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  const resumeAutoPlay = () => {
    if (isAutoPlaying) {
      resetAutoPlay()
    }
  }

  // Auto-play effect
  useEffect(() => {
    // Single slide - no auto-play needed
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying])

  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    // Single slide - no swipe navigation needed
    resetAutoPlay()
    
    // Reset touch positions
    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
      {/* Main Carousel */}
      <div 
        className="group relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl bg-black/50 border border-green-900/30 sm:border-2 hover:border-gold-500/50 transition-all duration-500"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        {/* Slides Container */}
        <div 
          className="flex h-full"
          style={{ 
            transform: `translateX(${currentSlide * -100}%)`,
            transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className="min-w-full h-full relative"
              style={{
                transform: index === currentSlide 
                  ? 'scale(1)' 
                  : 'scale(0.98)',
                transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                opacity: index === currentSlide ? 1 : 0.8
              }}
            >
              <div className="w-full h-full relative">
                <Image 
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  className="object-contain transition-all duration-500"
                  priority={index === 0}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Hip-hop style glow effect for active slide */}
                {index === currentSlide && (
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(212,175,55,0.15)] rounded-2xl pointer-events-none transition-all duration-800"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Hidden for single slide */}
        <button
          onClick={() => {}}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-gold-500/20 text-gold-500 rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 opacity-0 pointer-events-none"
          aria-label="Previous slide"
          disabled
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        
        <button
          onClick={() => {}}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-gold-500/20 text-gold-500 rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 opacity-0 pointer-events-none"
          aria-label="Next slide"
          disabled
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Out Now Badge */}
        <div className="absolute top-2 sm:top-4 md:top-6 right-2 sm:right-4 md:right-6 bg-gold-500 text-black px-2 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.8)] transition-all duration-300" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}>
          <span className="absolute inset-0 bg-gold-400 rounded-full opacity-30" style={{animation: 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite'}}></span>
          <span className="relative">Out Now!</span>
        </div>
      </div>

      {/* Slide Indicators - Hidden for single slide */}
      <div className="flex justify-center space-x-3 sm:space-x-4 mt-4 sm:mt-6 hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 transform hover:scale-150 touch-manipulation ${
              index === currentSlide 
                ? 'bg-gold-500 w-10 sm:w-12 h-3 sm:h-4 shadow-[0_0_15px_rgba(212,175,55,0.6)] scale-110' 
                : 'bg-gray-600 hover:bg-gold-400 w-3 sm:w-4 h-3 sm:h-4 hover:shadow-[0_0_10px_rgba(212,175,55,0.3)]'
            } rounded-full hover:rotate-45`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>


    </div>
  )
} 