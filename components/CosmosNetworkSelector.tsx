import {
  PythCosmosAddresses,
  useGlobalContext,
} from "../contexts/GlobalContext";
import Selector from "./Selector";

/** Drop-down selection component for choosing the current cosmos network. */
const CosmosNetworkSelector = () => {
  const { cosmosChainId, setCosmosChainId } = useGlobalContext();
  // Get the network names as an array
  const networkNames = Object.keys(PythCosmosAddresses);

  return (
    <Selector
      values={networkNames}
      currentValue={cosmosChainId}
      onChange={setCosmosChainId}
    />
  );
};

export default CosmosNetworkSelector;
