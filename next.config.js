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
  latex: true,
});

// Use this array as a shorter way to specify redirect URLs so we can write down a lot of them.
const permanentRedirectArray = [
  // Third version redirects
  ["/", "/home"],

  // First version of docs site -> third version

  ["/evm", "/price-feeds/use-real-time-data/evm"],
  // Second version of docs site -> third version
  ["/documentation/metrics/:path*", "/home/metrics/:path*"],
  [
    "/documentation/how-pyth-works/:slug*",
    "/price-feeds/how-pyth-works/:slug*",
  ],
  ["/documentation/benchmarks", "/price-feeds/use-historic-price-data"],
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
    "/price-feeds/schedule-price-updates/using-price-pusher",
  ],
  [
    "/price-feeds/schedule-price-updates/using-scheduler",
    "/price-feeds/schedule-price-updates/using-price-pusher",
  ],
  [
    "/documentation/pythnet-price-feeds/off-chain",
    "/price-feeds/core/fetch-price-updates",
  ],
  [
    "/price-feeds/use-real-time-data/off-chain",
    "/price-feeds/core/fetch-price-updates",
  ],
  [
    "/documentation/pythnet-price-feeds/evm",
    "/price-feeds/use-real-time-data/evm",
  ],

  ["/documentation", "/home"],

  ["/api-explorer/:slug*", "/price-feeds/api-reference/:slug*"],

  [
    "/guides/how-to-schedule-price-updates-with-gelato",
    "/price-feeds/schedule-price-updates/using-gelato",
  ],
  [
    "/guides/how-to-create-tradingview-charts",
    "/price-feeds/create-tradingview-charts",
  ],
  [
    "/home/oracle-integrity-staking/examples",
    "/home/oracle-integrity-staking/reward-examples",
  ],
  ["/guides", "/price-feeds"],

  // Lazer (top-level) to Pyth Pro Redirects - MUST come before general price-feeds redirects
  ["/lazer", "/price-feeds/pro"],
  ["/lazer/:path*", "/price-feeds/pro/:path*"],

  // Explicitly map legacy lazer paths under /price-feeds to Pro - MUST come before general price-feeds redirects
  ["/price-feeds/lazer", "/price-feeds/pro"],
  ["/price-feeds/lazer/:path*", "/price-feeds/pro/:path*"],

  [
    "/price-feeds/:path((?!core(?:/|$)|pro(?:/|$)).*)",
    "/price-feeds/core/:path",
  ],
  // some other price feed redirects
  ["/price-feeds/sponsored-feeds", "/price-feeds/push-feeds"],
  ["/price-feeds/core/sponsored-feeds", "/price-feeds/core/push-feeds"],
  [
    "/price-feeds/use-real-time-data/:path((?!pull-integration(?:/|$)).*)",
    "/price-feeds/use-real-time-data/pull-integration/:path",
  ],

  ["/benchmarks", "/price-feeds/use-historic-price-data"],
  [
    "/benchmarks/how-to-create-tradingview-charts",
    "/price-feeds/create-tradingview-charts",
  ],
  ["/benchmarks/api-instances", "/price-feeds/api-reference/"],
  ["/benchmarks/rate-limits", "/price-feeds/rate-limits/"],
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
    const permanentRedirects = permanentRedirectArray.map((value) => {
      return {
        source: value[0],
        destination: value[1],
        permanent: true,
      };
    });

    return [
      ...permanentRedirects,
      {
        source: "/price-feeds/api-reference/evm/:slug",
        destination: "https://api-reference.pyth.network/price-feeds/evm/:slug",
        permanent: false,
      },
      {
        source: "/price-feeds/api-reference/evm",
        destination: "https://api-reference.pyth.network/price-feeds/evm/",
        permanent: false,
      },
    ];
  },
};

module.exports = withNextra(nextConfig);
