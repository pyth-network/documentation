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
import {
  injective,
  injectivetestnet,
  juno,
  neutron,
  neutrontestnet,
  osmosis,
  osmosistestnet,
  seitestnet2,
} from "graz/chains";
import PythAbi from "../abis/IPyth.json";
import PythErrorsAbi from "../abis/PythErrors.json";
import { ChainInfo } from "@keplr-wallet/types";

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

  // Provider for reading from the chain.
  provider: ethers.Provider;
  setProvider: React.Dispatch<React.SetStateAction<ethers.Provider>>;

  // The pyth contract on the current chain
  pythContract: ethers.Contract;

  // The ABI for the pyth contract
  pythAbi: any[];

  // Cosmos chain configuration
  cosmosChainId: string;
  setCosmosChainId: React.Dispatch<React.SetStateAction<string>>;
  cosmosChainConfig: PythCosmosConfig;
}

export type NetworkType = "mainnet" | "testnet";

export const PriceServiceUrls: Record<string, string> = {
  mainnet: "https://xc-mainnet.pyth.network",
  testnet: "https://xc-testnet.pyth.network",
};

export const PriceServiceHermesUrls: Record<string, string> = {
  mainnet: "https://hermes.pyth.network",
  testnet: "https://hermes.pyth.network", // Check for testnet url
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

export interface PythCosmosConfig {
  chainId: string;
  pythAddress: string;
  // TODO: stable/beta :(
  networkType: NetworkType;
}

export const PythCosmosAddresses: Record<string, PythCosmosConfig> = {
  injective_mainnet: {
    // TODO: can't seem to connect to this RPC right now
    chainId: "injective-1",
    pythAddress: `inj12j43nf2f0qumnt2zrrmpvnsqgzndxefujlvr08`,
    networkType: "mainnet",
  },
  osmosis_mainnet: {
    chainId: "osmosis-1",
    pythAddress: `osmo13ge29x4e2s63a8ytz2px8gurtyznmue4a69n5275692v3qn3ks8q7cwck7`,
    networkType: "mainnet",
  },
  injective_testnet: {
    chainId: "injective-888",
    pythAddress: `inj18hckkzqf47mdhd734g6papk6wj20y24rm43sk9`,
    networkType: "mainnet",
  },
  sei_atlantic_2: {
    chainId: "atlantic-2",
    pythAddress: `sei1w2rxq6eckak47s25crxlhmq96fzjwdtjgdwavn56ggc0qvxvw7rqczxyfy`,
    networkType: "mainnet",
  },
  neutron_pion_1: {
    chainId: "pion-1",
    pythAddress: `neutron1f86ct5az9qpz2hqfd5uxru02px2a3tz5zkw7hugd7acqq496dcms22ehpy`,
    networkType: "mainnet",
  },
  juno: {
    chainId: "juno-1",
    pythAddress: `juno1eacsrua27njc35pxz37y97gmcjs899t59f8pf0rkejjyvtmhws5q6lxsdd`,
    networkType: "mainnet",
  },
  neutron: {
    chainId: "neutron-1",
    pythAddress:
      "neutron1m2emc93m9gpwgsrsf2vylv9xvgqh654630v7dfrhrkmr5slly53spg85wv",
    networkType: "mainnet",
  },
  osmosis_testnet_5: {
    chainId: "osmo-test-5",
    pythAddress:
      "osmo1hpdzqku55lmfmptpyj6wdlugqs5etr6teqf7r4yqjjrxjznjhtuqqu5kdh",
    networkType: "mainnet",
  },
};

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export const useGlobalContext = () => useContext(GlobalContext);

const contractAbi = [...PythAbi, ...PythErrorsAbi];

const CHAINS = [mainnet, avalanche, arbitrum];
export const CosmosChains = [
  osmosis,
  osmosistestnet,
  injective,
  injectivetestnet,
  seitestnet2,
  neutron,
  neutrontestnet,
  juno,
];

export function getCosmosChainFromConfig(chainId: string): ChainInfo {
  return CosmosChains.find((chain) => chain.chainId == chainId)!;
}

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

  const [cosmosChainId, setCosmosChainId] = useState<string>("neutron");
  const cosmosChainConfig = useMemo<PythCosmosConfig>(
    () => PythCosmosAddresses[cosmosChainId],
    [cosmosChainId]
  );

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
      const pythAddressConfig = Object.entries(PythAddresses).find(
        ([, value]) => value.chainId === chainId
      );
      if (pythAddressConfig) {
        const [key] = pythAddressConfig;
        setNetworkName(key);
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
        pythContract: pythContract,
        pythAbi: contractAbi,
        cosmosChainId,
        setCosmosChainId,
        cosmosChainConfig,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
