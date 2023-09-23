/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'grootportfolio.s3.us-west-2.amazonaws.com',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
}

module.exports = nextConfig
