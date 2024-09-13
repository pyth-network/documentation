import React, { useState, useEffect } from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

const RewardSimulator: React.FC = () => {
  const [publisherStake, setPublisherStake] = useState(200);
  const [delegatorStake, setDelegatorStake] = useState(300);
  const [maxCap, setMaxCap] = useState(500);
  const [delegatorFee, setDelegatorFee] = useState(2);
  const [rewardRate, setRewardRate] = useState(10);

  const [publisherReward, setPublisherReward] = useState(0);
  const [delegatorReward, setDelegatorReward] = useState(0);

  useEffect(() => {
    const calculateRewards = () => {
      const totalStake = publisherStake + delegatorStake;
      const eligibleAmount = Math.min(totalStake, maxCap);
      const totalReward = (rewardRate / 100) * eligibleAmount;

      const publisherRewardBase =
        (rewardRate / 100) * Math.min(publisherStake, maxCap);
      const delegatorRewardBase = totalReward - publisherRewardBase;

      const delegatorFeeAmount = (delegatorFee / 100) * delegatorRewardBase;

      const finalDelegatorReward = delegatorRewardBase - delegatorFeeAmount;
      const finalPublisherReward = publisherRewardBase + delegatorFeeAmount;

      setPublisherReward(Number(finalPublisherReward.toFixed(2)));
      setDelegatorReward(Number(finalDelegatorReward.toFixed(2)));
    };

    calculateRewards();
  }, [publisherStake, delegatorStake, maxCap, delegatorFee, rewardRate]);

  return (
    <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Reward Simulator</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">
            <Latex>{"Publisher Stake ($S_p^p$):"}</Latex>
          </label>
          <input
            type="number"
            value={publisherStake}
            onChange={(e) => setPublisherStake(Number(e.target.value))}
            className="w-full p-2 border rounded bg-transparent"
          />
        </div>
        <div>
          <label className="block mb-2">
            <Latex>{"Delegator Stake ($S_p^d$):"}</Latex>
          </label>
          <input
            type="number"
            value={delegatorStake}
            onChange={(e) => setDelegatorStake(Number(e.target.value))}
            className="w-full p-2 border rounded bg-transparent"
          />
        </div>
        <div>
          <label className="block mb-2">
            <Latex>{"Maximum Cap ($C_p$):"}</Latex>
          </label>
          <input
            type="number"
            value={maxCap}
            onChange={(e) => setMaxCap(Number(e.target.value))}
            className="w-full p-2 border rounded bg-transparent"
          />
        </div>
        <div>
          <label className="block mb-2">
            <Latex>{"Delegator Fee ($f$) (%):"}</Latex>
          </label>
          <input
            type="number"
            value={delegatorFee}
            onChange={(e) => setDelegatorFee(Number(e.target.value))}
            className="w-full p-2 border rounded bg-transparent"
          />
        </div>
        <div>
          <label className="block mb-2">
            <Latex>{"Reward Rate ($r$) (%):"}</Latex>
          </label>
          <input
            type="number"
            value={rewardRate}
            onChange={(e) => setRewardRate(Number(e.target.value))}
            className="w-full p-2 border rounded bg-transparent"
          />
        </div>
      </div>
      <div className="mt-6">
        <h4 className="font-semibold mb-2">Calculated Rewards:</h4>
        <p>
          <Latex>{`Publisher Reward ($R^p_p$): ${publisherReward}`}</Latex>
        </p>
        <p>
          <Latex>{`Delegator Reward ($R^d_p$): ${delegatorReward}`}</Latex>
        </p>
      </div>
    </div>
  );
};

export default RewardSimulator;
