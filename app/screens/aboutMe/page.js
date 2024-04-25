import React from "react";
import AboutMe from "@/app/components/aboutMe";
import Swap from "@/app/components/swap";
import Tree from "@/app/img/R.jpg";
import Me from "@/app/img/me.jpg";
import { aboutMeCardsData } from "@/app/data.js";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <div className="z-10 w-screen flex flex-row h-full">
        <div className="flex flex-col shadow-2xl ml-24 p-7 h-full">
          <AboutMe />
          <div className="divider"></div>
          <h1 className="mt-2 mb-2 text-center">Some Detailed Information</h1>
          <div className="divider"></div>
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
