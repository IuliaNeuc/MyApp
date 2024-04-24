import React from "react";
import Image from "next/image";

export default function InfoCard({ title, description, imageUrl, buttonText }) {
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl md:hover:scale-105">
        <figure className="px-10 pt-10">
          <Image src={imageUrl} alt="Image" className=" rounded-lg" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
