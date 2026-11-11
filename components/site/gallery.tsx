"use client"

import { useEffect, useRef, useState } from "react"
import { GALLERY } from "@/lib/content"
import { buzz, reducedMotion } from "@/lib/client"

/** Swipe gallery: the frame in focus develops out of the flash, the rest stay overexposed. */
export default function Gallery() {
  const track = useRef<HTMLUListElement>(null)
  const [cur, setCur] = useState(0)
  const [js, setJs] = useState(false)
  const [atEnd, setAtEnd] = useState(false)
  const curRef = useRef(0)

  useEffect(() => {
    setJs(true)
    const el = track.current!
    let t: ReturnType<typeof setTimeout> | undefined
    const step = () => {
      const s = el.children
      return s.length > 1 ? (s[1] as HTMLElement).offsetLeft - (s[0] as HTMLElement).offsetLeft : el.clientWidth
    }
    // Update only once the swipe has settled. Changing the page mid-swipe makes iPhone Safari re-snap the
    // gallery to the photo it was on, which undid swipes (especially going back).
    let touching = false
    const settle = () => {
      clearTimeout(t)
      if (touching) return // finger still down: wait for it to lift
      const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
      const i = end ? GALLERY.length - 1 : Math.max(0, Math.min(GALLERY.length - 1, Math.round(el.scrollLeft / step())))
      if (i !== curRef.current) buzz(6)
      curRef.current = i
      setCur(i)
      setAtEnd(end)
    }
    const onScroll = () => { clearTimeout(t); t = setTimeout(settle, 160) }
    const down = () => { touching = true }
    const up = () => { touching = false; onScroll() }
    el.addEventListener("scroll", onScroll, { passive: true })
    el.addEventListener("scrollend", settle)
    el.addEventListener("touchstart", down, { passive: true })
    el.addEventListener("touchend", up, { passive: true })
    el.addEventListener("touchcancel", up, { passive: true })
    return () => {
      el.removeEventListener("scroll", onScroll); el.removeEventListener("scrollend", settle)
      el.removeEventListener("touchstart", down); el.removeEventListener("touchend", up); el.removeEventListener("touchcancel", up)
      clearTimeout(t)
    }
  }, [])

  const go = (i: number) => {
    const el = track.current!
    const s = el.children
    const k = Math.max(0, Math.min(GALLERY.length - 1, i))
    el.scrollTo({ left: (s[k] as HTMLElement).offsetLeft - (s[0] as HTMLElement).offsetLeft, behavior: reducedMotion() ? "auto" : "smooth" })
  }

  return (
    <section className="crew dark" id="gallery" data-tone="dark" aria-labelledby="cr-h">
      <div className={`car${js ? " js" : ""}`} aria-roledescription="carousel" aria-labelledby="cr-h">
        <div className="wrap car-top">
          <div>
            <p className="lbl red" style={{ margin: 0 }}>Gallery &nbsp;/&nbsp; {GALLERY.length} frames</p>
            <h2 className="sec-h" id="cr-h">Dabie</h2>
          </div>
          <span className="car-count" aria-hidden="true"><b>{String(cur + 1).padStart(2, "0")}</b> / {String(GALLERY.length).padStart(2, "0")}</span>
        </div>
        <ul
          className="car-track"
          ref={track}
          tabIndex={0}
          aria-label="Photos of Dabie Bomaye. Swipe or use the arrow keys."
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") { e.preventDefault(); go(cur + 1) }
            if (e.key === "ArrowLeft") { e.preventDefault(); go(cur - 1) }
          }}
        >
          {GALLERY.map((g, i) => (
            <li key={g.src} className={`car-slide${i === cur ? " on" : ""}`} aria-roledescription="slide" aria-label={`${i + 1} of ${GALLERY.length}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" decoding="async" draggable={false} style={g.pos ? { objectPosition: g.pos } : undefined} />
              <p className="lbl car-cap"><span>Fig. {String(i + 1).padStart(2, "0")}</span><span>{g.caption}</span></p>
            </li>
          ))}
        </ul>
        <div className="wrap car-foot">
          <div className="car-bar" aria-hidden="true"><i style={{ width: `${((cur + 1) / GALLERY.length) * 100}%` }} /></div>
          <button className="car-btn" type="button" aria-label="Previous photo" disabled={cur === 0} onClick={() => go(cur - 1)}>
            <svg viewBox="0 0 22 12" aria-hidden="true"><path d="M22 5H3.5L8 .9 7 0 0 6l7 6 1-.9L3.5 7H22z" /></svg>
          </button>
          <button className="car-btn" type="button" aria-label="Next photo" disabled={cur === GALLERY.length - 1 || atEnd} onClick={() => go(cur + 1)}>
            <svg viewBox="0 0 22 12" aria-hidden="true"><path d="M0 5h18.5L14 .9 15 0l7 6-7 6-1-.9L18.5 7H0z" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
