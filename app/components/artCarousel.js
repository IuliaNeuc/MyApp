import React from 'react'
import Image from 'next/image'

export default function ArtCarousel({im1, t1, im2, t2, im3, t3, im4, t4, im5, t5, im6, t6, im7, t7}) {
  return (
    <div className="carousel rounded-box p-10">
  <div className="carousel-item flex flex-col md:hover:scale-105">
    <Image src={im1} alt="Burger" className=" object-scale-down h-60 w-96 "/>
    <p className="text-center mt-5 font-serif">{t1}</p>
  </div> 
  <div className="carousel-item flex flex-col md:hover:scale-105">
    <Image src={im2} alt="Burger rounded-lg" className="object-scale-down h-60 w-96" />
    <p className="text-center mt-5 font-serif">{t2}</p>
  </div> 
  <div className="carousel-item flex flex-col md:hover:scale-105">
    <Image src={im3} alt="Burger" className="object-scale-down h-60 w-96" />
    <p className="text-center mt-5 font-serif">{t3}</p>
  </div> 
  <div className="carousel-item flex flex-col md:hover:scale-105">
    <Image src={im4} alt="Burger" className="object-scale-down h-60 w-96 " />
    <p className="text-center mt-5 font-serif">{t4}</p>
  </div> 
  <div className="carousel-item flex flex-col md:hover:scale-105">
    <Image src={im5} alt="Burger" className="object-scale-down h-60 w-96" />
    <p className="text-center mt-5 font-serif" >{t5}</p>
  </div> 
  <div className="carousel-item flex flex-col md:hover:scale-105">
    <Image src={im6} alt="Burger" className="object-scale-down h-60 w-96" />
    <p className="text-center mt-5 font-serif">{t6}</p>
  </div> 
  <div className="carousel-item flex flex-col md:hover:scale-150">
    <Image src={im7} alt="Burger" className="object-scale-down h-60 w-96 rounded-lg" />
    <p className="text-center mt-5 font-serif">{t7}</p>
  </div>
</div>
  )
}
