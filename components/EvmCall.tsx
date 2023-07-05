import { Result, isError } from "ethers";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import EvmNetworkSelector from "./EvmNetworkSelector";

interface EvmCallProps {
  functionName: string;
  buildArguments: (kvs: Record<string, string>) => any[] | undefined;
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
const EvmCall = ({ functionName, buildArguments }: EvmCallProps) => {
  const [response, setResponse] = useState<string>();
  // The preface is explainer text that shows up before the response itself.
  const [responsePreface, setResponsePreface] = useState<string>();

  const { keyValueStore, pythContract } = useGlobalContext();

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
        const result: Result = await pythContract[
          functionName
        ].staticCallResult(...args);
        const resultString = renderResult(result, "");

        setResponsePreface("EVM call succeeded with result:");
        setResponse(resultString);
      } catch (error) {
        if (isError(error, "CALL_EXCEPTION")) {
          if (error.data !== null) {
            const ethError = pythContract.interface.parseError(error.data);
            if (ethError !== null) {
              setResponsePreface("EVM call reverted with exception:");
              setResponse(
                `${ethError.name}(${renderResult(ethError.args, "")})`
              );
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
      <div className="flex justify-between">
        <div className="space-x-2">
          <button
            className="bg-[#E6DAFE] text-[#141227] font-normal text-base hover:bg-[#F2ECFF] my-4"
            onClick={sendTransaction}
          >
            execute query
          </button>
          <button
            className="font-normal text-base my-4"
            onClick={clearResponse}
          >
            clear
          </button>
        </div>
        <EvmNetworkSelector />
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

export default EvmCall;
