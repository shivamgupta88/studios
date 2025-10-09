/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['agency.texttoreels.in'], // Add your domain here
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
