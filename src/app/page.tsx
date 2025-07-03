"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Clock from "../components/Clock";
import Stars from "../components/Stars";
import MovieInfo from "@/components/MovieInfo";
import Album from "@/components/Album";
import Ending from "@/components/Ending";

export default function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        <Clock />
        <MovieInfo />
        <Stars />
        <Album />
        <Ending />
      </Carousel>
    </div>
  );
}
