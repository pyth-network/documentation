import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/Logo";

// TODO: populate this properly
const config: DocsThemeConfig = {
  logo: <Logo />,
  logoLink: "/documentation",
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
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Pyth Network Documentation",
    };
  },
};

export default config;
