import React from "react";
import { aboutMeData } from "../data";
import Image from "next/image";
import Me from "../img/me.jpg";

export default function AboutMe() {
  return (
    <div className="card bg-neutral">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src={aboutMeData.imageUrl} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{aboutMeData.name}</h1>
          <p className="py-6">{aboutMeData.description}</p>
        </div>
      </div>
    </div>
  );
}
