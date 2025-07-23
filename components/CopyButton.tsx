import React from "react";
import CopyIcon from "./icons/CopyIcon";
import { useCopyToClipboard } from "../utils/useCopyToClipboard";

interface CopyButtonProps {
  value: string;
  className?: string;
  children?: React.ReactNode;
}

const CopyButton = ({ value, className = "", children }: CopyButtonProps) => {
  const { copiedText, copyToClipboard } = useCopyToClipboard();
  const isCopied = copiedText === value;

  return (
    <button
      type="button"
      className={`inline-flex items-center cursor-pointer px-1 font-mono hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light ${className}`}
      onClick={() => copyToClipboard(value)}
    >
      {children && <span className="mr-2">{children}</span>}
      {isCopied ? (
        <span className="text-green-500 text-xs font-bold">✓</span>
      ) : (
        <CopyIcon className="shrink-0" />
      )}
    </button>
  );
};

export default CopyButton;
