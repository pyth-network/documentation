import { EntropyDeployment } from "./EntropyApiDataFetcher";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import EntropyAbi from "@pythnetwork/entropy-sdk-solidity/abis/IEntropyV2.json";
import { StyledTd } from "./Table";

const FeeTable = ({
  deployments,
}: {
  deployments: Record<string, EntropyDeployment>;
}) => {
  const [fees, setFees] = useState<Record<string, string>>({});

  useEffect(() => {
    for (const [name, deployment] of Object.entries(deployments)) {
      if (deployment.rpc) {
        const contract = new ethers.Contract(
          deployment.address,
          EntropyAbi,
          ethers.getDefaultProvider(deployment.rpc)
        );
        contract
          .getFeeV2()
          .then((fee: bigint) => {
            const formattedFee = ethers.formatEther(fee);
            setFees((prev) => ({ ...prev, [name]: formattedFee }));
          })
          .catch((error: any) => {
            console.error(`Error fetching fee for ${name}:`, error);
            if (deployment.default_fee) {
              const fallbackFee = (deployment.default_fee / 1e18).toFixed(9);
              setFees((prev) => ({ ...prev, [name]: fallbackFee }));
            }
          });
      } else {
        // No RPC available, use default_fee
        if (deployment.default_fee) {
          const fallbackFee = (deployment.default_fee / 1e18).toFixed(9);
          setFees((prev) => ({ ...prev, [name]: fallbackFee }));
        }
      }
    }
  }, [deployments]);

  const sortedDeployments = Object.entries(deployments).sort();
  return (
    <table>
      <thead>
        <tr>
          <th>Chain Id</th>
          <th>Fee</th>
        </tr>
      </thead>
      <tbody>
        {sortedDeployments.map(([name, deployment]) => (
          <tr key={name}>
            <StyledTd>
              {deployment.explorer ? (
                <a
                  href={deployment.explorer + "/address/" + deployment.address}
                  target={"_blank"}
                >
                  {name}
                </a>
              ) : (
                name
              )}
            </StyledTd>
            <StyledTd>
              {fees[name] === undefined ? (
                "Loading..."
              ) : (
                <>
                  {fees[name]} <b>{deployment.nativeCurrency || "ETH"}</b>
                </>
              )}
            </StyledTd>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FeeTable;
