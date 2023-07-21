import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { AppProps } from "next/app";
import "nextra-theme-docs/style.css";
import { ReactNode, useEffect, useState, createContext, Context } from "react";
import { WagmiConfig, createConfig } from "wagmi";
import { GrazProvider } from "graz";
import { osmosis } from "graz/chains";
import { arbitrum, avalanche, mainnet } from "wagmi/chains";
import { GlobalContextProvider } from "../contexts/GlobalContext";
import "../styles/styles.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const chains = [arbitrum, mainnet, avalanche];

type NextraAppProps = AppProps & {
  Component: AppProps["Component"] & {
    getLayout: (page: ReactNode) => ReactNode;
  };
};

export default function Nextra({ Component, pageProps }: NextraAppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const config = createConfig(
    getDefaultConfig({
      alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_KEY,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
      appName: "Pyth Network",
      chains,
    })
  );

  // FIXME: some sort of react error is happening due to the graz/wagmi interaction.
  // Make the global context available to every page.
  return (
    // prevent react hydration error
    mounted && (
      <GrazProvider>
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
    )
  );
}
