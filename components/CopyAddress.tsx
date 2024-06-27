import copy from "copy-to-clipboard";
import CopyIcon from "./icons/CopyIcon";
import useTheme from "../hooks/useTheme";

const CopyAddress = ({ address, url }: { address: string; url?: string }) => {
  const isDarkMode = useTheme();

  return (
    <div
      className={`-ml-1 inline-flex cursor-pointer items-center px-1 font-mono ${
        isDarkMode ? "hover-dark" : "hover-light"
      }`}
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
