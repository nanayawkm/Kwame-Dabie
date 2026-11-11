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

export const PlayIcon = () => (
  <svg className="i-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3l16 9-16 9z" /></svg>
)
export const PauseIcon = () => (
  <svg className="i-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h5v18H5zM14 3h5v18h-5z" /></svg>
)
