import CopyButton from "./CopyButton";
import { StyledTd } from "./Table";

const AddressSvmTable = ({
  entries,
  explorer,
}: {
  entries: { name: string; value: string; link?: boolean }[];
  explorer: string;
}) => {
  return (
    <table>
      <tbody>
        {entries.map(({ name, value, link }) => {
          const addLink = explorer.includes("$ADDRESS") && link;
          return (
            <tr key={name}>
              <StyledTd>{name}</StyledTd>
              <StyledTd>
                {addLink ? (
                  <a
                    href={explorer.replace("$ADDRESS", value)}
                    className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <code className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10">
                      {value}
                    </code>
                  </a>
                ) : (
                  <code className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10">
                    {value}
                  </code>
                )}
                <CopyButton value={value} className="ml-2" />
              </StyledTd>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AddressSvmTable;
