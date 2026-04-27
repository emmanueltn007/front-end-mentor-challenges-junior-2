import { useEffect, useState } from "react";

const timeframes = ["daily", "weekly", "monthly"];

function GridContainer () {
const [data, setData] = useState(null);

useEffect(() => {
  fetch("/src/data/data.json")
    .then(response => response.json())
    .then(data => setData(data))
}, []);

if(!data) return <div>Loading...</div>

  return (
    <div className="h-fit w-full grid grid-cols-4 gap-4">
      <div className="col-span-1 md:grid md:grid-rows-3 ">
        <div className="md:row-span-2 bg-[hsl(246,80%,60%)] rounded-md p-4">
          <img className="h-16 w-16 border border-[hsl(0,100%,100%)] rounded-full" src="/images/image-jeremy.png" alt="Jeremy's avatar" />
          <p className="text-[hsl(236,100%,87%)]">
            Report for <span className="text-4xl text-[hsl(0,100%,100%)]">Jeremy Robson</span>
          </p>
        </div>
        <div className="row-span-1 flex flex-col justify-center bg-[hsl(235,46%,20%)] rounded-b-md p-4">
          {timeframes.map(t => {
            return (
              <span key={t}>
                {t}
              </span>
            );
          })}
        </div>
      </div>
      
      <div className="col-span-3 grid md:grid-cols-3 md:grid-rows-2 gap-4">
        {data.map((activity) => {
          return (
            <div 
              key={activity.title}
              className="bg-[hsl(235,46%,20%)] text-[hsl(0,100%,100%)] flex flex-col gap-4 p-4 rounded-md"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">
                  {activity.title}
                </span>
                <svg className="fill-white w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>
              </div>

              <h1 className="text-5xl">
                {activity.timeframes.weekly.current}
              </h1>

              <p>
                Last week- 5hrs
              </p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default GridContainer