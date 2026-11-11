"use client"

import { useEffect, useRef } from "react"
import { buzz, reducedMotion } from "@/lib/client"

/** Kwame Dabie gets struck out, the new logo stamps in. Renders finished; animates only if it starts off screen. */
export default function Rename() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const rn = ref.current
    if (!rn || reducedMotion() || rn.getBoundingClientRect().top < window.innerHeight * 0.6) return
    rn.classList.add("armed")
    let t: ReturnType<typeof setTimeout>
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return
      rn.classList.add("hit")
      t = setTimeout(() => buzz(22), 720)
      io.disconnect()
    }), { threshold: 0.45 })
    io.observe(rn)
    return () => { io.disconnect(); clearTimeout(t) }
  }, [])

  return (
    <section className="rename" id="name" data-tone="light" aria-labelledby="rn-h" ref={ref}>
      <div className="wrap">
        <p className="lbl" style={{ margin: 0, color: "var(--blood-ink)" }}>New name. Same fight.</p>
        <h2 className="rn" id="rn-h">
          <span className="rn-old"><span>Kwame</span><span className="strike" aria-hidden="true" /></span>
          <span className="rn-old" style={{ marginTop: ".02em" }}><span>Dabie</span><span className="strike" aria-hidden="true" style={{ transformOrigin: "right" }} /></span>
          <span className="sr">is now</span>
          <span className="rn-stamp">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/logo.webp" alt="Dabie Bomaye" width={1100} height={999} loading="lazy" decoding="async" />
          </span>
        </h2>
        <div className="rn-caption lbl">
          <span>Formerly Kwame Dabie</span>
          <span>Tema, Ghana</span>
        </div>
      </div>
    </section>
  )
}
