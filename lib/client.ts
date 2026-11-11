"use client"

import { useEffect, useState } from "react"
import { track } from "@vercel/analytics"
import { RELEASE_UTC } from "@/lib/content"

/** A short vibration on Android; silently ignored everywhere else. */
export function buzz(pattern: number | number[]) {
  try {
    navigator.vibrate?.(pattern)
  } catch {}
}

export const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

/** True when the viewer asked to save data or is on a 2G connection. */
export const saveData = () => {
  const c = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection
  return !!c && (!!c.saveData || /(^|-)2g$/.test(c.effectiveType || ""))
}

/** Analytics events (Vercel Web Analytics custom events). Never throws. */
export function event(name: string, props?: Record<string, string>) {
  try {
    track(name, props)
  } catch {}
}

/** Flips to true at release time without polling every second. */
export function useIsOut() {
  const [out, setOut] = useState(false)
  useEffect(() => {
    const left = RELEASE_UTC - Date.now()
    if (left <= 0) return setOut(true)
    const t = setTimeout(() => setOut(true), Math.min(left, 2 ** 31 - 1))
    return () => clearTimeout(t)
  }, [])
  return out
}

/** Ticks once a second until release; null before the first client render. */
export function useCountdown() {
  const [now, setNow] = useState<number | null>(null)
  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => {
      const t = Date.now()
      setNow(t)
      if (t >= RELEASE_UTC) clearInterval(id)
    }, 1000)
    return () => clearInterval(id)
  }, [])
  if (now === null) return { ready: false, out: false, d: 0, h: 0, m: 0, s: 0 }
  const left = Math.max(0, Math.floor((RELEASE_UTC - now) / 1000))
  return {
    ready: true,
    out: left === 0,
    d: Math.floor(left / 86400),
    h: Math.floor((left % 86400) / 3600),
    m: Math.floor((left % 3600) / 60),
    s: left % 60,
  }
}

export const pad2 = (v: number) => String(v).padStart(2, "0")
