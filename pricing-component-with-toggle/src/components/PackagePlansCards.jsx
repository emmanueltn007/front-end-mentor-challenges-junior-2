import packagesPlans from "../utilities/packagesData";
import PriceDisplay from "./PriceDisplay";

function PackagePlansCards ({ isAnnually }) {

    return (
        <section className="flex justify-center max-md:gap-8 md:mx-32">
                    {packagesPlans.map((plan, index) => {
                        const isFeatured = index === 1;
                        return (
                            <div 
                                key={plan.name}
                                className={`w-md rounded-md flex flex-col items-center text-center gap-8 shadow-lg shadow-gray-500
                                    ${isFeatured ? "bg-[linear-gradient(135deg,hsl(237,73%,79%),hsl(238,63%,64%))] py-8 px-4" : "bg-[hsl(0,0%,100%)] p-4 self-center"}`}
                            >
                                <h2 className={`text-xl  font-semibold ${index === 1 ? "text-[hsl(0,0%,100%)]" : "text-[hsl(233,13%,49%)]"}`}>
                                    {plan.name}
                                </h2>

                                <PriceDisplay plan={plan} isAnnually={isAnnually} isFeatured={isFeatured} />

                                <ul className={`w-full flex flex-col gap-2 ${isFeatured ? "text-[hsl(0,0%,100%)]" : "text-[hsl(233,13%,49%)]"}`}>
                                    <li className={`border ${isFeatured ? "border-[hsl(0,0%,100%)]" : "border-gray-500"}`}></li>
                                    <li>{plan.storage}</li>
                                    <li className={`border ${isFeatured ? "border-[hsl(0,0%,100%)]" : "border-gray-500"}`}></li>
                                    <li>{plan.users}</li>
                                    <li className={`border ${isFeatured ? "border-[hsl(0,0%,100%)]" : "border-gray-500"}`}></li>
                                    <li>{plan.data}</li>
                                    <li className={`border ${isFeatured ? "border-[hsl(0,0%,100%)]" : "border-gray-500"}`}></li>
                                </ul>
                                
                                <button
                                    type="button" 
                                    className={`
                                        cursor-pointer font-semibold py-2 w-full rounded-md border-2 border-transparent transition-colors duration-300 ease-in-out
                                        ${isFeatured ? "text-[hsl(238,63%,64%)] bg-[hsl(0,0%,100%)] hover:bg-transparent hover:text-[hsl(0,0%,100%)] hover:border-[hsl(0,0%,100%)]" : "text-[hsl(0,0%,100%)] bg-[linear-gradient(135deg,hsl(237,73%,79%),hsl(238,63%,64%))] hover:text-[hsl(238,63%,64%)] hover:border-[hsl(238,63%,64%)] hover:bg-[linear-gradient(135deg,hsl(0,0%,100%),hsl(0,0%,100%))]"}`
                                    }>
                                    LEARN MORE
                                </button>
                            </div>
                        );
                    })}
        </section>
    );
}

export default PackagePlansCards