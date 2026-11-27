"use client"

import { useEffect, useRef } from "react"
import { reducedMotion, saveData } from "@/lib/client"

/** A silent loop from Roadman 2 live: a wide crop on desktop, the full tall frame on phones; plays only while on screen. */
export default function LoopVideo({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = ref.current!
    const tall = window.matchMedia("(max-width: 699px)").matches
    v.poster = tall ? "/media/r2-poster-tall.jpg" : "/media/r2-poster.jpg"
    v.src = tall ? "/media/r2-loop-tall.mp4" : "/media/r2-loop.mp4"
    if (reducedMotion() || saveData()) return
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { v.preload = "auto"; v.play()?.catch(() => {}) } else v.pause()
    }), { threshold: 0.25 })
    io.observe(v)
    return () => { io.disconnect(); v.pause() }
  }, [])

  return <video ref={ref} className={className} muted loop playsInline preload="none" poster="/media/r2-poster.jpg" aria-hidden="true" />
}
