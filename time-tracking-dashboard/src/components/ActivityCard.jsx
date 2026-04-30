function ActivityCard({ data, timeframe }) {
  return (
    <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4">
      {data.map((activity) => {
        const { current, previous } = activity.timeframes[timeframe];
        const label =
          timeframe === "daily"
            ? "Yesterday"
            : timeframe === "weekly"
              ? "Last Week"
              : "Last Month";

        return (
          <div
            key={activity.title}
            className={`grid grid-rows-5 ${activity.backgroundColor} overflow-hidden rounded-2xl cursor-pointer`}
          >
            <div className="row-span-1 relative">
              <img
                className="h-12 absolute right-1"
                src={activity.icon}
                alt={`${activity.title} top bar`}
              />
            </div>
            <div className="bg-[hsl(235,46%,20%)] text-[hsl(0,100%,100%)] flex flex-col gap-2 p-4 rounded-2xl row-span-4 z-50 hover:brightness-130 transition-all duration-300 ease-in-out">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">{activity.title}</span>
                <svg
                  className="fill-[hsl(236,100%,87%)] hover:fill-[hsl(0,100%,100%)] transition-all duration-150 ease-in-out w-8 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z" />
                </svg>
              </div>

              <h1 className="text-4xl">{current}hrs</h1>

              <p className="text-sm text-[hsl(236,100%,87%)]">
                {label}- {previous}hrs
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ActivityCard;
