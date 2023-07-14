import { Result, isError } from "ethers";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import EvmNetworkSelector from "./EvmNetworkSelector";
import { CosmWasmClient, JsonObject } from "@cosmjs/cosmwasm-stargate";

interface CosmWasmQueryProps {
  buildQuery: (kvs: Record<string, string>) => JsonObject | undefined;
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
const CosmWasmQuery = ({ buildQuery }: CosmWasmQueryProps) => {
  const [response, setResponse] = useState<string>();
  // The preface is explainer text that shows up before the response itself.
  const [responsePreface, setResponsePreface] = useState<string>();

  const { keyValueStore, pythContract } = useGlobalContext();

  useEffect(() => {
    clearResponse();
  }, [keyValueStore, pythContract]);

  const sendTransaction = async () => {
    const queryJson: JsonObject | undefined = buildQuery(keyValueStore);

    const client = await CosmWasmClient.connect(
      "https://rpc-kralum.neutron-1.neutron.org"
    );

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
          "neutron1m2emc93m9gpwgsrsf2vylv9xvgqh654630v7dfrhrkmr5slly53spg85wv",
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
          <EvmNetworkSelector />
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

/**
 * Render the response from the EVM contract as a human-readable string.
 * This function is janky because ethers doesn't provide a nice way to iterate over
 * Results with named key/values.
 */
function renderResult(result: any, indent: string) {
  if (result instanceof Result) {
    if (result.length == 0) {
      return "";
    } else {
      const obj = result.toObject();
      let responseString = "{\n";
      const nextIndent = indent + "  ";
      for (const key in obj) {
        responseString +=
          nextIndent + `${key}: ${renderResult(obj[key], nextIndent)},\n`;
      }
      responseString += indent + `}`;
      return responseString;
    }
  } else {
    return result.toString();
  }
}

export default CosmWasmQuery;
