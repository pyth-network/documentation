import { useEffect, useState } from "react";
import {
  getCosmosChainFromConfig,
  useGlobalContext,
} from "../contexts/GlobalContext";
import CosmosNetworkSelector from "./CosmosNetworkSelector";
import { CosmWasmClient, JsonObject } from "@cosmjs/cosmwasm-stargate";

interface CosmWasmQueryProps {
  buildQuery: (kvs: Record<string, string>) => JsonObject | undefined;
}

/**
 * Allow the user to send a query message to a cosmos chain and visualize the response.
 * This component will invoke `buildMsg` on the global context to create the message.
 * `buildMsg` may return `undefined` to indicate that the key-value store does not contain all
 * of the necessary arguments.
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

    // TODO: validate arguments
    if (queryJson === undefined) {
      setResponsePreface(
        `Please populate all of the arguments with valid values.`
      );
    } else {
      try {
        setResponsePreface("Loading...");
        setResponse(undefined);

        const chain = getCosmosChainFromConfig(cosmosChainConfig.chainId);
        const client = await CosmWasmClient.connect(chain.rpc);

        const result = await client.queryContractSmart(
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
            className="px-2 py-1 bg-light dark:bg-lightLinks hover:bg-darkLinks dark:hover:bg-darkLinks font-normal text-base"
            onClick={sendTransaction}
          >
            execute query
          </button>
          <button
            className="px-2 py-1 bg-neutral-200 hover:bg-neutral-300 dark:bg-darkGray3 dark:hover:bg-darkGray5 font-normal text-base"
            onClick={clearResponse}
          >
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
