import React from "react";
import AboutMe from "@/app/components/aboutMe";
import Swap from "@/app/components/swap";
import Tree from "@/app/img/R.jpg";
import Me from "@/app/img/me.jpg";
import { aboutMeCardsData } from "@/app/data.js";
import Image from "next/image";
import Stars from "../../img/stars.jpg";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <Image
        src={Stars}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-10 filter brightness-75 blur-sm"
      />
      <div className="z-10 w-screen flex flex-row h-full">
        <div className="flex flex-col  ml-24 p-7 h-full">
          <AboutMe />
          <h1 className=" mt-16 mb-2 text-center text-5xl">What Else?</h1>
          <h3 className="text-center text-2xl m-8">Click on the card to know more</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {aboutMeCardsData.map((card) => (
              <Swap
                key={card.id}
                imageSrc={card.image}
                title={card.title}
                desc={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
