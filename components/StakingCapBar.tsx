import React, { useState } from 'react';

const StakingCapBar = () => {
  const [maxRewardRate, setMaxRewardRate] = useState(10);

  const barWidth = 300;
  const barHeight = 30;

  return (
    <div className="flex flex-col items-start p-4 max-w-md">
      <h2 className="text-xl font-bold mb-2">Example:</h2>
      <div className="mb-4 w-full">
        <label htmlFor="rewardRateSlider" className="block text-sm font-medium text-gray-700 mb-1">
          Max Reward Rate: {maxRewardRate}%
        </label>
        <input
          type="range"
          id="rewardRateSlider"
          min="0"
          max="100"
          value={maxRewardRate}
          onChange={(e) => setMaxRewardRate(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      <div className="relative w-full h-8 bg-gray-200 rounded">
        <div 
          className="absolute top-0 left-0 h-full bg-blue-500 rounded"
          style={{ width: `${maxRewardRate}%` }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-2">
          <span className="text-sm font-semibold">0%</span>
          <span className="text-sm font-semibold">100%</span>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600">Max Reward Rate = {maxRewardRate}%</p>
    </div>
  );
};

export default StakingCapBar;