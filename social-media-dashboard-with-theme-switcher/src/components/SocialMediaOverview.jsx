import data from "../data/data"

function SocialMediaOverview ({ isDarkMode }) {
    console.log(data);

    return (
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {data.map((social) => {
                return (
                    <div
                        className={`rounded-md flex flex-col items-center gap-4 text-center py-4 transition-all duration-300 ease-in-out ${isDarkMode ? "bg-[hsl(228,28%,20%)]" : "bg-[hsl(227,47%,96%)]"}`}
                        key={social.social}>
                        <div className="flex gap-4">
                            <img src={social.socialIcon} alt={`${social.social} icon`} />
                            <span className={`font-bold transition-all duration-300 ease-in-out ${isDarkMode ? "text-[hsl(230,22%,74%)]" : "text-[hsl(228,12%,44%)]"}`}>{social.userSocialHandle}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-5xl font-bold transition-all duration-300 ease-in-out ${isDarkMode ? "text-[hsl(0,100%,100%)]" : ""}`}>{social.noOfFollowers}</span>
                            <span className="uppercase tracking-[0.25rem] text-[hsl(228,12%,44%)]">{social.followerType}</span>
                        </div>
                        <div className="flex items-center gap-2 font-semibold">
                            <img src={social.upOrDownIcon} alt="Up or down icon" />
                            <span>{social.followersGainedOrLostToday}</span>
                            <span>Today</span>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default SocialMediaOverview