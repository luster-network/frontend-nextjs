/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  unoptimised: true
}
module.exports = {
  images: {
    domains: ['drive.google.com'],
  },
};

module.exports = nextConfig
