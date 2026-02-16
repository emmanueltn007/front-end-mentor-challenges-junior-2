import data from "../data/overviewData"

function SocialMediaOverview ({ isDarkMode }) {

    return (
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 z-100">
            {data.map(({ social, socialIcon, userSocialHandle, noOfFollowers, followerType, upIcon, downIcon, followersGainedOrLostToday, backgroundColor }) => {
                return (
                    <div
                        className={`
                            overflow-hidden relative before:content-[''] before:absolute before:top-0 before:h-4 before:w-full before:${backgroundColor}
                            rounded-md flex flex-col items-center gap-4 text-center py-4 transition-all duration-300 ease-in-out ${isDarkMode ? "bg-[hsl(228,28%,20%)]" : "bg-[hsl(227,47%,96%)]"}`}
                        key={social}>
                        <div className="flex gap-4">
                            <img src={socialIcon} alt={`${social} icon`} />
                            <span className={`font-bold transition-all duration-300 ease-in-out ${isDarkMode ? "text-[hsl(230,22%,74%)]" : "text-[hsl(228,12%,44%)]"}`}>{userSocialHandle}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-5xl font-bold transition-all duration-300 ease-in-out ${isDarkMode ? "text-[hsl(0,100%,100%)]" : "text-[hsl(230,17%,14%)]"}`}>{noOfFollowers}</span>
                            <span className="uppercase tracking-[0.25rem] text-[hsl(228,12%,44%)]">{followerType}</span>
                        </div>
                        <div className={`flex items-center gap-2 font-semibold ${followersGainedOrLostToday < 0 ? "text-[hsl(356,69%,56%)]" : "text-[hsl(163,72%,41%)]"}`}>
                            <img src={followersGainedOrLostToday < 0 ? downIcon : upIcon} alt="Up or down icon" />
                            <span>{followersGainedOrLostToday < 0 ? followersGainedOrLostToday * - 1 : followersGainedOrLostToday}</span>
                            <span>Today</span>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default SocialMediaOverview