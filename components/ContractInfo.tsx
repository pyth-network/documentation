import React, {useEffect, useState} from 'react';
import {ethers, ParamType, Provider} from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import {EvmNetworks, useGlobalContext} from '../contexts/GlobalContext';

const ContractInfo: React.FC<{}> = ({}) => {
  const { keyValueStore, provider, chainId, pythContractAddress, pythContractAbi, setProvider, setChainId, setSigner } = useGlobalContext();

  let [fee, setFee] = useState<string>('');
  let [validTimePeriod, setValidTimePeriod] = useState<string>('foo');

  useEffect(() => {
    async function helper() {
      const contract = new ethers.Contract(pythContractAddress, pythContractAbi, provider);
      setFee((await contract.getUpdateFee(["0x01"])).toString());
      setValidTimePeriod((await contract.getValidTimePeriod()).toString())
    }
    helper();
  }, [provider, pythContractAddress, pythContractAbi])

  const selectNetwork = async (networkId) => {
    const ethereumProvider = await detectEthereumProvider();

    if (ethereumProvider) {
      // @ts-ignore
      const myProvider = new ethers.BrowserProvider(ethereumProvider, 1);
      setProvider(myProvider);
      // It also provides an opportunity to request access to write
      // operations, which will be performed by the private key
      // that MetaMask manages for the user.
      const mySigner = await myProvider.getSigner();
      setSigner(mySigner);
      // Get the current network ID
      const networkId = (await myProvider.getNetwork()).chainId.toString();
      setChainId(networkId);
    } else {
      alert('Please install MetaMask!');
    }

  }

  return (<div>
    Connected to the {chainId} network.
    {Object.entries(EvmNetworks).map(([network, networkConfig]) => {
      return (<p onClick={(e) => selectNetwork(network)}>{network}</p>);
    })}
    <table>
      <tbody>
      <tr><td>Contract address</td><td>{pythContractAddress}</td></tr>
      <tr><td>Chain id</td><td> {chainId}</td></tr>
      <tr><td>Update fee</td><td> {fee}</td></tr>
      <tr><td>Valid time period</td><td> {validTimePeriod}</td></tr>
      </tbody>
    </table>
  </div>);
};

export default ContractInfo;