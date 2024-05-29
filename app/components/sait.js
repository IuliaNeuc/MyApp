import React from "react";
import Image from "next/image";
import { saitEducation } from "../data";

export default function Sait() {
  return (
    <div className="hero bg-neutral-950 bg-opacity-55 rounded-lg shadow-lg">
      <div className="hero-content flex-col lg:flex-row">
        <Image src={saitEducation.image} alt="Sait " className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{saitEducation.name}</h1>
          <p className="py-6">{saitEducation.desc}</p>
          <p className="py-6">{saitEducation.desc2}</p>
        </div>
      </div>
    </div>
  );
}
