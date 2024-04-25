import React from "react";
import Image from "next/image";
import AboutMeCards from "./aboutMeCards";
import AboutMeFrontSide from "./aboutMeFrontCard";
import Tree from "../img/R.jpg";

export default function Swap({imageSrc, title, desc}) {
  return (
    <label className="swap swap-flip text-9xl mt-7 md:hover:scale-105">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" />

      <div className="swap-on">
        <AboutMeCards title={title} desc={desc} />
      </div>
      <div className="swap-off">
        <AboutMeFrontSide imageSrc={imageSrc} />
      </div>
    </label>
  );
}
