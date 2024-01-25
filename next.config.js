const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

const oldDocPaths = [[]];

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
        destination: "/home",
        permanent: true,
      },
      {
        source: "/evm",
        destination: "/price-feeds/api-reference/evm",
        permanent: true,
      },
      {
        source: "/aptos",
        destination: "/price-feeds/api-reference/aptos",
        permanent: true,
      },
      {
        source: "/cosmwasm",
        destination: "/price-feeds/api-reference/cosmwasm",
        permanent: true,
      },
    ];
  },
};

module.exports = withNextra(nextConfig);
