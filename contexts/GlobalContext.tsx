import React, { createContext, useContext, useState } from 'react';
import {ethers} from 'ethers';

/** Global information available to all components on any page. */
interface GlobalContextData {
  // This key-value store is the primary method of sharing state between components in an mdx file.
  // This store simplifies writing markdown (as you don't have to wrap the entire markdown file in a stateful component).
  // The typical usage of the store is to set keys via form fields, then use those keys to query APIs or render code snippets.
  // Note that key/value pairs are shared between pages as well.
  keyValueStore: Record<string, string>;
  setKeyValueStore: React.Dispatch<React.SetStateAction<Record<string, string>>>;

  // Ethereum-specific connection information /////////////////////////////////////

  // ID of the current chain
  chainId: string,
  setChainId: React.Dispatch<React.SetStateAction<string>>,

  // Provider for reading from the chain and signer for sending transactions.
  // If signer is null, the user's wallet is not connected.
  provider: ethers.Provider;
  setProvider: React.Dispatch<React.SetStateAction<ethers.Provider>>,
  signer: ethers.Signer | undefined;
  setSigner: React.Dispatch<React.SetStateAction<ethers.Signer | undefined>>,

  // Address and ABI of the pyth contract on the current chain
  pythContractAddress: string,
  pythContractAbi: object,
  networkType: string, // mainnet or testnet
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [queryParameters, setQueryParameters] = useState<Record<string, string>>({});
  // FIXME: The chain id and provider logic is hardcoded to arbitrum. We need to implement a network selector.
  const [chainId, setChainId] = useState<string>("42161");
  const [provider, setProvider] = useState<ethers.Provider>(ethers.getDefaultProvider("https://arb1.arbitrum.io/rpc"));
  const [signer, setSigner] = useState<ethers.Signer | undefined>(undefined);
  const contractAddress = '0xff1a0f4744e8582DF1aE09D5611b887B6a12925C';
  const contractAbi = require('../abis/IPyth.json');
  const networkType = 'mainnet'

  return (
    <GlobalContext.Provider value={{ keyValueStore: queryParameters, setKeyValueStore: setQueryParameters, chainId, setChainId, provider, setProvider, signer, setSigner, pythContractAddress: contractAddress, pythContractAbi: contractAbi, networkType }}>
      {children}
    </GlobalContext.Provider>
  );
};


/**
 * A projection of the GlobalContextData to a subset of properties useful for rendering text.
 * This type is often the argument to functions that render strings on the page.
 * The properties intentionally have short names to make it efficient to write rendering functions.
 * (It's not clear this is a good decision.)
 *
 * TODO: this type needs a better name.
 */
interface State {
  // The global key-value store
  kv: Record<string, string>,
  // Get the value of key from kv, or return a default value if the key's value is undefined.
  get: (key: string, orElse?: string) => string,

  // the pyth contract address
  addr: string,
  // mainnet or testnet
  networkType: string,

  // return one of the two arguments depending on whether this is a mainnet or testnet network.
  mOrT: (mainnet: string, testnet: string) => string
}

export function getState(context: GlobalContextData): State {
  return {
    kv: context.keyValueStore,
    get: (k, o) => context.keyValueStore[k] !== undefined ? context.keyValueStore[k] : o,
    addr: context.pythContractAddress,
    networkType: context.networkType,
    mOrT: (mainnet, testnet) => (context.networkType == 'mainnet' ? mainnet : testnet),
  }
}