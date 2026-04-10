import testimonials from "../utilities/testimonialsData";

function GridCard() {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 md:auto-rows-fr gap-4">
      {testimonials.map((testimonial, index) => {
        return (
          <div 
            key={`${testimonial.customer}-${index}`}
            className={testimonial.gridStyle}
          >
            <div className="flex items-center gap-4">
              <img
                className={`h-8 rounded-full border-2 ${testimonial.avatarBorderColor}`}
                src={testimonial.avatar}
                alt={`${testimonial.customer}'s avatar`}
              />
              <div className="">
                <h4 className={`font-semibold text-sm ${testimonial.userNameColor}`}>{testimonial.customer}</h4>
                <span className={`text-xs font-semibold ${testimonial.graduateTextStyle}`}>Verified Graduate</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className={`font-semibold text-lg leading-5 ${testimonial.headingStyle}`}>
                {testimonial.heading}
              </p>
              <p className={`text-xs leading-4 font-semibold ${testimonial.quoteStyle}`}>
                "{testimonial.testimonialParagraph}"
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GridCard;
