"use client"

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react"
import { LINKS, type Track } from "@/lib/content"
import { buzz, event } from "@/lib/client"
import { PauseIcon, PlayIcon } from "./icon"

type PlayerCtx = {
  current: Track | null
  playing: boolean
  progress: number
  toggle: (t: Track) => void
  pause: () => void
  /** Videos that can play with sound register a "pause me if I'm loud" callback, so only one thing is ever audible. */
  registerVideo: (pauseIfLoud: () => void) => () => void
}

const Ctx = createContext<PlayerCtx | null>(null)

export function usePlayer() {
  const c = useContext(Ctx)
  if (!c) throw new Error("usePlayer must be used inside <PlayerProvider>")
  return c
}

/** Track previews + the now-playing bar. Lives in the layout, so it keeps playing across pages. */
export function PlayerProvider({ children }: { children: ReactNode }) {
  const audio = useRef<HTMLAudioElement | null>(null)
  const videos = useRef(new Set<() => void>())
  const [current, setCurrent] = useState<Track | null>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const a = new Audio()
    a.preload = "none"
    audio.current = a
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onEnd = () => { setPlaying(false); a.currentTime = 0; setProgress(0) }
    const onTime = () => setProgress(a.duration ? a.currentTime / a.duration : 0)
    a.addEventListener("play", onPlay)
    a.addEventListener("pause", onPause)
    a.addEventListener("ended", onEnd)
    a.addEventListener("timeupdate", onTime)
    return () => {
      a.pause()
      a.removeEventListener("play", onPlay)
      a.removeEventListener("pause", onPause)
      a.removeEventListener("ended", onEnd)
      a.removeEventListener("timeupdate", onTime)
    }
  }, [])

  const toggle = useCallback((t: Track) => {
    const a = audio.current
    if (!a || !t.preview) return
    if (current?.n === t.n && !a.paused) { a.pause(); return }
    if (current?.n !== t.n) {
      a.src = t.preview
      setCurrent(t)
      setProgress(0)
      if ("mediaSession" in navigator && "MediaMetadata" in window) {
        try {
          navigator.mediaSession.metadata = new MediaMetadata({
            title: `${t.title} (preview)`,
            artist: "Dabie Bomaye" + (t.ft ? `, ${t.ft}` : ""),
            album: "DABIE BOMAYE",
            artwork: [{ src: new URL("/media/cover.jpg", location.href).href, sizes: "1000x1000", type: "image/jpeg" }],
          })
        } catch {}
      }
    }
    videos.current.forEach((fn) => fn())
    a.play()
      .then(() => { setShow(true); buzz(8); event("preview_play", { track: t.title }) })
      .catch(() => {})
  }, [current])

  const pause = useCallback(() => { audio.current?.pause() }, [])
  const registerVideo = useCallback((fn: () => void) => {
    videos.current.add(fn)
    return () => { videos.current.delete(fn) }
  }, [])

  return (
    <Ctx.Provider value={{ current, playing, progress, toggle, pause, registerVideo }}>
      {children}
      <div className={`pbar${show ? " show" : ""}`} role="region" aria-label="Now playing" inert={!show}>
        <span className="pbar-prog" style={{ width: `${progress * 100}%` }} aria-hidden="true" />
        <button
          className="pbar-btn"
          type="button"
          data-state={playing ? "pause" : "play"}
          aria-label={playing ? "Pause preview" : "Play preview"}
          onClick={() => current && toggle(current)}
        >
          <PlayIcon />
          <PauseIcon />
        </button>
        <div className="pbar-meta">
          <span className="pbar-t">{current ? `${current.n} · ${current.title}` : ""}</span>
          <span className="lbl pbar-s">Dabie Bomaye{current?.ft ? ` ft ${current.ft}` : ""} &nbsp;/&nbsp; Preview</span>
        </div>
        <a
          className="pbar-go"
          href={current?.link || LINKS.tape}
          target="_blank"
          rel="noopener"
          onClick={() => event("stream_click", { from: "player", track: current?.title ?? "" })}
        >
          Stream ↗
        </a>
        <button className="pbar-x" type="button" aria-label="Close player" onClick={() => { pause(); setShow(false) }}>×</button>
      </div>
    </Ctx.Provider>
  )
}
