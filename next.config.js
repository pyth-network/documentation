const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

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
      {
        source: "/evm",
        destination: "/api-explorer/evm",
        permanent: true,
      },
      {
        source: "/aptos",
        destination: "/api-explorer/aptos",
        permanent: true,
      },
      {
        source: "/cosmwasm",
        destination: "/api-explorer/cosmwasm",
        permanent: true,
      },
    ];
  },
};

module.exports = withNextra(nextConfig);
