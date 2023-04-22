import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import {useGlobalContext} from '../contexts/GlobalContext';

/**
 * A component that displays information about the current EVM network and
 * the configuration of the Pyth contract deployed on that network.
 */
const ContractInfo: React.FC<{}> = ({}) => {
  const { provider, chainId, pythContractAddress, pythContractAbi, setProvider, setChainId, setSigner } = useGlobalContext();

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

  return (<div>
    Connected to the {chainId} network.
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