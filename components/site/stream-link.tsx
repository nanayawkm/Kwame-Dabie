"use client"

import type { ReactNode } from "react"
import { streamClick } from "@/lib/client"
import type { StreamRelease } from "@/lib/content"

/**
 * A link to a release that opens the on-site stream panel for it (components/site/stream-sheet.tsx). The href stays
 * the release's own page, so it still works without JS, in a new tab or with a modifier key.
 */
export default function StreamLink({ release, from, href, className, children, ...rest }: {
  release: StreamRelease
  from: string
  href: string
  className?: string
  children: ReactNode
  tabIndex?: number
  "aria-hidden"?: boolean
  "aria-label"?: string
}) {
  return (
    <a href={href} target="_blank" rel="noopener" className={className} onClick={streamClick(from, release)} {...rest}>
      {children}
    </a>
  )
}
