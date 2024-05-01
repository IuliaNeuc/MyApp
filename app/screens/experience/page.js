"use client";

import React from "react";
import ExperienceCards from "@/app/components/experienceCards";
import { experienceCardsData, otherExperienceCardsData } from "@/app/data";
import OtherWorkExp from "@/app/components/otherWorkExp";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <div className="z-10 w-full flex flex-col h-full items-center gap-10 ">
        <div className="flex flex-col shadow-2xl ml-24 p-20 h-full w-full gap-7 bg-neutral-950 bg-opacity-55 rounded-lg">
          <h1 className="text-5xl font-bold mb-5 mt-5">
            Programming Experience
          </h1>

          {experienceCardsData.map((card) => (
            <ExperienceCards
              key={card.id}
              title={card.title}
              title2={card.title2}
              description={card.description}
            />
          ))}
        </div>
        <div className="flex flex-col shadow-2xl ml-24 p-20 h-full w-full gap-7 bg-neutral-950 bg-opacity-55 rounded-lg">
          <h1 className="text-5xl font-bold mb-5 mt-5">
            Other Work Experience
          </h1>
          {otherExperienceCardsData.map((card) => (
            <OtherWorkExp
              key={card.id}
              title={card.title}
              title2={card.title2}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
