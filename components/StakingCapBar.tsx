import React from "react"

interface StakingCapBarProps {
  totalLength?: number
  height?: number
  fillPercentage: number
  secondFillPercentage: number
  labelText?: string
}

export default function StakingCapBar({
  totalLength = 300,
  height = 80,
  fillPercentage,
  secondFillPercentage,
  labelText
}: StakingCapBarProps) {
  // Ensure fillPercentages are between 0 and 100
  const clampedFillPercentage = Math.min(100, Math.max(0, fillPercentage))
  const clampedSecondFillPercentage = Math.min(100 - clampedFillPercentage, Math.max(0, secondFillPercentage))
  const totalFillPercentage = clampedFillPercentage + clampedSecondFillPercentage

  return (
    <div className="flex flex-col items-start">
      <div 
        className="rounded overflow-hidden"
        style={{ 
          width: `${totalLength}px`, 
          height: `${height}px`,
          border: '2px solid #7142CF',
          backgroundColor: '#FFFFFF'
        }}
        role="progressbar"
        aria-valuenow={totalFillPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="flex h-full">
          <div
            className="h-full transition-all duration-300 ease-in-out"
            style={{ 
              width: `${clampedFillPercentage}%`,
              backgroundColor: '#7142CF'
            }}
          ></div>
          <div
            className="h-full transition-all duration-300 ease-in-out"
            style={{ 
              width: `${clampedSecondFillPercentage}%`,
              backgroundColor: '#E6DAFE'
            }}
          ></div>
        </div>
      </div>
      {labelText && (
        <div className="mt-2 text-sm font-medium text-gray-700">
          {labelText}: {totalFillPercentage}%
        </div>
      )}
    </div>
  )
}