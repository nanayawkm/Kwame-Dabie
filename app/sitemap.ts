import type { MetadataRoute } from "next"

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://kwamedabie.com")

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/archive`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/press`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ]
}
