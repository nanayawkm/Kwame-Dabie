import type React from "react"
import "./globals.css"
import { Roboto_Condensed, Oswald, Rubik_Mono_One, Permanent_Marker } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollAnimationsProvider from "@/components/scroll-animations-provider"
import Navbar from "@/components/navbar"
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
  title: {
    template: '%s | Kwame Dabie - Official Website',
    default: "Kwame Dabie | Official Website - Ghanaian Hip-Hop Artist from Tema"
  },
  description: "Official website of Kwame Dabie, Ghana's rising hip-hop star from Tema. Stream latest tracks 'WWW', 'Troubles' & 'Gas'. Authentic Ghanaian trap music, Afrobeats fusion. GVO - Gargantuan Vibes Only.",
  keywords: [
    "Kwame Dabie", "Ghana Hip-Hop", "Ghanaian rapper", "Tema rapper", "African Hip-Hop", 
    "Ghana trap music", "Afrobeats", "Ghanaian Afrobeats", "GVO", "Gargantuan Vibes Only",
    "WWW Kwame Dabie", "Troubles rapper", "Gas song", "Ghana music artist", "African trap",
    "Tema Ghana music", "Ghanaian music artist", "hip hop Ghana", "African rapper",
    "Ghana music streaming", "Afrobeats artist", "West African hip hop"
  ],
  authors: [{ name: "Kwame Dabie", url: "https://kwamedabie.com" }],
  creator: "Kwame Dabie - Ghanaian Hip-Hop Artist",
  publisher: "GVO - Gargantuan Vibes Only",
  
  // MetadataBase for proper URL resolution (required for Google)
  metadataBase: new URL('https://kwamedabie.com'),
  
  // Canonical URL
  alternates: {
    canonical: 'https://kwamedabie.com',
    languages: {
      'en': 'https://kwamedabie.com',
      'en-US': 'https://kwamedabie.com',
      'en-GB': 'https://kwamedabie.com',
    },
  },
  
  // Favicon configuration optimized for Google Search Results
  icons: {
    // Primary favicon for Google Search - 48x48px minimum recommended
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    // Apple touch icons
    apple: [
      { url: '/favicon-180x180.png', sizes: '180x180', type: 'image/png' }
    ],
    // Legacy shortcut icon
    shortcut: '/favicon.ico',
  },
  
  // Enhanced Open Graph metadata
  openGraph: {
    title: "Kwame Dabie | Official Website - Ghana's Rising Hip-Hop Star",
    description: "Stream Kwame Dabie's latest hits: WWW, Troubles & Gas. Authentic Ghanaian hip-hop from Tema. Experience the future of African trap music.",
    url: "https://kwamedabie.com",
    siteName: "Kwame Dabie Official",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kwame Dabie - Ghanaian Hip-Hop Artist from Tema, Ghana",
        type: "image/jpeg",
      },
      {
        url: "/images/gallery/Dabie Logo png White.PNG",
        width: 800,
        height: 600,
        alt: "Kwame Dabie Official Logo - GVO Gargantuan Vibes Only",
        type: "image/png",
      },
      {
        url: "/images/upcoming/WWW - cover.JPG", 
        width: 800,
        height: 800,
        alt: "WWW - Latest Single by Kwame Dabie",
        type: "image/jpeg",
      }
    ],
    locale: "en_US",
    type: "website",
    countryName: "Ghana",
  },
  
  // Enhanced Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Kwame Dabie | Ghana's Rising Hip-Hop Star from Tema",
    description: "🎵 Stream WWW, Troubles & Gas 🇬🇭 Authentic Ghanaian hip-hop 🔥 GVO - Gargantuan Vibes Only",
    site: "@kwamedabie",
    creator: "@kwamedabie",
    images: [
      {
        url: "/og-image.jpg",
        alt: "Kwame Dabie - Ghanaian Hip-Hop Artist",
      }
    ],
  },
  
  // App-specific metadata
  manifest: "/manifest.json",
  
  // Additional metadata for better indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification codes
  verification: {
    google: "google-site-verification=BWAOO46BsbD_Brpm80Dew4liMsNHnzap9MROF2CcE8U",
    // yandex: "ADD_YANDEX_VERIFICATION_CODE", // Optional for African markets
    // bing: "ADD_BING_VERIFICATION_CODE", // Optional for international reach
  },
  
  // Category and classification
  category: "music",
  classification: "Music Artist Website",
  
  // Geographic and cultural targeting
  other: {
    'geo.region': 'GH-GA', // Ghana, Greater Accra
    'geo.placename': 'Tema, Ghana',
    'geo.position': '5.6698;-0.0166', // Tema coordinates
    'ICBM': '5.6698, -0.0166',
    'music.genre': 'Hip-Hop, Trap, Afrobeats',
    'music.artist': 'Kwame Dabie',
    'content.language': 'en',
    'content.region': 'Ghana',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": "https://kwamedabie.com/#musicgroup",
        "name": "Kwame Dabie",
        "alternateName": ["GVO", "Gargantuan Vibes Only", "Kwame Dabie GVO"],
        "description": "Kwame Dabie is Ghana's rising hip-hop star from Tema, delivering authentic Ghanaian trap music with English, Twi, and Pidgin-English lyrics. Known for hits like WWW, Troubles, and Gas.",
        "genre": ["Hip-Hop", "Trap", "Afrobeats", "Ghanaian Music", "African Hip-Hop", "West African Rap"],
        "foundingLocation": {
          "@type": "Place",
          "name": "Tema, Ghana",
          "addressCountry": "Ghana",
          "addressRegion": "Greater Accra Region",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "5.6698",
            "longitude": "-0.0166"
          }
        },
        "url": "https://kwamedabie.com",
        "mainEntityOfPage": "https://kwamedabie.com",
        "image": [
          "https://kwamedabie.com/og-image.jpg",
          "https://kwamedabie.com/images/gallery/Dabie Logo png White.PNG"
        ],
        "logo": "https://kwamedabie.com/images/gallery/Dabie Logo png White.PNG",
        "sameAs": [
          "https://www.instagram.com/kwamedabie",
          "https://www.twitter.com/kwamedabie",
          "https://www.tiktok.com/@kwamedabie",
          "https://www.facebook.com/kwamefuccindabie",
          "https://www.youtube.com/@kwamedabie",
          "https://linktr.ee/kwamedabie",
          "https://fanlink.tv/WWW-KwameDabie",
          "https://fanlink.tv/kwamedabie-troubles",
          "https://fanlink.tv/gas-kwamedabie-joey"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "email": "dabietunes@gmail.com",
            "contactType": "booking"
          },
          {
            "@type": "ContactPoint", 
            "email": "connect.gvo@gmail.com",
            "contactType": "management"
          }
        ],
        "musicAlbum": [
          {
            "@type": "MusicAlbum",
            "name": "WWW",
            "albumReleaseType": "SingleRelease",
            "datePublished": "2025",
            "url": "https://fanlink.tv/WWW-KwameDabie",
            "image": "https://kwamedabie.com/images/upcoming/WWW - cover.JPG"
          }
        ],
        "track": [
          {
            "@type": "MusicRecording",
            "name": "WWW",
            "datePublished": "2025",
            "url": "https://fanlink.tv/WWW-KwameDabie",
            "genre": ["Hip-Hop", "Trap"],
            "inAlbum": {
              "@type": "MusicAlbum",
              "name": "WWW"
            }
          },
          {
            "@type": "MusicRecording",
            "name": "Troubles",
            "datePublished": "2025-02",
            "url": "https://fanlink.tv/kwamedabie-troubles",
            "genre": ["Hip-Hop", "Afrobeats"]
          },
          {
            "@type": "MusicRecording",
            "name": "Gas",
            "datePublished": "2024",
            "url": "https://fanlink.tv/gas-kwamedabie-joey",
            "genre": ["Hip-Hop", "Trap"]
          }
        ],
        "awards": "Emerging Artist in Ghana Hip-Hop Scene",
        "recordLabel": "GVO - Gargantuan Vibes Only"
      },
      {
        "@type": "Person",
        "@id": "https://kwamedabie.com/#person",
        "name": "Kwame Dabie",
        "alternateName": ["GVO", "Kwame Dabie GVO"],
        "description": "Kwame Dabie is a talented Ghanaian hip-hop artist from Tema, Ghana. Known for his distinctive blend of trap music with English, Twi, and Pidgin-English lyrics, representing the new generation of African hip-hop.",
        "jobTitle": ["Hip-Hop Artist", "Rapper", "Music Producer"],
        "nationality": {
          "@type": "Country",
          "name": "Ghana"
        },
        "birthPlace": {
          "@type": "Place",
          "name": "Tema, Ghana",
          "addressCountry": "Ghana"
        },
        "homeLocation": {
          "@type": "Place",
          "name": "Tema, Ghana",
          "addressCountry": "Ghana",
          "addressRegion": "Greater Accra Region"
        },
        "url": "https://kwamedabie.com",
        "mainEntityOfPage": "https://kwamedabie.com",
        "image": "https://kwamedabie.com/og-image.jpg",
        "sameAs": [
          "https://www.instagram.com/kwamedabie",
          "https://www.twitter.com/kwamedabie",
          "https://www.tiktok.com/@kwamedabie",
          "https://www.facebook.com/kwamefuccindabie",
          "https://www.youtube.com/@kwamedabie",
          "https://linktr.ee/kwamedabie"
        ],
        "knowsAbout": [
          "Hip-Hop Music", "Trap Music", "Ghanaian Music", "Afrobeats", 
          "African Hip-Hop", "Music Production", "Tema Ghana", "Twi Language", "Pidgin English"
        ],
        "performer": [
          {
            "@type": "MusicGroup",
            "name": "Kwame Dabie"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://kwamedabie.com/#website",
        "name": "Kwame Dabie Official Website",
        "description": "Official website of Kwame Dabie, Ghana's rising hip-hop star from Tema. Stream music, read biography, and stay updated with latest releases.",
        "url": "https://kwamedabie.com",
        "inLanguage": "en-US",
        "copyrightYear": "2025",
        "copyrightHolder": {
          "@type": "Person",
          "name": "Kwame Dabie"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GVO - Gargantuan Vibes Only"
        },
        "about": {
          "@type": "Person",
          "name": "Kwame Dabie"
        },
        "mainEntity": {
          "@type": "Person",
          "name": "Kwame Dabie"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://kwamedabie.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://kwamedabie.com/#webpage",
        "url": "https://kwamedabie.com",
        "name": "Kwame Dabie | Official Website - Ghana's Rising Hip-Hop Star",
        "description": "Stream Kwame Dabie's latest hits: WWW, Troubles & Gas. Authentic Ghanaian hip-hop from Tema. Experience the future of African trap music.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://kwamedabie.com/#website"
        },
        "about": {
          "@id": "https://kwamedabie.com/#person"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://kwamedabie.com/og-image.jpg",
          "width": 1200,
          "height": 630
        },
        "datePublished": "2025-01-01",
        "dateModified": new Date().toISOString(),
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://kwamedabie.com"
            }
          ]
        }
      },
      {
        "@type": "Organization",
        "@id": "https://kwamedabie.com/#organization",
        "name": "GVO - Gargantuan Vibes Only",
        "alternateName": ["GVO", "Gargantuan Vibes Only"],
        "description": "GVO (Gargantuan Vibes Only) is the official brand and record label of Ghanaian hip-hop artist Kwame Dabie.",
        "url": "https://kwamedabie.com",
        "logo": "https://kwamedabie.com/images/gallery/GVO png .png",
        "foundingLocation": {
          "@type": "Place",
          "name": "Tema, Ghana"
        },
        "member": {
          "@type": "Person",
          "name": "Kwame Dabie"
        },
        "sameAs": [
          "https://www.instagram.com/kwamedabie",
          "https://www.twitter.com/kwamedabie"
        ]
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Web app manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Direct favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
        
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
          <Navbar />
          <ScrollAnimationsProvider>
            {children}
          </ScrollAnimationsProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
