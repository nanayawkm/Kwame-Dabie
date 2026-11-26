"use client"

import { useEffect, useRef } from "react"
import { reducedMotion } from "@/lib/client"

/**
 * Forged, as a short loop (pure CSS, see "forged" in globals.css): the plain name DABIE BOMAYE heats up and
 * burns away behind an ember edge, and the gothic logo is revealed underneath as the fire passes, as if it
 * was always there. The logo settles as the fire finishes, holds, then again.
 * It starts from the top the first time it comes into view and pauses off screen.
 * Without JS or with reduced motion it shows the logo.
 */
export default function Rename() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const rn = ref.current
    if (!rn || reducedMotion()) return
    rn.classList.add("armed")
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) rn.classList.add("play")
      rn.classList.toggle("off", !e.isIntersecting)
    }, { threshold: 0.4 })
    io.observe(rn)
    return () => io.disconnect()
  }, [])

  return (
    <section className="rename" id="name" data-tone="light" aria-labelledby="rn-h" ref={ref}>
      <div className="wrap">
        <h2 className="rn" id="rn-h">
          <span className="sr">Dabie Bomaye</span>
          <span className="rn-stamp">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/logo-keyline.webp" alt="" width={1100} height={1007} loading="lazy" decoding="async" />
          </span>
          <span className="rn-type" aria-hidden="true">
            <span className="rn-w rn-l1">Dabie</span>
            <span className="rn-w rn-l2">Bomaye</span>
          </span>
          <span className="rn-type rn-ember" aria-hidden="true">
            <span className="rn-w rn-l1">Dabie</span>
            <span className="rn-w rn-l2">Bomaye</span>
          </span>
        </h2>
      </div>
    </section>
  )
}
