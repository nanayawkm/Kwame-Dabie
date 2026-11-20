import type { ReactNode } from "react"

/**
 * How every section opens, taken from the release artwork's credit block: the heading centred, the artwork's
 * short red dash, then the section's label underneath as a small credit. One pattern for the whole site.
 */
export default function Opener({
  as: H = "h2",
  id,
  hClass,
  credit,
  className,
  after,
  children,
}: {
  as?: "h1" | "h2"
  id?: string
  hClass: string
  credit?: ReactNode
  className?: string
  after?: ReactNode
  children: ReactNode
}) {
  return (
    <header className={`opener${className ? " " + className : ""}`}>
      <H id={id} className={hClass}>{children}</H>
      <span className="opener-dash" aria-hidden="true" />
      {credit ? <p className="lbl opener-credit">{credit}</p> : null}
      {after}
    </header>
  )
}
