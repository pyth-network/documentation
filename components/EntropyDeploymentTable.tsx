import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { EntropyDeployment } from "./EntropyDeployments";
import { StyledTd } from "./Table";

const ENTROPY_V2_ABI = [
  {
    "inputs": [],
    "name": "getDefaultProvider",
    "outputs": [
      {
        "internalType": "address",
        "name": "provider",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "provider",
        "type": "address"
      }
    ],
    "name": "getProviderInfoV2",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint128",
            "name": "feeInWei",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "accruedFeesInWei",
            "type": "uint128"
          },
          {
            "internalType": "bytes32",
            "name": "originalCommitment",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "originalCommitmentSequenceNumber",
            "type": "uint64"
          },
          {
            "internalType": "bytes",
            "name": "commitmentMetadata",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "uri",
            "type": "bytes"
          },
          {
            "internalType": "uint64",
            "name": "endSequenceNumber",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "sequenceNumber",
            "type": "uint64"
          },
          {
            "internalType": "bytes32",
            "name": "currentCommitment",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "currentCommitmentSequenceNumber",
            "type": "uint64"
          },
          {
            "internalType": "address",
            "name": "feeManager",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "withCallback",
            "type": "bool"
          },
          {
            "internalType": "uint32",
            "name": "defaultGasLimit",
            "type": "uint32"
          }
        ],
        "internalType": "struct EntropyStructsV2.ProviderInfo",
        "name": "info",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const EntropyDeploymentTable = ({
  deployments,
  showReveal,
}: {
  deployments: Record<string, EntropyDeployment>;
  showReveal: boolean;
}) => {
  const [gasLimits, setGasLimits] = useState<Record<string, string>>({});

  useEffect(() => {
    for (const [name, deployment] of Object.entries(deployments)) {
      if (deployment.rpc) {
        try {
          const contract = new ethers.Contract(
            deployment.address,
            ENTROPY_V2_ABI,
            ethers.getDefaultProvider(deployment.rpc)
          );
          contract.getDefaultProvider().then((defaultProvider: string) => {
            contract
              .getProviderInfoV2(defaultProvider)
              .then((providerInfo: any) => {
                const gasLimit = providerInfo.defaultGasLimit;
                const formattedGasLimit = gasLimit.toString();
                setGasLimits((prev) => ({ ...prev, [name]: formattedGasLimit }));
              })
              .catch(() => {
                setGasLimits((prev) => ({ ...prev, [name]: deployment.gasLimit }));
              });
          }).catch(() => {
            setGasLimits((prev) => ({ ...prev, [name]: deployment.gasLimit }));
          });
        } catch {
          setGasLimits((prev) => ({ ...prev, [name]: deployment.gasLimit }));
        }
      } else {
        setGasLimits((prev) => ({ ...prev, [name]: deployment.gasLimit }));
      }
    }
  }, [deployments]);

  const sortedDeployments = Object.entries(deployments).sort();
  return (
    <table>
      <thead>
        <tr>
          <th>Chain Id</th>
          <th>Entropy Contract Address</th>
          {showReveal && <th>Reveal Delay</th>}
          <th>Gas Limit</th>
        </tr>
      </thead>
      <tbody>
        {sortedDeployments.map(([name, deployment]) => (
          <tr key={name}>
            <StyledTd>{name}</StyledTd>
            <StyledTd>
              <a
                href={deployment.explorer.replace(
                  "$ADDRESS",
                  deployment.address
                )}
                className={
                  "nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
                }
                target={"_blank"}
              >
                <code
                  className={
                    "nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10  "
                  }
                >
                  {deployment.address}
                </code>
              </a>
            </StyledTd>
            {showReveal && <StyledTd>{deployment.delay}</StyledTd>}
            <StyledTd>
              {gasLimits[name] === undefined ? "Loading..." : gasLimits[name]}
            </StyledTd>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EntropyDeploymentTable;
