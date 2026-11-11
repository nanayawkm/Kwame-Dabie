"use client"

import { useEffect } from "react"

/** Leave the tab and it calls you back. */
export default function TitleWatcher() {
  useEffect(() => {
    let saved = document.title
    const onVis = () => {
      if (document.hidden) {
        saved = document.title
        document.title = "Locked in. Come back."
      } else {
        document.title = saved
      }
    }
    document.addEventListener("visibilitychange", onVis)
    return () => document.removeEventListener("visibilitychange", onVis)
  }, [])
  return null
}
