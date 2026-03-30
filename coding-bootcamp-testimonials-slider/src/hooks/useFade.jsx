import { useState, useEffect } from "react";

export default function useFade(currentCustomer) {
  const [isVisible, setIsVisible] = useState(true);
  const [displayedCustomer, setDisplayedCustomer] = useState(currentCustomer);

  useEffect(() => {
    setIsVisible(false);

    const timeout = setTimeout(() => {
      setDisplayedCustomer(currentCustomer);
      setIsVisible(true);
    }, 500);

    return () => {
      setIsVisible(false); // ensure clean state on fast clicks
      clearTimeout(timeout);
    };
  }, [currentCustomer]);

  return { isVisible, displayedCustomer };
}
