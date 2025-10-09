/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['youragency.com'], // Add your domain here
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
