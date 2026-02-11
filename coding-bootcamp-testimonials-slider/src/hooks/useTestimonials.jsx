import { useState } from "react";
import customerData from "../utilities/customerData"

export default function useTestimonials () {
    const [currentTestimony, setCurrentTestimony] = useState(0);

  const handleNext = () => {
    if (!customerData.length) return;
    setCurrentTestimony(
      (prevTestimony) => (prevTestimony + 1) % customerData.length,
    );
  }

  const handlePrev = () => {
    if (!customerData.length) return;
    setCurrentTestimony(
      (prevTestimony) =>
        (prevTestimony - 1 + customerData.length) % customerData.length,
    );
  }

  const currentCustomer = customerData.length ? customerData[currentTestimony] : null;

    return {
        handleNext,
        handlePrev,
        currentCustomer,
        currentTestimony
    };
}