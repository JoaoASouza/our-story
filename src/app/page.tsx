"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
// import { Carousel } from "react-responsive-carousel";
import "react-multi-carousel/lib/styles.css";
import Clock from "../components/Clock";
import Stars from "../components/Stars";
import MovieInfo from "@/components/MovieInfo";
// import Album from "@/components/Album";
import Ending from "@/components/Ending";

import src1 from "@/assets/album/IMG-20240706-WA0004_corte.jpg";
import src2 from "@/assets/album/IMG-20240707-WA0004_corte.jpg";
import src3 from "@/assets/album/IMG-20240713-WA0003_corte.jpg";
import src4 from "@/assets/album/IMG-20240909-WA0019_corte.jpg";
import src5 from "@/assets/album/IMG-20240922-WA0003.jpg";
import src6 from "@/assets/album/IMG-20241102-WA0044_corte.jpg";
import src7 from "@/assets/album/IMG-20241208-WA0016_corte.jpg";
import src8 from "@/assets/album/IMG-20241231-WA0003_corte.jpg";
import src9 from "@/assets/album/IMG-20241231-WA0005.jpg";
import src10 from "@/assets/album/IMG-20241231-WA0012_corte.jpg";
import src11 from "@/assets/album/IMG-20250118-WA0049_corte.jpg";
import src12 from "@/assets/album/IMG-20250118-WA0058_corte.jpg";
import src13 from "@/assets/album/IMG-20250125-WA0011_corte.jpg";
import src14 from "@/assets/album/IMG-20250625-WA0012_corte.jpg";
import CarouselItem from "@/components/CarouselItem";
import CarouselText from "@/components/CarouselText";

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
    <div
      id="__next"
      style={{
        flexGrow: 1,
      }}
    >
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        <CarouselItem>
          <Clock />
        </CarouselItem>
        <CarouselItem>
          <MovieInfo />
        </CarouselItem>
        <CarouselItem>
          <Stars />
        </CarouselItem>
        <CarouselItem>
          <CarouselText>
            De lá pra cá tivemos muitos momentos incríveis juntos...
          </CarouselText>
        </CarouselItem>
        <CarouselItem>
          <img src={src1.src} alt="" key="src1" />
        </CarouselItem>
        <CarouselItem>
          <img src={src2.src} alt="" key="src2" />
        </CarouselItem>
        <CarouselItem>
          <img src={src3.src} alt="" key="src3" />
        </CarouselItem>
        <CarouselItem>
          <img src={src4.src} alt="" key="src4" />
        </CarouselItem>
        <CarouselItem>
          <img src={src5.src} alt="" key="src5" />
        </CarouselItem>
        <CarouselItem>
          <img src={src6.src} alt="" key="src6" />
        </CarouselItem>
        <CarouselItem>
          <img src={src7.src} alt="" key="src7" />
        </CarouselItem>
        <CarouselItem>
          <img src={src8.src} alt="" key="src8" />
        </CarouselItem>
        <CarouselItem>
          <img src={src9.src} alt="" key="src9" />
        </CarouselItem>
        <CarouselItem>
          <img src={src10.src} alt="" key="src10" />
        </CarouselItem>
        <CarouselItem>
          <img src={src11.src} alt="" key="src11" />
        </CarouselItem>
        <CarouselItem>
          <img src={src12.src} alt="" key="src12" />
        </CarouselItem>
        <CarouselItem>
          <img src={src13.src} alt="" key="src13" />
        </CarouselItem>
        <CarouselItem>
          <img src={src14.src} alt="" key="src14" />
        </CarouselItem>
        <CarouselItem>
          <CarouselText>
            Que esse seja apenas o começo da história que escreveremos juntos
          </CarouselText>
        </CarouselItem>
        <CarouselItem>
          <CarouselText>Te amo! ❤️</CarouselText>
        </CarouselItem>
      </Carousel>
    </div>
  );
}
