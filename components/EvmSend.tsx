import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
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
  const { keyValueStore, setProvider, signer, setSigner, pythContract } =
    useGlobalContext();

  const [response, setResponse] = useState<string | undefined>(undefined);

  const [isStale, setIsStale] = useState<boolean>(false);

  useEffect(() => {
    setIsStale(true);
  }, [keyValueStore]);

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
      const contractWithSigner = pythContract.connect(signer);

      const args: any[] | undefined = buildArguments(keyValueStore);

      let extraArguments: any | undefined = {};
      if (feeKey !== undefined) {
        // TODO: validate argument
        try {
          extraArguments["value"] = ethers.toBigInt(keyValueStore[feeKey]);
        } catch (error) {
          extraArguments = undefined;
        }
      }

      // TODO: validate arguments
      if (args === undefined || extraArguments === undefined) {
        setResponse(`Please populate all of the arguments with valid values.`);
        setIsStale(false);
      } else {
        try {
          console.log("trying to send tx");
          const tx = await contractWithSigner[functionName](
            ...args,
            extraArguments
          );
          console.log("awaiting response");
          const receipt = await tx.wait();
          console.log("got response");
          const responseString = JSON.stringify(receipt);
          setResponse(responseString);
          setIsStale(false);
        } catch (error) {
          setResponse(error.toString());
          setIsStale(false);
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
    <div className={"api-params"}>
      {signer !== undefined ? (
        <div>
          <button onClick={sendTransaction}>Execute</button>
          <button onClick={clearResponse}>Clear</button>
          {response !== undefined ? (
            <div className={"response " + (isStale ? "stale" : "")}>
              <pre>{response}</pre>
            </div>
          ) : (
            <div className={"response"} />
          )}
        </div>
      ) : (
        <button onClick={connectWallet}>Connect your wallet </button>
      )}
    </div>
  );
};

export default EvmSend;
