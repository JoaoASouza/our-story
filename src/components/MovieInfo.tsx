import { getRelationShipDurationInMinutes } from "@/utils/relationship-duration-calculator";

export default function MovieInfo() {
  const movieDurationInMinutes = 3382;
  const relationshipDurationInMinutes = getRelationShipDurationInMinutes();
  const movieName = "O conto da Aia";
  const timesWatched = Math.floor(
    relationshipDurationInMinutes / movieDurationInMinutes
  );
  return (
    <div>
      Isso é tempo sufficiente pra maratonar {movieName} {timesWatched} vezes
    </div>
  );
}
