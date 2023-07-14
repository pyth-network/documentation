import { Menu, Transition } from "@headlessui/react";
import { Fragment, useCallback } from "react";
import {
  PythAddresses,
  PythCosmosAddresses,
  useGlobalContext,
} from "../contexts/GlobalContext";
import ArrowDownIcon from "./icons/ArrowDownIcon";

// TODO: factor out common html/css between network types
// React component for network selection
const CosmosNetworkSelector = () => {
  const { cosmosChainId, setCosmosChainId } = useGlobalContext();

  // Get the network names as an array
  const networkNames = Object.keys(PythCosmosAddresses);

  const handleChange = useCallback(
    (event: any) => {
      if (event.target.value) {
        setCosmosChainId(event.target.value);
      }
    },
    [setCosmosChainId]
  );

  return (
    <Menu as="div" className="relative z-[2] block w-[180px] text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={`inline-flex w-full items-center justify-between py-3 px-6 text-sm outline-0 bg-darkGray2`}
          >
            <span className="mr-3">{cosmosChainId}</span>
            <ArrowDownIcon className={`${open && "rotate-180"}`} />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-full origin-top-right shadow-lg">
              {networkNames.map((n) => (
                <Menu.Item key={n}>
                  <button
                    className={`block w-full py-3 px-6 text-left text-sm bg-darkGray hover:bg-darkGray2`}
                    value={n}
                    onClick={handleChange}
                  >
                    {n}
                  </button>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default CosmosNetworkSelector;
