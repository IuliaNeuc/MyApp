"use client";

import React from "react";
import Image from "next/image";
import Stars from "../../img/stars.jpg";
import { artCarouselData, videoCardData } from "@/app/data";
import ArtCarousel from "@/app/components/artCarousel";
import ArtVideo from "@/app/components/artVideo";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <Image src={Stars} alt="Background" className='absolute inset-0 w-full h-full object-cover pointer-events-none -z-10 filter brightness-75 blur-sm'/>
      <div className="z-10 w-full flex flex-col h-full items-center gap-10 ">
        <h1 className=" text-5xl font-serif font-light text-center">Art is My Passion</h1>
        <p className="text-2xl font-serif text-center">I dream in watercolor,</p>
        <p className="text-2xl font-serif text-center">dance in blurred tones.</p>
        <p className="text-2xl font-serif text-center">With each stroke I glide,</p>
        <p className="text-2xl font-serif text-center">moved by inspiration.</p>
        <div className="flex flex-col items-center shadow-2xl  p-20 h-full gap-7 bg-neutral-950 bg-opacity-55 rounded-lg">
          <h1 className="text-center text-3xl font-serif mb-10 mt-5">Check Out Some of My Art Pieces</h1>
          {artCarouselData.map((card) => (
            <ArtCarousel
            key={card.id}
            im1={card.im1}
            t1={card.t1}
            im2={card.im2}
            t2={card.t2}
            im3={card.im3}
            t3={card.t3}
            im4={card.im4}
            t4={card.t4}
            im5={card.im5}
            t5={card.t5}
            im6={card.im6}
            t6={card.t6}
            im7={card.im7}
            t7={card.t7}/>
          ))}
            
        </div>
        <div className="flex flex-col items-center shadow-2xl  p-20 h-full gap-7 bg-neutral-950 bg-opacity-55 rounded-lg">
          <h1 className="text-center text-3xl font-serif mb-10 mt-5">How I Create My Art</h1>
          {videoCardData.map((card) => (
            <ArtVideo
            key={card.id}
            video={card.video}
            title={card.title}
            desc={card.desc}            
            />
          ))}
            
        </div>
      </div>
    </main>
  );
}
