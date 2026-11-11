"use client"

import { useState } from "react"
import { LINKS } from "@/lib/content"
import { event } from "@/lib/client"
import LoopVideo from "./loop-video"

/**
 * The featured file: a silent loop as the cover; tapping loads the real YouTube player in place,
 * so every play counts as a view on his channel. Nothing from YouTube loads until then.
 */
export default function GasFeature() {
  const [playing, setPlaying] = useState(false)
  const id = LINKS.gasYouTubeId
  return (
    <figure className="gas" aria-labelledby="gas-h">
      <div className={`gas-frame${playing ? " is-playing" : ""}`}>
        {playing ? (
          <iframe
            className="gas-yt"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
            title="DABIE BOMAYE - GAS [VISUALS]"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <>
            <LoopVideo className="gas-vid" />
            <span className="gas-tag lbl"><span className="red">●</span> Featured file</span>
            <button className="gas-play" type="button" aria-label="Play the Gas visuals" onClick={() => { setPlaying(true); event("gas_play") }}>
              <i><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3l16 9-16 9z" /></svg></i>
              <b>Watch the<br />full video</b>
            </button>
          </>
        )}
      </div>
      <figcaption className="gas-cap">
        <p className="gas-lyric" id="gas-h" lang="tw">“Yɛbɔ Amakye Dede, yewie a yabɔ no Nas.”</p>
        <div className="gas-meta">
          <span className="arc-t" style={{ fontSize: 28 }}>Gas [Visuals]</span>
          <span className="lbl proj-meta"><span><b>Single</b></span><span>2024</span><span>Prod. JoeyOnTheTrack</span><span>On False Prophets</span></span>
          <a className="proj-go" href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener">Watch on YouTube ↗</a>
        </div>
      </figcaption>
    </figure>
  )
}
