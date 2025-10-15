export interface ChainOverride {
  rpc?: string;
  nativeCurrency?: string;
  explorer?: string;
}

export const EntropyDeploymentsConfig: Record<string, ChainOverride> = {
  // Example overrides - add your custom configurations here
  // "network-id": {
  //   rpc: "https://custom-rpc-url.com",
  //   nativeCurrency: "CUSTOM"
  //   explorer: "https://custom-explorer.com"
  // },

  // Override examples (uncomment and modify as needed):
  "998": {
    rpc: "https://rpc.hyperliquid-testnet.xyz/evm",
    nativeCurrency: "HYPE",
    explorer: "https://app.hyperliquid-testnet.xyz/explorer",
  },
  "999": {
    rpc: "https://rpc.hypurrscan.io",
    nativeCurrency: "HYPE",
    explorer: "https://hyperevmscan.io",
  },
  "1328": {
    explorer: "https://testnet.seiscan.io",
  },
  "1992": {
    explorer: "https://sanko-arb-sepolia.explorer.caldera.xyz",
  },
  "9788": {
    explorer: "https://testnetv2.tabiscan.com",
  },
  "14601": {
    explorer: "https://testnet.sonicscan.org",
  },
  "91342": {
    explorer: "https://sepolia-explorer.giwa.io",
  },
};
