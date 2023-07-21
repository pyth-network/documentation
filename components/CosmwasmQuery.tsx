import { Result, isError } from "ethers";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import CosmosNetworkSelector from "./CosmosNetworkSelector";
import { CosmWasmClient, JsonObject } from "@cosmjs/cosmwasm-stargate";

interface CosmWasmQueryProps {
  buildQuery: (kvs: Record<string, string>) => JsonObject | undefined;
}

// FIXME: comment
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
const CosmWasmQuery = ({ buildQuery }: CosmWasmQueryProps) => {
  const [response, setResponse] = useState<string>();
  // The preface is explainer text that shows up before the response itself.
  const [responsePreface, setResponsePreface] = useState<string>();

  const { keyValueStore, cosmosChainConfig } = useGlobalContext();

  useEffect(() => {
    clearResponse();
  }, [keyValueStore, cosmosChainConfig]);

  const sendTransaction = async () => {
    const queryJson: JsonObject | undefined = buildQuery(keyValueStore);

    const client = await CosmWasmClient.connect(cosmosChainConfig.rpcUrl);

    // TODO: validate arguments
    if (queryJson === undefined) {
      setResponsePreface(
        `Please populate all of the arguments with valid values.`
      );
    } else {
      try {
        setResponsePreface("Loading...");
        setResponse(undefined);

        let result = await client.queryContractSmart(
          cosmosChainConfig.pythAddress,
          queryJson
        );

        const resultString = JSON.stringify(result, null, 2);

        setResponsePreface("Query succeeded with result:");
        setResponse(resultString);
      } catch (error) {
        setResponsePreface("Query failed with error:");
        setResponse((error as any).toString());
      }
    }
  };

  const clearResponse = async () => {
    setResponsePreface(undefined);
    setResponse(undefined);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="space-x-2 mt-4 md:my-4">
          <button
            className="bg-[#E6DAFE] text-[#141227] font-normal text-base hover:bg-[#F2ECFF]"
            onClick={sendTransaction}
          >
            execute query
          </button>
          <button className="font-normal text-base" onClick={clearResponse}>
            clear
          </button>
        </div>
        <div className="my-4">
          <CosmosNetworkSelector />
        </div>
      </div>
      {responsePreface !== undefined && (
        <div className="response">
          <p className="px-4">{responsePreface}</p>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
};

export default CosmWasmQuery;
