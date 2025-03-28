/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js config options go here
  // For example:
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
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
}

module.exports = nextConfig