import { Result, isError } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import EvmNetworkSelector from "./EvmNetworkSelector";
import { Provider, Network, TxnBuilderTypes } from "aptos";

interface AptosCallProps {
  functionName: string;
  buildArguments: (kvs: Record<string, string>) => any[] | undefined;
}

const NETWORK = Network.MAINNET;
const PYTH_ADDR =
  "0x7e783b349d3e89cf5931af376ebeadbfab855b3fa239b7ada8f5a92fbea6b387";

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
const AptosCall = ({ functionName, buildArguments }: AptosCallProps) => {
  const [response, setResponse] = useState<string>();
  // The preface is explainer text that shows up before the response itself.
  const [responsePreface, setResponsePreface] = useState<string>();

  const { keyValueStore, pythContract } = useGlobalContext();

  const provider = useMemo<Provider>(() => new Provider(Network.MAINNET), []);

  useEffect(() => {
    clearResponse();
  }, [keyValueStore, pythContract]);

  const sendTransaction = async () => {
    const args: any[] | undefined = buildArguments(keyValueStore);

    // TODO: validate arguments
    if (args === undefined || args.flat().includes(undefined)) {
      setResponsePreface(
        `Please populate all of the arguments with valid values.`
      );
    } else {
      try {
        setResponsePreface("Loading...");
        setResponse(undefined);

        const tx = new TxnBuilderTypes.TransactionPayloadEntryFunction(
          TxnBuilderTypes.EntryFunction.natural(
            `${PYTH_ADDR}::pyth`,
            "get_stale_price_threshold_secs",
            [],
            []
          )
        );

        provider.simulateTransaction(account, tx);

        new TxnBuilderTypes.TransactionPayloadEntryFunction(
          TxnBuilderTypes.EntryFunction.natural(
            "",
            "do_something",
            [],
            [priceUpdateData]
          )
        );

        provider.simulateTransaction();

        /*
        const result: Result = await pythContract[
          functionName
          ].staticCallResult(...args);
        const resultString = renderResult(result, "");

        setResponsePreface("Aptos call succeeded with result:");
        setResponse(resultString);
         */
      } catch (error) {
        if (isError(error, "CALL_EXCEPTION")) {
          if (error.data !== null) {
            const ethError = pythContract.interface.parseError(error.data);
            if (ethError !== null) {
              setResponsePreface("Aptos call reverted with exception:");
              setResponse(
                `${ethError.name}(${renderResult(ethError.args, "")})`
              );
            } else {
              setResponsePreface("An unknown error occurred. Error details:");
              setResponse((error as any).toString());
            }
          }
        } else {
          setResponsePreface("An unknown error occurred. Error details:");
          setResponse((error as any).toString());
        }
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

export default AptosCall;
