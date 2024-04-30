import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function InfoCard({ title, description, imageUrl, buttonText, buttonLink }) {
  return (
    <div className="card w-80 h-5/6 bg-base-100 shadow-xl md:hover:scale-105">
      <figure className=" ">
        <Image
          src={imageUrl}
          alt=" Description of the Image"
          className=" rounded-xl object-fill"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <Link href={buttonLink}>
            <button className="btn btn-primary">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
