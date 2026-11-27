"use client"

import { useEffect, useId, useRef } from "react"
import { reducedMotion } from "@/lib/client"
import { GVO_H, GVO_PATH, GVO_W } from "@/lib/gvo-mark"

/*
 * The GVO flag from the shoot, cloth only: matte black cloth, the crew's GVO mark in white (traced from their logo).
 *
 * It waves like real cloth: a wave travels from the hoist (the left edge, held still) out to the fly end,
 * growing as it goes. The outline is computed from that travelling wave at 24 moments of one cycle, so the
 * loop is seamless. The fold shading is a repeating light/dark band that moves exactly one wavelength per
 * cycle (in step with the wave) and fades out towards the hoist. GVO rides the cloth's height and tilt.
 */
const X0 = 9, X1 = 116, TOP = 9, BOTTOM = 62 // the cloth at rest
const WAVELENGTH = 74 // about one and a half waves across the flag
const FRAMES = 24
const STEPS = 22 // points along each edge

const reach = (x: number) => Math.pow((x - X0) / (X1 - X0), 1.25) // 0 at the hoist, 1 at the fly end
const wave = (x: number, phase: number, amp: number) => amp * reach(x) * Math.sin((2 * Math.PI * (x - X0)) / WAVELENGTH - phase)
const r2 = (n: number) => Math.round(n * 100) / 100

function outline(phase: number, amp: number) {
  const top: string[] = [], bottom: string[] = []
  for (let i = 0; i <= STEPS; i++) {
    const x = X0 + ((X1 - X0) * i) / STEPS
    // the bottom edge lags the top a little, as cloth does
    top.push(`${r2(x)} ${r2(TOP + wave(x, phase, amp))}`)
    bottom.push(`${r2(x)} ${r2(BOTTOM + wave(x, phase + 0.35, amp))}`)
  }
  return `M${top.join(" L")} L${bottom.reverse().join(" L")} Z`
}

function motion(amp: number) {
  const phases = Array.from({ length: FRAMES + 1 }, (_, i) => (2 * Math.PI * i) / FRAMES)
  const cx = 62, dx = 0.5
  return {
    rest: outline(0, amp),
    path: phases.map((p) => outline(p, amp)).join(";"),
    // GVO follows the cloth at its centre: up and down with the wave, tilting with its slope
    lift: phases.map((p) => `0 ${r2(wave(cx, p, amp) * 0.9)}`).join(";"),
    tilt: phases.map((p) => r2(((Math.atan((wave(cx + dx, p, amp) - wave(cx - dx, p, amp)) / (2 * dx)) * 180) / Math.PI) * 0.45)).join(";"),
  }
}

const MARK_W = 62 // the mark's width on the cloth (the cloth is 107 wide)

const SWAY = motion(4.6) // footer: waves on its own
const TAP = motion(3) // menu: a smaller wave when scrolled or tapped

/**
 * mode "sway": waves on its own, all the time it is on screen (footer); pauses off screen.
 * mode "tap": waves while the page scrolls, and when its button is hovered or tapped (header).
 * Colours come from CSS: --flag-cloth, --flag-ink, --fold (fold shading strength).
 */
export default function GvoFlag({ className, mode = "sway" }: { className?: string; mode?: "sway" | "tap" }) {
  const ref = useRef<SVGSVGElement>(null)
  const uid = useId().replace(/:/g, "")
  const sway = mode === "sway"
  const m = sway ? SWAY : TAP
  const anim = { dur: sway ? "1.6s" : "0.9s", begin: sway ? "0s" : "indefinite", repeatCount: sway ? "indefinite" : "1" } as const

  useEffect(() => {
    const svg = ref.current
    if (!svg) return
    if (sway) {
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
    // keeps waving while the page scrolls: each wave cycle ends where the next begins, so they chain seamlessly
    window.addEventListener("scroll", ripple, { passive: true })
    return () => {
      host.removeEventListener("pointerenter", ripple); host.removeEventListener("click", ripple)
      window.removeEventListener("scroll", ripple)
    }
  }, [sway])

  return (
    <svg ref={ref} className={`gvo ${className ?? ""}`} viewBox={sway ? "5 2 116 69" : "6 3 114 66"} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={`c${uid}`}>
          <path d={m.rest}>
            <animate data-ripple attributeName="d" values={m.path} calcMode="linear" {...anim} />
          </path>
        </clipPath>
        {/* the folds: light and dark bands one wavelength apart, travelling with the wave */}
        <linearGradient id={`f${uid}`} gradientUnits="userSpaceOnUse" x1={X0} y1="0" x2={X0 + WAVELENGTH} y2="0" spreadMethod="repeat">
          <stop offset="0" stopColor="#000" style={{ stopOpacity: "var(--fold)" }} />
          <stop offset=".3" stopColor="#000" style={{ stopOpacity: "calc(var(--fold) * .25)" }} />
          <stop offset=".55" stopColor="#fff" style={{ stopOpacity: "calc(var(--fold) * .35)" }} />
          <stop offset=".8" stopColor="#000" style={{ stopOpacity: "calc(var(--fold) * .3)" }} />
          <stop offset="1" stopColor="#000" style={{ stopOpacity: "var(--fold)" }} />
          <animateTransform data-ripple attributeName="gradientTransform" type="translate" values={`0 0;${WAVELENGTH} 0`} calcMode="linear" {...anim} />
        </linearGradient>
        {/* folds fade out towards the hoist, where the cloth barely moves */}
        <linearGradient id={`h${uid}`} gradientUnits="userSpaceOnUse" x1={X0} y1="0" x2={X0 + 60} y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id={`m${uid}`} maskUnits="userSpaceOnUse" x="0" y="0" width="130" height="80">
          <rect width="130" height="80" fill={`url(#h${uid})`} />
        </mask>
      </defs>
      <g clipPath={`url(#c${uid})`}>
        <rect className="gvo-cloth" width="130" height="80" />
        <g>
          <animateTransform data-ripple attributeName="transform" type="translate" values={m.lift} calcMode="linear" {...anim} />
          <g transform="translate(62 41)">
            <g>
              <animateTransform data-ripple attributeName="transform" type="skewY" values={m.tilt} calcMode="linear" {...anim} />
              <path className="gvo-t" fillRule="evenodd" d={GVO_PATH} transform={`translate(${-MARK_W / 2} ${-3.6 - (MARK_W * GVO_H) / GVO_W / 2}) scale(${MARK_W / GVO_W})`} />
            </g>
          </g>
        </g>
        <rect width="130" height="80" fill={`url(#f${uid})`} mask={`url(#m${uid})`} />
      </g>
    </svg>
  )
}
