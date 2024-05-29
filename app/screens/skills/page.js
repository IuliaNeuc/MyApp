"use client";

import React from "react";
import Image from "next/image";
import Skills from "../../img/skillsBg.jpg";
import Stars from "../../img/stars.jpg";
import SkillsCards from "@/app/components/skillsCards";
import { skillsCardsData } from "@/app/data";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <Image src={Stars} alt="Background" className='absolute inset-0 w-full h-full object-cover pointer-events-none -z-10 filter brightness-75 blur-sm'/>
      <div className="z-10 w-full flex flex-col h-full items-center gap-10 ">
        <div className="flex flex-col shadow-2xl items-center p-20 h-full w-full gap-7 bg-neutral-950 bg-opacity-55 rounded-lg">
          <h1 className="text-5xl font-bold mb-5 mt-5">My Skills</h1>
          {skillsCardsData.map((card) => (
            <SkillsCards
              key={card.id}
              image={card.image}
              title={card.title}
              desc={card.desc}
              value={card.value}
              progress={card.progress}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
