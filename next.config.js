/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'user-images.githubusercontent.com',
    ],
  },
};

module.exports = nextConfig;
