import { useCallback, useEffect, useState } from "react";
import {
  useAccount,
  useDisconnect,
  useExecuteContract,
  useSuggestChainAndConnect,
} from "graz";

import {
  getCosmosChainFromConfig,
  useGlobalContext,
} from "../contexts/GlobalContext";
import { JsonObject } from "@cosmjs/cosmwasm-stargate";
import CosmosNetworkSelector from "./CosmosNetworkSelector";
import { Coin, coin } from "@cosmjs/proto-signing";

interface CosmWasmExecuteProps {
  buildMsg: (kvs: Record<string, string>) => JsonObject | undefined;
  feeKey: string | undefined;
}

/**
 * Allow the user to send an execute message to a cosmos chain and visualize the response.
 * This component will invoke `buildMsg` on the global context to create the message.
 * `buildMsg` may return `undefined` to indicate that the key-value store does not contain all
 * of the necessary arguments.
 *
 * The component will also send a quantity of native tokens with the message. The quantity is
 * determined by looking up the value of `feeKey`.
 */
const CosmWasmExecute = ({ buildMsg, feeKey }: CosmWasmExecuteProps) => {
  const { keyValueStore, cosmosChainConfig } = useGlobalContext();

  const [response, setResponse] = useState<string>();
  const [responsePreface, setResponsePreface] = useState<string>();

  const { isConnected } = useAccount();
  const { error, isLoading, isSuccess, executeContractAsync } =
    useExecuteContract<JsonObject>({
      contractAddress: cosmosChainConfig.pythAddress,
    });

  useEffect(() => {
    clearResponse();
  }, [keyValueStore, cosmosChainConfig]);

  const clearResponse = async () => {
    setResponsePreface(undefined);
    setResponse(undefined);
  };

  useEffect(() => {
    if (isLoading) {
      setResponsePreface("Loading...");
      setResponse("");
    } else if (isSuccess) {
      // Ignore because we populate this field immediately after executing.
      // (useExecuteContract doesn't return the result for whatever reason)
    } else if (error) {
      setResponsePreface("Contract execution reverted with exception:");
      setResponse(error.toString());
    }
  }, [isLoading, isSuccess, error]);

  const executeQuery = async () => {
    const msgJson: JsonObject | undefined = buildMsg(keyValueStore);

    let funds: Coin[] | undefined = [];
    if (feeKey !== undefined) {
      // Note that we assume that fees are paid in the 1st fee currency.
      // This should work, though doesn't demonstrate the full range of functionality for chains
      // like osmosis that support multiple fee currencies.
      const cosmosChain = getCosmosChainFromConfig(cosmosChainConfig.chainId);
      const fee = keyValueStore[feeKey];
      if (fee !== undefined) {
        funds = [coin(fee, cosmosChain.feeCurrencies[0].coinMinimalDenom)];
      } else {
        funds = undefined;
      }
    }

    if (msgJson === undefined || funds === undefined) {
      setResponsePreface(
        `Please populate all of the arguments with valid values.`
      );
      setResponse(undefined);
    } else {
      try {
        const result = await executeContractAsync({
          msg: msgJson,
          funds,
        });

        setResponsePreface("Contract execution succeeded with result:");
        setResponse(JSON.stringify(result, null, 2));
      } catch (error) {
        // This catch prevents nextra from reporting the error in a modal. No need to update
        // the component state though, because the error also gets returned by useExecuteContract.
      }
    }
  };

  return (
    <>
      <div className="my-4 flex space-x-2 mb-4">
        <CosmWasmAccountButton /> <CosmosNetworkSelector />
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

export const CosmWasmAccountButton = () => {
  const { isConnected, data: account } = useAccount();
  const { suggestAndConnect } = useSuggestChainAndConnect();
  const { disconnect } = useDisconnect();

  const { cosmosChainConfig } = useGlobalContext();

  const handleSuggestAndConnect = useCallback(() => {
    const cosmosChain = getCosmosChainFromConfig(cosmosChainConfig.chainId);
    suggestAndConnect({
      chainInfo: cosmosChain,
    });
  }, [cosmosChainConfig, suggestAndConnect]);

  useEffect(() => {
    handleSuggestAndConnect();
  }, [cosmosChainConfig, handleSuggestAndConnect]);

  if (isConnected) {
    return (
      <button className="font-normal text-base" onClick={() => disconnect()}>
        {`${account?.bech32Address}`}
      </button>
    );
  } else {
    return (
      <button
        className="bg-[#E6DAFE] text-[#141227] font-normal text-base hover:bg-[#F2ECFF]"
        onClick={() => handleSuggestAndConnect()}
      >
        Connect Wallet
      </button>
    );
  }
};

export default CosmWasmExecute;
