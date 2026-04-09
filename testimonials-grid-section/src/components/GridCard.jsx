import testimonials from "../utilities/testimonialsData";

function GridCard() {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 md:[grid-auto-rows:minmax(0,1fr)] gap-4">
      {testimonials.map((testimonial) => {
        return (
          <div 
            key={testimonial.customer}
            className={testimonial.gridStyle}
          >
            <div className="flex items-center gap-4">
              <img
                className="h-8 rounded-full border-2 border-[hsl(0,100%,100%)]"
                src={testimonial.avatar}
                alt={`${testimonial.customer}'s avatar`}
              />
              <div className="">
                <h4 className="font-semibold">{testimonial.customer}</h4>
                <span className="text-sm">Verified Graduate</span>
              </div>
            </div>
            <p className="font-semibold text-lg leading-5">
              {testimonial.heading}
            </p>
            <p className="text-sm leading-5">
              {testimonial.testimonialParagraph}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default GridCard;
