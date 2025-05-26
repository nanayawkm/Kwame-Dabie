import type React from "react"
import "./globals.css"
import { Roboto_Condensed, Oswald, Rubik_Mono_One, Permanent_Marker } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollAnimationsProvider from "@/components/scroll-animations-provider"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"

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

export const metadata: Metadata = {
  title: "Kwame Dabie | Official Website - Ghanaian Hip-Hop Artist",
  description: "Official website of Kwame Dabie, an emerging powerhouse in Ghana's hip-hop landscape from Tema. Experience his distinctive blend of trap, melody, and authentic narratives. Gargantuan Vibes Only.",
  keywords: ["Kwame Dabie", "Ghana Hip-Hop", "Tema Rapper", "African Music", "Trap Music", "Ghanaian Artist", "GVO", "Gargantuan Vibes Only"],
  authors: [{ name: "Kwame Dabie" }],
  creator: "Kwame Dabie",
  publisher: "GVO - Gargantuan Vibes Only",
  
  // Favicon and app icons
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
  },
  
  // Open Graph metadata
  openGraph: {
    title: "Kwame Dabie | Official Website - Ghanaian Hip-Hop Artist",
    description: "Official website of Kwame Dabie, an emerging powerhouse in Ghana's hip-hop landscape from Tema. Experience his distinctive blend of trap, melody, and authentic narratives.",
    url: "https://kwamedabie.com",
    siteName: "Kwame Dabie Official",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kwame Dabie - Ghanaian Hip-Hop Artist",
        type: "image/jpeg",
      },
      {
        url: "/images/gallery/Dabie Logo png White.PNG",
        width: 800,
        height: 600,
        alt: "Kwame Dabie Logo",
        type: "image/png",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Kwame Dabie | Official Website - Ghanaian Hip-Hop Artist",
    description: "Official website of Kwame Dabie, an emerging powerhouse in Ghana's hip-hop landscape from Tema. Gargantuan Vibes Only.",
    site: "@kwamedabie",
    creator: "@kwamedabie",
    images: ["/og-image.jpg"],
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification (replace with actual codes when available)
  verification: {
    google: "google-site-verification=BWAOO46BsbD_Brpm80Dew4liMsNHnzap9MROF2CcE8U", // Get this from Google Search Console
    // bing: "ADD_YOUR_BING_VERIFICATION_CODE_HERE", // Optional: Bing Webmaster Tools
  },
  
  // Category
  category: "music",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Kwame Dabie",
    "alternateName": "GVO",
    "description": "Kwame Dabie is an emerging powerhouse in Ghana's hip-hop landscape from Tema. His music seamlessly weaves English, Twi, and Pidgin-English, delivering authentic narratives that touch on ambition, societal tensions, and everyday humor.",
    "genre": ["Hip-Hop", "Trap", "Afrobeat", "Ghanaian Music"],
    "foundingLocation": {
      "@type": "Place",
      "name": "Tema, Ghana",
      "addressCountry": "Ghana"
    },
    "url": "https://kwamedabie.com",
    "image": "https://kwamedabie.com/og-image.jpg",
    "sameAs": [
      "https://www.instagram.com/kwamedabie",
      "https://www.twitter.com/kwamedabie",
      "https://www.tiktok.com/@kwamedabie",
      "https://www.facebook.com/kwamefuccindabie",
      "https://www.youtube.com/@kwamedabie",
      "https://linktr.ee/kwamedabie"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "dabietunes@gmail.com",
      "contactType": "booking"
    },
    "musicAlbum": [
      {
        "@type": "MusicAlbum",
        "name": "WWW",
        "albumReleaseType": "SingleRelease",
        "datePublished": "2025"
      }
    ],
    "track": [
      {
        "@type": "MusicRecording",
        "name": "Troubles",
        "datePublished": "2025-02",
        "url": "https://fanlink.tv/kwamedabie-troubles"
      },
      {
        "@type": "MusicRecording",
        "name": "Gas",
        "datePublished": "2024",
        "url": "https://fanlink.tv/gas-kwamedabie-joey"
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${mainFont.variable} ${headingFont.variable} ${heroFont.variable} ${iconicFont.variable} font-main`}>
        {/* Google Analytics */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" 
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ScrollAnimationsProvider>
            {children}
          </ScrollAnimationsProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
