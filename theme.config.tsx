import { DocsThemeConfig } from "nextra-theme-docs";

// TODO: populate this properly
const config: DocsThemeConfig = {
  logo: <span>Pyth Network Documentation</span>,
  project: {
    link: "https://github.com/pyth-network/",
  },
  chat: {
    link: "https://discord.gg/invite/PythNetwork",
  },
  docsRepositoryBase: "https://github.com/pyth-network/documentation",
  footer: {
    text: "Pyth Network Documentation",
  },
  darkMode: false,
  nextThemes: {
    forcedTheme: "dark",
  },
};

export default config;
