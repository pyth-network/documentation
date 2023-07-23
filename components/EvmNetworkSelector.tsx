import { PythAddresses, useGlobalContext } from "../contexts/GlobalContext";
import Selector from "./Selector";

/** Drop-down selection component for choosing the current EVM network. */
const EvmNetworkSelector = () => {
  const { networkName, setNetworkName } = useGlobalContext();

  // Get the network names as an array
  const networkNames = Object.keys(PythAddresses);

  return (
    <Selector
      values={networkNames}
      currentValue={networkName}
      onChange={setNetworkName}
    />
  );
};

export default EvmNetworkSelector;
