import React, { useMemo } from "react";
import { ethers } from "ethers";
import {
  NetworkType,
  PriceServiceUrls,
  useGlobalContext,
} from "../contexts/GlobalContext";

interface ExamplesProps {
  children?: React.ReactNode;
}

const Examples = ({ children }: ExamplesProps) => {
  return <div className={"examples"}>Examples: {children}</div>;
};

export default Examples;
