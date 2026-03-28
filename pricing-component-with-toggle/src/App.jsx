import { useState } from "react";
import ToggleSection from "./components/ToggleSection";
import PackagePlansCards from "./components/PackagePlansCards";

function App() {
  const [isAnnually, setIsAnnually] = useState(false);

  const handleToggleButton = () => {
    setIsAnnually((prev) => !prev);
  };

  return (
      <main className="min-h-screen w-screen bg-[hsl(240,78%,98%)] font-['Montserrat',sans-serif] flex flex-col justify-center gap-8 max-md:px-8 relative z-100">
        <div className="h-[30%] w-[40%] md:h-[80%] md:w-[20%] absolute top-0 right-0 z-0">
          <img
            className="h-full w-full object-cover"
            src="/images/bg-top.svg"
            alt="top background image"
          />
        </div>
        <div className="max-md:hidden h-[40%] w-[20%] absolute bottom-0 left-0 z-0">
          <img
            className="h-full w-full object-cover"
            src="/images/bg-bottom.svg"
            alt="botto left background image"
          />
        </div>
        <ToggleSection
          isAnnually={isAnnually}
          handleToggleButton={handleToggleButton}
        />
        <PackagePlansCards isAnnually={isAnnually} />
      </main>
  );
}

export default App;
