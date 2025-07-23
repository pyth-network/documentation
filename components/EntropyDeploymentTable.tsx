import { EntropyDeployment } from "./EntropyDeployments";
import { StyledTd } from "./Table";

const EntropyDeploymentTable = ({
  deployments,
  showReveal,
}: {
  deployments: Record<string, EntropyDeployment>;
  showReveal: boolean;
}) => {
  const sortedDeployments = Object.entries(deployments).sort();
  return (
    <table>
      <thead>
        <tr>
          <th>Chain Id</th>
          <th>Entropy Contract Address</th>
          {showReveal && <th>Reveal Delay</th>}
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EntropyDeploymentTable;
