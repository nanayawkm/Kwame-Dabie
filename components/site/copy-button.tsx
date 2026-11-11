"use client"

import { useState } from "react"
import { buzz, event } from "@/lib/client"

/** Copies `text`; if the clipboard is refused, selects the element with id `selectId` instead. */
export default function CopyButton({ text, label = "Copy", className = "copy", selectId, what }: {
  text: string
  label?: string
  className?: string
  selectId?: string
  what?: string
}) {
  const [state, setState] = useState<string | null>(null)
  const done = (s: string) => {
    setState(s)
    setTimeout(() => setState(null), 1800)
  }
  return (
    <button
      className={className}
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text)
          buzz(8)
          if (what) event("copy", { what })
          done("Copied")
        } catch {
          const el = selectId ? document.getElementById(selectId) : null
          if (el) {
            const r = document.createRange()
            r.selectNodeContents(el)
            const s = getSelection()
            s?.removeAllRanges()
            s?.addRange(r)
          }
          done("Selected")
        }
      }}
    >
      {state ?? label}
    </button>
  )
}
