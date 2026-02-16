import overviewTodayData from "../data/overviewTodayData";

function SocialMediaOverviewToday({ isDarkMode }) {
  return (
    <section className="flex flex-col gap-4 z-100">
      <h2
        className={`font-bold text-2xl transition-all duration-300 ease-in-out ${isDarkMode ? "text-[hsl(0,100%,100%)]" : "text-[hsl(228,12%,44%)]"}`}
      >
        Overview - Today
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {overviewTodayData.map(({ social, socialIcon, engagementType, likes, engagementNumber, engagementPercentage, likesNumber, likesPercentage, upIcon, downIcon }) => {
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" key={social}>
              <div className={`flex flex-col gap-4 transition-all duration-300 ease-in-out rounded-md p-4 ${isDarkMode ? "bg-[hsl(228,28%,20%)]" : "bg-[hsl(227,47%,96%)]"}`}>
                <div className="flex justify-between items-center">
                  <span className={`font-semibold transition-all duration-300 ease-in-out ${isDarkMode ? "text-[hsl(230,22%,74%)]" : "text-[hsl(228,12%,44%)]"}`}>{engagementType}</span>
                  <img src={socialIcon} alt={`${social} icon`} />
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-2xl font-semibold transition-all duration-300 ease-in-out ${isDarkMode ? "text-[hsl(0,100%,100%)]" : "text-[hsl(230,17%,14%)]"}`}>{engagementNumber}</span>
                  <div className="flex items-center gap-2">
                    <img src={engagementPercentage < 0 ? downIcon : upIcon} alt="up or down icon" />
                     <span className={`font-semibold ${engagementPercentage < 0 ? "text-[hsl(356,69%,56%)]" : "text-[hsl(163,72%,41%)]"}`}>
                      {engagementPercentage < 0 ? engagementPercentage * - 1 : engagementPercentage}%
                     </span>
                  </div>
                </div>
              </div>

              <div className={`flex flex-col gap-4 transition-all duration-300 ease-in-out rounded-md p-4 ${isDarkMode ? "bg-[hsl(228,28%,20%)]" : "bg-[hsl(227,47%,96%)]"}`}>
                <div className="flex justify-between items-center">
                  <span className={`font-semibold transition-all duration-300 ease-in-out ${isDarkMode ? "text-[hsl(230,22%,74%)]" : "text-[hsl(228,12%,44%)]"}`}>{likes}</span>
                  <img src={socialIcon} alt={`${social} icon`} />
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-2xl font-semibold transition-all duration-300 ease-in-out ${isDarkMode ? "text-[hsl(0,100%,100%)]" : "text-[hsl(230,17%,14%)]"}`}>{likesNumber}</span>
                  <div className="flex items-center gap-2">
                    <img src={likesPercentage < 0 ? downIcon : upIcon} alt="up or down icon" />
                    <span className={`font-semibold ${likesPercentage < 0 ? "text-[hsl(356,69%,56%)]" : "text-[hsl(163,72%,41%)]"}`}>
                      {likesPercentage < 0 ? likesPercentage * - 1 : likesPercentage}%
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

export default SocialMediaOverviewToday;