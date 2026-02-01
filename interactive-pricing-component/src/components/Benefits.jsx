import benefits from "../utilities/benefits";

function Benefits() {
  return (
    <div className="py-4 md:px-8 flex flex-col md:flex-row items-center gap-8 text-center">
      <ul>
        {benefits.map((benefit) => {
          return (
            <li
              className="flex items-center gap-4 text-[hsl(225,20%,60%)] font-semibold"
              key={benefit}
            >
              <img src="/images/icon-check.svg" alt="check icon" />
              {benefit}
            </li>
          );
        })}
      </ul>
      <button className="bg-[hsl(227,35%,25%)] text-[hsl(226,100%,87%)] py-2 px-4 rounded-3xl font-semibold cursor-pointer border-2 border-transparent hover:text-[hsl(227,35%,25%)] hover:border-[hsl(227,35%,25%)] hover:bg-[hsl(0,0%,100%)] transition-all duration-300 ease-in-out">
        Start my trial
      </button>
    </div>
  );
}

export default Benefits;
