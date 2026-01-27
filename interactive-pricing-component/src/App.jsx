import benefits from "./utilities/benefits";
import { useInteractiveComponent } from "./hooks/useInteractiveComponent";

function App() {

  const {amount, setAmount, monthlyBill, views, finalAmount, handleBillToggle} = useInteractiveComponent();

  return (
    <main className="h-screen w-screen relative flex flex-col items-center">
      <div className="h-[60vh] w-screen absolute -z-10">
        <img
          className="object-cover h-full w-full"
          src="/images/bg-pattern.svg"
          alt="background image"
        />
      </div>
      <div>
        <div className="z-10 my-16 text-center bg-[url('/images/pattern-circles.svg')] bg-center bg-contain bg-no-repeat">
          <h1 className="text-[hsl(227,35%,25%)] text-2xl font-bold">Simple, traffic-based pricing</h1>
          <p className="text-[hsl(225,20%,60%)]">sign-up for our 30-day trial. No credit card required.</p>
        </div>
        <div className="bg-[hsl(0,0%,100%)] rounded-lg shadow-lg shadow-gray-400 z-10">
          {/* First part of the second div */}

          <div className="py-8 flex flex-col gap-4 px-8">
            <h2 className="text-[hsl(225,20%,60%)] text-center font-semibold">
              {views} {amount >= 36 ? "M" : "K"} PAGEVIEWS
            </h2>
            <input className="border-none" min="8" max="36" type="range" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
            <p className="text-center text-3xl font-bold">
              ${finalAmount.toFixed(2)}{" "}
              <span className="text-[hsl(225,20%,60%)] text-xl font-semibold">
                /{monthlyBill ? "month" : "year"}
              </span>
            </p>
            <div className="text-[hsl(225,20%,60%)] font-semibold flex items-center gap-4 mx-auto">
              <span>Monthly Billing</span>
              <button onClick={handleBillToggle}>
                {monthlyBill ? (
                  <svg
                    className="h-12 cursor-pointer hover:text-[hsl(174,77%,80%)] transition duration-300 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path
                      d="M416 192C486.7 192 544 249.3 544 320C544 390.7 486.7 448 416 448L224 448C153.3 448 96 390.7 96 320C96 249.3 153.3 192 224 192L416 192zM608 320C608 214 522 128 416 128L224 128C118 128 32 214 32 320C32 426 118 512 224 512L416 512C522 512 608 426 608 320zM224 400C268.2 400 304 364.2 304 320C304 275.8 268.2 240 224 240C179.8 240 144 275.8 144 320C144 364.2 179.8 400 224 400z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-12 cursor-pointer text-[hsl(174,86%,45%)] hover:text-[hsl(174,77%,80%)] transition duration-300 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path
                      d="M224 128C118 128 32 214 32 320C32 426 118 512 224 512L416 512C522 512 608 426 608 320C608 214 522 128 416 128L224 128zM416 224C469 224 512 267 512 320C512 373 469 416 416 416C363 416 320 373 320 320C320 267 363 224 416 224z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </button>
              <span className="flex items-center after:content-['25%'] after:px-2 after:rounded-xl after:ml-2 after:bg-[hsl(14,100%,90%)] after:text-[hsl(15,100%,70%)]">
                Yearly Billing
              </span>
            </div>
          </div>

          <hr className="bg-[hsl(225,20%,60%)] h-0.5 border-none" />

          {/* Second part of the second div */}

          <div className="py-4 md:px-8 flex flex-col md:flex-row items-center gap-8 text-center">
            <ul>
              {benefits.map((benefit) => {
                return (
                  <li
                    className="flex items-center gap-4 text-[hsl(225,20%,60%)] font-semibold"
                    key={benefit}
                  >
                    <img src="/images/icon-check.svg" alt="check icon" />
                    {benefit}
                  </li>
                );
              })}
            </ul>
            <button className="bg-[hsl(227,35%,25%)] text-[hsl(226,100%,87%)] py-2 px-4 rounded-3xl font-semibold cursor-pointer border-2 border-transparent hover:text-[hsl(227,35%,25%)] hover:border-[hsl(227,35%,25%)] hover:bg-[hsl(0,0%,100%)] transition-all duration-300 ease-in-out">
              Start my trial
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
