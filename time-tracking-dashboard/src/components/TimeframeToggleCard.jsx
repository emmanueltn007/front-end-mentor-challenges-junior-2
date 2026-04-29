function TimeframeToggleCard({ timeframes, setTimeframe, timeframe }) {
  return (
    <div className="flex md:flex-col justify-between md:justify-center p-4">
      {timeframes.map((t) => {
        return (
          <span
            key={t}
            onClick={() => setTimeframe(t)}
            className={`cursor-pointer transition-all duration-150 ease-in-out  ${t === timeframe ? "text-[hsl(0,100%,100%)]" : "text-[hsl(236,100%,87%)] hover:text-[hsl(0,100%,100%)]"}`}
          >
            {t}
          </span>
        );
      })}
    </div>
  );
}

export default TimeframeToggleCard;
