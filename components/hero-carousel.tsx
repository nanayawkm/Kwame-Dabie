"use client"

import { useRef, useEffect } from "react"

export default function HeroCarousel() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure the video plays and loops
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.play().catch(err => {
        console.error("Video autoplay failed:", err)
      })
    }
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        src="/images/gallery/GAS shorts.MOV"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  )
}
