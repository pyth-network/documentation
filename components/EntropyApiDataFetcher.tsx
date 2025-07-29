import { useEffect, useState } from "react";
import * as chains from "viem-chains/chains";
import { EntropyDeploymentsConfig } from "./EntropyDeploymentsConfig";
import { z } from "zod";

const ApiChainConfigSchema = z.object({
  name: z.string(),
  network_id: z.number(),
  contract_addr: z.string(),
  reveal_delay_blocks: z.number(),
  gas_limit: z.number(),
  default_fee: z.number(),
});

type ApiChainConfig = z.infer<typeof ApiChainConfigSchema>;

const entropyDeploymentsSchema = z.array(ApiChainConfigSchema);

export interface EntropyDeployment {
  address: string;
  delay: string;
  gasLimit: string;
  default_fee: number;
  rpc?: string;
  explorer?: string;
  nativeCurrency?: string;
}

const getChainData = (network_id: number) => {
  return Object.values(chains).find((chain) => chain.id === network_id);
};

const transformChainData = (chain: ApiChainConfig): [string, EntropyDeployment] => {
  const chainData = getChainData(chain.network_id);
  const configOverride = EntropyDeploymentsConfig[chain.network_id];

  const deployment: EntropyDeployment = {
    address: chain.contract_addr,
    delay: `${chain.reveal_delay_blocks} block${
      chain.reveal_delay_blocks !== 1 ? "s" : ""
    }`,
    gasLimit: chain.gas_limit.toLocaleString(),
    default_fee: chain.default_fee,
    // Use config override first, then viem data, then undefined
    rpc: configOverride?.rpc ?? chainData?.rpcUrls?.default?.http?.[0],
    explorer:
      configOverride?.explorer ?? chainData?.blockExplorers?.default?.url,
    nativeCurrency:
      configOverride?.nativeCurrency ?? chainData?.nativeCurrency?.symbol,
  };

  return [chain.name, deployment];
};

const fetchEntropyDeployments = async (
  url: string
): Promise<Record<string, EntropyDeployment>> => {
  try {
    const response = await fetch(url);
    const apiData = entropyDeploymentsSchema.parse(await response.json());
    
    return Object.fromEntries(apiData.map(transformChainData));
  } catch (error) {
    console.error("Error fetching entropy deployments:", error);
    return {};
  }
};

export function useEntropyApiData(url: string) {
  const [data, setData] = useState<Record<string, EntropyDeployment>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setData({});
    setIsLoading(true);
    setError(null);

    fetchEntropyDeployments(url)
      .then((transformedData) => {
        setData(transformedData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
}
