"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

/**
 * After every page change: land on the #section if the link named one, otherwise at the very top.
 * Back/forward keeps the browser's own scroll restoration.
 */
export default function ScrollManager() {
  const pathname = usePathname()
  const popped = useRef(false)
  const first = useRef(true)

  useEffect(() => {
    const onPop = () => { popped.current = true }
    // A link to the page you're already on (e.g. Archive while on the archive) changes nothing for the router,
    // so nothing would scroll. Take it back to the top.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a")
      if (!a || a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey) return
      const u = new URL(a.href, location.href)
      if (u.origin === location.origin && u.pathname === location.pathname && !u.hash) {
        const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches
        requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: smooth ? "smooth" : "instant" }))
      }
    }
    window.addEventListener("popstate", onPop)
    document.addEventListener("click", onClick)
    return () => { window.removeEventListener("popstate", onPop); document.removeEventListener("click", onClick) }
  }, [])

  useEffect(() => {
    if (first.current) { first.current = false; return } // the browser handles the first load (and its #hash)
    if (popped.current) { popped.current = false; return }
    const land = () => {
      const id = decodeURIComponent(location.hash.slice(1))
      const el = id ? document.getElementById(id) : null
      if (el) el.scrollIntoView({ block: "start", behavior: "instant" })
      else window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    }
    // twice: once as soon as the new page is painted, once after late layout (fonts, images) settles
    const r = requestAnimationFrame(land)
    const t = setTimeout(land, 120)
    return () => { cancelAnimationFrame(r); clearTimeout(t) }
  }, [pathname])

  return null
}
