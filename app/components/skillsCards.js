import React from "react";
import Image from "next/image";

export default function SkillsCards({image, title, desc, value, progress}) {
  return (
    <div className="hero bg-neutral-950 bg-opacity-65 md:hover:scale-105">
      <div className="hero-content flex flex-row ">
        <Image
          src={image}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Picture"
        />
        <div className="">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">
          {desc}
          </p>
          <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":value}} role="progressbar">{progress}</div>
        </div>
      </div>
    </div>
  );
}
