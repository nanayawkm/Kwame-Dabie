"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { LINKS } from "@/lib/content"
import { buzz, event, pad2, reducedMotion, useCountdown } from "@/lib/client"

export default function Hero() {
  const img = useRef<HTMLImageElement>(null)
  const taps = useRef<number[]>([])
  const cd = useCountdown()

  // On a first visit the photo starts overexposed under the loader's flash, then develops.
  useEffect(() => {
    const el = img.current
    if (!el || window.__dbLoaded || reducedMotion()) return
    el.classList.add("pre")
    const done = () => el.classList.remove("pre")
    window.addEventListener("db:loaded", done, { once: true })
    return () => window.removeEventListener("db:loaded", done)
  }, [])

  // Tap the logo three times.
  const onLogo = () => {
    const now = Date.now()
    taps.current = taps.current.filter((t) => now - t < 700).concat(now)
    if (taps.current.length < 3) return
    taps.current = []
    const c = document.getElementById("chant") // lives in the layout, outside <main>, so the shake can't move it
    if (c) { c.classList.remove("go"); void c.offsetWidth; c.classList.add("go") }
    buzz([40, 60, 40, 60, 140])
    event("easter_egg", { what: "bomaye" })
    if (!reducedMotion()) {
      const m = document.getElementById("site")
      m?.classList.add("shake")
      setTimeout(() => m?.classList.remove("shake"), 460)
    }
  }

  return (
    <section className="hero" id="top" data-tone="dark">
      <div className="hero-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={img}
          className="hero-img develop"
          src="/media/hero.jpg"
          alt="Dabie Bomaye crouched in black between weathered stone walls, chain and silver rings, staring into the lens with masked crew standing behind him"
          width={1500}
          height={1500}
          fetchPriority="high"
        />
      </div>
      <div className="hero-fade" />
      <div className="hero-content wrap">
        <div className="hero-bottom">
          <button className="logo-btn" onClick={onLogo} aria-label="Dabie Bomaye">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/logo.webp" alt="Dabie Bomaye logo" width={1100} height={999} />
          </button>
          <p className="lbl hero-meta" style={{ margin: 0 }}>The new tape &nbsp;/&nbsp; 10 tracks &nbsp;/&nbsp; GVO</p>
          <div className="count">
            <span className="lbl">{cd.out ? "Released 12.11.2026" : <>Out 12.11.2026 &nbsp;·&nbsp; 00:00 GMT</>}</span>
            <div className="count-digits" aria-live="off">
              {!cd.ready ? (
                <span>12.11.2026</span>
              ) : cd.out ? (
                <span className="out">Out now</span>
              ) : (
                <>
                  <span><b>{pad2(cd.d)}</b><i>D</i></span>
                  <span><b>{pad2(cd.h)}</b><i>H</i></span>
                  <span><b>{pad2(cd.m)}</b><i>M</i></span>
                  <span><b>{pad2(cd.s)}</b><i>S</i></span>
                </>
              )}
            </div>
          </div>
          <a className="btn" href={LINKS.tape} target="_blank" rel="noopener" onClick={() => event("stream_click", { from: "hero" })}>
            {cd.out ? "Stream the tape" : "Pre-save the tape"}
          </a>
          <div className="hero-sub lbl">
            <a href={LINKS.roadman2} target="_blank" rel="noopener" onClick={() => event("stream_click", { from: "hero_roadman2" })}>Roadman 2 &nbsp;/&nbsp; out now</a>
            <Link href="/#tracklist">See the tracklist</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
