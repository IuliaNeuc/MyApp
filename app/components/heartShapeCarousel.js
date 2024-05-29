import React from "react";
import Image from "next/image";
import ArtPassion from "../img/artPassion.jpg";
import MusicPassion from "../img/musicPassion.jpg";
import Skates from "../img/Skates.jpg";

export default function HeartShapeCarousel() {
  return (
    <div className=" w-96 carousel rounded-box">
      <div className="carousel-item w-full">
        <Image
          src={ArtPassion}
          className="w-full mask mask-heart"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <Image
          src={MusicPassion}
          className="w-full mask mask-heart"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <Image
          src={Skates}
          className="w-full mask mask-heart"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      
    </div>
  );
}
