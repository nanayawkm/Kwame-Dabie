/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // "The Kwame Dabie era" became "More music"; old links keep working
  async redirects() {
    return [
      { source: "/archive", destination: "/music", permanent: true },
      // one official address: the old Vercel address forwards to the domain
      { source: "/:path*", has: [{ type: "host", value: "dabie-bomaye.vercel.app" }], destination: "https://www.dabiebomaye.com/:path*", permanent: true },
    ]
  },
  compress: true,
}

export default nextConfig
