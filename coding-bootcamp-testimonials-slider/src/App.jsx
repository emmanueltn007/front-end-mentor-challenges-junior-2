import { useState } from "react";
import customerData from "./utilities/customerData"

function App () {
  const [currentTestimony, setCurrentTestimony] = useState(0);

  const handleNext = () =>
    setCurrentTestimony(
      (prevTestimony) => (prevTestimony + 1) % customerData.length,
    );

  const handlePrev = () =>
    setCurrentTestimony(
      (prevTestimony) =>
        (prevTestimony - 1 + customerData.length) % customerData.length,
    );

  const currentCustomer = customerData[currentTestimony];

  return (
    <main className="max-h-screen w-screen md:grid md:grid-cols-2 md:px-16 md:place-items-center">
      <div className="relative">
        <img
          className="max-md:p-16"
          src={currentCustomer.image}
          alt={currentCustomer.name}
        />
        <div className="bg-[hsl(0,0%,100%)] absolute bottom-16 translate-y-1/2 left-1/2 -translate-x-1/2 shadow-md shadow-[hsl(240,18%,77%)] px-6 pb-2 pt-2 rounded-3xl flex gap-8">
          <button className="cursor-pointer" onClick={handlePrev}>
            <img src="/images/icon-prev.svg" alt="previous icon" />
          </button>
          <button className="cursor-pointer" onClick={handleNext}>
            <img src="/images/icon-next.svg" alt="next icon" />
          </button>
        </div>
      </div>
      <div className="max-md:px-8 max-md:text-center md:text-2xl flex flex-col gap-4 md:row-start-1">
        <p className="text-[hsl(240,38%,20%)]">
          " {currentCustomer.testimonialMessage} "
        </p>
        <div className="flex flex-col md:flex-row md:gap-4">
          <span className="text-[hsl(240,38%,20%)] font-bold">
            {currentCustomer.name}
          </span>
          <span className="text-[hsl(240,18%,77%)] font-bold">
            {currentCustomer.occupation}
          </span>
        </div>
      </div>
    </main>
  );
}

export default App