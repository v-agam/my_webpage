/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    /* appDir: true, */
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000', // Change this if your dev server uses a different port
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig


