import { useState } from "react";

const TIERS = [
  {amount: 8, views: 10 + "K"},
  {amount: 12, views: 50 + "K"},
  {amount: 16, views: 100 + "K"},
  {amount: 24, views: 500 + "K"},
  {amount: 36, views: 1 + "M"}
];

export function useInteractiveComponent() {

  const [tierIndex, setTierIndex] = useState(2); // set the middle tier as the default
  const [isReduced, setIsReduced] = useState(true);

  const { amount, views } = TIERS[tierIndex];

  const finalAmountMultiplier = 12 * 0.75

  const finalAmount = isReduced ? amount : amount * finalAmountMultiplier;

  const handleBillToggle = () => setIsReduced((prev) => !prev);

  const min = 0;

  const max = TIERS.length - 1; // 4

  const percent = (tierIndex / max) * 100;

  return {
    tierIndex,
    setTierIndex,
    amount,
    isReduced,
    setIsReduced,
    views,
    finalAmount,
    handleBillToggle,
    min,
    max,
    percent
  };
}