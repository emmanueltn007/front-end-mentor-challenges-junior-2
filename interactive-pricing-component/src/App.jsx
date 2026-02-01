import { useInteractiveComponent } from "./hooks/useInteractiveComponent";
import Benefits from "./components/Benefits";
import BillingTypeToggle from "./components/BillingTypeToggle";
import Intro from "./components/Intro";
import BillingPlan from "./components/billingPlan";

function App() {

  const { amount, setAmount, monthlyBill, views, finalAmount, handleBillToggle, min, max, percent } = useInteractiveComponent();

  return (
    <main className="h-screen w-screen relative flex flex-col items-center">

      {/* Background Image */}
      <div className="h-[60vh] w-screen absolute -z-10">
        <img
          className="object-cover h-full w-full"
          src="/images/bg-pattern.svg"
          alt="background image"
        />
      </div>

      <div>
        <Intro />

        <div className="bg-[hsl(0,0%,100%)] rounded-lg shadow-lg shadow-gray-400 z-10">

          {/* First part of the second div */}
          <div className="py-8 flex flex-col gap-4 px-8">
            <BillingPlan 
              amount={amount} 
              setAmount={setAmount} 
              monthlyBill={monthlyBill} 
              views={views}
              finalAmount={finalAmount}
              min={min} max={max} 
              percent={percent} 
            />
            <BillingTypeToggle handleBillToggle={handleBillToggle} monthlyBill={monthlyBill}  />
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
