import { ethers } from "ethers";
import { useMemo } from "react";
import {
  NetworkType,
  PriceServiceUrls,
  useGlobalContext,
} from "../contexts/GlobalContext";

interface ExampleProps {
  keyValues: Record<
    string,
    (context: ExampleRenderingContext) => string | Promise<string>
  >;
  value: string;
}

interface KnownFeedIds {
  mainnet: Record<string, string>;
  testnet: Record<string, string>;
}

// TODO: generate this mapping from the blockchain instead of hardcoding it.
const KnownFeedIds = {
  mainnet: {
    "Crypto.BTC/USD":
      "e62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
    "Crypto.ETH/USD":
      "ff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
  },
  testnet: {
    "Crypto.BTC/USD":
      "f9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b",
    "Crypto.ETH/USD":
      "ca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6",
  },
};

/**
 * A button that populates the `keyValue` store with an example set of
 * key/value pairs when clicked. Use this to auto-generate sample queries
 * that users can try out.
 *
 * The values of the keys are provided as functions from the current global state
 * to string values. This allows the values to depend on e.g., the currently chosen network.
 */
const Example = ({ keyValues, value }: ExampleProps) => {
  const { pythAddressConfig, pythContract, setKeyValueStore } =
    useGlobalContext();
  const renderingContext = useMemo(
    () =>
      new ExampleRenderingContext(pythAddressConfig.networkType, pythContract),
    [pythAddressConfig, pythContract]
  );

  const handleClick = () => {
    async function helper() {
      const nextKeyValues: { [key: string]: any } = {};
      for (const [key, value] of Object.entries(keyValues)) {
        nextKeyValues[key] = await Promise.resolve(value(renderingContext));
      }

      setKeyValueStore(() => nextKeyValues);
    }
    helper();
  };

  return (
    <button className="bg-darkGray1 text-base text-light" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Example;

export class ExampleRenderingContext {
  networkType: NetworkType;
  pythContract: ethers.Contract;

  constructor(networkType: NetworkType, pythContract: ethers.Contract) {
    this.networkType = networkType;
    this.pythContract = pythContract;
  }

  // Get the price feed id for the provided symbol name (e.g., "Crypto.BTC/USD").
  // This function will automatically account for different networks.
  public getFeedId(symbolName: string): string {
    const feedIds: Record<string, string> = KnownFeedIds[this.networkType];
    if (feedIds[symbolName]) {
      return feedIds[symbolName];
    }
    throw new Error(
      `Feed ID not found for symbol ${symbolName} and networkType ${this.networkType}`
    );
  }

  public getFeedId0x(symbolName: string): string {
    return `0x${this.getFeedId(symbolName)}`;
  }

  public async getLatestPriceFeed(
    symbolName: string,
    targetChain: string
  ): Promise<any> {
    const feedId = this.getFeedId0x(symbolName);

    const endpoint: string = `${
      PriceServiceUrls[this.networkType]
    }/api/latest_price_feeds`;
    const result = await (
      await fetch(`${endpoint}?ids[]=${feedId}&target_chain=${targetChain}`)
    ).json();
    return result[0];
  }

  public async getUpdateFee(vaas: string[]): Promise<string> {
    const result = await this.pythContract["getUpdateFee"].staticCallResult(
      vaas
    );
    return result[0].toString();
  }
}
