const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  eslint: {
    ignoreDuringBuilds: true,
  },
});

module.exports = withNextra();
