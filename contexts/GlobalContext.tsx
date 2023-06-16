import { ethers } from "ethers";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/** Global information available to all components on any page. */
export interface GlobalContextData {
  // This key-value store is the primary method of sharing state between components in an mdx file.
  // This store simplifies writing markdown (as you don't have to wrap the entire markdown file in a stateful component).
  // The typical usage of the store is to set keys via form fields, then use those keys to query APIs or render code snippets.
  // Note that key/value pairs are shared between pages as well.
  keyValueStore: Record<string, string>;
  setKeyValueStore: React.Dispatch<
    React.SetStateAction<Record<string, string>>
  >;

  // Ethereum-specific connection information /////////////////////////////////////

  // ID of the current chain
  networkName: string;
  setNetworkName: React.Dispatch<React.SetStateAction<string>>;
  networkConfig: EvmNetworkConfig;

  // Provider for reading from the chain and signer for sending transactions.
  // If signer is null, the user's wallet is not connected.
  provider: ethers.Provider;
  setProvider: React.Dispatch<React.SetStateAction<ethers.Provider>>;
  signer: ethers.Signer | undefined;
  setSigner: React.Dispatch<React.SetStateAction<ethers.Signer | undefined>>;

  // The pyth contract on the current chain
  pythContract: ethers.Contract;
}

export type NetworkType = "mainnet" | "testnet";

export const PriceServiceUrls: Record<string, string> = {
  mainnet: "https://xc-mainnet.pyth.network",
  testnet: "https://xc-testnet.pyth.network",
};

export interface EvmNetworkConfig {
  info: EvmNetworkInfo;
  pythAddress: string;
  networkType: NetworkType;
}

/** The network information required to populate a new network in a user's wallet */
interface EvmNetworkInfo {
  /** The chainId as a hexadecimal string, e.g., '0x1' */
  chainId: string;
  chainName: string;
  rpcUrls: string[];
  nativeCurrency: any;
  blockExplorerUrls: any;
}

// Network data for Ethereum and Avalanche
export const Networks: Record<string, EvmNetworkConfig> = {
  ethereum: {
    info: {
      chainId: "0x1", // Ethereum Mainnet
      chainName: "Ethereum Mainnet",
      // FIXME: this url obviously doesn't work
      rpcUrls: ["https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"],
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
      blockExplorerUrls: ["https://etherscan.io/"],
    },
    pythAddress: "0x4305FB66699C3B2702D4d05CF36551390A4c69C6",
    networkType: "mainnet",
  },
  avalanche: {
    info: {
      chainId: "0xa86a", // Avalanche Mainnet
      chainName: "Avalanche Mainnet",
      rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
      nativeCurrency: {
        name: "AVAX",
        symbol: "AVAX",
        decimals: 18,
      },
      blockExplorerUrls: ["https://cchain.explorer.avax.network/"],
    },
    pythAddress: "0x4305FB66699C3B2702D4d05CF36551390A4c69C6",
    networkType: "mainnet",
  },
  arbitrum: {
    info: {
      chainId: "0xa4b1",
      chainName: "Arbitrum Mainnet",
      rpcUrls: ["https://arb1.arbitrum.io/rpc"],
      nativeCurrency: {
        name: "AETH",
        symbol: "AETH",
        decimals: 18,
      },
      blockExplorerUrls: [],
    },
    pythAddress: "0xff1a0f4744e8582DF1aE09D5611b887B6a12925C",
    networkType: "mainnet",
  },
};

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [queryParameters, setQueryParameters] = useState<
    Record<string, string>
  >({});

  // TODO: we may need to support "no network" as the default, because this may require a wallet.
  const [networkName, setNetworkName] = useState<string>("arbitrum");
  const [networkConfig, setNetworkConfig] = useState<EvmNetworkConfig>(
    Networks["arbitrum"]
  );
  const [provider, setProvider] = useState<ethers.Provider>(
    ethers.getDefaultProvider("https://arb1.arbitrum.io/rpc")
  );
  const [signer, setSigner] = useState<ethers.Signer | undefined>(undefined);

  const contractAbi = useMemo(() => {
    const iPythAbi = require("../abis/IPyth.json");
    const errorAbi = require("../abis/PythErrors.json");
    return iPythAbi.concat(errorAbi);
  }, []);

  const pythContract = useMemo(() => {
    return new ethers.Contract(
      networkConfig.pythAddress,
      contractAbi,
      provider
    );
  }, [networkConfig, contractAbi, provider]);

  useEffect(() => {
    async function helper() {
      setNetworkConfig(Networks[networkName]);
      await switchNetwork(networkName);
      // @ts-ignore
      if (window.ethereum) {
        // @ts-ignore
        setProvider(new ethers.BrowserProvider(window.ethereum));
      } else {
        setProvider(
          ethers.getDefaultProvider(Networks[networkName].info.rpcUrls[0])
        );
      }
    }
    helper();
  }, [networkName]);

  return (
    <GlobalContext.Provider
      value={{
        keyValueStore: queryParameters,
        setKeyValueStore: setQueryParameters,
        networkName,
        setNetworkName,
        networkConfig,
        provider,
        setProvider,
        signer,
        setSigner,
        pythContract: pythContract,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

async function switchNetwork(networkName: string) {
  const networkData = Networks[networkName];

  if (!networkData) {
    throw new Error("Unsupported network");
  }

  // @ts-ignore
  if (window.ethereum) {
    // @ts-ignore
    const ethereum = window.ethereum;

    try {
      // Request the user to switch to the desired network
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: networkData.info.chainId }],
      });
    } catch (error: any) {
      // If the chain does not exist then add it
      if (error.code === 4902) {
        try {
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: [networkData.info],
          });
        } catch (addError: any) {
          console.error(addError);
        }
      }

      console.error(error);
    }
  }
}
