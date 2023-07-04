const withNextra = require("nextra")("nextra-theme-docs", "./theme.config.tsx");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/documentation",
        permanent: true,
      },
    ];
  },
};

module.exports = withNextra(nextConfig);
