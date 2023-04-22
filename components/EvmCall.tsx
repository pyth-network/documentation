import React, {useEffect, useState} from 'react';
import {ethers, ParamType, Provider} from 'ethers';
import { useGlobalContext } from '../contexts/GlobalContext';

interface EvmCallProps {
  functionName: string;
  argumentKeys: string[]
}

/**
 * Allow the user to call a read-only function on an EVM chain and visualize the response.
 * This component will invoke `functionName` on the pyth contract provided in the global context.
 * The arguments to the function will be the values of argumentKeys[] in the global key-value store, i.e.,
 * `pythContract.functionName(valueOf(argumentKeys[0]), valueOf(argumentKeys[1]), ...)`.
 *
 * TODO: probably better to pass the contract address / ABI as arguments (?)
 * TODO: support array-valued arguments
 */
const EvmCall: React.FC<EvmCallProps> = ({
                                                               functionName,
                                                               argumentKeys,
                                                             }) => {

  const [solidityQuery, setSolidityQuery] = useState<string>(null);
  const [response, setResponse] = useState<string | undefined>(undefined);

  const [isStale, setIsStale] = useState<boolean>(false);

  const { keyValueStore, provider, pythContractAddress, pythContractAbi } = useGlobalContext();

  useEffect(() => {
    setIsStale(true);
  }, [keyValueStore])


  const sendTransaction = async () => {
    const contract = new ethers.Contract(pythContractAddress, pythContractAbi, provider);

    const args: any[] = argumentKeys.map((v) => keyValueStore[v]);

    // TODO: validate arguments
    if (args.some((value) => value === undefined)) {
      setResponse(`missing some arguments: ${args}`);
    } else {

      setSolidityQuery(`${functionName}(${[...args]})`);

      try {
        const response = await contract[functionName](...args);
        const responseString = renderResponse(response, contract.interface.getFunction(functionName).outputs)
        setResponse(responseString);
        setIsStale(false);
      } catch (error) {
        setResponse(error.toString());
        setIsStale(false);
      }
    }
  }

  const clearResponse = async () => {
    setResponse(undefined)
  }

  return (<div className={"api-params"}>
      <button onClick={sendTransaction}>Execute</button>
      <button onClick={clearResponse}>Clear</button>
      {response !== undefined ?
        <div className={"trial " + (isStale ? "stale" : "")} >
          <div className={"request"}>{solidityQuery}</div>
          <pre>{response}</pre>
        </div>
        : <div className={"trial"} />
      }
  </div>);
};

export default EvmCall;

/**
 * Render the response from the EVM contract as a human-readable string.
 *
 * TODO: the generated string for structs looks like type=value. It would be better to have field names in the future
 */
function renderResponse(response: any[], params: ReadonlyArray<ParamType>) {
  let s = "";
  params[0].walk(response, (type, v) => {
    s += `${type}=${v.toString()} `;
  })
  return s;
}
