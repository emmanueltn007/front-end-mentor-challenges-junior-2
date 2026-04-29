import { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";
import ProfileCard from "./ProfileCard";
import TimeframeToggleCard from "./TimeframeToggleCard";

const timeframes = ["daily", "weekly", "monthly"];

function GridContainer() {
  const [data, setData] = useState(null);
  const [timeframe, setTimeframe] = useState("weekly");

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="grid md:grid-cols-4 gap-4 w-full">
      <div className="md:col-span-1 md:grid md:grid-row-3 bg-[hsl(235,46%,20%)] rounded-2xl">
        <div className="md:row-span-2">
          <ProfileCard />
        </div>
        
        <div className="md:row-span-1">
          <TimeframeToggleCard timeframes={timeframes} setTimeframe={setTimeframe} timeframe={timeframe} />
        </div>
      </div>
      <div className="md:col-span-3">
        <ActivityCard data={data} timeframe={timeframe} />
      </div>
      
    </div>
  );
}

export default GridContainer;
