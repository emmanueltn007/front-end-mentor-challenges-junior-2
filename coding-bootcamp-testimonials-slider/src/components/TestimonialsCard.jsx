import { useState } from "react";

function TestimonialsCard() {
  const [currentTestimony, setCurrentTestimony] = useState(0);

  const customerData = [
    {
      name: "Tanya Sinclair",
      image: "/images/image-tanya.jpg",
      occupation: "UX Engineer",
      testimonialMessage:
        "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
    },
    {
      name: "John Tarkpor",
      image: "/images/image-john.jpg",
      occupation: "Junior Front-end Developer",
      testimonialMessage:
        "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    },
  ];

  const handleNext = () =>
    setCurrentTestimony(
      (prevTestimony) => (prevTestimony + 1) % customerData.length,
    );

  const handlePrev = () =>
    setCurrentTestimony(
      (prevTestimony) =>
        (prevTestimony - 1 + customerData.length) % customerData.length,
    );

  const currentCustomer = customerData[currentTestimony];

  return (
    <main>
      <div>
        <img src={currentCustomer.image} alt="customer image" />
        <div>
          <button onClick={handlePrev}>
            <img src="/images/icon-prev.svg" alt="previous icon" />
          </button>
          <button onClick={handleNext}>
            <img src="/images/icon-next.svg" alt="next icon" />
          </button>
        </div>
      </div>
      <div>
        <p>{currentCustomer.testimonialMessage}</p>
        <span>{currentCustomer.name}</span>
        <span>{currentCustomer.occupation}</span>
      </div>
    </main>
  );
}

export default TestimonialsCard;
