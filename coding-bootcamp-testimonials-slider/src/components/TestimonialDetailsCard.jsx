function TestimonialDetailsCard({ currentCustomer }) {

  return (
    <div className=" md:pl-8 max-md:px-8 max-md:text-center md:text-2xl flex flex-col gap-4 md:row-start-1">
      <p className="text-[hsl(240,38%,20%)]">
        " {currentCustomer.testimonialMessage} "
      </p>
      <div className="flex flex-col md:flex-row md:gap-4">
        <span className="text-[hsl(240,38%,20%)] font-bold">
          {currentCustomer.name}
        </span>
        <span className="text-[hsl(240,18%,77%)] font-bold">
          {currentCustomer.occupation}
        </span>
      </div>
    </div>
  );
}

export default TestimonialDetailsCard;