import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import EvmNetworkSelector from "./EvmNetworkSelector";

/**
 * A component that displays information about the current EVM network and
 * the configuration of the Pyth contract deployed on that network.
 */
const ContractInfo = () => {
  const { networkConfig, pythContract } = useGlobalContext();

  const [fee, setFee] = useState<string>("loading...");
  const [validTimePeriod, setValidTimePeriod] = useState<string>("loading...");

  useEffect(() => {
    async function helper() {
      try {
        setFee((await pythContract.getUpdateFee(["0x01"])).toString());
        setValidTimePeriod(
          (await pythContract.getValidTimePeriod()).toString()
        );
      } catch (error: any) {
        console.error(error);
        setFee("loading...");
        setValidTimePeriod("loading...");
      }
    }
    helper();
  }, [pythContract]);

  return (
    <div>
      <EvmNetworkSelector />
      <table className="w-full text-left">
        <tbody>
          <tr
            key="Contract Address"
            className="border-t border-darkGray5 bg-darkGray border-none"
          >
            <td className="py-3 pl-6 pr-1 lg:pl-14">Contract Address</td>
            <td className="py-3 pl-1 lg:pl-14">{networkConfig.pythAddress}</td>
          </tr>
          <tr key="Chain ID" className="border-t border-darkGray5 bg-darkGray">
            <td className="py-3 pl-6 pr-1 lg:pl-14">Chain ID</td>
            <td className="py-3 pl-1 lg:pl-14">{networkConfig.info.chainId}</td>
          </tr>
          <tr
            key="Update Fee"
            className="border-t border-darkGray5 bg-darkGray"
          >
            <td className="py-3 pl-6 pr-1 lg:pl-14">Update Fee</td>
            <td className="py-3 pl-1 lg:pl-14">{fee}</td>
          </tr>
          <tr
            key="Valid Time Period"
            className="border-t border-darkGray5 bg-darkGray border-none"
          >
            <td className="py-3 pl-6 pr-1 lg:pl-14">Valid Time Period</td>
            <td className="py-3 pl-1 lg:pl-14">{validTimePeriod}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContractInfo;
