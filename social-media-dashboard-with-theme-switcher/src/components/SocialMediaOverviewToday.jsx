import data from "../data/data"

function SocialMediaOverviewToday () {
    return (
        <section>
            <h2>
                Overview - Today
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {data.map((socialOverview) => {
                    return (
                        <div className="grid grid-cols-1 md:grid-cols-2" key={socialOverview.social}>
                            <div className="bg-[hsl(227,47%,96%)]">
                                <div className="flex justify-between items-center">
                                    <span>{socialOverview.viewType}</span>
                                    <img src={socialOverview.socialIcon} alt={`${socialOverview.social} icon`} />
                                </div>
                                <div>
                                    <span>{socialOverview.noOfViews}</span>
                                    <div>
                                        <span>
                                            <img src={socialOverview.upOrDownIcon} alt="Up or down icon" />
                                            <span>{socialOverview.percentageViews}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[hsl(227,47%,96%)]">
                                <div className="flex justify-between items-center">
                                    <span>Likes</span>
                                    <img src={socialOverview.socialIcon} alt={`${socialOverview.social} icon`} />
                                </div>
                                <div>
                                    <span>{socialOverview.noOfLikes}</span>
                                    <div>
                                        <span>
                                            <img src={socialOverview.upOrDownIcon} alt="Up or down icon" />
                                            <span>{socialOverview.percentageLikes}</span>
                                        </span>
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