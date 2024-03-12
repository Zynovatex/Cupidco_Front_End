"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, EffectCube } from "swiper/modules";
import HomeSliderCard from "../cards/HomeSLiderCard";

interface HomeCubeSliderProps {
  images: string[];
}

const HomeCubeSlider: React.FC<HomeCubeSliderProps> = ({ images }) => {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: false,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[EffectCube, Autoplay]}
        className="swiper-container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <HomeSliderCard image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeCubeSlider;
