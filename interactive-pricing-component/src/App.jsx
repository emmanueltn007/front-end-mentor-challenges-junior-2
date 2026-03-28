import { useInteractiveComponent } from "./hooks/useInteractiveComponent";
import Benefits from "./components/Benefits";
import BillingTypeToggle from "./components/BillingTypeToggle";
import Intro from "./components/Intro";
import BillingPlan from "./components/BillingPlan";

function App() {

  const { amount, setAmount, isReduced, views, finalAmount, handleBillToggle, min, max, percent } = useInteractiveComponent();

  return (
    <main className="min-h-screen w-screen relative flex flex-col items-center font-['Manrope',sans-serif] max-md:px-4">

      {/* Background Image */}
      <div className="h-1/2 w-screen absolute -z-10 bg-[hsl(225,100%,96%)] rounded-bl-[8rem]"></div>

      <div className="max-md:w-full flex flex-col gap-16 my-auto">
        <Intro />


        <div className="bg-[hsl(0,0%,100%)] rounded-lg shadow-lg shadow-gray-400 z-10">

          {/* First part of the second div */}
          <div className="py-8 flex flex-col gap-4 px-8">
            <BillingPlan 
              amount={amount} 
              setAmount={setAmount} 
              isReduced={isReduced} 
              views={views}
              finalAmount={finalAmount}
              min={min} max={max} 
              percent={percent} 
            />
            <BillingTypeToggle 
              handleBillToggle={handleBillToggle} 
              isReduced={isReduced} 
            />
          </div>

          <hr className="bg-[hsl(225,20%,60%)] h-0.5 border-none" />

          {/* Second part of the second div */}
          <Benefits />
        </div>

      </div>
    </main>
  );
}

export default App;
