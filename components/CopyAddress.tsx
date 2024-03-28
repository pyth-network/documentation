import copy from "copy-to-clipboard";
import CopyIcon from "./icons/CopyIcon";

const CopyAddress = ({ address, url }: { address: string; url?: string }) => {
  return (
    <div
      className="-ml-1 inline-flex cursor-pointer items-center px-1 font-mono hover:bg-dark hover:text-white active:bg-darkGray3"
      onClick={() => {
        copy(address);
      }}
    >
      <span className="mr-2 hidden lg:block">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {address}
          </a>
        ) : (
          address
        )}
      </span>
      <span className="mr-2 lg:hidden">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {address.slice(0, 6) + "..." + address.slice(-6)}
          </a>
        ) : (
          address.slice(0, 6) + "..." + address.slice(-6)
        )}
      </span>{" "}
      <CopyIcon className="shrink-0" />
    </div>
  );
};

export default CopyAddress;
