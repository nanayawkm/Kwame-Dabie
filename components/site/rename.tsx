"use client"

import { useEffect, useRef } from "react"
import { buzz, reducedMotion } from "@/lib/client"

/**
 * The rename, driven by the visitor's own scroll: the section holds on screen, their thumb draws the strikes
 * through KWAME DABIE, and past halfway the new logo slams in. Scrolling back rewinds it.
 * Without JS or with reduced motion it renders finished.
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
      const len = runway.offsetHeight || 1
      const p = Math.min(1, Math.max(0, -rn.getBoundingClientRect().top / len))
      rn.style.setProperty("--p", p.toFixed(3))
      if (!hit && p >= 0.48) { hit = true; rn.classList.add("hit"); buzz(22) }
      else if (hit && p < 0.36) { hit = false; rn.classList.remove("hit") } // rewinds, so it can be replayed
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
            <span className="rn-l2">New name. Same fight.</span>
          </p>
          <h2 className="rn" id="rn-h">
            <span className="rn-old"><span>Kwame</span><span className="strike" aria-hidden="true" /></span>
            <span className="rn-old" style={{ marginTop: ".02em" }}><span>Dabie</span><span className="strike strike-2" aria-hidden="true" /></span>
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
        <span className="rn-fuse" aria-hidden="true" />
      </div>
      <div className="rn-run" ref={run} aria-hidden="true" />
    </section>
  )
}
