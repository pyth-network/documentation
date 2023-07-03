import detectEthereumProvider from "@metamask/detect-provider";
import { Result, ethers, isError } from "ethers";
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
  const [response, setResponse] = useState<string | undefined>(undefined);
  // The preface is explainer text that shows up before the response itself.
  const [responsePreface, setResponsePreface] = useState<string>("");
  const [isStale, setIsStale] = useState<boolean>(false);

  const { keyValueStore, pythContract, signer, setSigner, setProvider } =
    useGlobalContext();

  useEffect(() => {
    setIsStale(true);
  }, [keyValueStore, pythContract]);

  const connectWallet = async () => {
    const ethereumProvider = await detectEthereumProvider();

    if (ethereumProvider) {
      // @ts-ignore
      const myProvider = new ethers.BrowserProvider(ethereumProvider);
      setProvider(myProvider);

      // It also provides an opportunity to request access to write
      // operations, which will be performed by the private key
      // that MetaMask manages for the user.
      const mySigner = await myProvider.getSigner();
      setSigner(mySigner);
    } else {
      alert("Please install MetaMask!");
    }
  };

  const sendTransaction = async () => {
    if (signer != undefined) {
      const args: any[] | undefined = buildArguments(keyValueStore);

      // TODO: validate arguments
      if (args === undefined || args.includes(undefined)) {
        setResponse(`Please populate all of the arguments with valid values.`);
        setIsStale(false);
      } else {
        try {
          const result: Result = await pythContract[
            functionName
          ].staticCallResult(...args);
          const resultString = renderResult(result, "");

          setResponsePreface("EVM call succeeded with result:");
          setResponse(resultString);
          setIsStale(false);
        } catch (error) {
          if (isError(error, "CALL_EXCEPTION")) {
            const ethError = pythContract.interface.parseError(error.data);
            setResponsePreface("EVM call reverted with exception:");
            setResponse(`${ethError.name}(${renderResult(ethError.args, "")})`);
            setIsStale(false);
          } else {
            setResponsePreface("An unknown error occurred. Error details:");
            setResponse(error.toString);
            setIsStale(false);
          }
        }
      }
    } else {
      alert("Please connect your wallet first!");
    }
  };

  const clearResponse = async () => {
    setResponse(undefined);
  };

  return (
    <div>
      <div className="flex justify-between">
        {signer !== undefined ? (
          <>
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
          </>
        ) : (
          <button
            className="bg-[#E6DAFE] text-[#141227] font-normal text-base hover:bg-[#F2ECFF] my-4"
            onClick={connectWallet}
          >
            connect wallet
          </button>
        )}
      </div>
      {response !== undefined ? (
        <div className={"response " + (isStale ? "stale" : "")}>
          <p>{responsePreface}</p>
          <pre>{response}</pre>
        </div>
      ) : (
        <div className={"trial"} />
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
