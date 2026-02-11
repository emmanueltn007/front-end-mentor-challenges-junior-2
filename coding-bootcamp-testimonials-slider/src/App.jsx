import ImageCard from "./components/ImageCard";
import TestimonialDetailsCard from "./components/TestimonialDetailsCard";
import useTestimonials from "./hooks/useTestimonials";

function App() {
  const testimonials = useTestimonials();

  return (
    <main className="min-h-screen w-screen bg-[url('/images/pattern-curve.svg')] bg-contain md:bg-size-[50%] bg-no-repeat bg-bottom-left md:grid md:grid-cols-2 md:p-20 md:place-items-center">
      <ImageCard {...testimonials} />
      <TestimonialDetailsCard {...testimonials} />
    </main>
  );
}

export default App;