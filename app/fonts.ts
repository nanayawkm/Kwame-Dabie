import { Archivo, Noto_Sans_Display } from "next/font/google"

// One family for everything, close to the lettering on the release artwork. Archivo has a width axis
// (62-125%), so the roles come from width, not from different fonts: wide and heavy for headlines and titles,
// narrow for numbers, normal for reading.
export const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
})

// The Twi letters Ɛ ɛ Ɔ ɔ (TƐ!, the Gas lyric) fall back to Noto Sans Display if Archivo lacks them.
// Second in the stack, so the browser only reaches for it on those letters.
export const twiFallback = Noto_Sans_Display({
  subsets: ["latin-ext"],
  axes: ["wdth"],
  variable: "--font-twi",
  display: "swap",
  preload: false,
})

// kept for the existing imports
export const displayFont = archivo
export const bodyFont = archivo
