import { useState } from "react";

export function useInteractiveComponent() {

  const [amount, setAmount] = useState(8);
  const [isReduced, setIsReduced] = useState(true);

  let views;

  const TIERS = [
    {amount: 8, views: 10},
    {amount: 12, views: 50},
    {amount: 16, views: 100},
    {amount: 24, views: 500},
    {amount: 36, views: 1000}
  ];


  const DISCOUNT = 0.75
  const finalAmount = isReduced ? amount : amount * DISCOUNT;

  const handleBillToggle = () => setIsReduced((prev) => !prev);

  const min = 8;

  const max = 36;

  const percent = ((amount - min) / (max -min)) * 100;

  return {
    amount,
    setAmount,
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