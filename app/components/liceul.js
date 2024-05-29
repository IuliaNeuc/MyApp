import React from "react";
import { backHomeEducation } from "../data";
import Image from "next/image";
import Carousel from "./carousel";

export default function Liceul() {
  return (
    <div className="hero bg-neutral-950 rounded-lg shadow-lg bg-opacity-55">
      <div className="hero-content flex-col lg:flex-row">
        <Carousel />

        <div>
          <h1 className="text-5xl font-bold">{backHomeEducation.name}</h1>
          <p className="py-6">{backHomeEducation.desc}</p>
          <p className="py-6">{backHomeEducation.desc2}</p>
        </div>
      </div>
    </div>
  );
}
