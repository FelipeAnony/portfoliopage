/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'user-images.githubusercontent.com',
    ],
  },
};

module.exports = nextConfig;
