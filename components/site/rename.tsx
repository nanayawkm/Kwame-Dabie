"use client"

import { useEffect, useRef } from "react"
import { buzz, reducedMotion } from "@/lib/client"

const seg = (p: number, a: number, b: number) => Math.min(1, Math.max(0, (p - a) / (b - a)))

/**
 * The evolution, driven by the visitor's scroll. DABIE is in both names: the section holds on screen while
 * KWAME falls away, DABIE moves up, BOMAYE rises under it, and past halfway the plain type evolves into the logo.
 * Scrolling back rewinds it. Without JS or with reduced motion it renders the finished form.
 */
export default function Rename() {
  const ref = useRef<HTMLElement>(null)
  const run = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rn = ref.current
    const runway = run.current
    if (!rn || !runway || reducedMotion()) return
    rn.classList.add("live")
    let raf = 0
    let hit = false
    const update = () => {
      raf = 0
      const p = Math.min(1, Math.max(0, -rn.getBoundingClientRect().top / (runway.offsetHeight || 1)))
      rn.style.setProperty("--p", p.toFixed(3))
      rn.style.setProperty("--a", seg(p, 0.06, 0.26).toFixed(3)) // KWAME leaves
      rn.style.setProperty("--b", seg(p, 0.14, 0.32).toFixed(3)) // DABIE moves up
      rn.style.setProperty("--c", seg(p, 0.24, 0.42).toFixed(3)) // BOMAYE rises
      if (!hit && p >= 0.48) { hit = true; rn.classList.add("hit"); buzz([18, 40, 30]) }
      else if (hit && p < 0.38) { hit = false; rn.classList.remove("hit") }
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="rename" id="name" data-tone="light" aria-labelledby="rn-h" ref={ref}>
      <div className="rn-pin">
        <div className="wrap">
          <p className="lbl rn-lbl">
            <span className="rn-l1" aria-hidden="true">You knew him as</span>
            <span className="rn-l2">Evolved. Same fight.</span>
          </p>
          <h2 className="rn" id="rn-h">
            <span className="sr">Kwame Dabie evolved into Dabie Bomaye</span>
            <span className="rn-type" aria-hidden="true">
              <span className="rn-w rn-kwame">Kwame</span>
              <span className="rn-w rn-dabie">Dabie</span>
              <span className="rn-w rn-bomaye">Bomaye</span>
            </span>
            <span className="rn-burst" aria-hidden="true" />
            <span className="rn-stamp">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/logo.webp" alt="" width={1100} height={999} loading="lazy" decoding="async" />
            </span>
          </h2>
          <div className="rn-caption lbl">
            <span>Evolved from Kwame Dabie</span>
            <span>Tema, Ghana</span>
          </div>
        </div>
        <span className="rn-fuse" aria-hidden="true" />
      </div>
      <div className="rn-run" ref={run} aria-hidden="true" />
    </section>
  )
}
