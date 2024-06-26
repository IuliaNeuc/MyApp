import React from "react";
import Image from "next/image";

export default function AboutMeFrontSide({ imageSrc }) {
  return (
    <div className="card w-96 h-72 bg-neutral-950 bg-opacity-55 shadow-xl items-center">
      <figure className="p-7">
        <Image
          src={imageSrc}
          alt="Card Front Picture"
          className="rounded-xl shadow-xl object-fit w-80 h-60"
        />
      </figure>
    </div>
  );
}
