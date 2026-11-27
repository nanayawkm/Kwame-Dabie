"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import { LINKS } from "@/lib/content"
import { buzz, streamClick, useIsOut } from "@/lib/client"
import GvoFlag from "./gvo-flag"

const MENU = [
  { href: "/#project", label: "The tape" },
  { href: "/#tracklist", label: "Tracklist" },
  { href: "/#trailer", label: "Trailer" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/music", label: "More music" },
  { href: "/press", label: "Press" },
  { href: "#contact", label: "Contact" },
]

type Tone = "light" | "dark"
const BAR = { light: "#EEEFEE", dark: "#0A0A0A" }

/** Sections say what they are with data-tone; the hero is dark on phones and light on desktop. */
function resolveTone(el: Element | null): Tone {
  const t = (el as HTMLElement | null)?.dataset.tone
  if (t === "hero") return window.innerWidth >= 900 ? "light" : "dark"
  return t === "dark" ? "dark" : "light"
}

export default function SiteHeader() {
  const pathname = usePathname()
  const out = useIsOut()
  const [open, setOpen] = useState(false)
  const [tone, setTone] = useState<Tone>("dark")
  const [pill, setPill] = useState(false)
  const openRef = useRef(false)
  const menuRef = useRef<HTMLElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  const applyTone = useCallback((t: Tone) => {
    setTone(t)
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", BAR[t])
  }, [])

  const syncTone = useCallback(() => {
    const el = document.elementFromPoint(window.innerWidth / 2, 40)?.closest("main [data-tone], footer[data-tone]") ?? null
    if (el) applyTone(resolveTone(el))
  }, [applyTone])

  // The Stream pill shows only when nothing else on screen streams: hidden while the hero's Stream button is
  // in view (or still below), shown once it has scrolled past, hidden again when the footer's streaming links arrive.
  useEffect(() => {
    let pastHero = false, atFoot = false
    const sync = () => setPill(pastHero && !atFoot)
    const heroBtn = document.querySelector(".hero .btn")
    const foot = document.querySelector("footer")
    const ios: IntersectionObserver[] = []
    if (heroBtn) {
      const io = new IntersectionObserver(([e]) => { pastHero = !e.isIntersecting && e.boundingClientRect.top < 0; sync() })
      io.observe(heroBtn); ios.push(io)
    } else { pastHero = true }
    if (foot) {
      const io = new IntersectionObserver(([e]) => { atFoot = e.isIntersecting; sync() })
      io.observe(foot); ios.push(io)
    }
    sync()
    return () => ios.forEach((io) => io.disconnect())
  }, [pathname])

  // Watch whichever section sits under the header; re-run on every page.
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting && !openRef.current) applyTone(resolveTone(e.target)) }),
      { rootMargin: "0px 0px -93% 0px" },
    )
    document.querySelectorAll("main [data-tone], footer[data-tone]").forEach((s) => io.observe(s))
    const raf = requestAnimationFrame(syncTone)
    window.addEventListener("resize", syncTone)
    return () => { io.disconnect(); cancelAnimationFrame(raf); window.removeEventListener("resize", syncTone) }
  }, [pathname, applyTone, syncTone])

  const setMenu = useCallback((v: boolean) => {
    openRef.current = v
    setOpen(v)
    document.documentElement.classList.toggle("locked", v)
    if (v) { applyTone("dark"); buzz(10) } else requestAnimationFrame(syncTone)
  }, [applyTone, syncTone])

  useEffect(() => { setMenu(false) }, [pathname, setMenu])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setMenu(false); btnRef.current?.focus() } }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, setMenu])

  return (
    <>
      <header className={`nav${open ? " menu-open" : ""}`} data-tone={tone}>
        <button
          ref={btnRef}
          className="flag-btn"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setMenu(!open)}
        >
          <GvoFlag mode="tap" />
          <span className="flag-word">{open ? "Close" : "Menu"}</span>
        </button>
        <a className={`pill${pill ? " show" : ""}`} href={LINKS.tape} target="_blank" rel="noopener" onClick={streamClick("header")}
          aria-hidden={!pill} tabIndex={pill ? undefined : -1}>
          {out ? "Stream" : "Pre-save"}
        </a>
      </header>

      <nav className={`menu${open ? " open" : ""}`} id="menu" ref={menuRef} aria-label="Site" inert={!open}>
        <ul>
          {MENU.map((m) => (
            <li key={m.href}>
              {m.href.startsWith("#") ? (
                <a href={m.href} onClick={() => setMenu(false)}>{m.label}</a>
              ) : (
                <Link href={m.href} onClick={() => setMenu(false)}>{m.label}</Link>
              )}
            </li>
          ))}
        </ul>
        <div className="menu-foot lbl">
          <span>Tema, Ghana</span>
          <span><a href={LINKS.instagram} target="_blank" rel="noopener">@dabiebomaye</a></span>
        </div>
      </nav>
    </>
  )
}
