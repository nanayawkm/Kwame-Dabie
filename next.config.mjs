/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // "The Kwame Dabie era" became "More music"; old links keep working
  async redirects() { return [{ source: "/archive", destination: "/music", permanent: true }] },
  compress: true,
}

export default nextConfig
