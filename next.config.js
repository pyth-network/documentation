const { BUNDLED_LANGUAGES, getHighlighter } = require("shiki");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    rehypePrettyCodeOptions: {
      getHighlighter: (options) =>
        getHighlighter({
          ...options,
          langs: [
            ...BUNDLED_LANGUAGES,
            {
              id: "cairo",
              scopeName: "source.cairo",
              path: "../../public/syntax/cairo.json",
            },
          ],
        }),
    },
  },
});

// Use this array as a shorter way to specify redirect URLs so we can write down a lot of them.
const permanentRedirectArray = [
  // Third version redirects
  ["/", "/home"],

  // First version of docs site -> third version

  ["/evm", "/price-feeds/use-real-time-data/evm"],
  ["/aptos", "/price-feeds/use-real-time-data/aptos"],
  ["/cosmwasm", "/price-feeds/use-real-time-data/cosmwasm"],

  // Second version of docs site -> third version
  ["/documentation/metrics/:path*", "/home/metrics/:path*"],
  [
    "/documentation/how-pyth-works/:slug*",
    "/price-feeds/how-pyth-works/:slug*",
  ],
  ["/documentation/benchmarks", "/benchmarks"],
  ["/pyth-token/:path*", "/home/pyth-token/:path*"],
  ["/documentation/publish-data/:slug*", "/price-feeds/publish-data/:slug*"],
  [
    "/documentation/solana-price-feeds/:slug*",
    "/price-feeds/solana-price-feeds/:slug*",
  ],
  ["/documentation/whitepaper/:slug*", "/price-feeds/whitepaper/:slug*"],
  ["/documentation/security", "/home/security"],

  ["/documentation/entropy", "/entropy"],
  ["/documentation/entropy/protocol-design", "/entropy/protocol-design"],
  ["/documentation/entropy/best-practices", "/entropy/best-practices"],
  [
    "/documentation/entropy/solidity-sdk",
    "/entropy/generate-random-numbers/solidity-sdk",
  ],
  [
    "/documentation/entropy/evm",
    "/entropy/generate-random-numbers/solidity-sdk",
  ],

  ["/documentation/pythnet-price-feeds", "/price-feeds/pythnet-price-feeds"],
  [
    "/documentation/pythnet-price-feeds/on-demand",
    "/price-feeds/pythnet-price-feeds/pull-updates",
  ],
  [
    "/documentation/pythnet-price-feeds/best-practices",
    "/price-feeds/best-practices",
  ],
  [
    "/price-feeds/pythnet-price-feeds/best-practices",
    "/price-feeds/best-practices",
  ],
  [
    "/price-feeds/pythnet-price-feeds/pull-updates",
    "/price-feeds/pull-updates",
  ],
  [
    "/price-feeds/solana-price-feeds/best-practices",
    "/price-feeds/best-practices",
  ],
  [
    "/documentation/pythnet-price-feeds/hermes",
    "/price-feeds/how-pyth-works/hermes",
  ],
  ["/pythnet-price-feeds/hermes", "/price-feeds/how-pyth-works/hermes"],
  [
    "/documentation/pythnet-price-feeds/scheduler",
    "/price-feeds/schedule-price-updates/using-scheduler",
  ],
  [
    "/documentation/pythnet-price-feeds/aptos",
    "/price-feeds/use-real-time-data/aptos",
  ],
  [
    "/documentation/pythnet-price-feeds/cosmwasm",
    "/price-feeds/use-real-time-data/cosmwasm",
  ],
  [
    "/documentation/pythnet-price-feeds/sui",
    "/price-feeds/use-real-time-data/sui",
  ],
  [
    "/documentation/pythnet-price-feeds/near",
    "/price-feeds/use-real-time-data/near",
  ],
  [
    "/documentation/pythnet-price-feeds/off-chain",
    "/price-feeds/use-real-time-data/off-chain",
  ],
  [
    "/documentation/pythnet-price-feeds/evm",
    "/price-feeds/use-real-time-data/evm",
  ],

  ["/documentation", "/home"],

  ["/api-explorer/:slug*", "/price-feeds/api-reference/:slug*"],
  [
    "/price-feeds/api-reference/evm/:slug*",
    "https://api-reference.pyth.network/price-feeds/evm/:slug*",
  ],

  [
    "/guides/how-to-schedule-price-updates-with-gelato",
    "/price-feeds/schedule-price-updates/using-gelato",
  ],
  [
    "/guides/how-to-create-tradingview-charts",
    "/benchmarks/how-to-create-tradingview-charts",
  ],
  ["/guides", "/price-feeds"],
];

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
    return permanentRedirectArray.map((value) => {
      return {
        source: value[0],
        destination: value[1],
        permanent: true,
      };
    });
  },
};

module.exports = withNextra(nextConfig);
