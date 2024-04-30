"use client";

import React from "react";
import Liceul from "@/app/components/liceul";
import SchoolVideo from "@/app/components/schoolVideo";
import Sait from "@/app/components/sait";
import { saitEducationCards, saitEducationModals } from "@/app/data";
import SaitInfoCard from "@/app/components/saitCards";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <div className="z-10 w-full flex flex-col h-full items-center gap-10 ">
        <div className="flex flex-col shadow-2xl ml-24 p-20 h-full gap-7 bg-neutral-950 bg-opacity-55 rounded-lg">
          <Liceul />
          <SchoolVideo />
        </div>
        <div className="flex flex-col shadow-2xl ml-24 p-20 h-full gap-7 bg-neutral-950 bg-opacity-55 rounded-lg">
          <Sait />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {saitEducationCards.map((card) => (
              <SaitInfoCard
                key={card.id}                
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                modalTitle={card.modalTitle}
                modalDescription={card.modalDescription}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
