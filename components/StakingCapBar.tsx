import React, { type ReactNode, useMemo } from "react";

interface StakingCapBarProps {
  totalLength?: number;
  height?: number;
  fillPercentage: number;
  secondFillPercentage: number;
  firstFillLabel?: string;
  secondFillLabel?: string;
  totalLabel?: string;
}

export default function StakingCapBar({
  totalLength = 500,
  height = 80,
  fillPercentage,
  secondFillPercentage,
  firstFillLabel,
  secondFillLabel,
  totalLabel,
}: StakingCapBarProps) {
  const clampedFillPercentage = useMemo(() => Math.min(100, Math.max(0, fillPercentage)), [fillPercentage]);
  const clampedSecondFillPercentage = useMemo(() => Math.min(
    100 - clampedFillPercentage,
    Math.max(0, secondFillPercentage)
  ), [clampedFillPercentage, secondFillPercentage]);
  const totalFillPercentage =
    useMemo(() => clampedFillPercentage + clampedSecondFillPercentage, [clampedFillPercentage, clampedSecondFillPercentage]);

  return (
    <div
      className="rounded-lg relative border border-4 border-[#7142CF] p-1 bg-white whitespace-nowrap"
      style={{
        width: `${totalLength}px`,
        height: `${height}px`,
      }}
      role="progressbar"
      aria-valuenow={totalFillPercentage}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <Bar color="#5c48e4" fillPercent={clampedFillPercentage}>
        {firstFillLabel}
      </Bar>
      <Bar color="#f0b6bb" fillPercent={clampedSecondFillPercentage}>
        {secondFillLabel}
      </Bar>
      <div className="absolute right-0 bottom-full mb-[1.65rem]">
        {totalLabel && <Label>{totalLabel}</Label>}
      </div>
    </div>
  );
}

type BarProps = {
  fillPercent: number;
  children?: ReactNode | undefined;
  color: string;
}

const Bar = ({ fillPercent, children, color }: BarProps) => (
  <div
    className="inline-block h-full transition-all duration-300 ease-in-out relative"
    style={{
      backgroundColor: color,
      width: `${fillPercent}%`,
    }}
  >
    {children && <Label>{children}</Label>}
  </div>
);

const Label = ({ children }: { children: ReactNode }) => (
  <div
    className="absolute top-full left-full transform -translate-x-1/2 mt-2 text-xs font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap"
    style={{
      transition: "left 300ms ease-in-out",
    }}
  >
    {children}
  </div>
);
