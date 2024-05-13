import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/Logo";

// TODO: populate this properly
const config: DocsThemeConfig = {
  logo: <Logo />,
  logoLink: "/",
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
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  navigation: false,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Pyth Network Documentation",
      openGraph: {
        url: "https://docs.pyth.network/",
        title: "Pyth Network Documentation",
        description: "Pyth Network Documentation",
        images: [
          {
            url: "https://docs.pyth.network/og-image.png",
            width: 1200,
            height: 630,
            alt: "Pyth Network Documentation OG Image",
            type: "image/png",
          },
        ],
      },
      twitter: {
        handle: "@PythNetwork",
        site: "https://pyth.network/",
        cardType: "summary_large_image",
      },
    };
  },
};

export default config;
