import { useEffect, useState } from "react";

function PriceDisplay ({ plan, isAnnually, isFeatured}) {
    const [visible, setVisible] = useState(true)
    const [price, setPrice] = useState(isAnnually ? plan.monthlyPrice : plan.annualPrice);

    useEffect(() => {
        setVisible(false); // fade out animation

        const timeout = setTimeout(() => {
            setPrice(isAnnually ? plan.monthlyPrice : plan.annualPrice); // swap value
            setVisible(true); // fade back in
        }, 200);

        return () => clearTimeout(timeout);
    }, [isAnnually]);

    return (
        <p
            style={{
                transition: "opacity 0.2s ease, transform 0.2s ease-out",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(8px)",
            }}
            className={`text-5xl font-bold flex items-center gap-1 ${isFeatured ? "text-[hsl(0,0%,100%)]" : "text-[hsl(233,13%,49%)]"}`}
        >
            <span className="text-xl">$</span>
            {price}
        </p>
    );
}

export default PriceDisplay