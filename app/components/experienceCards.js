import React from "react";
import dreamsImage from "../img/dreams.jpg";
import Image from "next/image";

export default function ExperienceCards({ title, title2, description }) {
  return (
    <div className="hero bg-neutral-950 bg-opacity-55 rounded-lg md:hover:scale-105">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-full p-7">
          <h1 className="mb-5 mt-5 text-5xl font-bold underline">{title}</h1>
          <h2 className="mb-5 mt-5 text-3xl semi-bold">{title2}</h2>
          <p className="mb-5 mt-5">{description}</p>
        </div>
      </div>
    </div>
  );
}
