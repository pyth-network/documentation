import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import EvmNetworkSelector from "./EvmNetworkSelector";

/**
 * A component that displays information about the current EVM network and
 * the configuration of the Pyth contract deployed on that network.
 */
const ContractInfo = () => {
  const { pythAddressConfig, pythContract } = useGlobalContext();

  const [fee, setFee] = useState<string>();
  const [validTimePeriod, setValidTimePeriod] = useState<string>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function helper() {
      try {
        setIsLoading(true);
        setFee((await pythContract.getUpdateFee(["0x01"])).toString());
        setValidTimePeriod(
          (await pythContract.getValidTimePeriod()).toString()
        );
        setIsLoading(false);
      } catch (error: any) {
        console.error(error);
        setIsLoading(false);
      }
    }
    helper();
  }, [pythContract]);

  const configValue = (value?: string) => {
    return isLoading ? "Loading..." : value;
  };

  return (
    <div>
      <EvmNetworkSelector />
      <table className="w-full text-left table-fixed">
        <tbody>
          <tr
            key="Contract Address"
            className="border-t border-darkGray5 bg-darkGray border-none"
          >
            <td className="py-3 pl-6 pr-1 lg:pl-14 w-48">Contract Address</td>
            <td className="py-3 pl-1 lg:pl-14">
              {configValue(pythAddressConfig.pythAddress)}
            </td>
          </tr>
          <tr key="Chain ID" className="border-t border-darkGray5 bg-darkGray">
            <td className="py-3 pl-6 pr-1 lg:pl-14">Chain ID</td>
            <td className="py-3 pl-1 lg:pl-14">
              {configValue(pythAddressConfig.chainId.toString())}
            </td>
          </tr>
          <tr
            key="Update Fee"
            className="border-t border-darkGray5 bg-darkGray"
          >
            <td className="py-3 pl-6 pr-1 lg:pl-14">Update Fee</td>
            <td className="py-3 pl-1 lg:pl-14">{configValue(fee)}</td>
          </tr>
          <tr
            key="Valid Time Period"
            className="border-t border-darkGray5 bg-darkGray border-none"
          >
            <td className="py-3 pl-6 pr-1 lg:pl-14">Valid Time Period</td>
            <td className="py-3 pl-1 lg:pl-14">
              {configValue(validTimePeriod)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContractInfo;
