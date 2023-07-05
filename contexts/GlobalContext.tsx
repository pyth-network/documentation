import { ethers, JsonRpcProvider } from "ethers";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Chain, useNetwork } from "wagmi";
import { arbitrum, avalanche, mainnet } from "wagmi/chains";
import PythAbi from "../abis/IPyth.json";
import PythErrorsAbi from "../abis/PythErrors.json";

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
  pythAddressConfig: PythAddressConfig;
  currentChainConfig?: Chain;

  // Provider for reading from the chain and signer for sending transactions.
  // If signer is null, the user's wallet is not connected.
  provider: ethers.Provider;
  setProvider: React.Dispatch<React.SetStateAction<ethers.Provider>>;
  signer: ethers.Signer | undefined;
  setSigner: React.Dispatch<React.SetStateAction<ethers.Signer | undefined>>;

  // The pyth contract on the current chain
  pythContract: ethers.Contract;

  // The ABI for the pyth contract
  pythAbi: any[];
}

export type NetworkType = "mainnet" | "testnet";

export const PriceServiceUrls: Record<string, string> = {
  mainnet: "https://xc-mainnet.pyth.network",
  testnet: "https://xc-testnet.pyth.network",
};

export interface PythAddressConfig {
  chainId: number;
  pythAddress: string;
  networkType: NetworkType;
}

// Network data for Ethereum and Avalanche
export const PythAddresses: Record<string, PythAddressConfig> = {
  ethereum: {
    chainId: 1,
    pythAddress: "0x4305FB66699C3B2702D4d05CF36551390A4c69C6",
    networkType: "mainnet",
  },
  avalanche: {
    chainId: 43114,
    pythAddress: "0x4305FB66699C3B2702D4d05CF36551390A4c69C6",
    networkType: "mainnet",
  },
  arbitrum: {
    chainId: 42161,
    pythAddress: "0xff1a0f4744e8582DF1aE09D5611b887B6a12925C",
    networkType: "mainnet",
  },
};

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export const useGlobalContext = () => useContext(GlobalContext);

const contractAbi = [...PythAbi, ...PythErrorsAbi];

const CHAINS = [mainnet, avalanche, arbitrum];

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [queryParameters, setQueryParameters] = useState<
    Record<string, string>
  >({});

  const defaultChainName = "arbitrum";
  // TODO: we may need to support "no network" as the default, because this may require a wallet.
  const [networkName, setNetworkName] = useState<string>(defaultChainName);
  const [pythAddressConfig, setPythAddressConfig] = useState<PythAddressConfig>(
    PythAddresses[defaultChainName]
  );
  const [provider, setProvider] = useState<ethers.Provider>(
    ethers.getDefaultProvider("https://arb1.arbitrum.io/rpc")
  );
  const [signer, setSigner] = useState<ethers.Signer | undefined>(undefined);

  const { chain } = useNetwork();
  const defaultChain = CHAINS.find(
    (chain) => chain.network === defaultChainName
  );
  const [currentChainConfig, setCurrentChainConfig] = useState<
    Chain | undefined
  >(defaultChain);

  const pythContract = useMemo(() => {
    return new ethers.Contract(
      pythAddressConfig.pythAddress,
      contractAbi,
      provider
    );
  }, [pythAddressConfig, provider]);

  useEffect(() => {
    async function helper() {
      setPythAddressConfig(PythAddresses[networkName]);
      const chainId = PythAddresses[networkName].chainId;
      const chain = CHAINS.find((chain) => chain.id === chainId);
      if (chain) {
        const rpcUrl = chain.rpcUrls.default.http[0];
        const provider = new JsonRpcProvider(rpcUrl);
        setProvider(provider);
        setCurrentChainConfig(chain);
      }
    }
    helper();
  }, [networkName]);

  useEffect(() => {
    if (chain) {
      const chainId = chain.id;
      const pythAddressConfig = Object.values(PythAddresses).find(
        (pythAddressConfig) => pythAddressConfig.chainId === chainId
      );
      if (pythAddressConfig) {
        const key = Object.keys(PythAddresses).find(
          (key) => PythAddresses[key] === pythAddressConfig
        );
        if (key) {
          setNetworkName(key);
        }
      }

      setCurrentChainConfig(chain);
    }
  }, [chain]);

  return (
    <GlobalContext.Provider
      value={{
        keyValueStore: queryParameters,
        setKeyValueStore: setQueryParameters,
        networkName,
        setNetworkName,
        pythAddressConfig,
        currentChainConfig,
        provider,
        setProvider,
        signer,
        setSigner,
        pythContract: pythContract,
        pythAbi: contractAbi,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
