import { useEntropyApiData } from "./EntropyApiDataFetcher";
import EntropyFeeTable from "./EntropyFeeTable";

interface EntropyFeesProps {
  networkName: string;
  url: string;
}

export function EntropyFees({ networkName, url }: EntropyFeesProps) {
  const { isLoading, error, data } = useEntropyApiData(url);

  if (isLoading) {
    return <p>Loading {networkName} fees...</p>;
  }

  if (error) {
    return <p>Error loading {networkName} fees: {error}</p>;
  }

  return <EntropyFeeTable deployments={data} />;
} 