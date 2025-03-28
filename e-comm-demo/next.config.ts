/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js config options go here
  // For example:
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'],
  },

  // Add the headers configuration directly in the main config
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'xr-spatial-tracking=(self)'
          },
          // You can add more headers here if needed
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      }
    ]
  },

  // Other Next.js config options can continue here
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig