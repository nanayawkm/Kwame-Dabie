"use client"

import { useEffect, useRef } from "react"
import { buzz, event, reducedMotion, saveData } from "@/lib/client"
import { usePlayer } from "./player"
import { PauseIcon, PlayIcon } from "./icon"

const fmt = (s: number) => { const v = Math.max(0, Math.floor(s || 0)); return `${Math.floor(v / 60)}:${String(v % 60).padStart(2, "0")}` }

/**
 * The vertical player (trailer, live performance): autoplays muted once it fills most of the view, one tap for
 * sound, pauses when you leave. Wired imperatively (like a media element should be) so React doesn't re-render
 * 60 times a second. `onPlayState` lets the page react to it (the trailer's ambient light).
 */
export default function VideoPlayer({ src, poster, label, tag, seconds, name, onPlayState }: {
  src: string
  poster: string
  /** what the video is, for screen readers */
  label: string
  /** the small red label on the cover */
  tag: string
  /** runtime, shown before the video's metadata loads */
  seconds: number
  /** analytics prefix: `${name}_play`, `${name}_sound` */
  name: string
  onPlayState?: (video: HTMLVideoElement, playing: boolean) => void
}) {
  const root = useRef<HTMLDivElement>(null)
  const cb = useRef(onPlayState)
  cb.current = onPlayState
  const { registerVideo, pause: pausePreview } = usePlayer()

  useEffect(() => {
    const pl = root.current!
    const q = <T extends Element>(s: string) => pl.querySelector(s) as T
    const vid = q<HTMLVideoElement>("video"), cover = q<HTMLButtonElement>(".pl-cover")
    const tog = q<HTMLButtonElement>(".pl-toggle"), bar = q<HTMLDivElement>(".pl-bar"), fill = q<HTMLElement>(".pl-bar i")
    const clock = q<HTMLSpanElement>(".pl-clock"), mute = q<HTMLButtonElement>(".pl-mute"), sound = q<HTMLButtonElement>(".pl-sound")
    const word = q<HTMLElement>(".pl-word")
    const canAuto = !reducedMotion() && !saveData()
    const dur = () => (isFinite(vid.duration) && vid.duration) || seconds
    let hideT: ReturnType<typeof setTimeout> | undefined, userPaused = false, userSound = false

    const poke = () => {
      pl.classList.add("ui-on")
      clearTimeout(hideT)
      if (!vid.paused) hideT = setTimeout(() => pl.classList.remove("ui-on"), 2600)
    }
    const syncMute = () => {
      mute.textContent = vid.muted ? "Sound off" : "Sound on"
      mute.setAttribute("aria-pressed", String(vid.muted))
      pl.classList.toggle("muted", vid.muted)
    }
    const start = (withSound: boolean) => {
      vid.preload = "auto"
      vid.muted = !withSound
      syncMute()
      pl.classList.add("started")
      vid.play()?.catch(() => {
        vid.muted = true
        syncMute()
        vid.play()?.catch(() => pl.classList.remove("started"))
      })
    }
    const soundOn = () => {
      userSound = true
      vid.muted = false
      syncMute()
      buzz(10)
      event(`${name}_sound`)
      if (vid.paused) vid.play()?.catch(() => {})
      poke()
    }
    const togglePlay = () => {
      if (vid.paused) { userPaused = false; vid.play()?.catch(() => {}) } else { userPaused = true; vid.pause() }
    }
    function seek(e: PointerEvent) {
      const r = bar.getBoundingClientRect()
      vid.currentTime = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)) * dur()
      poke()
    }

    const on = <K extends keyof HTMLElementEventMap>(el: HTMLElement, type: K, fn: (e: HTMLElementEventMap[K]) => void) => {
      el.addEventListener(type, fn as EventListener)
      return () => el.removeEventListener(type, fn as EventListener)
    }
    const offs = [
      on(cover, "click", () => { userPaused = false; userSound = true; buzz(10); event(`${name}_play`); start(true) }),
      on(sound, "click", (e) => { e.stopPropagation(); soundOn() }),
      on(vid, "click", () => { if (vid.muted && !vid.paused) soundOn(); else togglePlay() }),
      on(vid, "pointermove", poke),
      on(tog, "click", togglePlay),
      on(mute, "click", () => { vid.muted = !vid.muted; userSound = !vid.muted; syncMute(); poke() }),
      on(vid, "play", () => { tog.dataset.state = "pause"; tog.setAttribute("aria-label", "Pause"); poke(); cb.current?.(vid, true) }),
      on(vid, "pause", () => { tog.dataset.state = "play"; tog.setAttribute("aria-label", "Play"); clearTimeout(hideT); pl.classList.add("ui-on"); cb.current?.(vid, false) }),
      on(vid, "timeupdate", () => {
        const d = dur(), t = vid.currentTime
        fill.style.width = `${(t / d) * 100}%`
        clock.textContent = `${fmt(t)} / ${fmt(d)}`
        bar.setAttribute("aria-valuenow", String(Math.floor(t)))
        bar.setAttribute("aria-valuetext", fmt(t))
      }),
      on(vid, "ended", () => { pl.classList.remove("started", "ui-on"); word.innerHTML = "Play<br>again"; vid.currentTime = 0 }),
      on(bar, "pointerdown", (e) => { bar.setPointerCapture(e.pointerId); seek(e) }),
      on(bar, "pointermove", (e) => { if (bar.hasPointerCapture(e.pointerId)) seek(e) }),
      on(bar, "keydown", (e) => {
        if (e.key === "ArrowRight") { e.preventDefault(); vid.currentTime = Math.min(dur(), vid.currentTime + 5); poke() }
        if (e.key === "ArrowLeft") { e.preventDefault(); vid.currentTime = Math.max(0, vid.currentTime - 5); poke() }
      }),
    ]

    // Only one thing audible at a time: a preview silences a loud video, a loud video silences a preview.
    const unregister = registerVideo(() => { if (!vid.paused && !vid.muted) vid.pause() })
    const loud = () => { if (!vid.paused && !vid.muted) pausePreview() }
    offs.push(on(vid, "play", loud), on(vid, "volumechange", loud))

    // Load just before it arrives; autoplay once it fills most of the view; pause when it leaves.
    const near = new IntersectionObserver((es) => { if (es[0].isIntersecting && vid.preload === "none") vid.preload = "metadata" }, { rootMargin: "0px 0px 60% 0px" })
    near.observe(pl)
    const view = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.intersectionRatio >= 0.55) { if (canAuto && vid.paused && !userPaused) start(userSound) }
      else if (e.intersectionRatio < 0.2 && !vid.paused) vid.pause()
    }), { threshold: [0, 0.2, 0.55, 0.8] })
    view.observe(pl)

    return () => {
      offs.forEach((off) => off())
      unregister()
      near.disconnect()
      view.disconnect()
      clearTimeout(hideT)
      vid.pause()
    }
  }, [registerVideo, pausePreview, name, seconds])

  return (
    <div className="player muted" ref={root}>
      <video playsInline muted loop preload="none" poster={poster} width={720} height={1280} aria-label={label}>
        <source src={src} type="video/mp4" />
      </video>
      <button className="pl-sound" type="button">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z" /></svg>
        Tap for sound
      </button>
      <button className="pl-cover" type="button" aria-label={`Play ${label} with sound`}>
        <span className="pl-row lbl"><span className="rec">{tag}</span><span>{fmt(seconds)}</span></span>
        <span className="pl-play">
          <i><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3l16 9-16 9z" /></svg></i>
          <b className="pl-word">Play<br />with sound</b>
        </span>
      </button>
      <div className="pl-ui">
        <button className="pl-btn pl-toggle" type="button" aria-label="Pause" data-state="pause"><PlayIcon /><PauseIcon /></button>
        <div className="pl-bar" role="slider" tabIndex={0} aria-label="Seek" aria-valuemin={0} aria-valuemax={seconds} aria-valuenow={0} aria-valuetext="0:00"><i /></div>
        <span className="lbl pl-clock">0:00 / {fmt(seconds)}</span>
        <button className="pl-btn pl-mute" type="button" aria-pressed="true">Sound off</button>
      </div>
    </div>
  )
}
