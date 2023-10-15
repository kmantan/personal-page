/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'projectpokemon.org',
        port: '',
        pathname: '/images/normal-sprite/**'
      }
    ]
  },
}

module.exports = nextConfig
