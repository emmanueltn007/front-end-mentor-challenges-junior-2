import useFade from "../hooks/useFade";

function TestimonialDetailsCard({ currentCustomer }) {
  const { isVisible, displayedCustomer } = useFade(currentCustomer);

  return (
    <div className={`relative md:pl-8 max-md:px-8 max-md:text-center md:text-2xl flex flex-col gap-4 md:row-start-1  `}>
      <div className="absolute left-1/2 md:left-24 max-md:-translate-x-1/2 bottom-full translate-y-1/2">
        <img className="h-16" src="/images/pattern-quotes.svg" alt="background quotes" />
      </div>
      <p className={`text-[hsl(240,38%,20%)] transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        " {displayedCustomer.testimonialMessage} "
      </p>
      <div className={`flex flex-col md:flex-row md:gap-4 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <span className="text-[hsl(240,38%,20%)] font-bold">
          {displayedCustomer.name}
        </span>
        <span className="text-[hsl(240,18%,77%)] font-bold">
          {displayedCustomer.occupation}
        </span>
      </div>
    </div>
  );
}

export default TestimonialDetailsCard;