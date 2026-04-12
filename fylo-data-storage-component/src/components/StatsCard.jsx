function StatsCard () {
  return (
    <div className="bg-[hsl(228,56%,26%)] max-md:w-full rounded-md max-md:px-4 max-md:pt-4 max-md:pb-8 md:p-4 flex flex-col gap-4 relative">
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
      <div 
        className="md:[clip-path:polygon(86%_70%,0%_70%,0%_25%,100%_25%,100%_90%)] flex items-center gap-2 bg-[hsl(243,100%,93%)] max-md:py-3 max-md:px-8 max-md:rounded-md md:p-8 absolute right-1/2 max-md:translate-x-1/2 bottom-0 translate-y-1/2 md:right-4 md:top-10 md:-translate-y-full text-xs md:text-sm text-[hsl(229,7%,55%)] font-bold"
      >
        <span className="font-bold text-2xl md:text-3xl text-[hsl(229,57%,11%)]">
          185
        </span> {" "}
        GB LEFT
      </div>
    </div>
  );
}

export default StatsCard