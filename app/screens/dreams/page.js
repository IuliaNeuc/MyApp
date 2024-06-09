"use client";
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../globals.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import Stars from "../../img/stars.jpg";
import Typewriter from "@/app/components/typeWriter";

import { swiperData } from "@/app/data";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <Image
        src={Stars}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-10 filter brightness-75 blur-sm"
      />
      <div className="z-10 w-full flex flex-col h-full items-center gap-10 ">
        <div className=" bg-neutral-950 bg-opacity-65 rounded-lg shadow-xl p-5">
          <Typewriter />
        </div>

        <div className="flex flex-col items-center  p-20 h-full w-full gap-7 rounded-lg">
          <h1 className="text-center text-white text-4xl font-serif">
            My Childish Dreams
          </h1>
          <>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
               
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {/* Map over the swiperData array and create a SwiperSlide for each item */}
              {swiperData.map((item) => (
                <SwiperSlide key={item.id}>
                  {/* Render the image and description from each item */}
                  <Image
                    src={item.img}
                    alt="Nature"
                    width={600}
                    height={400}
                    className="opacity-55"
                  />

                  <div className="absolute bottom-12 left-0 w-full p-2 text-white text-center rounded-b-lg">
                    {/* Title */}
                    <div className="text-xl font-serif font-bold mb-5">
                      {item.title}
                    </div>
                    {/* Description */}
                    <div className="text-md font-serif overflow-y-auto max-h-32">
                      {item.desc}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
          <h1 className="text-center text-white text-2xl font-serif mt-10">
            Dreaming is not merely a wish, but a celestial voyage, a journey
            where we transcend earthly bounds to touch the very stars
            themselves.
          </h1>
        </div>
      </div>
    </main>
  );
}
