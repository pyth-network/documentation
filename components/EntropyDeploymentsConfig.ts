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
    explorer: "https://testnet.purrsec.com/",
  },
  "999": {
    rpc: "https://rpc.hypurrscan.io",
    nativeCurrency: "HYPE",
  },
  "91342": {
    explorer: "https://sepolia-explorer.giwa.io",
  },
  "1992": {
    explorer: "https://sanko-arb-sepolia.explorer.caldera.xyz",
  },
  "14601": {
    explorer: "https://testnet.sonicscan.org",
  },
  "9788": {
    explorer: "https://testnetv2.tabiscan.com",
  },
};
