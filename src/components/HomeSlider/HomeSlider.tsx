"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "@/components/HomeSlider/HomeSlider";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import Image from "next/image";
import img1 from "@/assets/silderImg/blog-slider-image-1.png";
import img2 from "@/assets/silderImg/blog-slider-image-2.png";
import img3 from "@/assets/silderImg/blog-slider-image-3.png";
import img4 from "@/assets/silderImg/blog-slider-image-4.png";
import img5 from "@/assets/silderImg/blog-slider-image-5.png";

export default function HomeSlider() {
  return (
    <div className="w-full sm:min-h-2 md:h-[50vh] lg:h-[80vh] lg:bg-cover">
      {/* Responsive height */}
      <Swiper
        direction={"vertical"}
        loop={true}
        speed={800}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        onSlideChange={() => console.log("slide change")}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} bg-white w-3 h-3 rounded-full mx-1 transition-all duration-300"></span>`;
          },
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper md:h-full h-[30vh]" // Full height of the parent container
      >
        {/* Responsive SwiperSlide with flexbox for centering */}
        <SwiperSlide className="flex justify-center items-center bg-blue-500 text-white text-3xl md:text-4xl lg:text-5xl">
          <Image
            src={img1}
            alt="Slider Image 1"
            className="h-full object-fit w-full"
          />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center bg-green-500 text-white text-3xl md:text-4xl lg:text-5xl">
          <Image
            src={img2}
            alt="Slider Image 2"
            className="h-full object-fit w-full"
          />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center bg-green-500 text-white text-3xl md:text-4xl lg:text-5xl">
          <Image
            src={img3}
            alt="Slider Image 3"
            className="h-full object-fit w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-green-500 text-white text-3xl md:text-4xl lg:text-5xl">
          <Image
            src={img4}
            alt="Slider Image 4"
            className="h-full object-fit w-full"
          />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center bg-green-500 text-white text-3xl md:text-4xl lg:text-5xl">
          <Image
            src={img5}
            alt="Slider Image 5"
            className="h-full object-fit w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
