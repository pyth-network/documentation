import { StyledTd } from "./Table";

const AddressTable = ({
  entries,
  explorer,
}: {
  entries: { name: string; value: string }[];
  explorer: string;
}) => {
  return (
    <table>
      <tbody>
        {entries.map(({ name, value }) => {
          const component = (
            <code
              className={
                "nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10  "
              }
            >
              {value}
            </code>
          );
          const addLink =
            explorer.includes("$ADDRESS") && value.startsWith("0x");
          return (
            <tr key={name}>
              <StyledTd>{name}</StyledTd>
              <StyledTd>
                {addLink ? (
                  <a
                    href={explorer.replace("$ADDRESS", value)}
                    className={
                      "nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
                    }
                    target={"_blank"}
                  >
                    {component}
                  </a>
                ) : (
                  component
                )}
              </StyledTd>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AddressTable;
