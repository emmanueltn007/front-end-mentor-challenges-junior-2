import { useState } from "react";
import ToggleSection from "./ToggleSection";
import PackagePlansCards from "./PackagePlansCards";

function Card () {
    const [isAnnually, setIsAnnually] = useState(false);

    const handleToggleButton = () => {
        setIsAnnually((prev) => !prev);
    }

    return (
        <main className="bg-[hsl(240,78%,98%)] px-8">
            <ToggleSection 
                isAnnually={isAnnually} 
                handleToggleButton={handleToggleButton} 
            />
            <PackagePlansCards />
        </main>
    );
}

export default Card