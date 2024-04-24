import React from "react";
import { aboutMeData } from "../_utils/data";
import Image from "next/image";
import Me from "../img/me.jpg";

export default function AboutMe() {
  return (
    <div className="">
      <div className="hero min-h-screen bg-neutral">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="max-w-sm rounded-lg shadow-2xl">
            <Image
              src={Me} // src ={aboutMeData.imageUrl}
              alt="About Me Image"
              width={500} // Set width
              height={500} // Set height
            />
          </div>
          <div className="flex flex-col justify-between gap-7"> 
            <h1 className="text-5xl font-bold">{aboutMeData.name}</h1>
            <p className="py-6 overflow-y-auto max-h-48 w-80">{aboutMeData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
