import CardsContainer from "./components/CardsContainer";

function App () {
  return (
    <div className="font-['Raleway',sans-serif] h-screen w-screen bg-[url('/images/bg-mobile.png')] md:bg-[url('/images/bg-desktop.png')] bg-no-repeat bg-center bg-cover flex items-center justify-center max-md:px-8">
      <CardsContainer />
    </div>
  );
}

export default App