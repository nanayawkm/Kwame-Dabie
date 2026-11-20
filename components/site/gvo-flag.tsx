"use client"

import { useEffect, useId, useRef } from "react"
import { reducedMotion } from "@/lib/client"

// The GVO flag from the shoot, cloth only: a plain rectangle of matte black cloth with bold white GVO.
// The cloth ripples by morphing between these outlines (same commands, so SVG can tween them).
const CLOTH = [
  "M9 9 C38 6 66 13 116 9 C115 26 117 44 115 62 C74 66 44 58 9 62 Z",
  "M9 9 C40 12 70 5 115 11 C117 28 114 45 116 63 C76 60 42 66 9 62 Z",
  "M9 9 C36 4 64 14 117 8 C114 25 118 43 114 61 C72 67 46 57 9 62 Z",
]
const LOOP = [CLOTH[0], CLOTH[1], CLOTH[2], CLOTH[0]].join(";")
const EASE = { calcMode: "spline", keyTimes: "0;0.33;0.66;1", keySplines: "0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1" } as const

// The footer flag waves on its own: bigger outlines, so a wave visibly travels through the cloth.
const WAVE = [
  "M9 9 C38 6 66 13 116 9 C115 26 117 44 115 62 C74 66 44 58 9 62 Z",
  "M9 9 C36 16 70 1 114 13 C117 30 112 47 115 66 C78 58 40 70 9 62 Z",
  "M9 9 C42 2 62 18 117 6 C112 22 119 41 113 59 C70 70 48 54 9 62 Z",
  "M9 9 C38 14 68 4 115 11 C118 28 113 46 116 64 C76 61 44 64 9 62 Z",
]
const WAVE_LOOP = [...WAVE, WAVE[0]].join(";")
const WAVE_EASE = { calcMode: "spline", keyTimes: "0;0.25;0.5;0.75;1", keySplines: "0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1" } as const

/**
 * mode "sway": waves on its own, all the time it is on screen (footer); pauses off screen.
 * mode "tap": waves while the page scrolls, and ripples when its button is hovered or tapped (header).
 * Colours come from CSS: --flag-cloth, --flag-ink, --fold (fold shading strength).
 */
export default function GvoFlag({ className, mode = "sway" }: { className?: string; mode?: "sway" | "tap" }) {
  const ref = useRef<SVGSVGElement>(null)
  const uid = useId().replace(/:/g, "")
  const sway = mode === "sway"
  const dur = sway ? "3.2s" : "0.9s"
  const ease = sway ? WAVE_EASE : EASE
  const begin = mode === "sway" ? "0s" : "indefinite"
  const repeat = mode === "sway" ? "indefinite" : "1"

  useEffect(() => {
    const svg = ref.current
    if (!svg) return
    if (mode === "sway") {
      if (reducedMotion()) { svg.pauseAnimations(); return }
      const io = new IntersectionObserver(([e]) => (e.isIntersecting ? svg.unpauseAnimations() : svg.pauseAnimations()))
      io.observe(svg)
      return () => io.disconnect()
    }
    const host = svg.parentElement
    if (!host) return
    let last = 0
    const ripple = () => {
      const now = performance.now()
      if (reducedMotion() || now - last < 880) return
      last = now
      svg.querySelectorAll<SVGAnimationElement>("[data-ripple]").forEach((a) => a.beginElement())
    }
    host.addEventListener("pointerenter", ripple)
    host.addEventListener("click", ripple)
    // keeps waving while the page scrolls: each ripple ends where the next begins, so they chain seamlessly
    window.addEventListener("scroll", ripple, { passive: true })
    return () => {
      host.removeEventListener("pointerenter", ripple); host.removeEventListener("click", ripple)
      window.removeEventListener("scroll", ripple)
    }
  }, [mode])

  return (
    <svg ref={ref} className={`gvo ${className ?? ""}`} viewBox={sway ? "5 0 116 73" : "6 2 114 67"} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={`c${uid}`}>
          <path d={CLOTH[0]}>
            <animate data-ripple attributeName="d" values={sway ? WAVE_LOOP : LOOP} dur={dur} begin={begin} repeatCount={repeat} {...ease} />
          </path>
        </clipPath>
        {/* soft folds across matte cloth; they drift as the cloth moves */}
        <linearGradient id={`f${uid}`} x1="0" x2="1" y1="0" y2=".15">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset=".18" stopColor="#fff" style={{ stopOpacity: "calc(var(--fold) * .15)" }} />
          <stop offset=".34" stopColor="#000" style={{ stopOpacity: "var(--fold)" }} />
          <stop offset=".52" stopColor="#fff" style={{ stopOpacity: "calc(var(--fold) * .2)" }} />
          <stop offset=".7" stopColor="#000" style={{ stopOpacity: "calc(var(--fold) * .85)" }} />
          <stop offset=".86" stopColor="#fff" style={{ stopOpacity: "calc(var(--fold) * .12)" }} />
          <stop offset="1" stopColor="#000" style={{ stopOpacity: "calc(var(--fold) * .7)" }} />
          <animateTransform data-ripple attributeName="gradientTransform" type="translate" values={sway ? "0 0;.16 0;-.1 0;.07 0;0 0" : "0 0;.1 0;-.06 0;0 0"} dur={dur} begin={begin} repeatCount={repeat} {...ease} />
        </linearGradient>
      </defs>
      <g clipPath={`url(#c${uid})`}>
        <rect className="gvo-cloth" width="122" height="92" />
        <text className="gvo-t" x="62" y="45.5" textAnchor="middle">
          GVO
          <animateTransform data-ripple attributeName="transform" type="translate" values={sway ? "0 0;-.6 2.2;.8 -1.6;-.3 1.2;0 0" : "0 0;.6 1.2;-.5 -.9;0 0"} dur={dur} begin={begin} repeatCount={repeat} {...ease} />
        </text>
        <rect width="122" height="92" fill={`url(#f${uid})`} />
      </g>
    </svg>
  )
}
