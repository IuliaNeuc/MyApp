import React from "react";
import Image from "next/image";
import MyPicture from '../img/me.jpg';
import Me from "../img/myPicture.jpg";

export default function Avatar() {
  return (
    <div className="avatar">
      <div className=" w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 m-10">
        <Image src={Me} alt="My picture" />
      </div>
    </div>
  );
}
