import CopyButton from "./CopyButton";

const CopyAddress = ({ address, url }: { address: string; url?: string }) => {
  return (
    <CopyButton value={address} className="-ml-1">
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
      </span>
    </CopyButton>
  );
};

export default CopyAddress;
