import { useEffect, useState } from "react";
import * as chains from "viem/chains";
import { EntropyDeploymentsConfig } from "./EntropyDeploymentsConfig";

interface ApiChainConfig {
  name: string;
  network_id: number;
  contract_addr: string;
  reveal_delay_blocks: number;
  gas_limit: number;
  default_fee: number;
}

export interface EntropyDeployment {
  address: string;
  delay: string;
  gasLimit: string;
  default_fee: number;
  rpc?: string;
  explorer?: string;
  nativeCurrency?: string;
}

const fetchEntropyDeployments = async (
  url: string
): Promise<ApiChainConfig[]> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data as ApiChainConfig[];
  } catch (error) {
    console.error("Error fetching entropy deployments:", error);
    return [];
  }
};

export const getChainData = (network_id: number) => {
  for (const chain of Object.values(chains)) {
    if (chain.id === network_id) {
      return chain;
    }
  }
  return null;
};

interface EntropyApiDataFetcherProps {
  url: string;
  children: (
    data: Record<string, EntropyDeployment>,
    isLoading: boolean,
    error: string | null
  ) => React.ReactNode;
}

export function EntropyApiDataFetcher({
  url,
  children,
}: EntropyApiDataFetcherProps) {
  const [data, setData] = useState<Record<string, EntropyDeployment>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntropyDeployments(url)
      .then((apiData: ApiChainConfig[]) => {
        const transformedData = apiData.reduce((acc, chain) => {
          const chainData = getChainData(chain.network_id);
          const configOverride = EntropyDeploymentsConfig[chain.network_id];

          acc[chain.name] = {
            address: chain.contract_addr,
            delay: `${chain.reveal_delay_blocks} block${
              chain.reveal_delay_blocks !== 1 ? "s" : ""
            }`,
            gasLimit: chain.gas_limit.toLocaleString(),
            default_fee: chain.default_fee,
            // Use config override first, then viem data, then undefined
            rpc: configOverride?.rpc || chainData?.rpcUrls?.default?.http?.[0],
            explorer:
              configOverride?.explorer ||
              chainData?.blockExplorers?.default?.url,
            nativeCurrency:
              configOverride?.nativeCurrency ||
              chainData?.nativeCurrency?.symbol,
          };
          return acc;
        }, {} as Record<string, EntropyDeployment>);

        setData(transformedData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [url]);

  return <>{children(data, isLoading, error)}</>;
}
