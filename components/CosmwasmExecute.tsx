import { useEffect, useState } from "react";
import {
  GrazProvider,
  useAccount,
  useActiveChain,
  useConnect,
  useDisconnect,
  useExecuteContract,
  useSigningClients,
  useSuggestChainAndConnect,
} from "graz";

import { useGlobalContext } from "../contexts/GlobalContext";
import { JsonObject } from "@cosmjs/cosmwasm-stargate";
import { osmosis } from "graz/chains";
import CosmosNetworkSelector from "./CosmosNetworkSelector";
import { coin, Coin } from "@cosmjs/proto-signing";

interface CosmWasmExecuteProps {
  buildQuery: (kvs: Record<string, string>) => JsonObject | undefined;
  feeKey: string | undefined;
}

// FIXME: comment
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
const CosmWasmExecute = ({ buildQuery, feeKey }: CosmWasmExecuteProps) => {
  // const { cosmosChainConfig } = useGlobalContext();

  return <CosmWasmExecuteHelper buildQuery={buildQuery} feeKey={feeKey} />;

  /*
  return (
      <CosmWasmExecuteHelper buildQuery={buildQuery} feeKey={feeKey} />
    </GrazProvider>
  );
   */
};

const CosmWasmExecuteHelper = ({
  buildQuery,
  feeKey,
}: CosmWasmExecuteProps) => {
  const { keyValueStore, cosmosChainConfig } = useGlobalContext();

  const { isConnected } = useAccount();
  const { error, isLoading, isSuccess, executeContractAsync, status } =
    useExecuteContract<JsonObject>({
      contractAddress: cosmosChainConfig.pythAddress,
    });

  /*
  const { data, isLoading, isSuccess, isError, write, error } =
    useContractWrite({
      address: pythAddressConfig.pythAddress as `0x${string}`,
      abi: pythAbi,
      functionName: functionName,
    });
   */

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
    } else if (isSuccess) {
      // const responseString = JSON.stringify(data);
      setResponsePreface("Contract execution succeeded with result:");
      // setResponse(responseString);
    } else if (error) {
      setResponsePreface("Contract execution reverted with exception:");
      setResponse(JSON.stringify(error, null, 2));
    }
  }, [isLoading, isSuccess, error]);

  const executeQuery = async () => {
    const msgJson: JsonObject | undefined = buildQuery(keyValueStore);

    if (msgJson === undefined) {
      setResponsePreface(
        `Please populate all of the arguments with valid values.`
      );
      setResponse(undefined);
    } else {
      // TODO: funds
      const result = await executeContractAsync({
        msg: msgJson,
        funds: [coin("1", "uosmo")],
      });

      setResponse(JSON.stringify(result, null, 2));
    }
  };

  return (
    <>
      <div className="my-4">
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
  const activeChain = useActiveChain();
  const { suggestAndConnect } = useSuggestChainAndConnect();
  const { disconnect } = useDisconnect();

  const { cosmosChainConfig } = useGlobalContext();

  function handleSuggestAndConnect() {
    // TODO: use cosmosChainConfig here
    // probably also need an effect to handle when the chainConfig changes
    suggestAndConnect({
      chainInfo: osmosis,
      gas: { price: "1", denom: "uosmo" },
    });
  }

  if (isConnected) {
    return (
      <button
        className="bg-[#E6DAFE] text-[#141227] font-normal text-base hover:bg-[#F2ECFF]"
        onClick={() => disconnect()}
      >
        {`${account?.bech32Address} (${activeChain?.chainId})`}
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
