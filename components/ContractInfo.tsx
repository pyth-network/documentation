import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';
import {useGlobalContext} from '../contexts/GlobalContext';
import EvmNetworkSelector from "./EvmNetworkSelector";

/**
 * A component that displays information about the current EVM network and
 * the configuration of the Pyth contract deployed on that network.
 */
const ContractInfo: React.FC<{}> = ({}) => {
  const { provider, networkConfig, pythContractAbi } = useGlobalContext();

  let [fee, setFee] = useState<string>('loading...');
  let [validTimePeriod, setValidTimePeriod] = useState<string>('loading...');

  useEffect(() => {
    async function helper() {
      const contract = new ethers.Contract(networkConfig.pythAddress, pythContractAbi, provider);
      try {
        setFee((await contract.getUpdateFee(["0x01"])).toString());
        setValidTimePeriod((await contract.getValidTimePeriod()).toString())
      } catch (error: any) {
        setFee("loading...")
        setValidTimePeriod("loading...")
      }
    }
    helper();
  }, [provider, networkConfig, pythContractAbi])

  return (<div>
    Connected to the <EvmNetworkSelector /> network.

    <table>
      <tbody>
      <tr><td>Contract address</td><td>{networkConfig.pythAddress}</td></tr>
      <tr><td>Chain id</td><td> {networkConfig.info.chainId}</td></tr>
      <tr><td>Update fee</td><td> {fee}</td></tr>
      <tr><td>Valid time period</td><td> {validTimePeriod}</td></tr>
      </tbody>
    </table>
  </div>);
};

export default ContractInfo;