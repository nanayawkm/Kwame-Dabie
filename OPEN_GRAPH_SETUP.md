# Open Graph Image Setup for Kwame Dabie Website

## Overview
This document explains the Open Graph (OG) image setup for Kwame Dabie's official website, ensuring optimal social media sharing and SEO performance.

## What Are Open Graph Images?
Open Graph images are the preview images that appear when your website is shared on social media platforms like Facebook, Twitter, LinkedIn, and others. They're crucial for:
- **Increased engagement** - Posts with images get significantly more clicks and shares
- **Brand consistency** - Control how your content appears across platforms
- **Professional appearance** - Avoid random or inappropriate image selection

## Current Setup

### 1. Metadata Configuration (`app/layout.tsx`)
```typescript
export const metadata: Metadata = {
  // ... other metadata
  openGraph: {
    title: "Kwame Dabie | Official Website - Ghanaian Hip-Hop Artist",
    description: "Official website of Kwame Dabie, an emerging powerhouse in Ghana's hip-hop landscape from Tema.",
    url: "https://kwamedabie.com",
    siteName: "Kwame Dabie Official",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kwame Dabie - Ghanaian Hip-Hop Artist",
        type: "image/jpeg",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwame Dabie | Official Website - Ghanaian Hip-Hop Artist",
    description: "Official website of Kwame Dabie, an emerging powerhouse in Ghana's hip-hop landscape from Tema.",
    site: "@kwamedabie",
    creator: "@kwamedabie",
    images: ["/og-image.jpg"],
  }
}
```

### 2. Image Specifications
- **Primary OG Image**: `/public/og-image.jpg`
- **Dimensions**: 1200 x 630 pixels (1.91:1 aspect ratio)
- **File Size**: < 1MB (optimized for fast loading)
- **Format**: JPEG (best balance of quality and file size)

### 3. Platform-Specific Optimizations

#### Facebook
- **Recommended**: 1200 x 630 pixels ✅
- **Minimum**: 600 x 315 pixels
- **Max File Size**: 8MB
- **Supported Formats**: JPEG, PNG

#### Twitter/X
- **Large Image Card**: 1200 x 675 pixels (we use 1200 x 630 which works well)
- **Summary Card**: 1200 x 630 pixels ✅
- **Max File Size**: 5MB
- **Supported Formats**: JPEG, PNG, WebP

#### LinkedIn
- **Recommended**: 1200 x 627 pixels (very close to our 630px) ✅
- **Aspect Ratio**: 1.91:1
- **Max File Size**: No specific limit mentioned

## Testing Your Open Graph Images

### 1. Facebook Sharing Debugger
1. Go to [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your website URL: `https://kwamedabie.com`
3. Click "Debug" to see how your link will appear on Facebook
4. Use "Scrape Again" if you've updated the image

### 2. Twitter Card Validator
1. Go to [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Enter your website URL
3. Click "Preview Card" to see the Twitter appearance

### 3. LinkedIn Post Inspector
1. Go to [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. Enter your website URL
3. Check how your post will appear on LinkedIn

### 4. General OG Testing Tools
- **OpenGraph.xyz**: https://www.opengraph.xyz/
- **Meta Tags**: https://metatags.io/
- **Social Share Preview**: https://socialsharepreview.com/

## Best Practices Implemented

### ✅ Image Design Guidelines
- **Consistent branding** with website colors (black, gold, green)
- **Clear, readable text** that works at small sizes
- **High contrast** for accessibility
- **Professional appearance** representing the artist

### ✅ Technical Optimization
- **Proper aspect ratio** (1.91:1) for universal compatibility
- **Optimized file size** for fast loading
- **Multiple fallback images** in metadata
- **Alt text** for accessibility

### ✅ SEO Enhancement
- **Structured data** (JSON-LD) for search engines
- **Comprehensive metadata** including keywords
- **Sitemap.xml** with image information
- **Robots.txt** for crawler guidance

## Updating Open Graph Images

### When to Update
- New album/single releases
- Major brand changes
- Seasonal promotions
- Special events or announcements

### How to Update
1. **Create new image** following the 1200 x 630 specification
2. **Replace** `/public/og-image.jpg` with your new image
3. **Test** using the debugging tools mentioned above
4. **Clear cache** on social platforms if needed

### Cache Clearing
If the old image still appears after updating:
1. **Facebook**: Use the Sharing Debugger "Scrape Again" button
2. **Twitter**: Images update automatically, may take a few minutes
3. **LinkedIn**: Use the Post Inspector to refresh

## Custom OG Images for Different Pages

For future expansion, you can create page-specific OG images by:

1. **Creating individual images** for different sections/pages
2. **Using dynamic metadata** in Next.js page components
3. **Implementing conditional logic** based on page content

Example for a music page:
```typescript
export const metadata: Metadata = {
  openGraph: {
    images: ['/og-image-music.jpg'],
  },
}
```

## Monitoring and Analytics

### Track Performance
- **Social media analytics** to see sharing engagement
- **Google Analytics** for social referral traffic
- **Search Console** for appearance in search results

### Key Metrics
- **Click-through rates** from social media
- **Social shares** and engagement
- **Brand recognition** and consistency

## Troubleshooting Common Issues

### Image Not Appearing
1. Check file path and existence
2. Verify image dimensions
3. Ensure proper metadata tags
4. Test file accessibility (not blocked by robots.txt)

### Wrong Image Showing
1. Clear social media caches
2. Check for multiple og:image tags
3. Verify image URL is absolute, not relative

### Image Appears Cropped
1. Verify 1.91:1 aspect ratio
2. Keep important content in center 90% of image
3. Test on multiple platforms

## Contact and Support

For questions about Open Graph implementation:
- **Technical Issues**: Check Next.js documentation on metadata
- **Design Updates**: Ensure brand consistency with current website design
- **Platform Issues**: Use official debugging tools from each platform

---

**Last Updated**: January 2025  
**Website**: https://kwamedabie.com  
**Social Media**: @kwamedabie 