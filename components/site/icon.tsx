import { ICONS, type IconName } from "@/lib/icons"

export default function Icon({ name, className = "ico" }: { name: IconName; className?: string }) {
  const i = ICONS[name]
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={i.d} fillRule={i.evenodd ? "evenodd" : undefined} />
    </svg>
  )
}

export function GvoFlag({ className, light = false }: { className?: string; light?: boolean }) {
  const cloth = light ? "#F4F4F2" : "#0A0A0A"
  const letters = light ? "#0A0A0A" : "#F4F4F2"
  return (
    <svg className={className} viewBox="0 0 64 48" aria-hidden="true">
      <rect x="1" y="1" width="2.4" height="46" fill={cloth} />
      <g className="flag-g">
        <path d="M3.4 3 C18 1 34 6 61 4 L58 10 L62 15 L59 21 L61 27 C42 30 24 26 3.4 29 Z" fill={cloth} />
        <text x="32" y="21" textAnchor="middle" fill={letters} fontFamily="Barlow, Arial, sans-serif" fontWeight={600} fontSize={13} letterSpacing=".5">GVO</text>
      </g>
    </svg>
  )
}

/** A story frame with an up arrow: "post this to your story". */
export const StoryIcon = () => (
  <svg className="i-story" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M7 1.5h10A2.5 2.5 0 0 1 19.5 4v16a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 20V4A2.5 2.5 0 0 1 7 1.5zm0 2.2a.3.3 0 0 0-.3.3v16c0 .17.13.3.3.3h10a.3.3 0 0 0 .3-.3V4a.3.3 0 0 0-.3-.3H7zm5 3.3 4 4-1.5 1.5-1.45-1.45V16.5h-2.1v-5.45L9.5 12.5 8 11l4-4z" />
  </svg>
)

/** The site's one arrow: heavy shaft, 45° chevron head, blade-cut tail. Text arrows (↗ ▶) turn into emoji on iPhones. */
export const ARROW_D = "M4.2 10.3H15.4L10.7 5.6L13 3.3L21.7 12L13 20.7L10.7 18.4L15.4 13.7H2Z"
export const Arrow = ({ dir = "right" }: { dir?: "right" | "left" | "out" | "down" }) => (
  <svg className={`i-arrow i-arrow--${dir}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d={ARROW_D} />
  </svg>
)

export const PlayIcon = () => (
  <svg className="i-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3l16 9-16 9z" /></svg>
)
export const PauseIcon = () => (
  <svg className="i-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h5v18H5zM14 3h5v18h-5z" /></svg>
)
