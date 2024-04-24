import React from "react";
import AboutMe from "@/app/components/aboutMe";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <div className="z-10 w-screen flex flex-row gap-5 bg-neutral-950 bg-opacity-60 p-4 shadow-2xl">
        <div className="flex flex-col w-full shadow-2xl bg-neutral-950">
          <AboutMe />
        </div>
      </div>
    </main>
  );
}
