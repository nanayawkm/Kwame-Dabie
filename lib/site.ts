// The site's one official address. Used for canonical links, link previews, the sitemap and robots.txt.
// Fixed here on purpose: Vercel's "production URL" still pointed at the expired kwamedabie.com.
export const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.dabiebomaye.com").replace(/\/$/, "")
