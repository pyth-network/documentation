import { Networks, useGlobalContext } from "../contexts/GlobalContext";
import { useEffect, useState } from "react";

// React component for network selection
const EvmNetworkSelector: React.FC = () => {
  const { networkName, setNetworkName } = useGlobalContext();

  // Get the network names as an array
  const networkNames = Object.keys(Networks);

  // Switch network when the selection changes
  useEffect(() => {
    setNetworkName(networkName);
  }, [networkName]);

  return (
    <select
      value={networkName}
      onChange={(event) => setNetworkName(event.target.value)}
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
