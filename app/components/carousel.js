import React from "react";
import Image from "next/image";
import { carousel, carousel2 } from "../data";


export default function Carousel() {
  return (
    <div className="carousel carousel-center max-w-lg p-4 space-x-1 bg-neutral-950 bg-opacity-55 rounded-box">
      {carousel2.map((item, index) => (
        <div
          key={index}
          className="carousel-item flex items-center justify-center"
        >
          <Image
            src={item.image}
            alt="Drink"
            className=" object-scale-down h-64 w-96"
          />
        </div>
      ))}
    </div>
  );
}
