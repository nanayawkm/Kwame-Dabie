"use client"

import { TRACKS } from "@/lib/content"
import { usePlayer } from "./player"
import { PauseIcon, PlayIcon } from "./icon"

const COUNT = TRACKS.filter((t) => t.preview).length

/**
 * "Play the tape": every 20-second preview back to back, about three minutes of the whole tape.
 * variant "block" sits at the top of the tracklist; "inline" is the small hero link.
 */
export default function TapeButton({ variant = "block" }: { variant?: "block" | "inline" }) {
  const p = usePlayer()
  const on = p.tape && p.playing
  const where = p.tape && p.current ? `${p.current.n} of ${String(COUNT).padStart(2, "0")} · ${p.current.title}` : null

  if (variant === "inline") {
    return (
      <button className={`tape-inline${on ? " on" : ""}`} type="button" onClick={p.toggleTape} aria-pressed={on}>
        <span className="tape-ic" aria-hidden="true"><PlayIcon /><PauseIcon /></span>
        {on ? "Pause the tape" : "Play the tape"} <span className="tape-dur">· 3 min</span>
      </button>
    )
  }
  return (
    <button className={`tape-block${on ? " on" : ""}`} type="button" onClick={p.toggleTape} aria-pressed={on}>
      <span className="tape-ic" aria-hidden="true"><PlayIcon /><PauseIcon /></span>
      <span className="tape-tx">
        <b>{on ? "Pause the tape" : p.tape ? "Resume the tape" : "Play the tape"}</b>
        <span className="lbl">{where ?? `All ${COUNT} tracks · 20 seconds each · 3 min`}</span>
      </span>
    </button>
  )
}
