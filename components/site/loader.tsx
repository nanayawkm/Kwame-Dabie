"use client"

import { useEffect, useRef, useState } from "react"
import { pad2, reducedMotion } from "@/lib/client"

declare global {
  interface Window { __dbLoaded?: boolean }
}

/** First visit per session: counts the ten tracks, flashes white, then lets the hero develop. */
export default function Loader() {
  const ref = useRef<HTMLDivElement>(null)
  const [n, setN] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const finish = () => {
      window.__dbLoaded = true
      window.dispatchEvent(new Event("db:loaded"))
    }
    const el = ref.current
    if (!el || document.documentElement.classList.contains("seen") || reducedMotion()) {
      finish()
      setGone(true)
      return
    }
    const timers: ReturnType<typeof setTimeout>[] = []
    requestAnimationFrame(() => el.classList.add("run"))
    let i = 0
    const tick = setInterval(() => {
      i++
      setN(i)
      if (i < 10) return
      clearInterval(tick)
      try { sessionStorage.setItem("seen", "1") } catch {}
      timers.push(setTimeout(() => {
        el.classList.add("flash")
        timers.push(setTimeout(() => { el.classList.add("done"); finish() }, 180))
        timers.push(setTimeout(() => setGone(true), 1000))
      }, 120))
    }, 92)
    return () => { clearInterval(tick); timers.forEach(clearTimeout) }
  }, [])

  if (gone) return null
  return (
    <div id="loader" ref={ref} aria-hidden="true">
      <div className="ld-n"><span>{pad2(n)}</span><small>/10</small></div>
      <div className="ld-bar"><i /></div>
      <p className="lbl" style={{ margin: 0 }}>Loading the tape</p>
    </div>
  )
}
