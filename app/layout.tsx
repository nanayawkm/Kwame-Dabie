import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { bodyFont, displayFont, twiFallback } from "./fonts"
import { LINKS, TRACKS } from "@/lib/content"
import Loader from "@/components/site/loader"
import SiteHeader from "@/components/site/site-header"
import Footer from "@/components/site/footer"
import TitleWatcher from "@/components/site/title-watcher"
import { PlayerProvider } from "@/components/site/player"
import { CardProvider } from "@/components/site/story-cards"

// Set NEXT_PUBLIC_SITE_URL once the new domain is live; until then Vercel's production URL is used.
const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://kwamedabie.com")

const DESCRIPTION =
  "Dabie Bomaye (formerly Kwame Dabie), hip hop artist from Tema, Ghana. The self-titled tape DABIE BOMAYE: 10 tracks, out 12.11.2026 on GVO. Stream it, watch the trailer, make your story card."

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Dabie Bomaye", template: "%s / Dabie Bomaye" },
  description: DESCRIPTION,
  applicationName: "Dabie Bomaye",
  authors: [{ name: "Dabie Bomaye" }],
  creator: "GVO",
  publisher: "GVO",
  keywords: ["Dabie Bomaye", "Kwame Dabie", "DABIE BOMAYE tape", "GVO", "Gargantuan Vibes Only", "Ghana hip hop", "Tema rapper", "Roadman 2", "Addict", "AraTheJay"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "music.album",
    siteName: "Dabie Bomaye",
    title: "Dabie Bomaye / The Tape",
    description: "Formerly Kwame Dabie. The self-titled tape: 10 tracks, out 12.11.2026 on GVO.",
    url: "/",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dabie Bomaye / The Tape",
    description: "Formerly Kwame Dabie. 10 tracks, out 12.11.2026 on GVO.",
    creator: "@dabiebomaye",
    site: "@dabiebomaye",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  verification: { google: "BWAOO46BsbD_Brpm80Dew4liMsNHnzap9MROF2CcE8U" },
  formatDetection: { telephone: false, email: false },
}

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicGroup",
      "@id": `${SITE}/#artist`,
      name: "Dabie Bomaye",
      alternateName: ["Kwame Dabie"],
      description: "Hip hop artist from Tema, Ghana, formerly known as Kwame Dabie.",
      genre: ["Hip hop", "Rap", "Ghanaian hip hop"],
      url: SITE,
      image: `${SITE}/media/hero.jpg`,
      logo: `${SITE}/media/logo.webp`,
      foundingLocation: { "@type": "Place", name: "Tema, Ghana" },
      sameAs: [LINKS.instagram, LINKS.x, LINKS.tiktok, LINKS.youtube],
      recordLabel: { "@type": "Organization", name: "GVO", alternateName: "Gargantuan Vibes Only" },
      album: {
        "@type": "MusicAlbum",
        name: "DABIE BOMAYE",
        datePublished: "2026-11-12",
        albumReleaseType: "https://schema.org/AlbumRelease",
        numTracks: TRACKS.length,
        image: `${SITE}/media/cover.jpg`,
        url: LINKS.tape,
        byArtist: { "@id": `${SITE}/#artist` },
        track: TRACKS.map((t, i) => ({ "@type": "MusicRecording", position: i + 1, name: t.title })),
      },
    },
    { "@type": "WebSite", "@id": `${SITE}/#website`, name: "Dabie Bomaye", url: SITE, inLanguage: "en" },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${twiFallback.variable}`} suppressHydrationWarning>
      <head>
        {/* Returning visitors in the same session skip the loader before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: "try{if(sessionStorage.getItem('seen'))document.documentElement.classList.add('seen')}catch(e){}" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>
        <PlayerProvider>
          <CardProvider>
            <Loader />
            <SiteHeader />
            <main id="site">{children}</main>
            <Footer />
          </CardProvider>
        </PlayerProvider>
        <div id="chant" aria-hidden="true">Bomaye!</div>
        <TitleWatcher />
        <Analytics />
      </body>
    </html>
  )
}
