import FilesCard from "./FilesCard";
import StatsCard from "./StatsCard";

function CardsContainer () {
  return (
    <div className="flex flex-col md:grid md:grid-cols-5 gap-4 max-md:w-full">
      <div className="md:col-span-2">
        <FilesCard />
      </div>
      <div className="md:col-span-3 md:mt-auto">
        <StatsCard />
      </div>
    </div>
  );
}

export default CardsContainer