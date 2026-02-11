import ImageCard from "./components/ImageCard";
import TestimonialDetailsCard from "./components/TestimonialDetailsCard";
import useTestimonials from "./hooks/useTestimonials";

function App() {
  const testimonials = useTestimonials();

  return (
    <main className="min-h-screen w-screen md:grid md:grid-cols-2 md:p-20 md:place-items-center">
      <ImageCard {...testimonials} />
      <TestimonialDetailsCard {...testimonials} />
    </main>
  );
}

export default App;