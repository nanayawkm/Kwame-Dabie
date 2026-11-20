"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { reducedMotion } from "@/lib/client"

/**
 * One-time arrival moments, kept deliberately few: each fires the first time its element comes into view,
 * then never again on that page view, so scrolling back and forth stays calm.
 *  - every red dash draws itself (section openings, list credits)
 *  - "the fight." lands with a hit
 *  - the quote repeats itself (faint echoes stack behind it)
 * Off entirely with reduced motion; without JS everything simply shows.
 */
const TARGETS = ".opener-dash, .list-h, .thesis .red, .descent blockquote"

export default function ScrollFx() {
  const pathname = usePathname()

  useEffect(() => {
    if (reducedMotion()) return
    document.documentElement.classList.add("fx")
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        e.target.classList.add("in")
        io.unobserve(e.target)
      }
    }, { threshold: 0.6, rootMargin: "0px 0px -8% 0px" })
    // let the new page render first
    const t = setTimeout(() => document.querySelectorAll(TARGETS).forEach((el) => { if (!el.classList.contains("in")) io.observe(el) }), 60)
    return () => { clearTimeout(t); io.disconnect() }
  }, [pathname])

  return null
}
