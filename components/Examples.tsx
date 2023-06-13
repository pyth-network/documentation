import React, { useMemo } from "react";
import { ethers } from "ethers";
import {
  NetworkType,
  PriceServiceUrls,
  useGlobalContext,
} from "../contexts/GlobalContext";
import EvmNetworkSelector from "./EvmNetworkSelector";
import EvmCall from "./EvmCall";

interface ExamplesProps {
  children?: React.ReactNode;
}

const Examples = ({ children }: ExamplesProps) => {
  return (
    <div className={"examples-box"}>
      <div className={"examples"}>
        <h4>Examples</h4>
        {children}
      </div>
      <div className={"network-box"}>
        <h4>Network</h4>
        <EvmNetworkSelector />
      </div>
    </div>
  );
};

export default Examples;
