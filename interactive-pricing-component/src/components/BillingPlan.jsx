function BillingPlan({ amount, setAmount, finalAmount, monthlyBill, views, min, max, percent }) {

  return (
    <div>
      <h2 className="text-[hsl(225,20%,60%)] text-center font-semibold">
        {views} {amount >= 36 ? "M" : "K"} PAGEVIEWS
      </h2>
      <input
        className="border-none"
        min={min}
        max={max}
        type="range"
        value={amount}
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
        style={{
          "--value": `${percent}%`
        }}
      />
      <p className="text-center text-3xl font-bold">
        ${finalAmount.toFixed(2)}{" "}
        <span className="text-[hsl(225,20%,60%)] text-xl font-semibold">
          /{monthlyBill ? "month" : "year"}
        </span>
      </p>
    </div>
  );
}

export default BillingPlan;
