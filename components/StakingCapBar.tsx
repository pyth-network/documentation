import React from "react"

interface StakingCapBarProps {
  totalLength?: number
  height?: number
  fillPercentage: number
  secondFillPercentage: number
  firstFillLabel?: string
  secondFillLabel?: string
  totalLabel?: string
}

export default function StakingCapBar({
  totalLength = 300,
  height = 80,
  fillPercentage,
  secondFillPercentage,
  firstFillLabel,
  secondFillLabel,
  totalLabel
}: StakingCapBarProps) {
  // Ensure fillPercentages are between 0 and 100
  const clampedFillPercentage = Math.min(100, Math.max(0, fillPercentage))
  const clampedSecondFillPercentage = Math.min(100 - clampedFillPercentage, Math.max(0, secondFillPercentage))
  const totalFillPercentage = clampedFillPercentage + clampedSecondFillPercentage

  return (
    <div className="flex flex-col items-start">
      <div 
        className="rounded overflow-hidden relative"
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
            className="h-full transition-all duration-300 ease-in-out relative"
            style={{ 
              width: `${clampedFillPercentage}%`,
              backgroundColor: '#7142CF'
            }}
          >
            {firstFillLabel && (
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-1 text-xs font-medium text-gray-700 whitespace-nowrap"
                style={{
                  transition: 'left 300ms ease-in-out'
                }}
              >
                {firstFillLabel}: {clampedFillPercentage}%
              </div>
            )}
          </div>
          <div
            className="h-full transition-all duration-300 ease-in-out relative"
            style={{ 
              width: `${clampedSecondFillPercentage}%`,
              backgroundColor: '#7142CF'
            }}
          >
            {secondFillLabel && (
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-1 text-xs font-medium text-gray-700 whitespace-nowrap"
                style={{
                  transition: 'left 300ms ease-in-out'
                }}
              >
                {secondFillLabel}: {clampedSecondFillPercentage}%
              </div>
            )}
          </div>
        </div>
      </div>
      {totalLabel && (
        <div className="mt-6 text-sm font-medium text-gray-700">
          {totalLabel}: {totalFillPercentage}%
        </div>
      )}
    </div>
  )
}