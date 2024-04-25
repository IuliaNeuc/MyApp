import React from "react";
import Image from "next/image";
import MyPicture from "../img/me.jpg";
import Link from "next/link";

export default function Hero(imageUrl) {
  return (
    <div
      className="hero w-full h-4/6 shadow-2xl"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Who am I ?</h1>
          <p className="mb-5">Are you interested to know more about me? Who am I as person? What do I like and what do I breath with?
          You can learn more about me by clicking on the button bellow!   
          </p>
          <Link href="/screens/aboutMe">
            <button className="btn btn-primary">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
