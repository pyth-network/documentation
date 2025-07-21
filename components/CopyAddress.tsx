import CopyIcon from "./icons/CopyIcon";
import { useCopyToClipboard } from "../utils/useCopyToClipboard";

const CopyAddress = ({ address, url }: { address: string; url?: string }) => {
  const { copiedText, copyToClipboard } = useCopyToClipboard();
  const isCopied = copiedText === address;

  return (
    <div
      className="-ml-1 inline-flex cursor-pointer items-center px-1 font-mono hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light"
      onClick={() => {
        copyToClipboard(address);
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
      </span>
      {isCopied ? (
        <span className="text-green-500 text-xs font-bold">✓</span>
      ) : (
        <CopyIcon className="shrink-0" />
      )}
    </div>
  );
};

export default CopyAddress;
