import CopyButton from "./CopyButton";
import clsx from "clsx";

type Props = {
  address: string;
  url?: string;
  alwaysTruncate?: boolean | undefined;
};

const CopyAddress = ({ address, url, alwaysTruncate }: Props) => {
  return (
    <CopyButton value={address} className="-ml-1">
      {!alwaysTruncate && (
        <span className="mr-2 hidden lg:block">
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
              {address}
            </a>
          ) : (
            address
          )}
        </span>
      )}
      <span className={clsx("mr-2", { "lg:hidden": !alwaysTruncate })}>
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {address.slice(0, 6) + "..." + address.slice(-6)}
          </a>
        ) : (
          address.slice(0, 6) + "..." + address.slice(-6)
        )}
      </span>
    </CopyButton>
  );
};

export default CopyAddress;
