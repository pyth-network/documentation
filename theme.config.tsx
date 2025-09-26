import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "./components/Logo";

// TODO: populate this properly
const config: DocsThemeConfig = {
  logo: <Logo className="w-[24px] h-[30px] fill-dark dark:fill-light" />,
  logoLink: "/",
  primaryHue: {
    dark: 267,
    light: 265,
  },
  primarySaturation: {
    dark: 95,
    light: 100,
  },
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
  banner: {
    key: "pyth-pro-banner",
    dismissible: true,
    text: (
      <a
        href="/price-feeds/pro"
        target="_blank"
        className="flex items-center justify-center gap-2 text-white hover:text-white/90 transition-colors"
      >
        <span className="text-lg">⚡</span>
        <span className="font-semibold">
          Trade in real time: Pyth Pro introduces 1 ms updates
        </span>
        <span className="text-sm opacity-90">→</span>
      </a>
    ),
  },
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
