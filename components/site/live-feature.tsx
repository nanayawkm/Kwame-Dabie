"use client"

import { useEffect, useRef, useState } from "react"
import { LINKS } from "@/lib/content"
import { event } from "@/lib/client"
import LoopVideo from "./loop-video"
import { Arrow } from "./icon"
import { usePlayer } from "./player"

/**
 * The featured video, as the Gas feature was: the full width of the section, a silent loop as the cover; tapping
 * plays the full Roadman 2 performance in place, with sound and controls. Nothing of the full video loads until then.
 */
export default function LiveFeature() {
  const [playing, setPlaying] = useState(false)
  const vid = useRef<HTMLVideoElement>(null)
  const { registerVideo, pause: pausePreview } = usePlayer()

  // only one thing audible at a time: this silences a track preview, a track preview pauses this
  useEffect(() => {
    if (!playing) return
    const v = vid.current!
    pausePreview()
    return registerVideo(() => { if (!v.paused) v.pause() })
  }, [playing, registerVideo, pausePreview])

  return (
    <figure className="fv" aria-labelledby="fv-t">
      <div className={`fv-frame${playing ? " is-playing" : ""}`}>
        {playing ? (
          <video ref={vid} className="fv-full" src="/media/roadman2-live.mp4" poster="/media/roadman2-live-poster.jpg" controls autoPlay playsInline
            aria-label="Roadman 2, performed live by Dabie Bomaye and AraTheJay" onPlay={() => pausePreview()} />
        ) : (
          <>
            <LoopVideo className="fv-vid" />
            <span className="fv-tag lbl"><span className="red">●</span> Featured video</span>
            <button className="fv-play" type="button" aria-label="Play Roadman 2 live" onClick={() => { setPlaying(true); event("live_play") }}>
              <i><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3l16 9-16 9z" /></svg></i>
              <b>Watch the<br />full video</b>
            </button>
          </>
        )}
      </div>
      <figcaption className="fv-cap">
        <div className="fv-meta">
          <span className="arc-t" id="fv-t" style={{ fontSize: 28 }}>Roadman 2 [Live]</span>
          <span className="lbl proj-meta"><span><b>Lead single</b></span><span>2026</span><span>Ft AraTheJay</span></span>
          <a className="proj-go" href={LINKS.roadman2} target="_blank" rel="noopener" onClick={() => event("stream_click", { from: "live" })}>Stream Roadman 2 <Arrow dir="out" /></a>
        </div>
      </figcaption>
    </figure>
  )
}
