"use client"

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react"
import { LINKS, TRACKS, type Track } from "@/lib/content"
import { buzz, event } from "@/lib/client"
import { Arrow, PauseIcon, PlayIcon } from "./icon"

/** The tracks the "Play the tape" sampler runs through, in tape order. */
const TAPE = TRACKS.filter((t) => t.preview)

type PlayerCtx = {
  current: Track | null
  playing: boolean
  progress: number
  /** true while "Play the tape" is running through every preview in order */
  tape: boolean
  toggle: (t: Track) => void
  /** Start (or pause/resume) the whole-tape sampler. */
  toggleTape: () => void
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

/** Track previews, the whole-tape sampler, and the now-playing bar. Lives in the layout, so it keeps playing across pages. */
export function PlayerProvider({ children }: { children: ReactNode }) {
  const audio = useRef<HTMLAudioElement | null>(null)
  const videos = useRef(new Set<() => void>())
  const [current, setCurrent] = useState<Track | null>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(false)
  const [tape, setTape] = useState(false)
  const tapeRef = useRef(false)
  const currentRef = useRef<Track | null>(null)

  const setTapeMode = (on: boolean) => { tapeRef.current = on; setTape(on) }

  /** Load a track and play it (from the start). */
  const start = useCallback((t: Track) => {
    const a = audio.current
    if (!a || !t.preview) return
    if (currentRef.current?.n !== t.n) {
      a.src = t.preview
      currentRef.current = t
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
      .then(() => { setShow(true); buzz(8); event("preview_play", { track: t.title, mode: tapeRef.current ? "tape" : "single" }) })
      .catch(() => {})
  }, [])

  /** Step through the tape: +1 next, -1 previous. Past the last track the sampler ends. */
  const step = useCallback((dir: 1 | -1) => {
    const i = TAPE.findIndex((t) => t.n === currentRef.current?.n)
    const next = TAPE[i + dir]
    if (next) { start(next); return }
    if (dir === 1) { audio.current?.pause(); setTapeMode(false); event("tape_sampler_done", {}) }
  }, [start])

  useEffect(() => {
    const a = new Audio()
    a.preload = "none"
    audio.current = a
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onEnd = () => {
      if (tapeRef.current) { step(1); return } // the sampler rolls straight into the next track
      setPlaying(false); a.currentTime = 0; setProgress(0)
    }
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
  }, [step])

  // lock-screen / headphone next and previous move through the tape
  useEffect(() => {
    if (!("mediaSession" in navigator)) return
    try {
      navigator.mediaSession.setActionHandler("nexttrack", tape ? () => step(1) : null)
      navigator.mediaSession.setActionHandler("previoustrack", tape ? () => step(-1) : null)
    } catch {}
  }, [tape, step])

  const toggle = useCallback((t: Track) => {
    const a = audio.current
    if (!a || !t.preview) return
    if (currentRef.current?.n === t.n && !a.paused) { a.pause(); return }
    if (currentRef.current?.n === t.n) { start(t); return } // resume the same track (and keep tape mode)
    start(t) // a different track: inside the tape it becomes the tape's new position; otherwise a single preview
  }, [start])

  const toggleTape = useCallback(() => {
    const a = audio.current
    if (!a) return
    if (tapeRef.current) {
      if (a.paused) a.play().catch(() => {})
      else a.pause()
      return
    }
    setTapeMode(true)
    event("tape_sampler_start", {})
    start(TAPE[0])
  }, [start])

  const pause = useCallback(() => { audio.current?.pause() }, [])
  const registerVideo = useCallback((fn: () => void) => {
    videos.current.add(fn)
    return () => { videos.current.delete(fn) }
  }, [])

  const pos = TAPE.findIndex((t) => t.n === current?.n) + 1

  return (
    <Ctx.Provider value={{ current, playing, progress, tape, toggle, toggleTape, pause, registerVideo }}>
      {children}
      <div className={`pbar${show ? " show" : ""}${tape ? " is-tape" : ""}`} role="region" aria-label="Now playing" inert={!show}>
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
          <span className="lbl pbar-s">
            {tape ? <>The tape &nbsp;·&nbsp; {pos} of {TAPE.length}</> : <>Dabie Bomaye{current?.ft ? ` ft ${current.ft}` : ""} &nbsp;·&nbsp; Preview</>}
          </span>
        </div>
        {tape && (
          <button className="pbar-skip" type="button" aria-label="Next track" onClick={() => step(1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4l11 8-11 8zM16 4h4v16h-4z" /></svg>
          </button>
        )}
        <a
          className="pbar-go"
          href={current?.link || LINKS.tape}
          target="_blank"
          rel="noopener"
          onClick={() => event("stream_click", { from: tape ? "tape_sampler" : "player", track: current?.title ?? "" })}
        >
          Stream <Arrow dir="out" />
        </a>
        <button className="pbar-x" type="button" aria-label="Close player" onClick={() => { pause(); setTapeMode(false); setShow(false) }}>×</button>
      </div>
    </Ctx.Provider>
  )
}
