import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "@/components/Categories/CategoriesSlider";

// import required modules
import { Pagination } from "swiper/modules";

import image1 from "@/assets/categoryImg/Blog-post-card-slider-img-1.png";
import image2 from "@/assets/categoryImg/Blog-post-card-slider-img-2.png";
import image3 from "@/assets/categoryImg/Blog-post-card-slider-img-3.png";
import image4 from "@/assets/categoryImg/Blog-post-card-slider-img-4.png";
import image5 from "@/assets/categoryImg/Blog-post-card-slider-img-5.png";
import LatestCategoryCard from "./LatestCategoryCard";

const LatestCategorySlider = () => {
  const categorySlides = [
    {
      title: "Success Occasionally Consistently",
      image: image1,
      link: "/category1", // Updated to use a link
    },
    {
      title: "Being A Good Leader",
      image: image2,
      link: "/category2",
    },
    {
      title: "Marketing is important,  <strong>why is that?</strong> ",
      image: image3,
      link: "/category3",
    },
    {
      title: "How to Build Your Personal Brand",
      image: image4,
      link: "/category4",
    },
    {
      title: "Boost Your SEO with Ease and Confidence",
      image: image5,
      link: "/category5",
    },
  ];

  return (
    <>
   
      <h1 className="text-[20px] md:text-[35px] text-center mt-10">
      Latest Category
      </h1>
      <div className="sm:mt-10 mt-[15px] p-2">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          mousewheel={true}
          onSlideChange={() => console.log("slide change")}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            200: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {categorySlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <LatestCategoryCard {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default LatestCategorySlider;
