import React from "react";
import Image from "next/image";
import MyPicture from "../img/me.jpg"

export default function Accomplishments() {
  return (
    <div className=" mt-5">
      <div className="stats shadow w-full  bg-neutral-950 bg-opacity-60">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">GPA</div>
          <div className="stat-value text-primary">4.0</div>
          <div className="stat-desc">Software Development Program</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">School Projects Accomplished</div>
          <div className="stat-value text-secondary">98</div>
          <div className="stat-desc">20 Courses Taken</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <Image src={MyPicture} alt="My Picture"/>
              </div>
            </div>
          </div>
          <div className="stat-value"> 3 Years</div>
          <div className="stat-title">Team Work Experience</div>
          <div className="stat-desc text-secondary">Team Leader</div>
        </div>
      </div>
    </div>
  );
}
