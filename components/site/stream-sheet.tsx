"use client"

import { useEffect, useRef, useState } from "react"
import { LINKS, STREAM_PLATFORMS } from "@/lib/content"
import { event } from "@/lib/client"
import Icon, { Arrow } from "./icon"

// Boomplay has no direct album link yet, so it lives under "More platforms" (the link page)
const DIRECT = STREAM_PLATFORMS.filter((p) => p.href !== LINKS.tape)

/**
 * The platform picker: every "Stream the tape" button opens this on the site (see streamClick in lib/client) instead
 * of sending people to the link page. Each platform goes straight to the album in that app, in a new tab, so the
 * site stays open behind it.
 */
export default function StreamSheet() {
  const dlg = useRef<HTMLDialogElement>(null)
  const [from, setFrom] = useState("")

  useEffect(() => {
    const open = (e: Event) => {
      const src = String((e as CustomEvent).detail || "")
      setFrom(src)
      event("stream_sheet", { action: "opened", from: src })
      const d = dlg.current
      if (d && !d.open) d.showModal()
    }
    window.addEventListener("db:stream", open)
    return () => window.removeEventListener("db:stream", open)
  }, [])

  const close = () => dlg.current?.close()
  const picked = (platform: string) => { event("stream_click", { from, platform }); close() }

  return (
    <dialog ref={dlg} className="ss" aria-labelledby="ss-h" autoFocus tabIndex={-1}
      onClick={(e) => { if (e.target === dlg.current) close() /* a tap on the backdrop */ }}>
      <div className="dlg-top">
        <span className="lbl" id="ss-h">Stream the tape</span>
        <button className="dlg-x" type="button" onClick={close}>Close</button>
      </div>
      <div className="ss-tape">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/media/cover.jpg" alt="" width={72} height={72} />
        <div>
          <p className="ss-t">Dabie Bomaye</p>
          <p className="lbl ss-m">The tape &nbsp;·&nbsp; 10 tracks</p>
        </div>
      </div>
      <ul className="ss-list">
        {DIRECT.map((p) => (
          <li key={p.icon}>
            <a href={p.href} target="_blank" rel="noopener" onClick={() => picked(p.name)}>
              <Icon name={p.icon} /><span>{p.name}</span><Arrow dir="out" />
            </a>
          </li>
        ))}
      </ul>
      <a className="ss-more lbl" href={LINKS.tape} target="_blank" rel="noopener" onClick={() => picked("more")}>Boomplay &amp; more platforms <Arrow dir="out" /></a>
    </dialog>
  )
}
