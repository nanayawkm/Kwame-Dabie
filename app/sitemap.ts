import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"


export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/music`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/press`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ]
}
