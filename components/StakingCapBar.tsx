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
  totalLength = 500,
  height = 80,
  fillPercentage,
  secondFillPercentage,
  firstFillLabel,
  secondFillLabel,
  totalLabel
}: StakingCapBarProps) {
  const borderWidth = 4
  const gapWidth = 2
  const clampedFillPercentage = Math.min(100, Math.max(0, fillPercentage))
  const clampedSecondFillPercentage = Math.min(100 - clampedFillPercentage, Math.max(0, secondFillPercentage))
  const totalFillPercentage = clampedFillPercentage + clampedSecondFillPercentage

  return (
    <div className="flex flex-col items-start">
      <div 
        className="rounded-lg overflow-hidden relative"
        style={{ 
          width: `${totalLength}px`, 
          height: `${height}px`,
          border: `${borderWidth}px solid #7142CF`,
          backgroundColor: '#FFFFFF',
          padding: `${gapWidth}px`
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
              backgroundColor: '#5c48e4'
            }}
          >
            {firstFillLabel && (
              <div 
                className="absolute top-full left-full transform -translate-x-1/2 mt-2 text-xs font-medium text-gray-700 whitespace-nowrap"
                style={{
                  transition: 'left 300ms ease-in-out'
                }}
              >
                {firstFillLabel}
              </div>
            )}
          </div>
          <div
            className="h-full transition-all duration-300 ease-in-out relative"
            style={{ 
              width: `${clampedSecondFillPercentage}%`,
              backgroundColor: '#f0b6bb'
            }}
          >
            {secondFillLabel && (
              <div 
                className="absolute top-full left-full transform -translate-x-1/2 mt-2 text-xs font-medium text-gray-700 whitespace-nowrap"
                style={{
                  transition: 'left 300ms ease-in-out'
                }}
              >
                {secondFillLabel}
              </div>
            )}
          </div>
        </div>
      </div>
      {totalLabel && (
        <div 
          className="absolute top-full right-0 transform translate-x-1/2 mt-2 text-xs font-medium text-gray-700 whitespace-nowrap"
        >
          {totalLabel}
        </div>
      )}
    </div>
  )
}