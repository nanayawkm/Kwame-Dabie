"use client"

import { useEffect, useId, useRef } from "react"
import { reducedMotion } from "@/lib/client"

// The real GVO flag from the shoot: a plain rectangle of matte black cloth, bold white GVO, on a thin stick.
// The cloth ripples by morphing between these outlines (same commands, so SVG can tween them).
const CLOTH = [
  "M9 9 C38 6 66 13 116 9 C115 26 117 44 115 62 C74 66 44 58 9 62 Z",
  "M9 9 C40 12 70 5 115 11 C117 28 114 45 116 63 C76 60 42 66 9 62 Z",
  "M9 9 C36 4 64 14 117 8 C114 25 118 43 114 61 C72 67 46 57 9 62 Z",
]
const LOOP = [CLOTH[0], CLOTH[1], CLOTH[2], CLOTH[0]].join(";")
const EASE = { calcMode: "spline", keyTimes: "0;0.33;0.66;1", keySplines: "0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1" } as const

/**
 * mode "sway": a slow, endless sway (footer); pauses off screen.
 * mode "tap": still until its button is hovered or tapped, then one ripple (header).
 * Colours come from CSS: --flag-cloth, --flag-ink, --flag-pole, --fold (fold shading strength).
 */
export default function GvoFlag({ className, mode = "sway" }: { className?: string; mode?: "sway" | "tap" }) {
  const ref = useRef<SVGSVGElement>(null)
  const uid = useId().replace(/:/g, "")
  const dur = mode === "sway" ? "4.6s" : "0.9s"
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
      if (reducedMotion() || now - last < 900) return
      last = now
      svg.querySelectorAll<SVGAnimationElement>("[data-ripple]").forEach((a) => a.beginElement())
    }
    host.addEventListener("pointerenter", ripple)
    host.addEventListener("click", ripple)
    return () => { host.removeEventListener("pointerenter", ripple); host.removeEventListener("click", ripple) }
  }, [mode])

  return (
    <svg ref={ref} className={`gvo ${className ?? ""}`} viewBox="0 0 122 92" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={`c${uid}`}>
          <path d={CLOTH[0]}>
            <animate data-ripple attributeName="d" values={LOOP} dur={dur} begin={begin} repeatCount={repeat} {...EASE} />
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
          <animateTransform data-ripple attributeName="gradientTransform" type="translate" values="0 0;.1 0;-.06 0;0 0" dur={dur} begin={begin} repeatCount={repeat} {...EASE} />
        </linearGradient>
      </defs>
      <rect className="gvo-pole" x="5" y="4" width="3.2" height="84" rx="1" />
      <rect className="gvo-tip" x="4.2" y="1.5" width="4.8" height="4.2" />
      <g clipPath={`url(#c${uid})`}>
        <rect className="gvo-cloth" width="122" height="92" />
        <text className="gvo-t" x="62" y="45.5" textAnchor="middle">
          GVO
          <animateTransform data-ripple attributeName="transform" type="translate" values="0 0;.6 1.2;-.5 -.9;0 0" dur={dur} begin={begin} repeatCount={repeat} {...EASE} />
        </text>
        <rect width="122" height="92" fill={`url(#f${uid})`} />
      </g>
    </svg>
  )
}
