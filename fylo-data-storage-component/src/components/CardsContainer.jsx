import FilesCard from "./FilesCard";
import StatsCard from "./StatsCard";

function CardsContainer () {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <FilesCard />
      <StatsCard />
    </div>
  );
}

export default CardsContainer