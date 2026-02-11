function ImageCard({ handleNext, handlePrev, currentCustomer }) {

  return (
    <div className="relative max-w-md w-full z-50">
      <div className="absolute -z-5">
        <img src="/images/pattern-bg.svg" alt="background pattern" />
      </div>
      <img
        className="w-full h-auto max-md:p-16"
        src={currentCustomer.image}
        alt={currentCustomer.name}
      />
      <div className="bg-[hsl(0,0%,100%)] absolute max-md:bottom-16 max-md:translate-y-1/2 md:-translate-y-1/2 md:left-16 max-md:left-1/2 max-md:-translate-x-1/2 shadow-md shadow-[hsl(240,18%,77%)] px-6 pb-2 pt-2 rounded-3xl flex gap-8">
        <button
          aria-label="Previous testimonial"
          className="cursor-pointer"
          onClick={handlePrev}
        >
          <img src="/images/icon-prev.svg" alt="previous icon" />
        </button>
        <button
          aria-label="Next testimonial"
          className="cursor-pointer"
          onClick={handleNext}
        >
          <img src="/images/icon-next.svg" alt="next icon" />
        </button>
      </div>
    </div>
  );
}

export default ImageCard;