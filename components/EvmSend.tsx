import { ConnectKitButton } from "connectkit";
import { useEffect, useState } from "react";
import { useAccount, useContractWrite } from "wagmi";

import { ethers } from "ethers";
import { useGlobalContext } from "../contexts/GlobalContext";

interface EvmSendProps {
  functionName: string;
  buildArguments: (kvs: Record<string, string>) => any[] | undefined;
  feeKey: string | undefined;
}

/**
 * Allow the user to send a transaction to an EVM chain and visualize the response.
 * This component will invoke `functionName` on the pyth contract provided in the global context.
 * The arguments to the function will be the result of evaluating `buildArguments` on the global key-value store, i.e.,
 * `pythContract.functionName(buildArguments(keyValueStore))`. If `feeKey` is provided,
 * the value of this key will be parsed as a number of wei and passed as the value of the transaction.
 *
 * `buildArguments` may return `undefined` to indicate that the key-value store does not contain all of the necessary
 *  arguments.
 *
 * TODO: probably better to pass the contract address / ABI as arguments (?)
 */
const EvmSend = ({ functionName, buildArguments, feeKey }: EvmSendProps) => {
  const { keyValueStore, pythAddressConfig, pythAbi } = useGlobalContext();
  const { isConnected } = useAccount();

  const { data, isLoading, isSuccess, isError, write, error } =
    useContractWrite({
      address: pythAddressConfig.pythAddress as `0x${string}`,
      abi: pythAbi,
      functionName: functionName,
    });

  const [response, setResponse] = useState<string>();
  const [responsePreface, setResponsePreface] = useState<string>();

  useEffect(() => {
    clearResponse();
  }, [keyValueStore]);

  const clearResponse = async () => {
    setResponsePreface(undefined);
    setResponse(undefined);
  };

  useEffect(() => {
    if (isLoading) {
      setResponsePreface("Loading...");
      setResponse("");
    } else if (isSuccess) {
      const responseString = JSON.stringify(data);
      setResponsePreface("EVM call succeeded with result:");
      setResponse(responseString);
    } else if (isError) {
      setResponsePreface("EVM call reverted with exception:");
      setResponse(JSON.stringify(error));
    }
  }, [isLoading, isSuccess, data, isError, error]);

  const executeQuery = async () => {
    const args: any[] | undefined = buildArguments(keyValueStore);

    if (args === undefined || args.flat().includes(undefined)) {
      setResponsePreface(
        `Please populate all of the arguments with valid values.`
      );
    } else {
      write?.({
        args: buildArguments(keyValueStore),
        value:
          feeKey !== undefined
            ? ethers.toBigInt(keyValueStore[feeKey])
            : undefined,
      });
    }
  };

  return (
    <>
      <div className="my-4">
        <ConnectKitButton theme="midnight" />
      </div>
      <div className="flex">
        {isConnected && (
          <div className="space-x-2 mb-4">
            <button
              className="bg-[#E6DAFE] text-[#141227] font-normal text-base hover:bg-[#F2ECFF]"
              onClick={executeQuery}
            >
              execute query
            </button>
            <button className="font-normal text-base" onClick={clearResponse}>
              clear
            </button>
          </div>
        )}
      </div>
      <div>
        {responsePreface !== undefined && (
          <div className="response">
            <p className="px-4">{responsePreface}</p>
            <pre>{response}</pre>
          </div>
        )}
      </div>
    </>
  );
};

export default EvmSend;
