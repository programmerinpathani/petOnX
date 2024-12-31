/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  swcMinify: false,
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
  experimental: {
    forceSwcTransforms: false
  }
};

module.exports = nextConfig;