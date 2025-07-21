"use client"

import { useRef, useEffect, useState } from "react"

export default function HeroCarousel() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      const handleCanPlay = () => {
        setIsVideoReady(true)
        videoElement.play().catch(err => {
          console.error("Video autoplay failed:", err)
          // Don't set error state for autoplay failures, just keep poster
        })
      }

      const handleError = () => {
        console.error("Video loading failed")
        setHasError(true)
      }

      videoElement.addEventListener('canplay', handleCanPlay)
      videoElement.addEventListener('error', handleError)

      return () => {
        videoElement.removeEventListener('canplay', handleCanPlay)
        videoElement.removeEventListener('error', handleError)
      }
    }
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Always show poster image initially, then fade to video when ready */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-black via-green-900/20 to-black transition-opacity duration-1000 ${
          isVideoReady && !hasError ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{
          backgroundImage: 'url("/images/albums/about kwame.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Video element - hidden until ready */}
      <video
        ref={videoRef}
        src="/images/gallery/FALSE PROPHETS - trailer.mp4"
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoReady && !hasError ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/albums/about kwame.jpg"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  )
}
