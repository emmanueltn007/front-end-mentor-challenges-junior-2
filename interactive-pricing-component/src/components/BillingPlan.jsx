function BillingPlan({
  tierIndex,
  setTierIndex,
  finalAmount,
  isReduced,
  views,
  min,
  max,
  percent,
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="md:flex md:justify-between md:items-center">
        <h2 className="text-[hsl(225,20%,60%)] text-center font-bold">
          {views} PAGEVIEWS
        </h2>
        <p className="text-center text-3xl font-bold max-md:hidden flex items-center gap-1">
          ${finalAmount.toFixed(2)}{" "}
          <span className="text-[hsl(225,20%,60%)] text-xl font-semibold">
            /{isReduced ? "month" : "year"}
          </span>
        </p>
      </div>
      <input
        className="border-none"
        min={min}
        max={max}
        step={1}
        type="range"
        value={tierIndex}
        onChange={(e) => {
          setTierIndex(Number(e.target.value));
        }}
        style={{
          "--value": `${percent}%`,
        }}
      />
      <p className="text-center text-3xl font-bold md:hidden flex justify-center items-center gap-1">
        ${finalAmount.toFixed(2)}{" "}
        <span className="text-[hsl(225,20%,60%)] text-xl font-semibold">
          /{isReduced ? "month" : "year"}
        </span>
      </p>
    </div>
  );
}

export default BillingPlan;
