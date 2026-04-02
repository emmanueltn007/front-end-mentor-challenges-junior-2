import data from "../data/overviewData"
import { useTheme } from "../hooks/ThemeContext";

function SocialMediaOverview () {
    const { isDarkMode } = useTheme();
    
    const colors = ["hsl(208,92%,53%)", "hsl(203, 89%, 53%)", "linear-gradient(45deg,hsl(37,97%,70%),hsl(5,77%,71%),hsl(329,70%,58%))", "hsl(348,97%,39%)"]

    return (
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8 z-100">
            {data.map(({ social, socialIcon, userSocialHandle, noOfFollowers, followerType, upIcon, downIcon, followersGainedOrLostToday }, index) => {
                return (
                    <div
                        className={`
                            overflow-hidden relative rounded-md flex flex-col items-center gap-4 text-center py-4 transition-all duration-300 ease-in-out ${isDarkMode ? "bg-[hsl(228,28%,20%)]" : "bg-[hsl(227,47%,96%)]"}`}
                        key={social}
                    >
                        {/* Color bar */}
                        <div
                            className="absolute top-0 left-0 h-1.5 w-full"
                            style={{ background: colors[index] }}
                        />
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