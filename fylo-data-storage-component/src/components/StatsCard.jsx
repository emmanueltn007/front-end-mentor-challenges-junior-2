function StatsCard () {
  return (
    <div className="bg-[hsl(228,56%,26%)] rounded-md p-4 flex flex-col gap-4 relative">
      <p className="text-[hsl(243,100%,93%)]">
        You've used {" "}
        <span className="font-semibold">815GB</span> {" "}
        of your storage
      </p>
      <div className="h-4 w-full bg-[hsl(229,57%,11%)] rounded-3xl flex items-center pl-0.5">
        <div className="h-3 w-[75%] bg-[linear-gradient(45deg,hsl(6,100%,80%),hsl(335,100%,65%))] rounded-3xl flex items-center justify-end pr-0.5">
          <div className="h-2 w-2 rounded-full bg-[hsl(243,100%,93%)]"></div>
        </div>
      </div>
      <div className="flex justify-between font-semibold text-[hsl(243,100%,93%)]">
          <span>0 GB</span>
          <span>1000 GB</span>
        </div>
      {/*
        <div 
          className="bg-[hsl(243,100%,93%)] p-8 absolute right-8 -top-4"
          style={{clipPath: "polygon(100% 0, 100% 81%, 83% 48%, 0 48%, 0 48%, 0% 0%);"}}
        >
          185 GB LEFT
        </div>
      */}
      
    </div>
  );
}

export default StatsCard