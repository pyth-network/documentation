import React, {useEffect, useState} from 'react';
import {ethers, ParamType, Provider} from 'ethers';
import { useGlobalContext } from '../contexts/GlobalContext';

interface EvmCallProps {
  functionName: string;
  params: string[]
}

function renderResponse(response: any[], params: ReadonlyArray<ParamType>) {
  let s = "";
  params[0].walk(response, (type, v) => {
    s += `${type}=${v.toString()} `;
  })
  return s;
}

const EvmCall: React.FC<EvmCallProps> = ({
                                                               functionName,
                                                               params,
                                                             }) => {

  const [solidityQuery, setSolidityQuery] = useState<string>(null);
  const [response, setResponse] = useState<string | undefined>(undefined);

  const [isStale, setIsStale] = useState<boolean>(false);

  const { queryParameters, provider, contractAddress, contractAbi } = useGlobalContext();

  useEffect(() => {
    setIsStale(true);
  }, [queryParameters])


  const sendTransaction = async () => {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);

    const args: any[] = params.map((v) => queryParameters[v]);

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