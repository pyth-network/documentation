import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { GrazProvider } from "graz";
import { AppProps } from "next/app";
import Script from "next/script";
import "nextra-theme-docs/style.css";
import { ReactNode, useEffect, useState } from "react";
import { WagmiConfig, createConfig } from "wagmi";
import { arbitrum, avalanche, mainnet, sepolia } from "wagmi/chains";
import { CosmosChains, GlobalContextProvider } from "../contexts/GlobalContext";
import "../styles/styles.css";

const chains = [arbitrum, mainnet, avalanche, sepolia];

type NextraAppProps = AppProps & {
  Component: AppProps["Component"] & {
    getLayout: (page: ReactNode) => ReactNode;
  };
};

const config = createConfig(
  getDefaultConfig({
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_KEY,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    appName: "Pyth Network",
    chains,
  })
);

export default function Nextra({ Component, pageProps }: NextraAppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Make the global context available to every page.
  return (
    // prevent react hydration error
    mounted && (
      <>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7TVVW3MEK7"
        />
        <Script id="google-tag">
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', 'G-7TVVW3MEK7');
       `}
        </Script>
        <GrazProvider grazOptions={{ chains: CosmosChains }}>
          <WagmiConfig config={config}>
            <ConnectKitProvider
              theme="midnight"
              customTheme={{
                "--ck-connectbutton-background": "#E6DAFE",
                "--ck-connectbutton-hover-background": "#F2ECFF",
                "--ck-connectbutton-color": "#141227",
                "--ck-font-family": "Red Hat Text, sans-serif",
                "--ck-connectbutton-font-size": "14px",
              }}
            >
              <GlobalContextProvider>
                <Component {...pageProps} />
              </GlobalContextProvider>
            </ConnectKitProvider>
          </WagmiConfig>
        </GrazProvider>
      </>
    )
  );
}
