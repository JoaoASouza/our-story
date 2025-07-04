"use client";
import starsImage from "@/assets/stars_corte.jpg";
import CarouselText from "./CarouselText";
import CarouselItem from "./CarouselItem";

export default function Stars() {
  return (
    <CarouselItem>
      <img src={starsImage.src} alt="" />
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
      >
        <a
          href="https://sky-wanderer.lovable.app/?sky=SatJul06202422:00:00GMT-0300-22-43"
          target="_blank"
        >
          Ver mapa
        </a>
      </div>
    </CarouselItem>
  );
}
