import React, {useEffect, useState} from 'react';
import {ethers, ParamType, Provider} from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import { useGlobalContext } from '../contexts/GlobalContext';

interface EvmSendProps {
  functionName: string,
  buildArguments: (kvs: Record<string, string>) => any[] | undefined,
  feeKey: string | undefined
}

/**
 * Allow the user to send a transaction to an EVM chain and visualize the response.
 * This component will invoke `functionName` on the pyth contract provided in the global context.
 * The arguments to the function will be the values of argumentKeys[] in the global key-value store, i.e.,
 * `pythContract.functionName(valueOf(argumentKeys[0]), valueOf(argumentKeys[1]), ...)`. If `feeKey` is provided,
 * the value of this key will be parsed as a number of wei and passed as the value of the transaction.
 *
 * TODO: probably better to pass the contract address / ABI as arguments (?)
 */
const EvmSend: React.FC<EvmSendProps> = ({
                                           functionName,
                                           buildArguments,
                                           feeKey
                                         }) => {

  const { keyValueStore, provider, setProvider, signer, setSigner, networkName, networkConfig, pythContractAbi } = useGlobalContext();

  const [solidityQuery, setSolidityQuery] = useState<string>(null);
  const [response, setResponse] = useState<string | undefined>(undefined);

  const [isStale, setIsStale] = useState<boolean>(false);

  useEffect(() => {
    setIsStale(true);
  }, [keyValueStore])

  const connectWallet = async () => {
    const ethereumProvider = await detectEthereumProvider();

    if (ethereumProvider) {
      // @ts-ignore
      const myProvider = new ethers.BrowserProvider(ethereumProvider)
      setProvider(myProvider);

      // It also provides an opportunity to request access to write
      // operations, which will be performed by the private key
      // that MetaMask manages for the user.
      const mySigner = await myProvider.getSigner();
      setSigner(mySigner);
    } else {
      alert('Please install MetaMask!');
    }
  };

  const sendTransaction = async () => {
    if (signer != undefined) {
      const contract = new ethers.Contract(networkConfig.pythAddress, pythContractAbi, provider);
      const contractWithSigner = contract.connect(signer);

      const args: any[] | undefined = buildArguments(keyValueStore);

      let extraArguments: any | undefined = {};
      let feeString = '';
      if (feeKey !== undefined) {
        // TODO: validate argument
        try {
          extraArguments["value"] = ethers.toBigInt(keyValueStore[feeKey]);
          feeString = keyValueStore[feeKey];
        } catch (error) {
          extraArguments = undefined;
        }
      }

      // TODO: validate arguments
      if (args === undefined || extraArguments === undefined) {
        setResponse(`Please populate all of the arguments with valid values.`);
        setIsStale(false);
      } else {

        setSolidityQuery(`${functionName}(${[...args]}) value: ${feeString}`);

        try {
          // FIXME: The args spread here is wrong (has an array around it)
          // as a hack to support array-valued parameters.
          const tx = await contractWithSigner[functionName](...args, extraArguments);
          const receipt = await tx.wait();
          const responseString = JSON.stringify(receipt);
          setResponse(responseString);
          setIsStale(false);
        } catch (error) {
          setResponse(error.toString());
          setIsStale(false);
        }
      }
    } else {
      alert('Please connect your wallet first!');
    }
  };

  const clearResponse = async () => {
    setResponse(undefined)
  }

  return (<div className={"api-params"}>
    { signer !== undefined ? <div>
      <button onClick={sendTransaction}>Execute</button>
      <button onClick={clearResponse}>Clear</button>
      {response !== undefined ?
        <div className={"response " + (isStale ? "stale" : "")} >
          <div className={"request"}>{solidityQuery}</div>
          <pre>{response}</pre>
        </div>
        : <div className={"response"} />
      }

    </div> : <button onClick={connectWallet}>Connect your wallet </button>}
  </div>);
};

export default EvmSend;