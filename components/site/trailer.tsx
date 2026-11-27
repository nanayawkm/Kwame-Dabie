"use client"

import { useCallback, useEffect, useRef } from "react"
import { LINKS } from "@/lib/content"
import { event, reducedMotion } from "@/lib/client"
import VideoPlayer from "./video-player"
import Opener from "./opener"

/**
 * The trailer, in the shared vertical player. On wide screens a 64x36 sample of the playing frame is blurred
 * across the section as ambient light.
 */
export default function Trailer() {
  const root = useRef<HTMLElement>(null)
  const raf = useRef(0)

  const onPlayState = useCallback((vid: HTMLVideoElement, playing: boolean) => {
    const vis = root.current
    const amb = vis?.querySelector<HTMLCanvasElement>(".vis-amb")
    const actx = amb?.getContext("2d")
    if (!vis || !actx) return
    if (!playing) { vis.classList.remove("amb-on"); return }
    if (!window.matchMedia("(min-width: 900px)").matches || reducedMotion()) return
    vis.classList.add("amb-on")
    if (raf.current) return
    let last = 0
    const loop = (t: number) => {
      if (vid.paused) { raf.current = 0; return }
      if (t - last > 80 && vid.readyState >= 2 && vid.videoWidth) {
        last = t
        const vw = vid.videoWidth, vh = vid.videoHeight, sh = (vw * 9) / 16
        try { actx.drawImage(vid, 0, (vh - sh) / 2, vw, sh, 0, 0, 64, 36) } catch {}
      }
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)
  }, [])

  useEffect(() => () => cancelAnimationFrame(raf.current), [])

  return (
    <section className="vis dark" id="trailer" data-tone="dark" aria-labelledby="vz-h" ref={root}>
      <canvas className="vis-amb" width={64} height={36} aria-hidden="true" />
      <div className="wrap vis-open">
        <Opener id="vz-h" hClass="sec-h" credit="Watch">Trailer</Opener>
      </div>
      <div className="wrap vis-grid">
        <div className="vis-copy">
          <p className="vis-note">The sea, the flag and the crew. Fifty-three seconds from the world of the tape.</p>
        </div>
        <VideoPlayer src="/media/trailer.mp4" poster="/media/trailer-poster.jpg" label="the Dabie Bomaye tape trailer" tag="Trailer" seconds={53} name="trailer" onPlayState={onPlayState} />
        <div className="vis-side">
          <p className="lbl vis-specs" style={{ margin: 0 }}><span>Runtime 0:53</span><span>Vertical</span><span>Sound on</span></p>
          <a className="btn" href={LINKS.tape} target="_blank" rel="noopener" onClick={() => event("stream_click", { from: "trailer" })}>Stream the tape</a>
        </div>
      </div>
    </section>
  )
}
