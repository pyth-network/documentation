import { useEntropyApiData } from "./EntropyApiDataFetcher";
import EntropyDeploymentTable from "./EntropyDeploymentTable";

interface EntropyDeploymentsProps {
  networkName: string;
  url: string;
  showReveal?: boolean;
}

export function EntropyDeployments({ networkName, url, showReveal = false }: EntropyDeploymentsProps) {
  const { isLoading, error, data } = useEntropyApiData(url);

  if (isLoading) {
    return <p>Loading {networkName} data...</p>;
  }

  if (error) {
    return <p>Error loading {networkName} data: {error}</p>;
  }

  return <EntropyDeploymentTable deployments={data} showReveal={showReveal} />;
} 