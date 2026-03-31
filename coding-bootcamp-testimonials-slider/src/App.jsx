import ImageCard from "./components/ImageCard";
import TestimonialDetailsCard from "./components/TestimonialDetailsCard";
import useTestimonials from "./hooks/useTestimonials";

function App() {
  const testimonials = useTestimonials();

  return (
    <main className="h-screen w-screen bg-[url('/images/pattern-curve.svg')] bg-contain md:bg-size-[50%] bg-no-repeat bg-bottom-left md:grid md:grid-cols-2 md:p-20 md:place-items-center md:place-content-center relative overflow-hidden">
   
      <div className="md:right-8 max-md:left-1/2 max-md:top-1/2 max-md:-translate-y-1/2 max-md:-translate-x-1/2 w-[75%] h-full md:w-1/2 md:h-screen absolute -z-5">
        <img 
          className="h-fit w-fit" 
          src="/images/pattern-bg.svg" 
          alt="background pattern" />
      </div>
      
      <ImageCard {...testimonials} />
      <TestimonialDetailsCard {...testimonials} />
    </main>
  );
}

export default App;