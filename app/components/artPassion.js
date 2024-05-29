import React from "react";
import ArtImage from "../img/art.jpg";
import Image from "next/image";

export default function ArtPassion({ image, title, desc }) {
  return (
    <div className="hero h-full shadow-lg">
      <Image
        src={image}
        alt="Card Front Picture"
        className="rounded-xl shadow-xl object-fit h-full w-full"
      />

      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{desc}</p>
        </div>
      </div>
    </div>
  );
}
