"use client"

import { useEffect, useId, useRef, useState } from "react"
import { reducedMotion } from "@/lib/client"
import { GVO_H, GVO_LETTERS, GVO_PATH, GVO_W } from "@/lib/gvo-mark"

const BEAT = 0.43 // seconds, about 140 bpm. One cut per beat (2.3 a second), under the 3-a-second flash limit.
const PHOTOS = ["flag", "stare", "steps", "smoke", "hero", "rubble", "unmasked", "cap", "sword", "bench", "jacket", "bandana", "car"]
const GAP = 110 // between stacked letters, in mark units
const STACK_W = Math.max(...GVO_LETTERS.map((l) => l.x1 - l.x0))
const STACK_H = GVO_H * 3 + GAP * 2

/**
 * GVO window: the crew's GVO mark (traced from their logo) on white, his photos flashing inside the letters, a cut
 * per beat. Wide screens: the mark in a row, a different photo in each letter. Phones: G / V / O stacked, one photo
 * through all three. Photos load only when the section is close; it runs only on screen; tap to pause (moving content
 * longer than 5 seconds needs a pause). With reduced motion it holds one frame.
 */
export default function GvoWindow() {
  const ref = useRef<HTMLButtonElement>(null)
  const uid = useId().replace(/:/g, "")
  const [beat, setBeat] = useState(0)
  const [paused, setPaused] = useState(false)
  const [near, setNear] = useState(false)
  const [stack, setStack] = useState<boolean | null>(null)
  const p = useRef(false)
  p.current = paused

  useEffect(() => {
    const el = ref.current!
    const mq = window.matchMedia("(max-width: 699px)")
    const layout = () => setStack(mq.matches)
    layout()
    mq.addEventListener("change", layout)
    const pre = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); pre.disconnect() } }, { rootMargin: "0px 0px 80% 0px" })
    pre.observe(el)
    let raf = 0, acc = 0, last = 0, cur = -1
    const loop = (now: number) => {
      if (!p.current) acc += Math.min(0.05, (now - (last || now)) / 1000)
      last = now
      const b = Math.floor(acc / BEAT)
      if (b !== cur) { cur = b; setBeat(b) }
      raf = requestAnimationFrame(loop)
    }
    const io = new IntersectionObserver(([e]) => {
      if (reducedMotion()) return
      if (e.isIntersecting && !raf) { last = 0; raf = requestAnimationFrame(loop) }
      if (!e.isIntersecting && raf) { cancelAnimationFrame(raf); raf = 0 }
    }, { threshold: 0.2 })
    io.observe(el)
    return () => { mq.removeEventListener("change", layout); pre.disconnect(); io.disconnect(); cancelAnimationFrame(raf) }
  }, [])

  const cur = beat % PHOTOS.length
  const src = (name: string) => `/media/gw/${stack ? "m-" : ""}${name}.webp`
  const show = near && stack !== null

  return (
    <section className="gvo-win" id="gvo" data-tone="light" aria-labelledby="gw-h">
      <h2 className="sr" id="gw-h">GVO, Gargantuan Vibes Only</h2>
      <button ref={ref} type="button" className="gw" onClick={() => setPaused((v) => !v)} aria-label={paused ? "Play the loop" : "Pause the loop"} aria-pressed={paused}>
        {stack ? (
          <svg className="gw-svg gw-stack" viewBox={`0 0 ${STACK_W} ${STACK_H}`} aria-hidden="true">
            <defs>
              <clipPath id={`s${uid}`}>
                {GVO_LETTERS.map((l, i) => <path key={l.ch} d={l.d} fillRule="evenodd" transform={`translate(${(STACK_W - (l.x1 - l.x0)) / 2 - l.x0} ${i * (GVO_H + GAP)})`} />)}
              </clipPath>
            </defs>
            <rect width={STACK_W} height={STACK_H} className="gw-ink" clipPath={`url(#s${uid})`} />
            <g clipPath={`url(#s${uid})`}>
              {show && PHOTOS.map((name, i) => (
                <image key={name} className={i === cur ? "on" : ""} href={src(name)} width={STACK_W} height={STACK_H} preserveAspectRatio="xMidYMid slice" />
              ))}
            </g>
            {GVO_LETTERS.map((l, i) => <path key={l.ch} className="gw-line" d={l.d} fillRule="evenodd" vectorEffect="non-scaling-stroke"
              transform={`translate(${(STACK_W - (l.x1 - l.x0)) / 2 - l.x0} ${i * (GVO_H + GAP)})`} />)}
          </svg>
        ) : (
          <svg className="gw-svg gw-row" viewBox={`0 0 ${GVO_W} ${GVO_H}`} aria-hidden="true">
            <defs>
              {GVO_LETTERS.map((l) => <clipPath key={l.ch} id={`${l.ch}${uid}`}><path d={l.d} fillRule="evenodd" /></clipPath>)}
            </defs>
            <path d={GVO_PATH} fillRule="evenodd" className="gw-ink" />
            {/* a different photo in each letter: this beat's, and the ones 4 and 8 along */}
            {show && GVO_LETTERS.map((l, k) => (
              <g key={l.ch} clipPath={`url(#${l.ch}${uid})`}>
                {PHOTOS.map((name, i) => {
                  const w = l.x1 - l.x0, h = w * 1.5
                  return <image key={name} className={(cur + k * 4) % PHOTOS.length === i ? "on" : ""} href={src(name)}
                    x={l.x0} y={-(h - GVO_H) * 0.3} width={w} height={h} preserveAspectRatio="xMidYMid slice" style={{ animationDelay: `${k * 0.04}s` }} />
                })}
              </g>
            ))}
            <path className="gw-line" d={GVO_PATH} fillRule="evenodd" vectorEffect="non-scaling-stroke" />
          </svg>
        )}
        <span className="gw-sub lbl" aria-hidden="true"><span>Gargantuan</span><span>Vibes</span><span>Only</span></span>
        <span className={`gw-paused lbl${paused ? " on" : ""}`} aria-hidden="true">Paused · tap to play</span>
      </button>
    </section>
  )
}
