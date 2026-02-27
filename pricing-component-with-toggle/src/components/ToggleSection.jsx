function ToggleSection ({ isAnnually, handleToggleButton }) {

    return (
        <section className="flex flex-col items-center font-bold">
            <h1 className="text-3xl text-[hsl(233,13%,49%)]">Our Pricing</h1>
            <div className="flex items-center gap-4 text-[hsl(233,13%,72%)]">
                <span>
                    Annually
                </span>
                <button
                    className="cursor-pointer"
                    onClick={handleToggleButton}
                    aria-label="toggle switch"
                >
                    <img 
                        className="h-16" 
                        src={isAnnually ? "/images/toggle-on-solid-full.svg" : "/images/toggle-off-solid-full.svg"}
                        alt="toggle switch" 
                    />
                </button>
                <span>
                    Monthly
                </span>
            </div>
        </section>
    );
}

export default ToggleSection