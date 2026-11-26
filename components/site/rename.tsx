"use client"

import { useEffect, useRef } from "react"
import { reducedMotion } from "@/lib/client"

/**
 * The chant, as a short loop (pure CSS, see "the chant" in globals.css). Where the name comes from:
 * BO, MA, YE stamp in one syllable at a time, three rounds, each faster, bigger and louder than the last,
 * like a crowd building, until the logo slams in on the final beat and holds. Then again.
 * It starts from the top the first time it comes into view and pauses off screen.
 * Without JS or with reduced motion it shows the logo.
 */
const ROUNDS = [1, 2, 3]
const SYLLABLES = ["Bo", "ma", "ye"]

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
          <span className="sr">Bomaye! Dabie Bomaye</span>
          <span className="ch" aria-hidden="true">
            {ROUNDS.map((r) => (
              <span key={r} className={`ch-r ch-r${r}`}>
                {SYLLABLES.map((s) => <i key={s}>{s}</i>)}
              </span>
            ))}
          </span>
          <span className="rn-stamp">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/logo-keyline.webp" alt="" width={1100} height={1007} loading="lazy" decoding="async" />
          </span>
        </h2>
      </div>
    </section>
  )
}
