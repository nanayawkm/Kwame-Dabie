"use client"

import { useEffect, useRef } from "react"
import { reducedMotion } from "@/lib/client"

/**
 * The evolution, as a short loop (pure CSS, see "rename" in globals.css). DABIE is in both names:
 * KWAME DABIE builds in, KWAME burns away behind an ember edge, DABIE moves up, BOMAYE rises, then a red
 * blade cuts across and the plain type becomes the logo, which holds before the loop restarts.
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
        <p className="lbl rn-lbl">Evolved. Same fight.</p>
        <h2 className="rn" id="rn-h">
          <span className="sr">Kwame Dabie evolved into Dabie Bomaye</span>
          <span className="rn-type" aria-hidden="true">
            <span className="rn-w rn-kwame">Kwame</span>
            <span className="rn-w rn-ember">Kwame</span>
            <span className="rn-w rn-dabie">Dabie</span>
            <span className="rn-w rn-bomaye">Bomaye</span>
          </span>
          <span className="rn-stamp">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/logo.webp" alt="" width={1100} height={999} loading="lazy" decoding="async" />
          </span>
          <span className="rn-blade" aria-hidden="true" />
        </h2>
        <div className="rn-caption lbl">
          <span>Evolved from Kwame Dabie</span>
          <span>Tema, Ghana</span>
        </div>
      </div>
    </section>
  )
}
