import React from "react";

interface StakingCapBarProps {
  totalLength?: number;
  height?: number;
  barColor?: string;
  secondBarColor?: string;
  backgroundColor?: string;
  fillPercentage: number;
  secondFillPercentage: number;
}

export default function StakingCapBar({
  totalLength = 300,
  height = 80,
  barColor = "bg-blue-500",
  secondBarColor = "bg-green-500",
  backgroundColor = "bg-gray-200",
  fillPercentage,
  secondFillPercentage,
}: StakingCapBarProps) {
  // Ensure fillPercentages are between 0 and 100
  const clampedFillPercentage = Math.min(100, Math.max(0, fillPercentage));
  const clampedSecondFillPercentage = Math.min(
    100 - clampedFillPercentage,
    Math.max(0, secondFillPercentage)
  );

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold">Staking Cap Bar</h2>
      <div
        className="w-full max-w-sm bg-white p-4 rounded-lg shadow-inner"
        style={{ width: `${totalLength}px` }}
      >
        <div
          className={`${backgroundColor} rounded overflow-hidden border border-gray-300`}
          style={{ height: `${height}px` }}
          role="progressbar"
          aria-valuenow={clampedFillPercentage + clampedSecondFillPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="flex h-full">
            <div
              className={`${barColor} h-full transition-all duration-300 ease-in-out`}
              style={{ width: `${clampedFillPercentage}%` }}
            ></div>
            <div
              className={`${secondBarColor} h-full transition-all duration-300 ease-in-out`}
              style={{ width: `${clampedSecondFillPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-700">
          First Fill: {clampedFillPercentage}%
        </p>
        <p className="text-lg font-semibold text-gray-700">
          Second Fill: {clampedSecondFillPercentage}%
        </p>
        <p className="text-lg font-semibold text-gray-700">
          Total Fill: {clampedFillPercentage + clampedSecondFillPercentage}%
        </p>
        <p className="text-sm text-gray-600">Total Length: {totalLength}px</p>
      </div>
    </div>
  );
}
