"use client"

import { useEffect, useRef, useState } from "react"
import { LINKS, STREAM_PLATFORMS, type StreamRelease } from "@/lib/content"
import { event } from "@/lib/client"
import Icon, { Arrow } from "./icon"

// The tape. Boomplay has no direct album link yet, so it lives under the link page at the bottom.
const TAPE: StreamRelease = {
  title: "Dabie Bomaye",
  meta: "The tape  ·  10 tracks",
  cover: "/media/cover.jpg",
  links: STREAM_PLATFORMS.filter((p) => p.href !== LINKS.tape).map((p) => ({ icon: p.icon, name: p.name, href: p.href })),
  more: LINKS.tape,
}

/**
 * The platform picker: "Stream" buttons across the site open this (see streamClick in lib/client) instead of sending
 * people to a link page. Each platform goes straight to the release in that app, in a new tab, so the site stays
 * open behind it. The tape by default; any More music release when one is passed.
 */
export default function StreamSheet() {
  const dlg = useRef<HTMLDialogElement>(null)
  const [from, setFrom] = useState("")
  const [rel, setRel] = useState<StreamRelease>(TAPE)
  const isTape = rel === TAPE

  useEffect(() => {
    const open = (e: Event) => {
      const d = (e as CustomEvent<{ from?: string; release?: StreamRelease }>).detail ?? {}
      setFrom(d.from ?? "")
      setRel(d.release ?? TAPE)
      event("stream_sheet", { action: "opened", from: d.from ?? "", release: d.release?.title ?? "tape" })
      const el = dlg.current
      if (el && !el.open) el.showModal()
    }
    window.addEventListener("db:stream", open)
    return () => window.removeEventListener("db:stream", open)
  }, [])

  const close = () => dlg.current?.close()
  const picked = (platform: string) => { event("stream_click", { from, platform, release: isTape ? "tape" : rel.title }); close() }
  const only = rel.links.length === 0 // nothing direct: the link page is the one row

  return (
    <dialog ref={dlg} className="ss" aria-labelledby="ss-h" autoFocus tabIndex={-1}
      onClick={(e) => { if (e.target === dlg.current) close() /* a tap on the backdrop */ }}>
      <div className="dlg-top">
        <span className="lbl" id="ss-h">{isTape ? "Stream the tape" : "Stream"}</span>
        <button className="dlg-x" type="button" onClick={close}>Close</button>
      </div>
      <div className="ss-tape">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={rel.cover} alt="" width={72} height={72} />
        <div>
          <p className="ss-t">{rel.title}</p>
          <p className="lbl ss-m">{rel.meta}</p>
        </div>
      </div>
      <ul className="ss-list">
        {rel.links.map((p) => (
          <li key={p.name}>
            <a href={p.href} target="_blank" rel="noopener" onClick={() => picked(p.name)}>
              {p.icon ? <Icon name={p.icon} /> : <span className="ico" aria-hidden="true" />}<span>{p.name}</span><Arrow dir="out" />
            </a>
          </li>
        ))}
        {only && rel.more && (
          <li>
            <a href={rel.more} target="_blank" rel="noopener" onClick={() => picked("all")}>
              <span className="ico" aria-hidden="true" /><span>All platforms</span><Arrow dir="out" />
            </a>
          </li>
        )}
      </ul>
      {!only && rel.more && (
        <a className="ss-more lbl" href={rel.more} target="_blank" rel="noopener" onClick={() => picked("more")}>
          {isTape ? <>Boomplay &amp; more platforms</> : <>All platforms</>} <Arrow dir="out" />
        </a>
      )}
    </dialog>
  )
}
