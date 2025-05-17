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
    <section className="w-full h-[100vh] relative">
      <HeroCarousel />
      <div className="absolute inset-0 bg-black/50 flex items-center">
        <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-12 w-full">
          <div className="flex flex-col w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2">
            <div className="flex flex-col" style={{gap: 0}}>
              <div className="relative w-[300px] h-[120px] sm:w-[500px] sm:h-[200px] md:w-[600px] md:h-[240px] lg:w-[700px] lg:h-[280px] xl:w-[800px] xl:h-[320px] mb-3">
                <Image
                  src="/images/gallery/GVO png .png"
                  alt="GVO"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <div className="relative z-10">
                <p className="font-heading text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-6 md:mb-8 max-w-full leading-tight tracking-wide">
                  From Tema to the world—<span className="text-gold-500 inline-block transform hover:scale-105 transition-transform duration-300">Kwame Dabie</span> brings bold, melodic fire.
                </p>
              </div>
            </div>
            <Button 
              onClick={scrollToStreaming}
              className="bg-gold-500 hover:bg-gold-600 text-black font-medium px-5 py-3 sm:px-8 sm:py-5 md:px-10 md:py-6 rounded-full text-sm sm:text-lg md:text-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] hover:scale-105 w-fit"
            >
              Listen Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 