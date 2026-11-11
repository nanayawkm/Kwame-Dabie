"use client"

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react"
import { displayFont } from "@/app/fonts"
import { ICONS, type IconName } from "@/lib/icons"
import { LINKS, RELEASE_UTC, TRACKS, type Track } from "@/lib/content"
import { buzz, event } from "@/lib/client"
import CopyButton from "./copy-button"

type CardReq = { kind: "tape" } | { kind: "track"; track: Track }
type CardsCtx = { open: (req: CardReq) => void }

const Ctx = createContext<CardsCtx | null>(null)
export function useCards() {
  const c = useContext(Ctx)
  if (!c) throw new Error("useCards must be used inside <CardProvider>")
  return c
}

const BGS = [
  { key: "flag", src: "/media/flag.jpg", label: "The flag" },
  { key: "steps", src: "/media/steps.jpg", label: "The steps" },
  { key: "hero", src: "/media/hero.jpg", label: "Close-up" },
  { key: "smoke", src: "/media/smoke.jpg", label: "The smoke" },
] as const
type BgKey = (typeof BGS)[number]["key"]

const CARD_ICONS: IconName[] = ["spotify", "applemusic", "audiomack", "boomplay", "youtubemusic", "deezer", "tidal"]
const W = 1080, H = 1920

const imgCache = new Map<string, Promise<HTMLImageElement>>()
function loadImg(src: string) {
  if (!imgCache.has(src)) {
    imgCache.set(src, new Promise((res, rej) => {
      const i = new Image()
      i.onload = () => res(i)
      i.onerror = rej
      i.src = src
    }))
  }
  return imgCache.get(src)!
}

/** fillText with tracking, since canvas letterSpacing is not everywhere yet. */
function spaced(x: CanvasRenderingContext2D, str: string, X: number, Y: number, sp: number, align: "left" | "center" | "right" = "left") {
  const chars = [...str]
  const w = chars.reduce((a, ch) => a + x.measureText(ch).width + sp, 0) - sp
  let cx = align === "center" ? X - w / 2 : align === "right" ? X - w : X
  for (const ch of chars) { x.fillText(ch, cx, Y); cx += x.measureText(ch).width + sp }
}

function wrapLines(x: CanvasRenderingContext2D, text: string, maxW: number) {
  const lines: string[] = []
  let cur = ""
  for (const w of text.split(" ")) {
    const t = cur ? `${cur} ${w}` : w
    if (x.measureText(t).width > maxW && cur) { lines.push(cur); cur = w } else cur = t
  }
  if (cur) lines.push(cur)
  return lines
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

async function drawCard(req: CardReq, bg: BgKey): Promise<HTMLCanvasElement> {
  const F = displayFont.style.fontFamily
  await Promise.all(["800 150px", "700 34px", "600 30px"].map((f) => document.fonts.load(`${f} ${F}`)))
  const c = document.createElement("canvas")
  c.width = W
  c.height = H
  const x = c.getContext("2d")!
  x.textAlign = "left"
  x.textBaseline = "alphabetic"
  x.fillStyle = "#0A0A0A"
  x.fillRect(0, 0, W, H)
  const outLabel = Date.now() >= RELEASE_UTC ? "OUT NOW" : "OUT 12.11.2026"

  // Instagram covers roughly the top and bottom 250px of a story, so everything that matters sits between.
  const topLabels = () => {
    x.fillStyle = "#F4F4F2"
    x.font = `600 30px ${F}`
    spaced(x, `THE TAPE  /  ${outLabel}`, 80, 262, 9)
    spaced(x, "GVO", W - 80, 262, 9, "right")
  }
  const footer = (top: number) => {
    x.fillStyle = "#FC0000"
    x.fillRect(80, top, 120, 5)
    x.fillStyle = "#F4F4F2"
    x.font = `700 34px ${F}`
    spaced(x, "AVAILABLE ON ALL STREAMING PLATFORMS", 80, top + 66, 6)
    const size = 46, gap = 36
    CARD_ICONS.forEach((n, i) => {
      const icon = ICONS[n]
      x.save()
      x.translate(80 + i * (size + gap), top + 100)
      x.scale(size / 24, size / 24)
      x.fill(new Path2D(icon.d), icon.evenodd ? "evenodd" : "nonzero")
      x.restore()
    })
    x.fillStyle = "#9A9D9E"
    x.font = `600 28px ${F}`
    spaced(x, "@DABIEBOMAYE", 80, top + 210, 7)
  }

  if (req.kind === "tape") {
    const cover = await loadImg("/media/cover.jpg")
    topLabels()
    const cs = 800
    x.drawImage(cover, (W - cs) / 2, 310, cs, cs)
    TRACKS.forEach((t, i) => {
      const cx = i < 5 ? 80 : 560, cy = 1192 + (i % 5) * 52
      x.font = `700 32px ${F}`
      x.fillStyle = "#FC0000"
      x.fillText(t.n, cx, cy)
      x.fillStyle = "#F4F4F2"
      x.fillText(t.title.toUpperCase(), cx + 50, cy)
    })
    footer(1470)
    return c
  }

  const t = req.track
  const [photo, logo] = await Promise.all([loadImg(BGS.find((b) => b.key === bg)!.src), loadImg("/media/logo.webp")])
  const ph = H * 0.74, s = Math.max(W / photo.width, ph / photo.height), bw = photo.width * s, bh = photo.height * s
  x.drawImage(photo, (W - bw) / 2, Math.min(0, (ph - bh) * 0.3), bw, bh)
  let g = x.createLinearGradient(0, 0, 0, 380)
  g.addColorStop(0, "rgba(10,10,10,.6)")
  g.addColorStop(1, "rgba(10,10,10,0)")
  x.fillStyle = g
  x.fillRect(0, 0, W, 380)
  g = x.createLinearGradient(0, 560, 0, 1320)
  g.addColorStop(0, "rgba(10,10,10,0)")
  g.addColorStop(0.6, "rgba(10,10,10,.94)")
  g.addColorStop(1, "#0A0A0A")
  x.fillStyle = g
  x.fillRect(0, 560, W, H - 560)
  topLabels()
  const lw = 300, lh = (lw * logo.height) / logo.width
  x.drawImage(logo, (W - lw) / 2, 300, lw, lh)

  const footerTop = 1470, moodY = footerTop - 52
  x.font = `800 150px ${F}`
  const lines = wrapLines(x, t.title.toUpperCase(), 920)
  const ftY = t.ft ? moodY - 60 : null
  const lastY = (ftY ?? moodY) - 76, firstY = lastY - (lines.length - 1) * 136
  x.fillStyle = "#FC0000"
  x.font = `800 300px ${F}`
  x.fillText(t.n, 70, firstY - 150)
  x.fillStyle = "#F4F4F2"
  x.font = `800 150px ${F}`
  lines.forEach((l, i) => x.fillText(l, 76, firstY + i * 136))
  if (ftY) {
    x.fillStyle = "#FC0000"
    x.font = `600 40px ${F}`
    spaced(x, `FT ${t.ft!.toUpperCase()}`, 80, ftY, 8)
  }
  x.fillStyle = "#9A9D9E"
  x.font = `600 30px ${F}`
  spaced(x, `PROD. BY ${t.prod.toUpperCase()}`, 80, moodY, 7) // a credit, not a description
  footer(footerTop)
  return c
}

/** The story-card dialog: render a 1080x1920 card, share it to a story, or save it. */
export function CardProvider({ children }: { children: ReactNode }) {
  const dlg = useRef<HTMLDialogElement>(null)
  const [req, setReq] = useState<CardReq | null>(null)
  const [bg, setBg] = useState<BgKey>("flag")
  const [nonce, setNonce] = useState(0)
  const [card, setCard] = useState<{ blob: Blob; url: string } | null>(null)
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState("")
  const [touch, setTouch] = useState(false)

  useEffect(() => setTouch(window.matchMedia("(hover: none)").matches), [])

  const open = useCallback((r: CardReq) => {
    setReq(r)
    setNonce((n) => n + 1)
    const d = dlg.current
    if (d && !d.open) d.showModal()
    event("card_open", { card: r.kind === "tape" ? "tape" : r.track.title })
  }, [])

  useEffect(() => {
    if (!req) return
    let cancelled = false
    setBusy(true)
    setStatus("Making your card…")
    drawCard(req, bg)
      .then((c) => new Promise<Blob | null>((res) => c.toBlob(res, "image/jpeg", 0.92)))
      .then((blob) => {
        if (cancelled) return
        if (!blob) throw new Error("no image")
        setCard((prev) => {
          if (prev) URL.revokeObjectURL(prev.url)
          return { blob, url: URL.createObjectURL(blob) }
        })
        setStatus(
          window.matchMedia("(hover: none)").matches
            ? "Tap Share and pick Instagram, Snapchat or WhatsApp. Or press and hold the image to save it."
            : "On a phone, Share opens Instagram, Snapchat and WhatsApp. Here you can save the image.",
        )
      })
      .catch(() => { if (!cancelled) setStatus("The card could not be made. Close this and try again.") })
      .finally(() => { if (!cancelled) setBusy(false) })
    return () => { cancelled = true }
  }, [req, bg, nonce])

  const name = !req ? "dabie-bomaye" : req.kind === "tape" ? "dabie-bomaye-the-tape" : `dabie-bomaye-${req.track.n}-${slug(req.track.title)}`
  const link = req?.kind === "track" && req.track.link ? req.track.link : LINKS.tape

  const share = async () => {
    if (!card || !req) return
    const file = new File([card.blob], `${name}.jpg`, { type: "image/jpeg" })
    const what = req.kind === "tape" ? "DABIE BOMAYE, the tape" : `${req.track.title} by Dabie Bomaye`
    try {
      if (!navigator.canShare?.({ files: [file] })) throw new Error("unsupported")
      await navigator.share({ files: [file], title: "Dabie Bomaye", text: `${what}. Stream it: ${link}` })
      buzz(12)
      event("card_share", { card: what })
      setStatus("Shared. On Instagram, add a link sticker so people can stream it.")
    } catch (e) {
      if ((e as Error)?.name === "AbortError") return
      setStatus(touch
        ? "Sharing is not available here. Press and hold the image to save it, then post it from your gallery."
        : "Sharing works on phones. Save the image here, or open this page on your phone.")
    }
  }

  const save = () => {
    if (!card) return
    const a = document.createElement("a")
    a.href = card.url
    a.download = `${name}.jpg`
    document.body.appendChild(a)
    a.click()
    a.remove()
    event("card_save", { card: name })
    setStatus(touch ? "If nothing saved, press and hold the image instead." : "Saved. Post it from your gallery and add a link sticker.")
  }

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <dialog
        id="cardDlg"
        ref={dlg}
        aria-labelledby="dlgTitle"
        onClick={(e) => { if (e.target === dlg.current) dlg.current?.close() }}
      >
        <div className="dlg-top">
          <span className="lbl" id="dlgTitle">{req?.kind === "track" ? `Share / ${req.track.n} ${req.track.title}` : "Share the tape"}</span>
          <button className="dlg-x" type="button" onClick={() => dlg.current?.close()}>Close</button>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {card ? <img className="card-out" src={card.url} alt={req?.kind === "track" ? `Story card for ${req.track.title}` : "Tape card with the cover and full tracklist"} /> : <div className="card-out" />}
        <div className="bg-pick" role="radiogroup" aria-label="Background photo" hidden={req?.kind !== "track"}>
          {BGS.map((b) => (
            <button key={b.key} type="button" role="radio" aria-checked={bg === b.key} aria-label={b.label} onClick={() => { setBg(b.key); buzz(6) }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.src} alt="" />
            </button>
          ))}
        </div>
        <div className="dlg-actions">
          <button className="btn" type="button" disabled={busy || !card} onClick={share}>Share to your story</button>
          <p className="lbl dlg-apps">Instagram &nbsp;/&nbsp; Snapchat &nbsp;/&nbsp; WhatsApp status</p>
          <button className="dlg-save" type="button" disabled={busy || !card} onClick={save}>Save image</button>
        </div>
        <p className="dlg-note" aria-live="polite">{status}</p>
        <div className="dlg-tip">
          <p>On Instagram, add a link sticker so your friends can stream it:</p>
          <div className="tip-row">
            <span id="shareLink">{link.replace(/^https:\/\//, "")}</span>
            <CopyButton text={link} label="Copy link" selectId="shareLink" what="card_link" />
          </div>
        </div>
      </dialog>
    </Ctx.Provider>
  )
}
