"use client";
import { getRelationShipDurationInMinutes } from "@/utils/relationship-duration-calculator";
import CarouselText from "./CarouselText";

export default function MovieInfo() {
  const movieDurationInMinutes = 3382;
  const relationshipDurationInMinutes = getRelationShipDurationInMinutes();
  const movieName = "O Conto da Aia";
  const timesWatched = Math.floor(
    relationshipDurationInMinutes / movieDurationInMinutes
  );
  return (
    <CarouselText>
      Isso é tempo sufficiente pra maratonar{" "}
      <span style={{ fontWeight: "bold" }}>{movieName}</span> {timesWatched}{" "}
      vezes
    </CarouselText>
  );
}
