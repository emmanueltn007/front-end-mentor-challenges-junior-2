import data from "../data/data"

function SocialMediaOverviewToday ({ isDarkMode }) {
    return (
        <section className="flex flex-col gap-4">
            <h2 className={`font-bold text-2xl transition-all duration-300 ease-in-out ${isDarkMode ? "text-[hsl(0,100%,100%)]" : "text-[hsl(228,12%,44%)]"}`}>
                Overview - Today
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((socialOverview) => {
                    return (
                        <div 
                            className={`grid grid-cols-1 md:grid-cols-2 gap-4`} 
                            key={socialOverview.social}
                        >
                            <div className={`flex flex-col gap-4 rounded-md p-4 transition-all duration-300 ease-in-out ${isDarkMode ? "bg-[hsl(228,28%,20%)]" : "bg-[hsl(227,47%,96%)]"}`}>
                                <div className="flex justify-between items-center">
                                    <span className={`font-bold transition-all duration-300 ease-in-out ${isDarkMode ? "text-[hsl(230,22%,74%)]" : "text-[hsl(228,12%,44%)]"}`}>{socialOverview.viewType}</span>
                                    <img src={socialOverview.socialIcon} alt={`${socialOverview.social} icon`} />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className={`text-3xl font-bold transition-all duration-300 ease-in-out ${isDarkMode ? "text-[hsl(0,100%,100%)]" : ""}`}>{socialOverview.noOfViews}</span>
                                    <div className="flex items-center gap-2">
                                        <img src={socialOverview.upOrDownIcon} alt="Up or down icon" />
                                        <span>{socialOverview.percentageViews}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex flex-col gap-4 rounded-md p-4 transition-all duration-300 ease-in-out ${isDarkMode ? "bg-[hsl(228,28%,20%)]" : "bg-[hsl(227,47%,96%)]"}`}>
                                <div className="flex justify-between items-center">
                                    <span className={`font-bold transition-all duration-300 ease-in-out ${isDarkMode ? "text-[hsl(230,22%,74%)]" : "text-[hsl(228,12%,44%)]"}`}>Likes</span>
                                    <img src={socialOverview.socialIcon} alt={`${socialOverview.social} icon`} />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className={`text-3xl font-bold transition-all duration-300 ease-in-out ${isDarkMode ? "text-[hsl(0,100%,100%)]" : ""}`}>{socialOverview.noOfLikes}</span>
                                    <div className="flex items-center gap-2">
                                        <img src={socialOverview.upOrDownIcon} alt="Up or down icon" />
                                        <span>{socialOverview.percentageLikes}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default SocialMediaOverviewToday