import { Barlow, Barlow_Condensed, Noto_Sans_Display } from "next/font/google"

// Barlow has no Ɛ ɛ Ɔ ɔ (Twi: TƐ!, the Gas lyric). Noto Sans Display covers them; it sits second in the
// stack so the browser only reaches for it on those letters, and only downloads it on pages that use them.
export const twiFallback = Noto_Sans_Display({
  subsets: ["latin-ext"],
  axes: ["wdth"],
  variable: "--font-twi",
  display: "swap",
  preload: false,
})

export const displayFont = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
})

export const bodyFont = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
})
