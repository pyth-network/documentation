import { Networks, useGlobalContext } from "../contexts/GlobalContext";
import { useEffect } from "react";

// React component for network selection
const EvmNetworkSelector = () => {
  const { networkName, setNetworkName } = useGlobalContext();

  // Get the network names as an array
  const networkNames = Object.keys(Networks);

  // Switch network when the selection changes
  useEffect(() => {
    setNetworkName(networkName);
  }, [networkName, setNetworkName]);

  return (
    <select
      value={networkName}
      onChange={(event) => setNetworkName(event.target.value)}
      className={"network-selector"}
    >
      {networkNames.map((networkName) => (
        <option key={networkName} value={networkName}>
          {Networks[networkName].info.chainName}
        </option>
      ))}
    </select>
  );
};

export default EvmNetworkSelector;
