import React from "react";
import Image from "next/image";

export default function AboutMeCards({ title, desc }) {
  return (
    <div className="card w-96 h-72 bg-neutral-950 bg-opacity-55 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <div className=" text-base overflow-y-auto max-h-40">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
