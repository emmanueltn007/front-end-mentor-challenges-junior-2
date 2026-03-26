import { useState } from "react";
import ToggleSection from "./ToggleSection";
import PackagePlansCards from "./PackagePlansCards";

function Card () {
    const [isAnnually, setIsAnnually] = useState(false);

    const handleToggleButton = () => {
        setIsAnnually((prev) => !prev);
    }

    return (
        <main className="flex flex-col gap-8 px-8 py-16">
            <ToggleSection 
                isAnnually={isAnnually} 
                handleToggleButton={handleToggleButton} 
            />
            <PackagePlansCards isAnnually={isAnnually} />
        </main>
    );
}

export default Card