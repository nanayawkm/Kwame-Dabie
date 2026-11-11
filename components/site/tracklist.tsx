"use client"

import { useRef, useState } from "react"
import { TRACKS } from "@/lib/content"
import { buzz, reducedMotion } from "@/lib/client"
import { usePlayer } from "./player"
import { useCards } from "./story-cards"
import { PauseIcon, PlayIcon } from "./icon"

export default function Tracklist() {
  const [openN, setOpenN] = useState<string | null>(null)
  const [glitchN, setGlitchN] = useState<string | null>(null)
  const rows = useRef<Record<string, HTMLLIElement | null>>({})
  const player = usePlayer()
  const cards = useCards()

  const toggle = (n: string) => {
    if (openN === n) return setOpenN(null)
    setOpenN(n)
    buzz(8)
    if (n === "10" && !reducedMotion()) { // Asylum: the madness catches up
      setGlitchN(n)
      buzz([12, 30, 12, 30, 12])
      setTimeout(() => setGlitchN(null), 950)
    }
    requestAnimationFrame(() => {
      const li = rows.current[n]
      const r = li?.getBoundingClientRect()
      if (li && r && (r.top < 70 || r.top > window.innerHeight * 0.7)) li.scrollIntoView({ block: "start", behavior: reducedMotion() ? "auto" : "smooth" })
    })
  }

  return (
    <section className="tracks-sec dark" id="tracklist" data-tone="dark" aria-labelledby="tl-h">
      <div className="wrap">
        <p className="lbl red" style={{ margin: 0 }}>The tracks</p>
        <h2 className="sec-h" id="tl-h">Tracklist</h2>
        <div className="tl-intro">
          <p>Tap a track for its story, press play on Roadman 2 for a preview, and make a card for your Instagram, Snapchat or WhatsApp status.</p>
          <button className="card-btn" type="button" onClick={() => cards.open({ kind: "tape" })}>Make a tape card</button>
        </div>
        <ol className="tracks">
          {TRACKS.map((t) => {
            const isOpen = openN === t.n
            const isPlaying = player.current?.n === t.n && player.playing
            const cls = [t.preview ? "has-pv" : "", isPlaying ? "playing" : "", glitchN === t.n ? "glitch" : ""].filter(Boolean).join(" ")
            return (
              <li key={t.n} className={cls || undefined} ref={(el) => { rows.current[t.n] = el }}>
                <button className="trk" aria-expanded={isOpen} aria-controls={`p${t.n}`} onClick={() => toggle(t.n)}>
                  <span className="trk-n">{t.n}</span>
                  <span>
                    <span className="trk-t">{t.title}</span>
                    {(t.ft || t.tags || t.preview) && (
                      <span className="trk-meta">
                        {t.ft && <span className="ft">Ft {t.ft}</span>}
                        {t.tags?.map((g) => <span key={g.label} className={`tag${g.hot ? " hot" : ""}`}>{g.label}</span>)}
                        {t.preview && <span className="tag pv-tag">Preview</span>}
                      </span>
                    )}
                  </span>
                  <span className="plus" aria-hidden="true" />
                </button>
                {t.preview && (
                  <>
                    <button
                      className="pv"
                      type="button"
                      aria-label={`${isPlaying ? "Pause" : "Play"} ${t.title} preview`}
                      onClick={(e) => { e.stopPropagation(); player.toggle(t) }}
                    >
                      <PlayIcon />
                      <PauseIcon />
                    </button>
                    <span
                      className="pv-prog"
                      aria-hidden="true"
                      style={{ width: player.current?.n === t.n ? `${player.progress * 100}%` : 0 }}
                    />
                  </>
                )}
                <div className="panel" id={`p${t.n}`} hidden={!isOpen}>
                  <span className="lbl prod">Prod. by {t.prod}</span>
                  <p>{t.story}</p>
                  <span className="lbl mood"><b>Mood</b>{t.mood}</span>
                  <button className="card-btn" type="button" onClick={() => cards.open({ kind: "track", track: t })}>Make a story card</button>
                </div>
              </li>
            )
          })}
        </ol>
        <div className="credits lbl">
          <span>All songs mixed and mastered by JoeyOnTheTrack &amp; Spotless</span>
          <span>© 2026 GVO</span>
        </div>
      </div>
    </section>
  )
}
