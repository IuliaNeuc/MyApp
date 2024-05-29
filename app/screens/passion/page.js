"use client";

import React from "react";
import ArtPassion from "@/app/components/artPassion";
import { passionPageData } from "@/app/data";
import Image from "next/image";
import Passion from "../../img/stars.jpg";
import HeartShapeCarousel from "@/app/components/heartShapeCarousel";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <Image src={Passion} alt="Background" className='absolute inset-0 w-full h-full object-cover pointer-events-none -z-10 filter brightness-75 blur-sm'/>
      <div className="z-10 w-full flex flex-col h-full items-center gap-10 ">
        <h1 className=" text-7xl font-bold mb-5 mt-5">Passions of My Soul</h1>
        <HeartShapeCarousel/>
       
        <p className=" text-2xl font-semibold mb-5 text-center w-5/6">This page offers a glimpse into the depths of my personality, providing insight into what drives and inspires me beyond the workplace. By sharing my interests and hobbies, I hope to convey a more holistic understanding of who I am as both a professional and an individual. Thank you for taking the time to explore my portfolio and learn more about me.</p>
        <div className="  items-center p-20 h-full w-full rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          {passionPageData.map((card) => (
            <ArtPassion
              key={card.id}
              image={card.image}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
