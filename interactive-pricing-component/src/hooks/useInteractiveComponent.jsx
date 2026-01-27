import { useState } from "react";

export function useInteractiveComponent() {

  const [amount, setAmount] = useState(8);
  const [monthlyBill, setMonthlyBill] = useState(true);

  let views;

  if (amount >= 8) views = 10;
  if (amount >= 12) views = 50;
  if (amount >= 16) views = 100;
  if (amount >= 24) views = 500;
  if (amount >= 36) views = 1;

  const DISCOUNT = 0.75
  const finalAmount = monthlyBill ? amount : amount * DISCOUNT;

  const handleBillToggle = () => setMonthlyBill((prev) => !prev);

  return {
    amount,
    setAmount,
    monthlyBill,
    setMonthlyBill,
    views,
    finalAmount,
    handleBillToggle
  };
}