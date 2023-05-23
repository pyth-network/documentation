import React, {useEffect, useState} from 'react';
import {ethers, isError, ParamType, Provider, Result} from 'ethers';
import { useGlobalContext } from '../contexts/GlobalContext';

interface EvmCallProps {
  functionName: string;
  buildArguments: (kvs: Record<string, string>) => any[] | undefined,
}

/**
 * Allow the user to call a read-only function on an EVM chain and visualize the response.
 * This component will invoke `functionName` on the pyth contract provided in the global context.
 * The arguments to the function will be the result of evaluating `buildArguments` on the global key-value store, i.e.,
 * `pythContract.functionName(buildArguments(keyValueStore))`.
 *
 * `buildArguments` may return `undefined` to indicate that the key-value store does not contain all of the necessary
 * arguments.
 *
 * TODO: probably better to pass the contract address / ABI as arguments (?)
 */
const EvmCall: React.FC<EvmCallProps> = ({
                                           functionName,
                                           buildArguments,
                                         }) => {
  const [response, setResponse] = useState<string | undefined>(undefined);
  // The preface is explainer text that shows up before the response itself.
  const [responsePreface, setResponsePreface] = useState<string>('');
  const [isStale, setIsStale] = useState<boolean>(false);

  const { keyValueStore, provider, networkConfig, pythContractAbi } = useGlobalContext();

  useEffect(() => {
    setIsStale(true);
  }, [keyValueStore])


  const sendTransaction = async () => {
    const contract = new ethers.Contract(networkConfig.pythAddress, pythContractAbi, provider);

    const args: any[] | undefined = buildArguments(keyValueStore);

    // TODO: validate arguments
    if (args === undefined) {
      setResponse(`Please populate all of the arguments with valid values.`);
      setIsStale(false);
    } else {
      try {
        const result: Result = await contract[functionName].staticCallResult(...args);
        let resultString = renderResult(result, "");

        setResponsePreface("EVM call succeeded with result:");
        setResponse(resultString);
        setIsStale(false);
      } catch (error) {
        if (isError(error, 'CALL_EXCEPTION')) {
          const ethError = contract.interface.parseError(error.data);
          setResponsePreface("EVM call reverted with exception:")
          setResponse(`${ethError.name}(${renderResult(ethError.args, "")})`);
          setIsStale(false);
        } else {
          setResponsePreface("An unknown error occurred. Error details:")
          setResponse(error.toString);
          setIsStale(false);
        }
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
        <div className={"response " + (isStale ? "stale" : "")} >
          <p>{responsePreface}</p>
          <pre>{response}</pre>
        </div>
        : <div className={"trial"} />
      }
  </div>);
};

export default EvmCall;

/**
 * Render the response from the EVM contract as a human-readable string.
 * This function is janky because ethers doesn't provide a nice way to iterate over
 * Results with named key/values.
 */
function renderResult(result: any, indent: string) {
  if (result instanceof Result) {
    if (result.length == 0) {
      return ""
    } else {
      const obj = result.toObject()
      let responseString = "{\n";
      let nextIndent = indent + "  ";
      for (const key in obj) {
        responseString += nextIndent + `${key}: ${renderResult(obj[key], nextIndent)},\n`
      }
      responseString += indent + `}`;
      return responseString
    }
  } else {
    return result.toString();
  }
}
