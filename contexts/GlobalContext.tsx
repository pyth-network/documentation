import React, { createContext, useContext, useState } from 'react';
import {ethers} from 'ethers';

interface GlobalContextData {
  queryParameters: Record<string, string>;
  setQueryParameters: React.Dispatch<React.SetStateAction<Record<string, string>>>;

  // TODO: should this be a number?
  chainId: string,
  setChainId: React.Dispatch<React.SetStateAction<string>>,

  provider: ethers.Provider;
  setProvider: React.Dispatch<React.SetStateAction<ethers.Provider>>,

  signer: ethers.Signer | undefined;
  setSigner: React.Dispatch<React.SetStateAction<ethers.Signer | undefined>>,

  contractAddress: string,
  contractAbi: object,
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [queryParameters, setQueryParameters] = useState<Record<string, string>>({});
  const [chainId, setChainId] = useState<string>("1");
  const [provider, setProvider] = useState<ethers.Provider>(ethers.getDefaultProvider("https://arb1.arbitrum.io/rpc"));
  const [signer, setSigner] = useState<ethers.Signer | undefined>(undefined);

  const contractAddress = '0xff1a0f4744e8582DF1aE09D5611b887B6a12925C';
  const contractAbi = require('../abis/IPyth.json');

  // FIXME: this needs to accept the actual network id
  return (
    <GlobalContext.Provider value={{ queryParameters, setQueryParameters, chainId, setChainId, provider, setProvider, signer, setSigner, contractAddress, contractAbi }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const EvmNetworks = {
  'ethereum': {
    chainId: 1,
  },
  'arbitrum': {
    chainId: 42161
  }
}

export const connectBrowserWallet = () => {

}