import packagesPlans from "../utilities/packagesData";

function PackagePlansCards ({ isAnnually }) {

    return (
        <section className="grid max-md:grid-rows-3 md:grid-cols-3 gap-8">
                    {packagesPlans.map((plan, index) => {
                        return (
                            <div key={index}>
                                <h2>
                                    {plan.name}
                                </h2>
                                <p>
                                    <span>$</span>
                                    {isAnnually ? plan.monthlyPrice : plan.annualPrice}
                                </p>
                                <ul>
                                    <li>{plan.storage}</li>
                                    <li>{plan.users}</li>
                                    <li>{plan.data}</li>
                                </ul>
                                <button>LEARN MORE</button>
                            </div>
                        );
                    })}
        </section>
    );
}

export default PackagePlansCards