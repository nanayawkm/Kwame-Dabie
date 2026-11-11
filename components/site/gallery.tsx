"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { GALLERY } from "@/lib/content"
import { buzz, reducedMotion } from "@/lib/client"

const N = GALLERY.length
const mod = (n: number) => ((n % N) + N) % N
/** shortest signed distance from position p to slide i on the loop, in slides */
const dist = (i: number, p: number) => { const d = mod(i - p); return d > N / 2 ? d - N : d }

/**
 * An endless, finger-driven gallery. The frame in focus sits in the middle at full strength; its neighbours
 * show either side, dimmed. Driven by pointer events and transforms (not native scroll-snap, which iPhone
 * Safari fought), so it loops forever both ways and always lands centred.
 */
export default function Gallery() {
  const stage = useRef<HTMLDivElement>(null)
  const slides = useRef<(HTMLLIElement | null)[]>([])
  const pos = useRef(0)            // continuous position, in slides
  const anim = useRef(0)
  const [cur, setCur] = useState(0)
  const curRef = useRef(0)

  // lay every slide out around the centre for the current position
  const paint = useCallback(() => {
    const el = stage.current
    if (!el) return
    const w = slides.current[0]?.offsetWidth || 1
    const step = w + Math.max(12, w * 0.06)
    slides.current.forEach((li, i) => {
      if (!li) return
      const d = dist(i, pos.current)
      const a = Math.min(1, Math.abs(d))
      li.style.transform = `translate3d(${d * step}px,0,0) scale(${1 - a * 0.1})`
      li.style.opacity = String(1 - a * 0.55)
      li.style.visibility = Math.abs(d) > 2.6 ? "hidden" : "visible"
      li.style.zIndex = String(10 - Math.round(Math.abs(d)))
    })
    const c = mod(Math.round(pos.current))
    if (c !== curRef.current) { curRef.current = c; setCur(c) }
  }, [])

  const glide = useCallback((to: number, ms = 420) => {
    cancelAnimationFrame(anim.current)
    const from = pos.current
    if (reducedMotion() || from === to) { pos.current = to; paint(); return }
    const t0 = performance.now()
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / ms)
      pos.current = from + (to - from) * (1 - Math.pow(1 - k, 3)) // ease out
      paint()
      if (k < 1) anim.current = requestAnimationFrame(tick)
      else buzz(6)
    }
    anim.current = requestAnimationFrame(tick)
  }, [paint])

  const go = useCallback((delta: number) => glide(Math.round(pos.current) + delta), [glide])

  useEffect(() => {
    const el = stage.current
    if (!el) return
    paint()
    let id = -1, x0 = 0, y0 = 0, p0 = 0, dragging = false, moved = false
    let samples: { x: number; t: number }[] = []
    const step = () => { const w = slides.current[0]?.offsetWidth || 1; return w + Math.max(12, w * 0.06) }

    const down = (e: PointerEvent) => {
      if (e.button !== 0 || id !== -1) return
      id = e.pointerId; x0 = e.clientX; y0 = e.clientY; p0 = pos.current; dragging = false; moved = false
      samples = [{ x: e.clientX, t: e.timeStamp }]
      cancelAnimationFrame(anim.current)
    }
    const move = (e: PointerEvent) => {
      if (e.pointerId !== id) return
      const dx = e.clientX - x0, dy = e.clientY - y0
      if (!dragging) {
        if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return
        if (Math.abs(dy) > Math.abs(dx)) { id = -1; glide(Math.round(pos.current)); return } // a page scroll, not ours
        dragging = true; moved = true
        el.setPointerCapture(e.pointerId)
        el.classList.add("dragging")
      }
      pos.current = p0 - dx / step()
      samples.push({ x: e.clientX, t: e.timeStamp }); if (samples.length > 6) samples.shift()
      paint()
    }
    const up = (e: PointerEvent) => {
      if (e.pointerId !== id) return
      id = -1
      el.classList.remove("dragging")
      if (!dragging) { if (pos.current !== Math.round(pos.current)) glide(Math.round(pos.current)); return }
      const a = samples[0], b = samples[samples.length - 1]
      const v = b.t > a.t ? (b.x - a.x) / (b.t - a.t) : 0 // px per ms
      const fling = Math.max(-2, Math.min(2, Math.round((-v * 180) / step())))
      let to = Math.round(pos.current) + fling
      if (fling === 0 && Math.abs(pos.current - p0) > 0.18) to = Math.round(p0) + Math.sign(pos.current - p0) * Math.max(1, Math.round(Math.abs(pos.current - p0)))
      glide(to)
    }
    // a tap (no drag) on a side frame brings it to the middle
    const click = (e: MouseEvent) => {
      if (moved) { e.preventDefault(); moved = false; return }
      const li = (e.target as Element).closest<HTMLLIElement>(".car-slide")
      if (!li) return
      const i = slides.current.indexOf(li)
      const d = dist(i, pos.current)
      if (Math.abs(d) >= 0.5) glide(Math.round(pos.current) + Math.round(d))
    }
    const resize = () => paint()
    el.addEventListener("pointerdown", down)
    el.addEventListener("pointermove", move)
    el.addEventListener("pointerup", up)
    el.addEventListener("pointercancel", up)
    el.addEventListener("click", click)
    window.addEventListener("resize", resize)
    return () => {
      el.removeEventListener("pointerdown", down)
      el.removeEventListener("pointermove", move)
      el.removeEventListener("pointerup", up)
      el.removeEventListener("pointercancel", up)
      el.removeEventListener("click", click)
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(anim.current)
    }
  }, [paint, glide])

  return (
    <section className="crew dark" id="gallery" data-tone="dark" aria-labelledby="cr-h">
      <div className="car" aria-roledescription="carousel" aria-labelledby="cr-h">
        <div className="wrap car-top">
          <div>
            <p className="lbl red" style={{ margin: 0 }}>Gallery &nbsp;/&nbsp; {N} frames</p>
            <h2 className="sec-h" id="cr-h">Dabie</h2>
          </div>
          <span className="car-count" aria-hidden="true"><b>{String(cur + 1).padStart(2, "0")}</b> / {String(N).padStart(2, "0")}</span>
        </div>
        <div
          className="car-stage"
          ref={stage}
          tabIndex={0}
          aria-label="Photos of Dabie Bomaye. Swipe, or use the arrow keys."
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") { e.preventDefault(); go(1) }
            if (e.key === "ArrowLeft") { e.preventDefault(); go(-1) }
          }}
        >
          <ul className="car-list">
            {GALLERY.map((g, i) => (
              <li
                key={g.src}
                ref={(el) => { slides.current[i] = el }}
                className={`car-slide${i === cur ? " on" : ""}`}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${N}`}
                aria-hidden={i !== cur}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" decoding="async" draggable={false} style={g.pos ? { objectPosition: g.pos } : undefined} />
                <p className="lbl car-cap"><span>Fig. {String(i + 1).padStart(2, "0")}</span><span>{g.caption}</span></p>
              </li>
            ))}
          </ul>
        </div>
        <div className="wrap car-foot">
          <div className="car-bar" aria-hidden="true"><i style={{ width: `${((cur + 1) / N) * 100}%` }} /></div>
          <button className="car-btn" type="button" aria-label="Previous photo" onClick={() => go(-1)}>
            <svg viewBox="0 0 22 12" aria-hidden="true"><path d="M22 5H3.5L8 .9 7 0 0 6l7 6 1-.9L3.5 7H22z" /></svg>
          </button>
          <button className="car-btn" type="button" aria-label="Next photo" onClick={() => go(1)}>
            <svg viewBox="0 0 22 12" aria-hidden="true"><path d="M0 5h18.5L14 .9 15 0l7 6-7 6-1-.9L18.5 7H0z" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
