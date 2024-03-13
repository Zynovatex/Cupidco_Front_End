import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, EffectFlip } from "swiper/modules";
import HomeSliderCard from "../cards/HomeSliderCard";

interface HomeFlipSliderProps {
  images: string[];
}

const HomeFlipSlider: React.FC<HomeFlipSliderProps> = ({ images }) => {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        modules={[EffectFlip, Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
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

export default HomeFlipSlider;
