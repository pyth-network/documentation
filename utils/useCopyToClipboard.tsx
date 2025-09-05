import { useState } from "react";
import copy from "copy-to-clipboard";

export const useCopyToClipboard = (timeout: number = 2000) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    copy(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), timeout);
  };

  return { copiedText, copyToClipboard };
};
