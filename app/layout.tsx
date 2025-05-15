import type React from "react"
import "./globals.css"
import { Roboto_Condensed, Oswald, Rubik_Mono_One, Permanent_Marker } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollAnimationsProvider from "@/components/scroll-animations-provider"

const mainFont = Roboto_Condensed({ 
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-main",
})

const headingFont = Oswald({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
})

const heroFont = Rubik_Mono_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-hero",
})

const iconicFont = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-iconic",
})

export const metadata = {
  title: "Kwame Dabie | Official Website",
  description: "Official website for hip-hop artist Kwame Dabie",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mainFont.variable} ${headingFont.variable} ${heroFont.variable} ${iconicFont.variable} font-main`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ScrollAnimationsProvider>
            {children}
          </ScrollAnimationsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
