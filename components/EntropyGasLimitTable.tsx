import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { EntropyDeployment } from "./EntropyDeployments";
import EntropyAbiV2 from "../abis/IEntropyV2.json";
import { StyledTd } from "./Table";

const EntropyGasLimitTable = ({
  deployments,
}: {
  deployments: Record<string, Required<EntropyDeployment>>;
}) => {
  const [gasLimits, setGasLimits] = useState<Record<string, string>>({});

  useEffect(() => {
    for (const [name, deployment] of Object.entries(deployments)) {
      const contract = new ethers.Contract(
        deployment.address,
        EntropyAbiV2,
        ethers.getDefaultProvider(deployment.rpc)
      );
      contract.getDefaultProvider().then((defaultProvider: string) => {
        contract
          .getProviderInfoV2(defaultProvider)
          .then((providerInfo: any) => {
            const gasLimit = providerInfo.defaultGasLimit;
            const formattedGasLimit = gasLimit.toString();
            setGasLimits((prev) => ({ ...prev, [name]: formattedGasLimit }));
          });
      });
    }
  }, [deployments]);

  const sortedDeployments = Object.entries(deployments).sort();
  return (
    <table>
      <thead>
        <tr>
          <th>Chain Id</th>
          <th>Gas Limit</th>
        </tr>
      </thead>
      <tbody>
        {sortedDeployments.map(([name, deployment]) => (
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
              {gasLimits[name] === undefined ? "Loading..." : gasLimits[name]}
            </StyledTd>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EntropyGasLimitTable;
