import { EntropyDeployment } from "./EntropyDeployments";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import EntropyAbi from "../abis/IEntropy.json";
import { StyledTd } from "./Table";

const FeeTable = ({
  deployments,
}: {
  deployments: Record<string, EntropyDeployment>;
}) => {
  const [fees, setFees] = useState<Record<string, number>>({});

  useEffect(() => {
    for (const [name, deployment] of Object.entries(deployments)) {
      const contract = new ethers.Contract(
        deployment.address,
        EntropyAbi,
        ethers.getDefaultProvider(deployment.rpc)
      );
      contract.getDefaultProvider().then((defaultProvider: string) => {
        contract.getFee(defaultProvider).then((fee: bigint) => {
          const formattedFee = ethers.formatEther(fee);
          setFees((prev) => ({ ...prev, [name]: formattedFee }));
        });
      });
    }
  }, [deployments]);

  return (
    <table>
      <thead>
        <tr>
          <th>Chain Id</th>
          <th>Fee (ETH)</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(deployments).map(([name, deployment]) => (
          <tr key={name}>
            <StyledTd>
              <a
                href={deployment.explorer.replace(
                  "$ADDRESS",
                  deployment.address
                )}
                target={"_blank"}
              >
                {name}
              </a>
            </StyledTd>
            <StyledTd>
              {fees[name] === undefined ? "Loading..." : fees[name]}
            </StyledTd>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FeeTable;
