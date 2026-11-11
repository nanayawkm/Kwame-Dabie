"use client"

import { useEffect } from "react"

/** On phones (no hover), archive covers regain colour as they pass the middle of the screen. */
export default function TouchLive() {
  useEffect(() => {
    if (!window.matchMedia("(hover: none)").matches) return
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.target.classList.toggle("live", e.isIntersecting)),
      { rootMargin: "-38% 0px -38% 0px" },
    )
    document.querySelectorAll(".arc").forEach((a) => io.observe(a))
    return () => io.disconnect()
  }, [])
  return null
}
