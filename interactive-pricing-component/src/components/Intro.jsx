function Intro() {
  return (
    <div className="z-10 text-center relative">
      {/* Background Image */}
      <div className="absolute left-1/2 top-1/2 -translate-1/2 -z-10">
        <img src="/images/pattern-circles.svg" alt="circles background image" />
      </div>

      {/* //////////////// */}
      <h1 className="text-[hsl(227,35%,25%)] text-2xl font-bold">
        Simple, traffic-based pricing
      </h1>
      <p className="text-[hsl(225,20%,60%)] max-md:px-16">
        sign-up for our 30-day trial. No credit card required.
      </p>
    </div>
  );
}

export default Intro;