import benefits from "./utilities/benefits";

function App() {
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
        <div className="z-10 my-16">
          <h1>Simple, traffic-based pricing</h1>
          <p>sign-up for our 30-day trial. No credit card required.</p>
        </div>
        <div className="bg-[hsl(0,0%,100%)] rounded-md shadow-sm shadow-gray-500 z-10">
          <h2>100K PAGEVIEWS</h2>
          <input type="range" name="" id="" />
          <span>$16.00 /month</span>
          <div className="flex items-center">
            <span>Monthly Billing</span>
            <img
              className="h-12"
              src="/images/toggle-off-solid-full.svg"
              alt="toggle switch"
            />
            <span>Yearly Billing</span>
          </div>

          <hr />

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
            <button 
                className="bg-[hsl(227,35%,25%)] text-[hsl(226,100%,87%)] py-2 px-4 rounded-3xl font-semibold cursor-pointer border-2 border-transparent hover:text-[hsl(227,35%,25%)] hover:border-[hsl(227,35%,25%)] hover:bg-[hsl(0,0%,100%)] transition-all duration-300 ease-in-out"
            >
              Start my trial
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
