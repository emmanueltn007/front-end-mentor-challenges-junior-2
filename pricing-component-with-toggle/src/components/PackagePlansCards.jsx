import packagesPlans from "../utilities/packagesData";

function PackagePlansCards ({ isAnnually }) {

    return (
        <section className="grid max-md:grid-rows-3 md:grid-cols-3 max-md:gap-8 md:mx-32">
                    {packagesPlans.map((plan, index) => {
                        return (
                            <div 
                                key={plan.name}
                                className={`${index === 1 ? "bg-[linear-gradient(135deg,hsl(237,73%,79%),hsl(238,63%,64%))]" : "bg-[hsl(0,0%,100%)]"} rounded-md p-4 flex flex-col items-center text-center gap-8`}
                            >
                                <h2 className={`text-xl  font-semibold ${index === 1 ? "text-[hsl(0,0%,100%)]" : "text-[hsl(233,13%,49%)]"}`}>
                                    {plan.name}
                                </h2>
                                <p className={`text-5xl font-bold flex items-center gap-1 ${index === 1 ? "text-[hsl(0,0%,100%)]" : "text-[hsl(233,13%,49%)]"}`}>
                                    <span className="text-xl">$</span>
                                    {isAnnually ? plan.monthlyPrice : plan.annualPrice}
                                </p>
                                <ul className={`w-full flex flex-col gap-2 ${index === 1 ? "text-[hsl(0,0%,100%)]" : "text-[hsl(233,13%,49%)]"}`}>
                                    <li className={`border ${index === 1 ? "border-[hsl(0,0%,100%)]" : "border-gray-500"}`}></li>
                                    <li>{plan.storage}</li>
                                    <li className={`border ${index === 1 ? "border-[hsl(0,0%,100%)]" : "border-gray-500"}`}></li>
                                    <li>{plan.users}</li>
                                    <li className={`border ${index === 1 ? "border-[hsl(0,0%,100%)]" : "border-gray-500"}`}></li>
                                    <li>{plan.data}</li>
                                    <li className={`border ${index === 1 ? "border-[hsl(0,0%,100%)]" : "border-gray-500"}`}></li>
                                </ul>
                                <button
                                    type="button" 
                                    className={`
                                        cursor-pointer font-semibold py-2 w-full rounded-md
                                        ${index === 1 ? "text-[hsl(238,63%,64%)] bg-[hsl(0,0%,100%)]" : "text-[hsl(0,0%,100%)] bg-[linear-gradient(135deg,hsl(237,73%,79%),hsl(238,63%,64%))]"}`
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