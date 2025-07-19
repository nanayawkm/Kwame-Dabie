"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroCarousel from "@/components/hero-carousel"

export default function HeroSection() {
  const scrollToStreaming = () => {
    const streamingSection = document.getElementById('streaming-platforms')
    if (streamingSection) {
      const offset = 80 // Offset for fixed header
      const elementPosition = streamingSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="w-full h-[100vh] relative overflow-hidden">
      <HeroCarousel />
      <div className="absolute inset-0 bg-black/50 flex items-center">
        <div className="pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-8 md:pr-8 lg:pl-12 lg:pr-8 w-full">
          <div className="flex flex-col w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2">
            <div className="flex flex-col" style={{gap: 0}}>
              <div className="relative w-[280px] h-[112px] sm:w-[400px] sm:h-[160px] md:w-[500px] md:h-[200px] lg:w-[600px] lg:h-[240px] xl:w-[700px] xl:h-[280px] mb-3">
                <Image
                  src="/images/gallery/GVO png .png"
                  alt="GVO"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <div className="relative z-10">
                <p className="font-heading text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-4 sm:mb-6 md:mb-8 max-w-full leading-tight tracking-wide">
                  From Tema to the world—<span className="text-gold-500 inline-block transform hover:scale-105 transition-transform duration-300">Kwame Dabie</span> brings bold, melodic fire.
                </p>
              </div>
            </div>
            <Button 
              onClick={scrollToStreaming}
              className="bg-gold-500 hover:bg-gold-600 text-black font-medium px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] hover:scale-105 w-fit touch-manipulation"
            >
              Listen Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 