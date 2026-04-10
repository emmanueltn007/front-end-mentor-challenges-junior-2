import testimonials from "../utilities/testimonialsData";

function GridCard() {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 md:auto-rows-fr gap-4">
      {testimonials?.map(({
        customer,
        backgroundImage, 
        gridStyle, 
        avatarBorderColor, 
        avatar, 
        userNameColor, 
        status, 
        headingStyle, 
        heading, 
        quoteStyle, 
        testimonialParagraph 
      }, index) => {
        return (
          <div 
            key={`${customer}-${index}`}
            className={`flex flex-col gap-2 shadow-xl shadow-[hsl(217,19%,35%)] ${backgroundImage} ${gridStyle}`}
          >
            <div className="flex items-center gap-4">
              <img
                loading="lazy"
                className={`h-8 rounded-full border-2 ${avatarBorderColor}`}
                src={avatar}
                alt={`Avatar of ${customer}`}
              />
              <div>
                <h4 className={`font-semibold text-sm ${userNameColor}`}>{customer}</h4>
                <span aria-label="User status" className={`text-xs font-semibold ${status}`}>
                  Verified Graduate
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className={`font-semibold text-lg leading-5 ${headingStyle}`}>
                {heading}
              </h3>
              <p className={`text-xs leading-4 font-semibold ${quoteStyle}`}>
                "{testimonialParagraph}"
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GridCard;
