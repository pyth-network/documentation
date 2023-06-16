import React from "react";

interface ExamplesProps {
  children?: React.ReactNode;
}

const Examples = ({ children }: ExamplesProps) => {
  return (
    <div className="mt-4">
      <div className="font-semibold font-header text-base16 tracking-[0.03em] pb-2">
        Examples
      </div>
      <div className="flex space-x-2">{children}</div>
    </div>
  );
};

export default Examples;
