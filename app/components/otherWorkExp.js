import React from "react";

export default function OtherWorkExp({ title, title2, description }) {
  return (
    <div className="hero bg-primary rounded-lg md:hover:scale-105">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" w-full p-7">
          <h1 className="mb-5 text-5xl font-bold underline">{title}</h1>
          <h2 className=" text-4xl font-semibold mt-5 mb-5">{title2}</h2>
          <p className="mb-5 mt-5">{description}</p>
        </div>
      </div>
    </div>
  );
}
