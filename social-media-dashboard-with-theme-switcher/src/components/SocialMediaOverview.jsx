import data from "../data/data"

function SocialMediaOverview ({ isDarkMode }) {

    return (
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {data.map(({ social, socialIcon, userSocialHandle, noOfFollowers, followerType, upOrDownIcon, followersGainedOrLostToday, gradient }) => {
                return (
                    <div
                        className={`
                            overflow-hidden relative before:content-[''] before:absolute before:top-0 before:h-4 before:w-full before:bg-[linear-gradient(${gradient})]
                            rounded-md flex flex-col items-center gap-4 text-center py-4 transition-all duration-300 ease-in-out ${isDarkMode ? "bg-[hsl(228,28%,20%)]" : "bg-[hsl(227,47%,96%)]"}`}
                        key={social}>
                        <div className="flex gap-4">
                            <img src={socialIcon} alt={`${social} icon`} />
                            <span className={`font-bold transition-all duration-300 ease-in-out ${isDarkMode ? "text-[hsl(230,22%,74%)]" : "text-[hsl(228,12%,44%)]"}`}>{userSocialHandle}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-5xl font-bold transition-all duration-300 ease-in-out ${isDarkMode ? "text-[hsl(0,100%,100%)]" : ""}`}>{noOfFollowers}</span>
                            <span className="uppercase tracking-[0.25rem] text-[hsl(228,12%,44%)]">{followerType}</span>
                        </div>
                        <div className="flex items-center gap-2 font-semibold">
                            <img src={upOrDownIcon} alt="Up or down icon" />
                            <span>{followersGainedOrLostToday}</span>
                            <span>Today</span>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default SocialMediaOverview